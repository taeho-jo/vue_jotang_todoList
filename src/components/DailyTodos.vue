<template>
  <div>
    <section class="daily-container">
      <button @click="addTodos" class="daily-add">할 일 추가하기</button>
      <div class="daily-list">
        <ul v-for="todo in todos" :key="todo._id">
          <input type="checkbox" v-model="todo.done" />
          <li :class="todo.done ? 'done' : 'notyet'">{{ todo.title }}</li>
          <img @click="deletTodo(todo._id)" src="../../public/images/png/trash.png" alt="trash" />
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
        <input type="text" v-model="tag" @click="addTags" />
        <button>추</button>
        <p v-for="(ii, index) in tags" :key="index">{{ ii }}</p>
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
      title: '',
      desc: '',
      tags: [],
      tag: '',
    };
  },
  methods: {
    addTags() {
      this.tags.push(this.tag);
    },
    addTodos() {
      this.addTodo = true;
    },
    closeTodos() {
      this.addTodo = false;
    },
    deletTodo(id) {
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
      fetch('http://localhost:4004/api/todos', {
        method: 'POST',
        body: {
          title: this.title,
          desc: this.desc,
          tags: this.tags,
        },
      })
        .then(res => {
          console.log(res);
          this.updateTodo();
        })
        .catch(e => {
          console.log(e);
        });
    },
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
