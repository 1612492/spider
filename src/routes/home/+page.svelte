<script lang="ts">
  import InfoCard from './components/InfoCard.svelte';
  import Header from './components/Header.svelte';
  import Tabs from './components/Tabs.svelte';
  import TabView from './components/TabView.svelte';

  $: currentTab = 0;
</script>

<Header />
<InfoCard />
<Tabs {currentTab} changeTab={(tab) => (currentTab = tab)} />
<TabView {currentTab} />
