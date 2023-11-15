<script lang="ts">
  import Tab from './Tab.svelte';

  export let currentTab: number;
  export let changeTab: (tab: number) => void;

  let tabs = ['Tokens', 'NFTs', 'Transactions'];
</script>

<div class="flex gap-x-1 border-b-2 border-primary px-2">
  {#each tabs as tab, i}
    <Tab name={tab} active={currentTab === i} onClick={() => changeTab(i)} />
  {/each}
</div>
