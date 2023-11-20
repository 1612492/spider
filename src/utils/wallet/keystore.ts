import CryptoJS from 'crypto-js';
import { mnemonicToAccount } from 'viem/accounts';
import { toHex } from 'viem/utils';

class KeyStore {
  currentIndex = 0;
  addresses = new Map<number, string>();
  private mnemonic: string | null = null;
  private privateKeys = new Map<number, string>();

  async init(mnemonic: string, derivedKey: string, addressIndex = 0) {
    if (derivedKey && mnemonic) {
      const account = mnemonicToAccount(mnemonic, { addressIndex });
      const { privateKey } = account.getHdKey();

      if (privateKey) {
        const encryptedMnemonic = this.encrypt(derivedKey, mnemonic);
        const encryptedPrivateKey = this.encrypt(derivedKey, toHex(privateKey));

        this.currentIndex = addressIndex;
        this.mnemonic = encryptedMnemonic;
        this.privateKeys.set(addressIndex, encryptedPrivateKey);
        this.addresses.set(addressIndex, account.address);
      }
    }
  }

  getCurrentAddress() {
    return this.addresses.get(this.currentIndex);
  }

  getMnemonic(derivedKey: string) {
    if (!this.mnemonic) return;

    return this.decrypt(derivedKey, this.mnemonic);
  }

  getPrivateKey(derivedKey: string) {
    if (!this.privateKeys.has(this.currentIndex)) return;

    return this.decrypt(
      derivedKey,
      this.privateKeys.get(this.currentIndex) as string
    );
  }

  addAddressIndex(derivedKey: string, addressIndex: number) {
    const mnemonic = this.getMnemonic(derivedKey);

    if (!mnemonic) return;

    const account = mnemonicToAccount(mnemonic, { addressIndex });
    const { privateKey } = account.getHdKey();

    if (privateKey) {
      const encryptedPrivateKey = this.encrypt(derivedKey, toHex(privateKey));

      this.currentIndex = addressIndex;
      this.privateKeys.set(addressIndex, encryptedPrivateKey);
      this.addresses.set(addressIndex, account.address);
    }
  }

  async changeAddressIndex(derivedKey: string, addressIndex: number) {
    if (this.privateKeys.has(addressIndex)) {
      this.currentIndex = addressIndex;
    } else {
      this.addAddressIndex(derivedKey, addressIndex);
    }
  }

  encrypt(derivedKey: string, data: string) {
    return CryptoJS.AES.encrypt(data, derivedKey).toString();
  }

  decrypt(derivedKey: string, data: string) {
    return CryptoJS.AES.decrypt(data, derivedKey).toString(CryptoJS.enc.Utf8);
  }
}

export default KeyStore;
