<script lang="ts">
  import Chevron from '@/components/icons/chevron.svelte';
  import ScanIcon from '@/components/icons/scan.svelte';
</script>

<header class="flex justify-between border-b p-2">
  <button
    class="flex items-center justify-between gap-x-1 rounded p-1 hover:bg-gray-100"
  >
    <span class="text-sm">Ethereum Mainnet</span>
    <Chevron class="h-3 w-3 text-black" />
  </button>
  <button class="rounded p-1 hover:bg-gray-100">
    <ScanIcon class="h-5 w-5 text-black" />
  </button>
</header>
