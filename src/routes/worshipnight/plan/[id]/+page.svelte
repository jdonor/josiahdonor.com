<script lang="ts">
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
  const plan = data["data"]["data"] || {};
</script>

<main>
  <h1>{plan.attributes.dates}</h1>
  <p>{plan.attributes.items_count} items</p>
  <p>
    <a href="/worshipnight">All Dates</a>
  </p>
</main>