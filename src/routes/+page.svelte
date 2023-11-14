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

<Header />
<Balance />
<Actions />
<Tabs {currentTab} changeTab={(tab) => (currentTab = tab)} />
{#if currentTab === 0}
  <Tokens />
{:else if currentTab === 1}
  <NFTs />
{:else}
  <Transactions />
{/if}
