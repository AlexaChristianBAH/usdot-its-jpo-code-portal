<template>
  <div id="app">
    <TopBanner />
    <NavBar />
    <!-- <Hero /> -->
    <!-- <img id="arrow-down-icon" :src="ArrowDown" alt="arrow down icon" />  -->
    <!-- <img id="ODE2-image" :src="ODE2" alt="ODE2 image" /> -->
    <!-- <FeaturedCodeList /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import TopBanner from "./components/TopBanner.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import FeaturedCode from "./components/FeaturedCode.vue";
import FeaturedCodeList from "./components/FeaturedCodeList.vue";
import Hero from "./components/Hero.vue";
import ODE2 from "./assets/images/ODE2.png";
import ArrowDown from "./assets/images/ContentIndicator.png";

export default {
  name: "app",
  components: {
    TopBanner,
    NavBar,
    Footer,
    FeaturedCode,
    FeaturedCodeList,
    Hero
  },
  data: () => {
    return {
      ODE2: ODE2,
      ArrowDown: ArrowDown
    };
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
  padding: 0px;
  background-color: #152350;
}
#ODE2-image {
  height: 300px;
  margin: 20px;
}
#arrow-down-icon {
  margin-top: -30px;
  height: 69px;
  width: 69px;
}
</style>
