<template>
  <div class="card-container" @click="goToUserDetail">
    <div><img :src="user.picture.large"></div>
    <div><strong>Name: </strong> {{ user.name.first + " " + user.name.last }}</div>
    <div><strong>Age: </strong> {{ user.dob.age }}</div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    goToUserDetail () {
      this.$router.push({ name: 'user', params: { id: this.user.login.uuid } })
    }
  }
}
</script>
<style scoped>
.card-container {
  position: relative;
  width: 300px;
  box-shadow: 10px 5px 5px black;
  border-color: grey;
  border: solid;
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin: 1rem;
}

.card-container:hover {
  top: -5px;
  cursor: pointer;
}

.card-container:active {
  top: 5px;
  box-shadow: none;
}

img {
  border-color: grey;
  border: solid;
  border-radius: 0.3rem;
}
</style>
