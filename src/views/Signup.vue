<template>
  <section>
    <div class="login-container">
      <div class="login-box">
        <h1>Jotang's Todo</h1>
        <input
          type="text"
          v-model="userInfo.id"
          placeholder="아이디를 입력하세요"
        />
        <input
          type="password"
          v-model="userInfo.password"
          placeholder="비밀번호를 입력하세요"
        /><input
          type="text"
          v-model="userInfo.nickName"
          placeholder="닉네임을 입력하세"
        />
        <button @click="setNickName(userInfo.nickName)">
          회원가입
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "../firebase";

export default {
  data() {
    return {
      userInfo: {
        id: "",
        password: "",
        nickName: ""
      }
    };
  },
  methods: {
    signupEmail() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.userInfo.id,
          this.userInfo.password
        )
        .then(res => {
          console.log(res);
        });
    },
    setNickName() {
      this.$store.commit("getNickName");
      this.signupEmail();
      this.goLogin();
    },
    goLogin() {
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="scss" src="@/styles/components/login.scss"></style>
