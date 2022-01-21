<template>
  <h1>Chat Page</h1>
  <div class="container">
    <div class="chat-container">
      <div class="user-name">{{ user.name.first + ' ' + user.name.last }}</div>
      <div class="message-container">
        <div
          v-for="(message, index) in this.$store.getters['messages/getMessagesById'](this.$route.params.id)"
          :key="index"
          :class="message.from==='host' ? 'host-message': 'user-message'"
          class="message"
        >
          <div class="icon">
            <img :src="getImg(message.from)">
          </div>
          <div class="text">{{ message.text }}</div>
          <div class="date">{{ message.date }}</div>
        </div>
      </div>
      <div class="input-container">
        <textarea type="text" placeholder="Please write a message" v-model="yourText">
        </textarea>
        <button @click="sendMessage">send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      host: {},
      yourText: ''
    }
  },
  created () {
    this.user = this.$store.getters['users/getUserById'](this.$route.params.id)
    this.host = this.$store.state.users.host
  },
  methods: {
    sendMessage () {
      const date = new Date()
      const dateString = date.getMonth() + 1 + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
      const messageObj = {
        id: this.$route.params.id,
        message: {
          from: 'host', text: this.yourText, date: dateString
        }
      }
      this.$store.commit('messages/setMessages', messageObj)
      this.$store.dispatch('messages/setRandomResponse', this.$route.params.id)
      this.yourText = ''
    },
    getImg (id) {
      if (id === 'host') {
        return this.host.picture.thumbnail
      } else {
        return this.user.picture.thumbnail
      }
    }
  }
}
</script>
<style scoped>
  .container{
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    max-width: 100%;
  }

  .chat-container {
    display: flex;
    justify-content: center;
    flex-flow: column;
    border: solid;
    border-radius: 0.3rem;
    width: 700px;
    max-width: 100%;
  }

  .user-name {
    width: 100%;
    padding: 1rem 0;
    font-weight: bold;
    color: white;
    background-color: #2c3e50;
  }

  .message-container {
    padding: 1rem;
    min-height: 30vh;
    max-height: 50vh;
    overflow: scroll;
  }

  .message {
    margin-top: 0.5rem;
  }

  .input-container{
    background-color: #2c3e50;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 1rem 0;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 100%;
  }

  .text {
    text-align: left;
    font-weight: bold;
    overflow-wrap: break-word;
  }
  .date {
    text-align: right;
    font-size: 0.3rem;
  }

  textarea{
    width: 100%;
    margin: 0 1rem;
    border-radius: 0.3rem;
  }

  button{
    font-weight: bold;
    margin: 0 1rem 0 0;
    border-radius: 0.3rem;
  }

  /* 吹き出し本体 */
.user-message{
  position: relative;
  padding: 20px;
  border-radius: 10px;
  color: black;
  background-color: #0fe460;
  margin-left: 70px;          /* 左に余白を設ける */
}
/* 画像 - 絶対配置で左上に配置 */
.user-message .icon{
  position: absolute;
  left: -70px;
  top: 10px;
}
/* 三角アイコン */
.user-message::before{
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: -15px;
  top: 20px;
  border-right: 15px solid #0fe460;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

/* 吹き出し本体 */
.host-message{
  position: relative;
  padding: 20px;
  border-radius: 10px;
  color: black;
  background-color: #0fe460;
  margin-right: 70px;          /* 右に余白を設ける */
}
/* 画像 - 絶対配置で右上に配置 */
.host-message .icon{
  position: absolute;
  right: -70px;
  top: 10px;
}
/* 三角アイコン */
.host-message::before{
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  right: -15px;
  top: 20px;
  border-left: 15px solid #0fe460;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

@media screen and (max-width: 480px) {
    h1{
      display: none;
    }
}
</style>
