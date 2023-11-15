<script lang="ts">
  export let name: string;
  export let imgUrl: string;
</script>

<img
  src={imgUrl}
  class="w-full rounded-lg border-2 border-primary"
  alt={name}
/>
