<template>
  <footer class="footer">

    <!--===================FOOTER LOGOS===================-->
    <ul class="logos-container">
      <li><img id="dot-logo" :src="dotLogo" alt="DOT logo"/></li>
      <li class="spacer">|</li>
      <li><img id="itsjpo-logo" :src="itsjpoLogo" alt="ITSJPO logo"/></li>
    </ul>

    <!--===================CONTACT US===================-->
    <div class="contact">
      <p class="questions">Questions? Contact Us</p>
      <p>
        <a :href="'mailto:' + contact_email">{{ contact_email }}</a>
      </p>
    </div>

  </footer>
</template>

<script>
import dotLogo from "../assets/images/dot_logo.png";
import itsjpoLogo from "../assets/images/ITS_JPO.png";

export default {
  name: "Footer",
  data: () => {
    return {
      dotLogo: dotLogo,
      itsjpoLogo: itsjpoLogo,
      contact_email: "data.itsjpo@dot.gov"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  /* outline: 1px solid red; */
}
.footer {
  background-color: #2e5b7a;
  width: 100%;
  height: 160px;
  text-align: center;
  padding-top: 20px;
  position: absolute;
  bottom: 0;
}
ul {
  display: table;
  table-layout: fixed;
}
li {
  display: table-cell;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 200px;
}
.spacer {
  display: table-cell;
  text-align: center;
  color: white;
  min-width: 20px;
}
.logos-container {
  display: inline;
  font-size: 50px;
  font-weight: 100px;
  text-align: center;
  padding: 20px;
}
#dot-logo {
  height: 30px;
}
#itsjpo-logo {
  height: 27px;
}
p {
  font-size: 12px;
  color: white;
  padding: 3px;
}
.questions {
  font-weight: bold;
  font-size: 12px;
}
a {
  color: white;
}
a:hover {
  font-weight: bold;
  cursor: pointer;
  color: white;
}
a:visited {
  color: white;
}
</style>
