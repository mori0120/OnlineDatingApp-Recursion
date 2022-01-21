export const messagesStore = {
  namespaced: true,
  state: {
    messages: [],
    responses: [
      'Hello!',
      "What's up!?",
      'I like comic books. How about you?',
      'Good!',
      'I like travel. Which country have you been to?',
      'Cool!',
      "You're so funny.",
      'lol',
      'WTF!',
      'Good luck!',
      'Nice!',
      'Totally!',
      'Are you free tonight?',
      "Let's go shopping!",
      "You're so kind:)"
    ]
  },
  getters: {
    getMessagesById: (state) => (id) => {
      const message = state.messages.find(message => Object.keys(message)[0] === id)
      return message ? message[id] : []
    }
  },
  mutations: {
    setMessages (state, payload) {
      const message = state.messages.find(obj => Object.keys(obj)[0] === payload.id)
      console.log(message, payload.id)
      if (!message) {
        const newMessage = { [payload.id]: [payload.message] }
        state.messages.push(newMessage)
      } else {
        message[payload.id].push(payload.message)
      }
    }
  },
  actions: {
    setRandomResponse ({ commit, state }, givenId) {
      const index = Math.floor(Math.random() * 15)
      const response = state.responses[index]
      const date = new Date()
      const dateString = date.getMonth() + 1 + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
      const messageObj = { id: givenId, message: { from: givenId, text: response, date: dateString } }
      commit('setMessages', messageObj)
    }
  }
}
