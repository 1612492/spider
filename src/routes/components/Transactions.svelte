<script lang="ts">
  import Transaction from './Transaction.svelte';
</script>

<div class="max-h-[296px] divide-y-2 divide-primary overflow-y-auto">
  {#each Array(10).fill(0) as _, i}
    <Transaction type={i % 2} />
  {/each}
</div>
