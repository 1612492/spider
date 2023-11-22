<script lang="ts">
  import { Link } from 'svelte-routing';
  import ImportIcon from '@components/icons/ImportIcon.svelte';
  import WalletIcon from '@components/icons/WalletIcon.svelte';
</script>

<div class="p-4">
  <h2 class="mt-4 text-center text-2xl">New wallet</h2>
  <p class="mt-2 text-center">
    You can create a new wallet or connect any existing one.
  </p>
  <div class="mt-8 space-y-4">
    <Link
      to="/wallet/create"
      class="flex items-center gap-x-4 rounded-lg bg-card p-4 hover:bg-btn-primary hover:text-btn-primary"
    >
      <WalletIcon class="h-6 w-6" />
      <div>Create a new wallet</div>
    </Link>
    <Link
      to="/wallet/import"
      class="flex items-center gap-x-4 rounded-lg bg-card p-4 hover:bg-btn-primary hover:text-btn-primary"
    >
      <ImportIcon class="h-6 w-6" />
      <div>Import an existing wallet</div>
    </Link>
  </div>
</div>
