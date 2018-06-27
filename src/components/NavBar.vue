<template>
  <div id="NavBar">

    <div class="navigation-bar">
      <div class="columns">
        <!--===================NAVBAR GENERAL LINKS===================-->
        <div class="column">
            <a class="headHovers" href="https://its.dot.gov/index.htm">ITS JPO HOME</a>
        </div>
        <!--===================NAVBAR GITHUB LINK===================-->
        <div class="column">
          <a class="headHovers" href="/https://github.com/AlexaChristianBAH" style="width: 225px; float: right; text-align: right;">VIEW THIS PROJECT ON GITHUB</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NavBar",
  data: () => {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  outline: 1px solid red;
}
.navigation-bar {
  background: rgba(35, 91, 122, 0.6);
  height: 40px;
  line-height: 40px;
  padding: 0px 38px 0 38px;
  margin-bottom: 50px;
  text-align: left;
}
.headHovers {
  color: white;
  font-size: 13px;
  width: 70px;
}
.headHovers:hover {
  color: white;
  font-weight: bold;
}
</style>
