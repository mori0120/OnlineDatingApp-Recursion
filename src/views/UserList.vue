<template>
  <h1>User List</h1>
  <div class="container">
    <UserCard
      v-for="user in users"
      :key="Object.keys(user)[0]"
      :user="Object.values(user)[0]"
    />
  </div>

</template>

<script>
import { mapState } from 'vuex'
import UserCard from '@/components/UserCard'

export default {
  components: {
    UserCard
  },
  computed: {
    ...mapState('users', ['users'])
  }
}
</script>
<style scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 480px) {
      h1{
        display: none;
      }
  }
</style>
