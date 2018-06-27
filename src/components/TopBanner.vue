<template>
  <div id="dotTopBanner">
    <a style="background: none" href="https://transportation.gov">
      <img 
        :src="dotLogo"        
        style="height: 35px; margin-left: 25px; margin-top: 8px;"
        alt="department of transportation logo" />
    </a>
  </div>
</template>

<script>
import dotLogo from "../assets/images/dot_logo.png";

export default {
  name: "TopBanner",
  data: function() {
    return {
      dotLogo: dotLogo
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dotTopBanner {
  width: 100%;
  height: 60px;
  background-color: #152350;
  padding: 5px 0 0 10px;
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
a {
  color: #42b983;
}
</style>
