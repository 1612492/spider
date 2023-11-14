<script lang="ts">
  import { clsx } from 'clsx';

  export let name: string;
  export let active: boolean;
  export let onClick: () => void;
</script>

<button
  class={clsx(
    'rounded-t p-2 text-sm hover:bg-gray-100',
    active && 'border-b-2 border-blue-600 text-blue-600'
  )}
  on:click={onClick}>{name}</button
>
