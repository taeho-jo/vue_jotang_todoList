<template>
  <main>
    <div class="mainpage-img"></div>
    <button @click="movePage">시작하기</button>
  </main>
</template>

<script>
export default {
  methods: {
    movePage() {
      this.$router.push('/login');
    },
    check() {
      console.log(this.$store.state.access_token);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="@/styles/components/mainPage.scss"></style>
