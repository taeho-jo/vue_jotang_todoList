<template>
  <div>
    <section class="daily-container">
      <button @click="addTodos" class="daily-add">할 일 추가하기</button>
      <div class="daily-list">
        <ul v-for="todo in todos" :key="todo._id">
          <input type="checkbox" v-model="todo.done" @click="isDone(todo._id)" />
          <li :class="todo.done ? 'done' : 'notyet'">{{ todo.title }}</li>
          <div>
            <button @click="move(todo._id)">상세보기</button>
            <img @click="deletTodo(todo._id)" src="../../public/images/png/trash.png" alt="trash" />
          </div>
        </ul>
      </div>
    </section>
    <div @click="closeTodos" class="daily-modal-overlay" v-if="addTodo"></div>
    <div class="modal-container" v-if="addTodo">
      <h1>할 일 추가하기</h1>
      <div class="add">
        <p>Title</p>
        <input v-model="title" type="text" />
      </div>
      <div class="add">
        <p>Description</p>
        <textarea v-model="desc" cols="30" rows="10"></textarea>
      </div>
      <div class="add">
        <p>Tags</p>
        <div class="tag-box">
          <input @keypress.enter="addTags" type="text" v-model="tag" />
          <button @click="addTags">추가</button>
        </div>
        <span class="hash-tags" v-for="(ii, index) in tags" :key="index">{{ `# ${ii} ` }}</span>
      </div>
      <div class="select-date">
        <p>Start Date</p>
        <md-datepicker v-model="startDate" md-immediately />
      </div>
      <div class="expried-date">
        <p>Expired Date</p>
        <md-datepicker v-model="expiredDate" md-immediately />
      </div>
      <button class="todo-add" @click="createTodo">확 인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      addTodo: false,
      username: '',
      title: '',
      desc: '',
      tags: [],
      tag: '',
      startDate: Date(),
      expiredDate: Date(),
    };
  },
  methods: {
    move(id) {
      this.$router.push(`/detail/${id}`);
      this.$store.dispatch('get', id);
      console.log(this.$store.state.detailData);
    },
    isDone(id) {
      const newTodo = this.todos.filter(el => el._id === id);
      fetch(`http://localhost:4004/api/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          done: !newTodo[0].done,
        }),
      });
    },
    addTags() {
      this.tags.push(this.tag);
      this.tag = '';
    },
    addTodos() {
      this.addTodo = true;
    },
    closeTodos() {
      this.addTodo = false;
      this.title = '';
      this.desc = '';
      this.tags = [];
    },
    deletTodo(id) {
      const newTodo = this.todos.filter(el => el._id === id);
      if (newTodo[0].done) {
        fetch(`http://localhost:4004/api/todos/${id}`, {
          method: 'DELETE',
        })
          .then(res => {
            console.log(res);
            this.updateTodo();
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        alert('할 일은 하고 삭제하세요');
      }
    },
    updateTodo() {
      fetch('http://localhost:4004/api/todos')
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.todos = res;
        });
    },
    createTodo() {
      console.log(this.startDate);
      console.log(this.expiredDate);
      if (this.title.length > 0 && this.desc.length > 0 && this.tags.length > 0) {
        fetch('http://localhost:4004/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            title: this.title,
            desc: this.desc,
            tags: this.tags,
            createAt: this.startDate,
            expired: this.expiredDate,
          }),
        })
          .then(() => {
            this.updateTodo();
          })
          .catch(e => {
            console.log(e);
          });
        this.closeTodos();
      } else {
        alert('내용을 입력하세요');
      }
    },
  },
  mounted() {
    this.username = this.$store.state.username;
  },
  created() {
    fetch('http://localhost:4004/api/todos')
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.todos = res;
      });
  },
};
</script>

<style lang="scss" scoped src="@/styles/components/dailyTodos.scss"></style>
