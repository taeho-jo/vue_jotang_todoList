<template>
  <DailyTodos></DailyTodos>
</template>

<script>
import DailyTodos from '../components/DailyTodos';
export default {
  components: {
    DailyTodos,
  },
  // methods: {
  //   addTag() {
  //     this.info.tags.push(this.tag);
  //     this.tag = '';
  //     console.log(this.info.tags);
  //   },
  //   submit() {
  //     // console.log(this.info);
  //     fetch('http://localhost:4004/api/books', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(this.info),
  //     })
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   },
  // },
};
</script>

<style lang="scss"></style>
