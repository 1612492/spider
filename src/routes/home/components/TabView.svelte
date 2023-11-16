<script lang="ts">
  import NFTs from './NFTs.svelte';
  import Tokens from './Tokens.svelte';
  import Transactions from './Transactions.svelte';

  export let currentTab: number;
</script>

<div class="p-2">
  <div class="overflow-hidden rounded-lg bg-card">
    {#if currentTab === 0}
      <Tokens />
    {:else if currentTab === 1}
      <NFTs />
    {:else}
      <Transactions />
    {/if}
  </div>
</div>
