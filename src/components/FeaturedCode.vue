<template>
  <div class="featured-code">

    <!--===================FEATURED CODE CARD===================-->
    <a :href="link" target="_blank">
      <ul>
        <li>
          <p class="featured-code-title">{{ title }}</p> 
          <p class="featured-code-description">{{ description }}</p>
        </li>
      </ul>
    </a>

  </div>
</template>

<script>
export default {
  name: "FeaturedCode",
  props: {
    title: String,
    description: String,
    link: String
  },
  data: () => {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  /* outline: 1px solid red; */
}
.featured-code {
  background-color: white;
  height: 400px;
  min-height: 300px;
  width: 400px;
  margin: 2rem;
  /* border-radius: 4px; */
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  vertical-align: top;
}
.featured-code:hover {
  transform: scale(1.08);
  cursor: pointer;
}
.featured-code-description {
  padding: 20px;
  text-align: left;
}
.featured-code-title {
  color: #01893b;
  padding: 20px 5px 0 5px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
}
a {
  color: black;
}
</style>
