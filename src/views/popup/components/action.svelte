<script lang="ts">
  export let name: string;
</script>

<button
  class="flex flex-1 items-center justify-center gap-x-1 rounded-lg bg-blue-500 px-1 py-2 text-white hover:bg-opacity-90"
>
  <slot />
  <span>{name}</span>
</button>
