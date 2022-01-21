<template>
  <h1>Message List</h1>
  <div class="container">
    <div class="messages-container">
      <div
        v-for="(message, index) in messages"
        :key="index"
      >
        <LastMessage
          :id="Object.keys(message)[0]"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import LastMessage from '@/components/LastMessage'

export default {
  components: {
    LastMessage
  },
  computed: {
    ...mapState('messages', ['messages'])
  }
}
</script>
<style scoped>
  .container{
    display: flex;
    justify-content: center;
  }

  .messages-container {
    display: flex;
    overflow: scroll;
    align-items: start;
    flex-flow: column;
    border: solid;
    border-radius: 0.3rem;
    width: 700px;
    height: 70vh;
    padding: 1rem;
  }

  @media screen and (max-width: 480px) {
    h1{
      display: none;
    }
  }
</style>
