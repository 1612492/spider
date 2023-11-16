<script lang="ts">
  import tokenImg from '@/assets/token.webp';
  import ReceiveIcon from '@/components/icons/ReceiveIcon.svelte';
  import SendIcon from '@/components/icons/SendIcon.svelte';

  export let type: number;
  let balance = 2000;
</script>

<button class="flex w-full items-center justify-between p-2 hover:bg-secondary">
  <div class="flex items-center gap-x-2">
    <div class="rounded-full bg-btn-primary p-2 text-btn-primary">
      {#if type % 2 === 0}
        <SendIcon class="h-5 w-5" />
      {:else}
        <ReceiveIcon class="h-5 w-5" />
      {/if}
    </div>
    <span>{type === 0 ? 'Send' : 'Receive'}</span>
  </div>
  <div class="flex items-center gap-x-2">
    <span>{balance.toLocaleString()}</span>
    <img src={tokenImg} class="h-6 w-6" alt="token" />
  </div>
</button>
