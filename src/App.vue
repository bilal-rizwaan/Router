<template>
  <div id="app">
    <router-link to="/Home">Home</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/About">About</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/About">Gallery</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/Contact">Contact</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
