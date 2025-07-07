<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let plans = data["data"]["data"] || [];
</script>

<main>
  <h1>Resources for worship nights</h1>
  <ul>
    {#each plans as plan}
      <li>{plan.attributes.dates} - {plan.attributes.items_count} items</li>
    {/each}
  </ul>
</main>