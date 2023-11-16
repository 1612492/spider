<script lang="ts">
  import { clsx } from 'clsx';

  export let name: string;
  export let active: boolean;
  export let onClick: () => void;
</script>

<button
  class={clsx(
    'flex flex-1 items-center justify-center rounded-lg py-2',
    active ? 'bg-btn-primary text-btn-primary' : 'hover:bg-secondary'
  )}
  on:click={onClick}>{name}</button
>
