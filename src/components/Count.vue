<template>
  <div>
    <button @click="incrementCount">Increment</button>
    <input type="text" v-model="countState" />
    <button @click="decrementCount">Decrement</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Count',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      countState: (state) => state.count,
    }),
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    incrementCount() {
      this['increment']();
    },
    decrementCount() {
      this['decrement']();
    },
  },
};
</script>

<style></style>
