<template>
  <button v-if="!isAuth" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
}
</script>