<script lang="ts">
  import Header from './components/Header.svelte';
  import InfoCard from './components/InfoCard.svelte';
  import TabView from './components/TabView.svelte';
  import Tabs from './components/Tabs.svelte';

  $: currentTab = 0;
</script>

<Header />
<InfoCard />
<Tabs {currentTab} changeTab={(tab) => (currentTab = tab)} />
<TabView {currentTab} />
