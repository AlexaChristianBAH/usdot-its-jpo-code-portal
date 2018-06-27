<template>
  <div id="dotTopBanner">
    <div class="columns">

      <!--===================TOP BANNER DOT LOGO===================-->
      <div class="column">
        <a style="background: none" href="https://transportation.gov">
          <img id="dotLogo" :src="dotLogo" alt="department of transportation logo" />
        </a>
      </div>

      <!--===================TOP BANNER NAV LINKS===================-->
      <div class="column">
        <div id="dotTopLinks">
          <a class="headHovers" href="https://www.transportation.gov/mission/about-us">ABOUT DOT&emsp;&nbsp;|</a> 
          <a class="headHovers" href="https://www.transportation.gov/briefingroom">&emsp;&nbsp;BRIEFING ROOM&emsp;&nbsp;|</a>
          <a class="headHovers margin-right-30" href="https://www.transportation.gov/our-activities">&emsp;&nbsp;OUR ACTIVITIES</a>
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
  background: #04214f;
  line-height: 30px;
  float: right;
  margin-top: 8px;
  vertical-align: top;
}
.headHovers {
  color: white;
  font-size: 11px;
  width: 70px;
}
.headHovers:hover {
  color: white;
  font-weight: bold;
}
.margin-right-30 {
  margin-right: 30px;
}
#dotLogo {
  height: 35px;
  margin-left: 25px;
  margin-top: 8px;
  float: left;
}
</style>
