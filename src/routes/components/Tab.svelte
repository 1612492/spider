<script lang="ts">
  import { clsx } from 'clsx';

  export let name: string;
  export let active: boolean;
  export let onClick: () => void;
</script>

<button
  class={clsx(
    'flex flex-1 items-center justify-center rounded-t-lg py-2 text-sm font-semibold hover:bg-secondary',
    active && 'bg-highlight text-secondary hover:bg-highlight'
  )}
  on:click={onClick}>{name}</button
>
