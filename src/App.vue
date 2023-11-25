<template>
  <div id="app">
    <component :is="renderedComponent" />

  <br>
  <br>
  <br>
    <button @click="renderedComponent='Count'">Render Count</button>
    <button @click="renderedComponent='Text'">Render Text</button>
  </div>
</template>

<script>
import Count from './components/Count';
import Text from './components/Text';
export default {
  name: 'App',
  components: { Count, Text },
  data() {
    return {
      renderedComponent: 'Count'
    }
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
