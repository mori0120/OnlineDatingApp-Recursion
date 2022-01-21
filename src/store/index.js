import { createStore } from 'vuex'
import { usersStore } from './users.js'
import { messagesStore } from './messages.js'

export default createStore({
  modules: {
    users: usersStore,
    messages: messagesStore
  }
})
