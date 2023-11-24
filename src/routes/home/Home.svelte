<script lang="ts">
  import { onMount } from 'svelte';
  import { getAcountInfo } from '@stores/account';
  import Header from './components/Header.svelte';
  import InfoCard from './components/InfoCard.svelte';
  import TabView from './components/TabView.svelte';
  import Tabs from './components/Tabs.svelte';

  $: currentTab = 0;
  onMount(() => getAcountInfo());
</script>

<Header />
<InfoCard />
<Tabs {currentTab} changeTab={(tab) => (currentTab = tab)} />
<TabView {currentTab} />
