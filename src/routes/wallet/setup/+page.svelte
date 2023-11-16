<script lang="ts">
  import ImportIcon from '@/components/icons/ImportIcon.svelte';
  import WalletIcon from '@/components/icons/WalletIcon.svelte';
</script>

<div class="p-4">
  <h2 class="mt-4 text-center text-2xl">New wallet</h2>
  <p class="mt-2 text-center">
    You can create a new wallet or connect any existing one.
  </p>
  <div class="mt-4 flex gap-x-4">
    <a
      href="/wallet/create"
      class="flex flex-1 items-center justify-center gap-x-2 rounded-lg bg-card p-4 transition-transform hover:scale-105"
    >
      <div class="rounded-xl bg-blue-500 p-3 text-white">
        <WalletIcon class="h-6 w-6" />
      </div>
      <div>Create wallet</div>
    </a>
    <a
      href="/wallet/import"
      class="flex flex-1 items-center justify-center gap-x-2 rounded-lg bg-card p-4 transition-transform hover:scale-105"
    >
      <div class="rounded-xl bg-green-500 p-3 text-white">
        <ImportIcon class="h-6 w-6" />
      </div>
      <div>Import wallet</div>
    </a>
  </div>
</div>
