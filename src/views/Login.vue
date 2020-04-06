<template>
  <section>
    <div class="login-container">
      <div class="login-box">
        <h1>Jotang's Todo</h1>
        <input type="text" v-model="id" placeholder="아이디를 입력하세요" />
        <input @keypress.enter="emailLogin" type="password" v-model="password" placeholder="비밀번호를 입력하세요" />
        <div class="login-btnFlexBox">
          <button @click="emailLogin">Login</button>
          <button @click="goSignup">SignUp</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      id: '',
      password: '',
    };
  },
  methods: {
    emailLogin() {
      fetch('http://localhost:4004/api/auth/login/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.id,
          password: this.password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          this.clearInput();
          sessionStorage.setItem('access_token', res.access_token);
          sessionStorage.setItem('username', res.user.username);
          const info = {
            access: res.access_token,
            name: res.user.username,
          };
          this.$store.dispatch('getUser', info);
          setTimeout(() => {
            this.movePage();
          }, 1000);
        })
        .catch(e => {
          console.log(e);
        });
    },
    clearInput() {
      this.id = '';
      this.password = '';
    },
    movePage() {
      this.$router.push({ path: '/daily' });
    },
    goSignup() {
      this.$router.push('/signup');
    },
  },

};
</script>

<style lang="scss" src="@/styles/components/login.scss"></style>
