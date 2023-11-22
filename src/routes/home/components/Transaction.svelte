<script lang="ts">
  import tokenImg from '@assets/token.webp';
  import ReceiveIcon from '@components/icons/ReceiveIcon.svelte';
  import SendIcon from '@components/icons/SendIcon.svelte';

  export let type: number;
  let balance = 2000;
</script>

<div class="flex h-14 w-full items-center justify-between p-2">
  <div class="flex items-center gap-x-2">
    <div class="rounded-full border border-black p-2">
      {#if type % 2 === 0}
        <SendIcon class="h-4 w-4" />
      {:else}
        <ReceiveIcon class="h-4 w-4" />
      {/if}
    </div>
    <span>{type === 0 ? 'Send' : 'Receive'}</span>
  </div>
  <div class="flex items-center gap-x-2">
    <span>{balance.toLocaleString()}</span>
    <img src={tokenImg} class="h-6 w-6" alt="token" />
  </div>
</div>
