<script lang="ts">
  export let name: string;
  export let symbol: string;
  export let imgUrl: string;
  let balance = 2000;
</script>

<button
  class="flex w-full items-center justify-between rounded p-2 text-sm hover:bg-gray-100"
>
  <div class="flex items-center gap-x-2">
    <img src={imgUrl} class="h-8 w-8" alt={symbol} />
    <div class="text-left">
      <p>{name}</p>
      <p class="text-xs text-gray-500">{symbol}</p>
    </div>
  </div>
  <div>{balance.toLocaleString()}</div>
</button>
