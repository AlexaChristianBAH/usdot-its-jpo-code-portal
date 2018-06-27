<template>
  <div id="dotTopBanner">

    <div class="columns is-vcentered">

      <!--===================TOP BANNER DOT LOGO===================-->
      <div class="column">
        <a id="dotLogoContainer" href="https://transportation.gov">
          <img id="dotLogo" :src="dotLogo" alt="department of transportation logo"/>
        </a>
      </div>

      <!--===================TOP BANNER NAV LINKS===================-->
      <div class="column">
        <ul id="dotTopLinks">
          <li><a class="bannerLink" href="https://www.transportation.gov/mission/about-us">ABOUT DOT</a></li>
          <li class="spacer">|</li>
          <li><a class="bannerLink" href="https://www.transportation.gov/briefingroom">BRIEFING ROOM</a></li>
          <li class="spacer">|</li>
          <li><a class="bannerLink" href="https://www.transportation.gov/our-activities">OUR ACTIVITIES</a></li>
        </ul>
      </div>

   </div>

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
  height: 60px;
  background-color: #152350;
}
.columns {
  display: flex;
  height: 60px;
  align-items: center;
}
#dotLogoContainer {
  min-width: 240px;
}
#dotLogo {
  height: 35px;
  margin-left: 25px;
  float: left;
}
.spacer {
  display: table-cell;
  text-align: center;
  width: 20px;
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
#dotTopLinks {
  float: right;
  min-width: 390px;
  width: 390px;
  display: table;
  table-layout: fixed;
}
.bannerLink {
  color: white;
  font-size: 11px;
}
.bannerLink:hover {
  font-weight: bold;
  cursor: pointer;
}
</style>
