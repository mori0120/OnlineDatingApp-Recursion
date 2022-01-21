<template>
  <div class="container" @click="goToChatPage">
    <img :src="user.picture.thumbnail">
    <div class="message-content">
      <div>{{ messages[messages.length - 1].text }}</div>
      <div class="date">{{ messages[messages.length - 1].date }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      user: {},
      messages: []
    }
  },
  created () {
    this.user = this.$store.getters['users/getUserById'](this.id)
    this.messages = this.$store.getters['messages/getMessagesById'](this.id)
  },
  methods: {
    goToChatPage () {
      this.$router.push({ name: 'message', params: { id: this.id } })
    }
  }
}
</script>
<style scoped>
  .container {
    display: flex;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  img {
    border-radius: 100%;
  }

  .message-content {
    text-align: left;
    text-decoration: underline #769abd;
    margin-left: 1rem;
  }

  .date {
    color: grey;
    font-size: 0.8rem;
  }
</style>
