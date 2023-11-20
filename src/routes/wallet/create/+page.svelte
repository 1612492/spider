<script lang="ts">
  import CheckIcon from '@/components/icons/CheckIcon.svelte';
</script>

<div class="p-4">
  <CheckIcon class="mx-auto h-24 w-24 text-green-500" />
  <h2 class="mt-4 text-center text-xl">Wallet created successfully</h2>
  <p class="mt-4 text-center">
    Write down or copy these words in the right order and save them somewhere
    safe.
  </p>
  <textarea rows={5} class="mt-4 w-full rounded-lg p-4 outline-primary" />
  <a
    href="/home"
    class="mt-8 flex flex-1 items-center justify-center rounded-lg bg-btn-primary py-3 text-btn-primary hover:bg-opacity-90"
    >Continue</a
  >
</div>
