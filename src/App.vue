<template>
  <div id="app">
    <TopBanner />
    <!-- <HelloWorld msg="Hello USDOT /code"/> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TopBanner from "./components/TopBanner.vue";
import "./../node_modules/bulma/css/bulma.css";

export default {
  name: "app",
  components: {
    HelloWorld,
    TopBanner
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
</style>
