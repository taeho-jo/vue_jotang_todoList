<template>
  <div>
    <Nav></Nav>
    <MainPage></MainPage>
  </div>
</template>

<script>
// @ is an alias to /src
import { MainPage, Nav } from "@/components";

export default {
  name: "Home",
  components: {
    MainPage,
    Nav
  }
};
</script>
