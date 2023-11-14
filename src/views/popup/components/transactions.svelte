<script lang="ts">
  import Transaction from './transaction.svelte';
</script>

<div class="max-h-[296px] space-y-2 overflow-y-auto p-2">
  {#each Array(10).fill(0) as _, i}
    <Transaction type={i % 2} />
  {/each}
</div>
