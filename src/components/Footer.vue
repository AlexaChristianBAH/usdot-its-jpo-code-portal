<template>
  <div id="footer" style="padding-top: 20px;">
    <div style="display:inline; font-size:50px; font-weight:100; text-align:center">
      <img :src="dotLogo" alt="DOT logo"/>|<img :src="ITSJPO" alt="ITS JPO logo"/>
      <p style="font-weight: bold;">Questions? Contact Us</p>
      <p id="contactEmail">{{contact_email}}</p>
    </div>
  </div>
</template>

<script>
import dotLogo from "../assets/images/dot_logo.png";
import ITSJPO from "../assets/images/ITS_JPO.png";

export default {
  name: "Footer",
  data: () => {
    return {
      dotLogo: dotLogo,
      ITSJPO: ITSJPO
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  outline: 1px solid red;
}
#footer {
  background-color: #2d5776;
}
p {
  font-size: 12px;
}
</style>
