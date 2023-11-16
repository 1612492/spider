<script lang="ts">
  import Actions from './components/Actions.svelte';
  import Balance from './components/Balance.svelte';
  import Header from './components/Header.svelte';
  import NFTs from './components/NFTs.svelte';
  import Tabs from './components/Tabs.svelte';
  import Tokens from './components/Tokens.svelte';
  import Transactions from './components/Transactions.svelte';

  $: currentTab = 0;
</script>

<main class="h-[600px] w-[360px] bg-primary text-primary">
  <Header />
  <div class="px-2 py-1">
    <div class="rounded-lg bg-card">
      <Balance />
      <Actions />
    </div>
  </div>
  <Tabs {currentTab} changeTab={(tab) => (currentTab = tab)} />
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
</main>
