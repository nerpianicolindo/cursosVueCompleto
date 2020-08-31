<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :rows="6" :columns="5"/>
    <Botton @click="handleClick">
      <i class="fas fa-cat">Botón de ejemplo</i>
    </Botton>
    <div v-if="result" class="content">
      <p>User ID: {{ result.userId }}</p>
      <p>Title: {{ result.title }}</p>
  </div>
  <div>
  {{ 2368463513.34684651346 | decimals(5) | currency }}
  <div>
    <div><span>{{ date | date }}</span>
      <h2>{{ new Date() | date }}</h2>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from './components/HelloWorld.vue'
import Botton from './components/Botton.vue'
import Vue2Filters from 'vue2-filters'

export default {
  name: 'App',
  mixins: [Vue2Filters.mixin],
  components: {
    HelloWorld,
    Botton
  },
  data: () => ({
    result: null
  }),
  /* created() {
     axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
      this.result = result.data;
    }) 
      // axios.delete("https://jsonplaceholder.typicode.com/todos/1");
    let post = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    axios.post("https://jsonplaceholder.typicode.com/posts", post).then((result) => {
      console.log(result);
    });
    axios.put("https://jsonplaceholder.typicode.com/posts/1", post).then((result) => {
      console.log(result);
    });
  }, */
  async created() {
    let response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    this.result = response.data;
  },
  mehtods: {
    handleClick(info) {
      console.log("Click event on the button of the children with: "+ info)
    },
    async getTodos() {
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
        this.result = response.data; 
      } catch (error) {
        console.log(error);
      }
    },
    async modifyPost() {
      let post = {
        title: 'foo',
        body: 'bar',
        userId: 1
      };
      let response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", post)
      console.log(response.data);
    }
  },
  /* created() {
    this.getTodos();
    this.modifyPost();
  } */
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
