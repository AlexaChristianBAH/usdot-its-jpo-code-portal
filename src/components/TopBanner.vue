<template>
  <div id="dotTopBanner">
    <!--===================TOP BANNER DOT LOGO===================-->
    <a href="https://transportation.gov">
      <img id="dotLogo" :src="dotLogo" alt="department of transportation logo"/>
    </a>

    <!--===================TOP BANNER NAV LINKS===================-->
    <ul id="topBannerLinks">
      <li><a class="bannerLink" href="https://www.transportation.gov/mission/about-us">ABOUT DOT</a></li>
      <li class="spacer">|</li>
      <li><a class="bannerLink" href="https://www.transportation.gov/briefingroom">BRIEFING ROOM</a></li>
      <li class="spacer">|</li>
      <li><a class="bannerLink" href="https://www.transportation.gov/our-activities">OUR ACTIVITIES</a></li>
    </ul>
  </div>
</template>

<script>
import dotLogo from "../assets/images/dot_logo.png";

export default {
  name: "TopBanner",
  data: () => {
    return {
      dotLogo: dotLogo
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  /* outline: 1px solid red; */
}
#dotTopBanner {
  width: 100%;
  min-width: 800px;
  height: 60px;
  background-color: #152350;
  padding: 0px 10px 0px 10px;
}
#dotLogoContainer {
  min-width: 240px;
}
#dotLogo {
  height: 35px;
  margin: 13px 0px 12px 25px;
  float: left;
}
#topBannerLinks {
  height: 24px;
  margin: 18px 0px 18px 0px;
  min-width: 400px;
}
.bannerLink {
  color: white;
  font-size: 11px;
}
.bannerLink:hover {
  font-weight: bold;
  cursor: pointer;
}
.spacer {
  display: table-cell;
  text-align: center;
  width: 5px;
  color: white;
}
li {
  display: table-cell;
  text-align: center;
}
li a {
  display: block;
  text-align: center;
}
ul {
  float: right;
  min-width: 390px;
  width: 390px;
  display: table;
  table-layout: fixed;
}
</style>
