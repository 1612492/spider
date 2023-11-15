<script lang="ts">
  import tokenImg from '@/assets/token.webp';
  import ReceiveIcon from '@/components/icons/ReceiveIcon.svelte';
  import SendIcon from '@/components/icons/SendIcon.svelte';

  export let type: number;
  let balance = 2000;
</script>

<button
  class="flex w-full items-center justify-between px-2 py-4 text-sm hover:bg-secondary"
>
  <div class="flex items-center gap-x-2">
    <div class="rounded-full bg-highlight p-2 text-secondary">
      {#if type % 2 === 0}
        <SendIcon class="h-4 w-4" />
      {:else}
        <ReceiveIcon class="h-4 w-4" />
      {/if}
    </div>
    <span class="font-semibold">{type === 0 ? 'Send' : 'Receive'}</span>
  </div>
  <div class="flex items-center gap-x-1">
    <span class="font-semibold">{balance.toLocaleString()}</span>
    <img src={tokenImg} class="h-6 w-6" alt="token" />
  </div>
</button>
