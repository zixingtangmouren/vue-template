<!--
 * @Author: tangzhicheng
 * @Date: 2021-03-23 20:02:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-31 12:00:10
 * @Description: file content
-->
<template>
  <div id="app"
       v-loading="loading">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/register">register</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    loading() {
      return this.$store.state.app.loading
    }
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
