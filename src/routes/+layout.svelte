<script lang="ts">
  import '@/app.css';
  import { onMount } from 'svelte';
  import { watcher } from '@/utils/hmr/client';

  onMount(() => watcher());
</script>

<slot />
