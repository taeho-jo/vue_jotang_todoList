<template>
  <section>
    <div class="login-container">
      <div class="login-box">
        <h1>Jotang's Todo</h1>
        <input type="text" v-model="id" placeholder="아이디를 입력하세요" />
        <input type="password" v-model="password" placeholder="비밀번호를 입력하세요" /><input
          type="text"
          v-model="nickName"
          placeholder="닉네임을 입력하세"
        />
        <button @click="setNickName(nickName)">
          회원가입
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      password: '',
      nickName: '',
    };
  },
  methods: {
    signupEmail() {
      fetch('http://localhost:4004/api/auth/register/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.nickName,
          email: this.id,
          password: this.password,
        }),
      }).catch(e => {
        console.log(e);
      });
    },
    setNickName(username) {
      this.$store.commit('getNickName', username);
      this.signupEmail();
      this.goLogin();
    },
    goLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" src="@/styles/components/login.scss"></style>
