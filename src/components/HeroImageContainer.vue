<template>
  <div id="HeroImageContainer">
    <NavBar />
    <HeroCopy />
  </div>
</template>

<script>
import HeroBackground from "../assets/images/hero_background.png";
import NavBar from "./NavBar.vue";
import HeroCopy from "./HeroCopy.vue";

export default {
  name: "HeroImageContainer",
  components: {
    NavBar,
    HeroCopy
  },
  data: () => {
    return {
      HeroBackground: HeroBackground
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  /* outline: 1px solid red; */
}
#HeroImageContainer {
  background-color: lightgray;
  background-image: linear-gradient(
      rgba(35, 91, 122, 0.4),
      rgba(35, 91, 122, 0.6)
    ),
    url("../assets/images/hero_background.png");
  background-size: 100% 100%;
  height: 400px;
  color: white;
  min-width: 800px;
}
</style>
