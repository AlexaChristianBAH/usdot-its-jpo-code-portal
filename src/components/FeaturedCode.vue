<template>
  <div class="featured-code">

    <!--===================FEATURED CODE CARD===================-->
    <ul>
      <li>
          <h3><strong>{{ title }}</strong></h3> 
          <p>{{ description }}</p>
        </li>
      <li>
        <a :href="link" target="_blank">View Project</a>
      </li>
    </ul>

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
  height: 100%;
  min-height: 300px;
  width: 600px;
  margin: 1rem;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  vertical-align: top;
}
.featured-code:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
p {
  padding: 20px;
  text-align: left;
  color: gray;
}
h3 {
  color: #2c3e50;
  padding-top: 20px;
}
</style>
