<script lang="ts">
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
  const plans = data["data"]["data"] || {};
</script>

<main>
  <h1>Resources for worship nights</h1>
  <ul>
    {#each plans as plan}
      <li><a href="/worshipnight/plan/{plan.id}">{plan.attributes.dates}</a></li>
    {/each}
  </ul>
</main>