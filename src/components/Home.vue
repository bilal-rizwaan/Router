<template>
  <div>
      <h1>Home</h1>
      <h2>This is Home</h2>
      <p>{{id}}</p>
      <p>{{age}}</p>
  </div>

</template>

<script>
export default {
  name: 'Home',
  props:[
    'id',
    'age'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
