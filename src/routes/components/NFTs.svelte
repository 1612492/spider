<script lang="ts">
  import nft from '@/assets/nft.png';
  import NFT from './NFT.svelte';
</script>

<div class="grid max-h-[296px] grid-cols-2 gap-4 overflow-y-auto p-2">
  {#each Array(10).fill(0) as _}
    <NFT name="NFT" imgUrl={nft} />
  {/each}
</div>
