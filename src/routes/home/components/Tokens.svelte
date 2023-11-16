<script lang="ts">
  import tokenImg from '@/assets/token.webp';
  import Token from './Token.svelte';
</script>

<div class="max-h-[350px] divide-y divide-primary overflow-y-auto">
  {#each Array(10).fill(0) as _}
    <Token name="Tether USD" symbol="USDT" imgUrl={tokenImg} />
  {/each}
</div>
