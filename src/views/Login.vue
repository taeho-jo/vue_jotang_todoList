<template>
  <section>
    <div class="login-container">
      <div class="login-box">
        <h1>Jotang's Todo</h1>
        <input type="text" v-model="userInfo.id" placeholder="아이디를 입력하세요" />
        <input type="password" v-model="userInfo.password" placeholder="비밀번호를 입력하세요" />
        <div class="login-btnFlexBox">
          <button @click="emailLogin">Login</button>
          <button @click="goSignup">SignUp</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from '../firebase';

export default {
  name: 'login',
  data() {
    return {
      userInfo: {
        id: '',
        password: '',
      },
    };
  },
  methods: {
    emailLogin() {
      console.log(this.userInfo.id, this.userInfo.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.userInfo.id, this.userInfo.password)
        .then(res => {
          localStorage.setItem('uid', res.user.uid);
          this.$store.commit('getAccessToken', res.user.uid);
          this.clearInput();
          this.movePage();
        });
    },
    clearInput() {
      const { userInfo } = this;
      userInfo.id = '';
      userInfo.password = '';
    },
    movePage() {
      this.$router.push({ path: '/' });
    },
    goSignup() {
      this.$router.push('/signup');
    },
  },
};
</script>

<style lang="scss" src="@/styles/components/login.scss"></style>

// onSubmit() { // const { userInfo } = this; // console.log(userInfo.id, userInfo.password); // if
(userInfo.id.length > 0 && userInfo.password.length > 0) { // // this.isLogined = true; //
this.$store.commit("isLogin"); // this.confirm(); // } else { // alert("입력해주세요"); // } //
console.log(this.$store.state.isLogined); // },
