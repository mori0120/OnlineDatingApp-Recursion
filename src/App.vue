<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/message-list">Message</router-link>
  </div>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('users', ['fetchUsers'])
  },
  created () {
    this.fetchUsers()
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
}

#nav {
  margin-bottom: 30px;
}

#nav a {
  font-weight: bold;
  color: #769abd;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
