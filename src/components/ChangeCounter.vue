<template>
  <button @click="incr">Add 1</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   // this.$store.state.counter++;
    //   // this.$store.commit('increment');
    //   this.$store.dispatch('increment');
    // }
    // ...mapActions(['increment', 'increase']),
    ...mapActions('numbers', {
      incr: 'increment',
      increase: 'increase'
    }),
  }
}
</script>