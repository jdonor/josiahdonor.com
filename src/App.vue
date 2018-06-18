<template>
  <div id="app" class="container flex mx-auto bg-grey-lightest shadow-lg">
    <div class="w-1/3 h-full">
      <Banner></Banner>
    </div>

    <div class="w-2/3 h-full p-4">
      <h1>Josiah Donor</h1>
      <h2 class="mt-2">Software engineer</h2>
      <h2>UX designer</h2>
      <h2>Problem solver</h2>
      <h2>Technical mentor</h2>
    </div>
  </div>
</template>

<script>
import Banner from './Banner.vue';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Banner,
  },
};
</script>

<style scoped>
</style>