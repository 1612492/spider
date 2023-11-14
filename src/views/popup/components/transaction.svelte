<script lang="ts">
  import tokenImg from '@/assets/token.webp';
  import SendIcon from '@/components/icons/send.svelte';
  import ReceiveIcon from '@/components/icons/receive.svelte';

  export let type: number;
  let balance = 2000;
</script>

<button
  class="flex w-full items-center justify-between rounded p-2 text-sm hover:bg-gray-100"
>
  <div class="flex items-center gap-x-2">
    <div class="rounded-full bg-blue-600 p-2 text-white">
      {#if type % 2 === 0}
        <SendIcon class="h-4 w-4" />
      {:else}
        <ReceiveIcon class="h-4 w-4" />
      {/if}
    </div>
    <span>{type === 0 ? 'Send' : 'Receive'}</span>
  </div>
  <div class="flex items-center gap-x-1">
    <span>{balance.toLocaleString()}</span>
    <img src={tokenImg} class="h-6 w-6" alt="token" />
  </div>
</button>
