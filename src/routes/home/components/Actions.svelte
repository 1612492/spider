<script lang="ts">
  import ReceiveIcon from '@components/icons/ReceiveIcon.svelte';
  import SendIcon from '@components/icons/SendIcon.svelte';
  import Action from './Action.svelte';

  let actions = [
    { name: 'Send', Icon: SendIcon },
    { name: 'Receive', Icon: ReceiveIcon }
  ];
</script>

<div class="flex justify-between gap-x-2 px-2 pb-4">
  {#each actions as { name, Icon }}
    <Action {name}><Icon class="h-4 w-4" /></Action>
  {/each}
</div>
