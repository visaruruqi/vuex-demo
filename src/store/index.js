import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      person: {
        name: 'visar',
        address: {
          country: 'Kosovo',
          city: 'Prishtine'
        }
      }
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

export default store;
