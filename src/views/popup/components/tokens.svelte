<script lang="ts">
  import tokenImg from '@/assets/token.webp';
  import Token from './token.svelte';
</script>

<div class="max-h-[296px] space-y-2 overflow-y-auto p-2">
  {#each Array(10).fill(0) as _}
    <Token name="USDT" symbol="USDT" imgUrl={tokenImg} />
  {/each}
</div>
