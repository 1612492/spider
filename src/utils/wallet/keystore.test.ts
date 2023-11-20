import { expect, it } from 'vitest';
import KeyStore from './keystore';

const mnemonic = 'test test test test test test test test test test test test';

const derivedKey = 'myPassword';

it('can init', async () => {
  const ks = new KeyStore();
  ks.init(mnemonic, derivedKey);

  expect(ks.getCurrentAddress()).toBe(
    '0x72e37d393c70823113a7176aC1F7C579d2C5623E'
  );
  expect(ks.getMnemonic(derivedKey)).toBe(mnemonic);

  ks.changeAddressIndex(derivedKey, 1);

  expect(ks.getCurrentAddress()).toBe(
    '0xF49b089183Ec02baD392630a82C0f5B5C3BfAbe9'
  );
  expect(ks.getMnemonic(derivedKey)).toBe(mnemonic);

  ks.changeAddressIndex(derivedKey, 3);

  expect(ks.getCurrentAddress()).toBe(
    '0xd6BD0AA9EC3b00a11c9b56263Ba730d3c1A82b18'
  );
  expect(ks.getMnemonic(derivedKey)).toBe(mnemonic);
});
