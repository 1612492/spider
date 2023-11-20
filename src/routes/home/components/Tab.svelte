<script lang="ts">
  import { clsx } from 'clsx';

  export let name: string;
  export let active: boolean;
  export let onClick: () => void;
</script>

<button
  class={clsx(
    'flex flex-1 items-center justify-center rounded-lg py-2 outline-primary',
    active ? 'bg-btn-default bg-opacity-60' : 'hover:bg-btn-default'
  )}
  on:click={onClick}>{name}</button
>
