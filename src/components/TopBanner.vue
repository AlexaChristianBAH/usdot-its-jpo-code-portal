<template>
  <div id="dotTopBanner">
    <div class="columns">

      <!--===================TOP BANNER DOT LOGO===================-->
      <div class="column">
        <a style="background: none" href="https://transportation.gov">
          <img 
            :src="dotLogo"        
            style="height: 35px; margin-left: 25px; margin-top: 8px; float: left;"
            alt="department of transportation logo" />
        </a>
      </div>

      <!--===================TOP BANNER NAV LINKS===================-->
      <div class="column">
        <div id="dotTopLinks">
          <a  class="headHovers" 
              href="https://www.transportation.gov/mission/about-us" 
              style="font-size: 11px; width: 70px; background: #04214f">ABOUT DOT&emsp;&nbsp;|</a> 
          <a  class="headHovers" 
              href="https://www.transportation.gov/briefingroom" 
              style="font-size: 11px; width: 70px; background: #04214f">&emsp;&nbsp;BRIEFING ROOM&emsp;&nbsp;|</a>
          <a  class="headHovers" 
              href="https://www.transportation.gov/our-activities" 
              style="margin-right: 30px; font-size: 11px; width: 70px; background: #04214f">&emsp;&nbsp;OUR ACTIVITIES</a>
        </div>

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
  padding: 5px 0 0 10px;
}
#dotTopLinks {
  line-height: 30px;
  background: #04214f;
  float: right;
  margin-top: 8px;
}
.headHovers {
  color: white;
}
.headHovers:hover {
  color: white;
  font-weight: bold;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
