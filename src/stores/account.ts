import { writable } from 'svelte/store';
import { fromHex, toHex } from 'viem';
import { mnemonicToAccount } from 'viem/accounts';
import type { Address } from 'viem/accounts';
import { decrypt, encrypt } from '@utils/encryption';
import { getLocal, setLocal } from '@utils/storage';

const PASSPHRASE = 'Spider';
const EXPIRE_TIME = 60 * 60 * 1000;

export enum StoreKeys {
  CurrentIndex = 'currentIndex',
  CurrentAddress = 'currentAddress',
  ChainId = 'chainId',
  Onboarding = 'onboarding',
  AccessToken = 'accessToken',
  AccountInfos = 'accountInfos',
  Password = 'password',
  Mnemonic = 'mnemonic'
}

export type AccountInfo = {
  address: Address;
  publicKey: Address | null;
  privateKey: Address | null;
};

type AccessTokenInfo = {
  data: string;
  issueAt: number;
  expireAt: number;
};

export type InitialAccount = {
  [StoreKeys.CurrentIndex]: number;
  [StoreKeys.CurrentAddress]: Address | null;
  [StoreKeys.ChainId]: number;
  [StoreKeys.Onboarding]: boolean;
  [StoreKeys.AccessToken]: string | null;
};

export const accountStore = writable<InitialAccount>({
  [StoreKeys.CurrentIndex]: 0,
  [StoreKeys.CurrentAddress]: null,
  [StoreKeys.ChainId]: 1,
  [StoreKeys.Onboarding]: true,
  [StoreKeys.AccessToken]: null
});

export async function isOnborading() {
  const onboarding = await getLocal(StoreKeys.Onboarding);

  if (onboarding) {
    const _onboarding = onboarding === 'true' ? true : false;

    accountStore.update((s) => ({
      ...s,
      onboarding: _onboarding
    }));

    return _onboarding;
  }

  return true;
}

export async function isValidToken() {
  const accessToken = await getLocal(StoreKeys.AccessToken);

  if (!accessToken) return false;

  const _accessToken = fromHex(accessToken, 'string');
  const accessTokenInfo: AccessTokenInfo = JSON.parse(_accessToken);

  const password = await getLocal(StoreKeys.Password);

  const { data, expireAt } = accessTokenInfo;

  if (data !== password) return false;

  if (Date.now() > expireAt) return false;

  return true;
}

async function getAcountInfos(): Promise<Record<string, AccountInfo>> {
  const _password = await getLocal(StoreKeys.Password);
  const _accountInfos = await getLocal(StoreKeys.AccountInfos);
  const accountInfos = decrypt(_password, _accountInfos);

  return JSON.parse(accountInfos);
}

export async function getAcountInfo() {
  const _currentIndex = await getLocal(StoreKeys.CurrentIndex);
  const currentIndex = Number(_currentIndex);
  const _chainId = await getLocal(StoreKeys.ChainId);
  const chainId = Number(_chainId);

  const accountInfos = await getAcountInfos();
  const accountInfo = accountInfos[currentIndex];

  accountStore.update((s) => ({
    ...s,
    currentIndex,
    currentAddress: accountInfo.address,
    chainId
  }));
}

export async function createAccount(mnemonic: string, addressIndex = 0) {
  const password = await getLocal(StoreKeys.Password);

  const account = mnemonicToAccount(mnemonic, { addressIndex });
  const { publicKey, privateKey } = account.getHdKey();
  const address = account.address;

  const accountInfo = {
    address,
    publicKey: publicKey ? toHex(publicKey) : null,
    privateKey: privateKey ? toHex(privateKey) : null
  };

  const _currentIndex = addressIndex;
  await setLocal(StoreKeys.CurrentIndex, JSON.stringify(_currentIndex));

  const _mnemonic = encrypt(password, mnemonic);
  await setLocal(StoreKeys.Mnemonic, _mnemonic);

  const _address = encrypt(password, address);
  await setLocal(StoreKeys.CurrentAddress, _address);

  const _accountInfos = encrypt(
    password,
    JSON.stringify({ [addressIndex]: accountInfo })
  );
  const _onboarding = false;
  await setLocal(StoreKeys.AccountInfos, _accountInfos);
  await setLocal(StoreKeys.Onboarding, JSON.stringify(_onboarding));

  const accessToken = generateAccessToken(password);
  await setLocal(StoreKeys.AccessToken, accessToken);

  accountStore.update((s) => ({
    ...s,
    currentIndex: _currentIndex,
    currentAddress: address,
    onboarding: _onboarding,
    accessToken
  }));
}

export async function createPassword(password: string) {
  const _password = encrypt(PASSPHRASE, password);
  await setLocal(StoreKeys.Password, _password);
}

function generateAccessToken(password: string) {
  const accessTokenInfo: AccessTokenInfo = {
    data: password,
    issueAt: Date.now(),
    expireAt: Date.now() + EXPIRE_TIME
  };

  const accessToken = toHex(JSON.stringify(accessTokenInfo));

  return accessToken;
}

export async function login(verifyPassword: string) {
  const _password = await getLocal(StoreKeys.Password);
  const password = decrypt(PASSPHRASE, _password);

  if (verifyPassword !== password) throw new Error('Password is incorrect');

  const accessToken = generateAccessToken(_password);
  await setLocal(StoreKeys.AccessToken, accessToken);

  accountStore.update((s) => ({
    ...s,
    accessToken
  }));
}
