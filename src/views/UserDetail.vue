<template>
  <h1>User Detail</h1>
  <div class="container">
    <div class="information-container">
      <div><img :src="user.picture.large"></div>
      <div>
        <button @click="goToChatPage">Send a message!</button>
      </div>
      <div class="info">
          <div><strong>Name: </strong></div>
          <div>{{ user.name.first + " " + user.name.last }}</div>
      </div>
      <div class="info">
          <div><strong>Gender: </strong></div>
          <div>{{ user.gender }}</div>
      </div>
      <div class="info">
          <div><strong>Age: </strong></div>
          <div>{{ user.dob.age }}</div>
      </div>
      <div class="info">
          <div><strong>Country: </strong></div>
          <div>{{ user.location.country }}</div>
      </div>
      <div class="info">
          <div><strong>State: </strong></div>
          <div>{{ user.location.state }}</div>
      </div>
      <div class="info">
          <div><strong>City: </strong></div>
          <div>{{ user.location.city }}</div>
      </div>
      <div class="info">
          <div><strong>Email: </strong></div>
          <div>{{ user.email }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    goToChatPage () {
      this.$router.push({ name: 'message', params: { id: this.$route.params.id } })
    }
  },
  created () {
    this.user = this.$store.getters['users/getUserById'](this.$route.params.id)
  }
}
</script>
<style scoped>
  .container{
    display: flex;
    justify-content: center;
    overflow: scroll;
  }

  .information-container {
    display: flex;
    justify-content: center;
    flex-flow: column;
    border: solid;
    border-radius: 0.3rem;
    width: 700px;
    padding: 1rem;
  }

  .info {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 0 1rem;
    margin: 0.5rem 1rem;
    border-bottom: solid;
  }

  img {
    width: 50%;
    border-radius: 0.3rem;
    border: solid;
  }

  button{
    background-color: #2c3e50;
    color: white;
    padding: 10px;
    margin-top: 1rem;
    width: 400px;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: bold;
  }

  @media screen and (max-width: 480px) {
    h1{
      display: none;
    }

    .information-container{
      width: 100%;
    }

    .info {
      padding: 0 0.5rem;
      margin: 0.5rem 0.5rem;
      border-bottom: solid;
      overflow-x: scroll;
    }

    img {
      width: 90%;
    }

    button{
      width: 90%;
    }
  }
</style>
