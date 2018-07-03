<template>
  <div :class="scrollPosition" v-on:scroll="handleScroll">
    <!--===================NAVBAR GENERAL LINKS===================-->
    <a class="headHovers" href="https://its.dot.gov/index.htm">ITS JPO HOME</a>

    <!--===================NAVBAR GITHUB LINK===================-->
    <a class="headHovers" id="github-link" :href="githubURL" target="_blank">VIEW THIS PROJECT ON GITHUB</a>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => {
    return {
      githubURL:
        "https://github.com/bah-interactivemedia/usdot-its-jpo-code-portal",
      scrollPosition: "navigation-bar"
    };
  },
  methods: {
    handleScroll() {
      window.scrollY > 58
        ? (this.scrollPosition = "navigation-bar-scrolled")
        : (this.scrollPosition = "navigation-bar");
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  /* outline: 1px solid red; */
}
.navigation-bar {
  background: rgba(35, 91, 122, 0.6);
  height: 40px;
  line-height: 40px;
  padding: 0px 38px 0 38px;
  text-align: left;
  width: 100%;
  min-width: 600px;
}
.navigation-bar-scrolled {
  background: rgba(35, 91, 122, 0.6);
  height: 40px;
  line-height: 40px;
  padding: 0px 38px 0px 38px;
  text-align: left;
  width: 100%;
  min-width: 600px;

  top: 0;
  position: fixed;
}
.headHovers {
  color: white;
  font-size: 12px;
  width: 70px;
}
.headHovers:hover {
  color: white;
  font-weight: bold;
}
#github-link {
  width: 225px;
  float: right;
  text-align: right;
}
</style>
