<script lang="ts">
  import tokenImg from '@assets/native-token.webp';
  let balance = 10000;
  let symbol = 'ETH';
</script>

<div class="flex items-center gap-x-1 px-2 py-4">
  <img src={tokenImg} alt="native token" class="h-8 w-8" />
  <span class="text-3xl">{balance.toLocaleString()}</span>
  <span class="text-lg">{symbol}</span>
</div>
