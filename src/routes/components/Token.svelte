<script lang="ts">
  export let name: string;
  export let symbol: string;
  export let imgUrl: string;
  let balance = 2000;
</script>

<button class="flex w-full items-center justify-between p-2 hover:bg-secondary">
  <div class="flex items-center gap-x-2">
    <img src={imgUrl} class="h-8 w-8" alt={symbol} />
    <div class="text-left">
      <p class="font-semibold">{symbol}</p>
      <p>{name}</p>
    </div>
  </div>
  <div>{balance.toLocaleString()}</div>
</button>
