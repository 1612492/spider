<script lang="ts">
  import type { Address } from 'viem/accounts';
  import DropdownIcon from '@components/icons/DropdownIcon.svelte';
  import { accountStore } from '@stores/account';
  import { shortenAddress } from '@utils/misc';

  let address: Address | null;

  accountStore.subscribe(({ currentAddress }) => {
    address = currentAddress;
  });
</script>

<header class="flex justify-between p-2">
  <button
    class="flex items-center justify-between gap-x-2 rounded-lg bg-btn-default bg-opacity-60 px-4 py-2 outline-primary hover:bg-opacity-100"
  >
    <span>Ethereum Mainnet</span>
    <DropdownIcon class="h-3 w-3" />
  </button>
  <div
    class="flex items-center justify-between gap-x-2 rounded-lg bg-card px-4 py-2"
  >
    {shortenAddress(address)}
  </div>
</header>
