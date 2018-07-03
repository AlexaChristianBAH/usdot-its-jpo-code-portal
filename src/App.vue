<template>
  <div id="app">
    <TopBanner />
    <HeroImageContainer />
    <img id="arrowDownIcon" :src="ArrowDownIcon" alt="arrow down icon" /> 
    <FeaturedCodeList />
    <Footer />
  </div>
</template>

<script>
import TopBanner from "./components/TopBanner.vue";
import HeroImageContainer from "./components/HeroImageContainer.vue";
import FeaturedCodeList from "./components/FeaturedCodeList.vue";
import ArrowDownIcon from "./assets/images/ContentIndicator.png";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    TopBanner,
    HeroImageContainer,
    FeaturedCodeList,
    Footer
  },
  data: () => {
    return {
      ArrowDownIcon: ArrowDownIcon
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
#arrowDownIcon {
  margin-top: -30px;
  height: 69px;
  width: 69px;
}
</style>
