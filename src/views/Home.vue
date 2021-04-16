<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <Render></Render> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import Render from "@/components/Render.vue";
 
export default {
  name: "Home",
  components: {
    HelloWorld,
    // Render
  },
  data() {
    return {

    };
  },
};
</script>
