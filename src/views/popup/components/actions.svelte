<script lang="ts">
  import BridegIcon from '@/components/icons/bridge.svelte';
  import BuyIcon from '@/components/icons/buy.svelte';
  import SendIcon from '@/components/icons/send.svelte';
  import SwapIcon from '@/components/icons/swap.svelte';
  import Action from './action.svelte';

  let actions = [
    { name: 'Buy', Icon: BuyIcon },
    { name: 'Swap', Icon: SwapIcon },
    { name: 'Bridge', Icon: BridegIcon },
    { name: 'Send', Icon: SendIcon },
  ];
</script>

<div class="flex justify-between gap-x-2 px-2 pb-4 pt-2">
  {#each actions as { name, Icon }}
    <Action {name}><Icon class="h-4 w-4" /></Action>
  {/each}
</div>
