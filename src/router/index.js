import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/UserList.vue'
import User from '../views/UserDetail.vue'
import Messages from '../views/MessageList.vue'
import Chat from '../views/Chat.vue'

const routes = [
  {
    path: '/',
    component: Users
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  },
  {
    path: '/message-list',
    component: Messages
  },
  {
    name: 'message',
    path: '/user/chat/:id',
    component: Chat
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
