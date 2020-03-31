<template>
  <header>
    <div class="nav-title">
      <router-link class="home-title" to="/">
        Jotang's Todo
      </router-link>
    </div>
    <div class="nav-category">
      <router-link to="/daily">Daily</router-link>
      <router-link to="/weekly">Weekly</router-link>
      <router-link to="/monthly">Monthly</router-link>
      <router-link v-if="this.$store.state.isLogined === false" to="/login"
        >Login</router-link
      >
      <button v-if="this.$store.state.isLogined !== null" @click="isLogout">
        Logout
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    isLogout() {
      console.log(this.$store.state.isLogined);
      this.$store.state.isLogined = "";
      localStorage.clear();
    },

  }
};
</script>

<style lang="scss" src="@/styles/components/nav.scss" scoped></style>
