<template>
  <nav>
    <navbar></navbar>
    <h1>55555555555</h1>
  </nav>
  <router-view />
</template>


<script>
import mitt from "mitt";
import navbar from "./components/NavBar.vue";
export default {
   provide(){
        return {
            mitter:mitt()
        }
    },
  data() {
    return {
      
    };
  },
  created() {

  },
  components: {
    navbar,
  }
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
