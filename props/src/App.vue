<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :rows="6" :columns="5"/>
    <Botton @click="handleClick">
      <i class="fas fa-cat"></i>
      Botón de ejemplo
    </Botton>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Botton from './components/Botton.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Botton
  },
  mehtods: {
    handleClick(info) {
      console.log("Click event on the button of the children with: "+ info)
    }
  }
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
