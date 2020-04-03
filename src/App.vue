<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script>
import { Nav } from '@/components';
export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss" src="@/styles/app.scss"></style>
