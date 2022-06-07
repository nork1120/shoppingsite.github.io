<template>
  <nav>
    <navbar></navbar>
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
