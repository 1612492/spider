<script lang="ts">
  export let name: string;
  export let imgUrl: string;
</script>

<button class="w-full rounded-lg">
  <img src={imgUrl} alt={name} />
</button>
