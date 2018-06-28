<template>
  <div id="Hero">
    <div class="TitleText" style="padding-top: 40px;">
      <p class="searchHeaderText">EXPLORE OUR CODE</p>
      <h3 style="font-size: 18px; color: black; text-align: center; margin-top: 10px;">Department of Transportation Intelligent Transportation Systems Joint Program Office Code</h3>
      <h3 style="font-size: 18px; color: black; text-align: center; margin-bottom: 12px;">Welcome to the ITS JPO’s public access point for ITS code</h3>

      <p>The ITS JPO sponsors the collaborative development of open source code that state and local agencies, researchers, companies, and others can use to accelerate their testing and deployment of interoperable ITS technologies. Please explore some of our public code, and stay tuned as we expand our code collaboration activities.
        </p>

      <!--search bar-->
      <label for="mainSearch" class="hidden">Search</label>
      <input class="mainSearch" id="mainSearch" v-model="query" v-on:keyup.enter="search(query)" v-bind:placeholder="search_placeholder"><button class="searchButton" v-on:click="search(query)">SEARCH</button>
    </div> 

  </div>

</template>

<script>
import HeroBackground from "../assets/images/hero_background.png";

export default {
  name: "Hero",
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
  outline: 1px solid red;
}
#Hero {
  background-color: lightgray;
  background-image: url("../assets/images/hero_background.png");
  height: 400px;
}
</style>
