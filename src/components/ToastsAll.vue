<template>
  <div class="toast-container position-absolute top-0 end-0 p-3">
    <toastOne v-for="tex in toast" :key="tex" :ssg = "tex"></toastOne>
  </div>
</template>

<script>
import toastOne from "./ToastsOne.vue";
export default {
  components: {
    toastOne,
  },
  data() {
    return {
      toast: [],
    };
  },
  inject: ["mitter"],
  mounted() {
    this.mitter.on("test", (e) => {
        const {style,success,message} = e
      this.toast.push({style,success,message});
    });
  },
};
</script>
