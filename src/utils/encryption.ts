import { Counter, ModeOfOperation, utils } from 'aes-js';
import { Pbkdf2HmacSha256 } from 'asmcrypto.js';

export function encrypt(passphrase: string, text: string) {
  const salt: Uint8Array = crypto.getRandomValues(new Uint8Array(16));
  const key = generateKey(passphrase, salt);

  const nonce: Uint8Array = crypto.getRandomValues(new Uint8Array(16));
  const aesCtr = new ModeOfOperation.ctr(key, new Counter(nonce));

  const encodedText = encodeURIComponent(text);
  const decryptedBytes = utils.utf8.toBytes(encodedText);

  const encryptedBytes = aesCtr.encrypt(decryptedBytes);
  const encryptedText = utils.hex.fromBytes(encryptedBytes);

  const encryptedData = JSON.stringify({
    encryptedText,
    saltString: utils.hex.fromBytes(salt),
    nonceString: utils.hex.fromBytes(nonce)
  });

  return encryptedData;
}

export function decrypt(passphrase: string, encryptedData: string) {
  const { saltString, nonceString, encryptedText } = JSON.parse(encryptedData);
  const salt = utils.hex.toBytes(saltString);
  const nonce = utils.hex.toBytes(nonceString);
  const key = generateKey(passphrase, salt);

  const aesCtr = new ModeOfOperation.ctr(key, new Counter(nonce));
  const encryptedBytes = utils.hex.toBytes(encryptedText);
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);
  const encodedText = utils.utf8.fromBytes(decryptedBytes);
  return decodeURIComponent(encodedText);
}

function generateKey(passphrase: string, salt: Uint8Array) {
  const passphraseBytes = utils.utf8.toBytes(passphrase);
  return Pbkdf2HmacSha256(
    new Uint8Array(passphraseBytes),
    new Uint8Array(salt),
    100,
    32
  );
}
