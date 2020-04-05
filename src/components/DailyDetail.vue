<template>
  <section class="detail-container">
    <div class="detail-box">
      <h1>{{ DetailList.title }}</h1>
      <div>
        <p class="detail-description">Description</p>
        <p>{{ DetailList.desc }}</p>
      </div>
      <div>
        <p class="detail-tags">Tags</p>
        <span v-for="(tag, index) in DetailList.tags" :key="index">{{ `# ${tag} ` }}</span>
      </div>
      <div>
        <p class="detail-tags">CreateAt</p>
        <span>{{ currentDate }}</span>
      </div>
      <div>
        <p class="detail-tags">Expired</p>
        <span>{{ expriedDate }}</span>
      </div>
      <div>
        <p class="detail-done">Done</p>
        <span>{{ DetailList.done ? '했어요!!' : '아직도 안하고 뭐햐냐???' }}</span>
      </div>
      <div class="btn-box">
        <button @click="isDone">{{DetailList.done ? '취소!' : '완료!'}}</button>
        <button @click="moveHome">목록으로!</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      url: null,
    };
  },
  methods: {
    isDone() {
      console.log(this.DetailList);
      fetch(`http://localhost:4004/api/todos/${this.url}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          done: !this.DetailList.done,
        }),
      }).then(() => {
        this.$store.dispatch('get', this.url);
      });
    },
    moveHome() {
      this.$router.push('/daily');
    },
  },
  computed: {
    DetailList() {
      return this.$store.state.detailData;
    },
    currentDate() {
      return this.$store.state.detailData.createAt.slice(0, 10);
    },
    expriedDate() {
      return this.$store.state.detailData.createAt.slice(0, 10);
    },
  },
  mounted() {
    this.url = this.$route.params.id;
    this.$store.dispatch('get', this.url);
  },
};
</script>

<style lang="scss" scoped src="@/styles/components/dailyDetail.scss"></style>
