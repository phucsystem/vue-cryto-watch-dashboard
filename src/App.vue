<template>
  <div id="app">
    <LayoutPage></LayoutPage>
  </div>
</template>

<script>
import LayoutPage from "@/layout/LayoutPage";

export default {
  name: 'App',
  components: {
    LayoutPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
