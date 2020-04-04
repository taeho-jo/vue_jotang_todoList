<template>
  <div>
    <div>
      <p>{{ a.title }}</p>
      <p>{{ a.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: null,
    };
  },
  computed: {
    a() {
      return this.$store.state.detailData;
    },
  },
  mounted() {
    this.url = this.$route.params.id;
    this.$store.dispatch('get', this.url);
  },
};
</script>
