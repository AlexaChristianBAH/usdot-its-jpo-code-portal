<template>
    <div :class="scrollPosition" v-on:scroll="handleScroll">
      <h1>EXPLORE OUR CODE</h1>
      <h3>Department of Transportation Intelligent Transportation Systems Joint Program Office Code</h3>
      <h3>Welcome to the ITS JPO’s public access point for ITS code</h3>
      <p>The ITS JPO sponsors the collaborative development of open source code that state and local agencies, researchers, companies, and others can use to accelerate their testing and deployment of interoperable ITS technologies. Please explore some of our public code, and stay tuned as we expand our code collaboration activities.</p>
    </div>
    <!--search bar-->
    <!-- <label for="mainSearch" class="hidden">Search</label>
    <input class="mainSearch" id="mainSearch" v-model="query" v-on:keyup.enter="search(query)" v-bind:placeholder="search_placeholder"><button class="searchButton" v-on:click="search(query)">SEARCH</button> -->
</template>

<script>
export default {
  name: "HeroCopy",
  data: () => {
    return {
      scrollPosition: "hero-copy"
    };
  },
  methods: {
    handleScroll() {
      window.scrollY > 58
        ? (this.scrollPosition = "hero-copy-scrolled")
        : (this.scrollPosition = "hero-copy");
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
h1 {
  font-size: 45px;
  font-weight: bold;
  color: white;
}
h3 {
  color: white;
  font-size: 18px;
  text-align: center;
}
.hero-copy {
  width: 800px;
  margin: 0 auto;
  padding-top: 40px;
}
.hero-copy-scrolled {
  width: 800px;
  padding-top: 80px;
  margin: 0 auto;
}
p {
  width: 600px;
  margin: 30px auto 0px auto;
}
</style>
