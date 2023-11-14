<script lang="ts">
  import Actions from './components/actions.svelte';
  import Balance from './components/balance.svelte';
  import Header from './components/header.svelte';
  import Nfts from './components/nfts.svelte';
  import Tabs from './components/tabs.svelte';
  import Tokens from './components/tokens.svelte';
  import Transactions from './components/transactions.svelte';

  $: currentTab = 0;
</script>

<main>
  <Header />
  <Balance />
  <Actions />
  <Tabs {currentTab} changeTab={(tab) => (currentTab = tab)} />
  {#if currentTab === 0}
    <Tokens />
  {:else if currentTab === 1}
    <Nfts />
  {:else}
    <Transactions />
  {/if}
</main>
