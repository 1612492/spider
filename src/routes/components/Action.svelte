<script lang="ts">
  export let name: string;
</script>

<button
  class="flex flex-1 items-center justify-center gap-x-1 rounded-lg bg-btn-primary p-2 text-btn-primary hover:bg-opacity-90"
>
  <slot />
  <span>{name}</span>
</button>
