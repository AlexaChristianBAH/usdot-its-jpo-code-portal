<template>
  <div id="app">
    <TopBanner />
    <!-- <NavBar /> -->
      <!-- <div class="TitleText" style="padding-top: 40px;">
        <p class="searchHeaderText">EXPLORE OUR CODE</p>
        <h3 style="font-size: 18px; color: black; text-align: center; margin-top: 10px;">Department of Transportation Intelligent Transportation Systems Joint Program Office Code</h3>
        <h3 style="font-size: 18px; color: black; text-align: center; margin-bottom: 12px;">Welcome to the ITS JPO’s public access point for ITS code</h3> -->

        <!--search bar-->
        <!-- <label for="mainSearch" class="hidden">Search</label>
        <input class="mainSearch" id="mainSearch" v-model="query" v-on:keyup.enter="search(query)" v-bind:placeholder="search_placeholder"><button class="searchButton" v-on:click="search(query)">SEARCH</button>
      </div> -->
    <FeaturedCodeList />

    <Footer />
  </div>
</template>

<script>
import TopBanner from "./components/TopBanner.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import FeaturedCode from "./components/FeaturedCode.vue";
import FeaturedCodeList from "./components/FeaturedCodeList.vue";
import "./../node_modules/bulma/css/bulma.css";

export default {
  name: "app",
  components: {
    TopBanner,
    NavBar,
    Footer,
    FeaturedCode,
    FeaturedCodeList
  }
};
</script>

<style>
#app {
  font-family: "Arial", Verdana, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  padding: 0px;
  background: rgb(232, 231, 231);
}
</style>
