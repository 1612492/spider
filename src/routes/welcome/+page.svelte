<script lang="ts">
  import CheckIcon from '@/components/icons/CheckIcon.svelte';
  import SpiderIcon from '@/components/icons/SpiderIcon.svelte';
</script>

<div class="h-full bg-btn-primary p-8 text-center text-white">
  <SpiderIcon class="mx-auto h-32 w-32" />
  <h2 class="mt-4 text-2xl">Welcome to Spider wallet</h2>
  <p class="mt-2">Another ethereum wallet!</p>
  <div class="mt-8 space-y-2">
    <div class="flex items-center gap-x-2">
      <CheckIcon class="h-6 w-6" />
      <span>Easy to use</span>
    </div>
    <div class="flex items-center gap-x-2">
      <CheckIcon class="h-6 w-6" />
      <span>Safe and Secure</span>
    </div>
    <div class="flex items-center gap-x-2">
      <CheckIcon class="h-6 w-6" />
      <span>Support many chains</span>
    </div>
  </div>
  <a
    href="/wallet/password"
    class="mt-8 flex flex-1 items-center justify-center rounded-lg bg-white py-3 text-primary hover:bg-opacity-90"
    >Use now</a
  >
</div>
