<template>
  <div class="hello">
    {{ rows}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    columns: {
      type: Number,
      default: 4
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  created(){
    console.log("Columns: " + this.columns + " Rows: " + this.rows);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
