<template>
  <div id="app" class="container mx-auto bg-grey-lightest shadow-lg">
    <h1 class="text-green-dark p-4 inline-block">Josiah Donor</h1>
    <span class="bg-green text-grey-lightest p-2 rounded">Software Engineer</span>
    <span class="bg-green text-grey-lightest p-2 rounded">Musician</span>
    <span class="bg-green text-grey-lightest p-2 rounded">Husband</span>
    <span class="bg-green text-grey-lightest p-2 rounded">Dad</span>

    <Banner></Banner>
  </div>
</template>

<script>
import Banner from './Banner.vue'

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Banner
  }
};
</script>

<style scoped>
</style>