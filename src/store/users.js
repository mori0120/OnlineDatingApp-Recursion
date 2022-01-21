import axios from 'axios'

export const usersStore = {
  namespaced: true,
  state: {
    host: {
      name: {
        first: 'foo',
        last: 'bar'
      },
      gender: 'male',
      login: {
        uuid: 'host'
      },
      picture: {
        thumbnail: 'https://tadworks.jp/wp-content/uploads/2020/08/profile_icon.png'
      }
    },
    users: []
  },
  mutations: {
    setUsers (state, payload) {
      const obj = { [payload.login.uuid]: payload }
      state.users.push(obj)
    }
  },
  actions: {
    async fetchUsers (context) {
      const response = await axios.get('https://randomuser.me/api/?results=48')
      const userObjs = JSON.parse(JSON.stringify(response.data.results))
      userObjs.forEach(userObj => {
        context.commit('setUsers', userObj)
      })
    }
  },
  getters: {
    getUserById: (state) => (payload) => {
      const user = state.users.find(element => Object.keys(element)[0] === payload)
      return user[payload]
    }
  }
}
