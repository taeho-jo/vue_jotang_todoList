<template>
  <header>
    <div class="nav-title">
      <h1 class="home-title" @click="moveHome">
        Jotang's Todo
      </h1>
    </div>
    <div class="nav-category">
      <p v-if="this.$store.state.access_token === null" @click="moveLogin"
        >로그인을 해주세요</p
      >
      <button v-if="this.$store.state.access_token !== null" @click="isLogout">
        {{ this.$store.state.username }}님 반갑습니다
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    isLogout() {
      fetch('http://localhost:4004/api/auth/logout', {
        method: 'POST',
      })
        .then(res => {
          console.log(res);
          this.moveHome();
        })
        .catch(e => {
          console.log(e);
        });
      this.$store.state.access_token = null;
      this.$store.state.username = null;
      sessionStorage.clear();
    },
    moveHome() {
      this.$router.push('/');
    },
    moveLogin() {
      this.$router.push('/login')
    }
  },
  created() {
    const access_token = sessionStorage.getItem('access_token');
    const username = sessionStorage.getItem('username');
    const info = {
      access: access_token,
      name: username,
    };
    this.$store.dispatch('getUser', info);
  },
};
</script>

<style lang="scss" src="@/styles/components/nav.scss" scoped></style>
