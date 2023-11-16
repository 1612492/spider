<script lang="ts">
  import Tab from './Tab.svelte';

  export let currentTab: number;
  export let changeTab: (tab: number) => void;

  let tabs = ['Tokens', 'NFTs', 'Transactions'];
</script>

<div class="px-2 pt-2">
  <div class="flex gap-x-1 rounded-lg bg-card p-1">
    {#each tabs as tab, i}
      <Tab name={tab} active={currentTab === i} onClick={() => changeTab(i)} />
    {/each}
  </div>
</div>
