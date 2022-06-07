<template>
  <router-view />
  <toastall></toastall>
</template>

<script>
import toastall from "../components/ToastsAll.vue";
export default {
  inject: ["mitter"],
  data() {
    return {
      ss: process.env.VUE_APP_TOKE,
    };
  },components:{
toastall
  },
  created() {
    var token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hihi\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.defaults.headers.common["Authorization"] = token;
    //  this.$http.defaults.headers.Authorization = token;
    this.$http.post(api).then((e) => {
      if (e.data.success == true) {
        this.mitter.emit("test", {
          style: "rgb(0, 187, 93)",
          success: "登入成功",
        });
      }

      if (e.data.success == false) {
        this.$router.push("/Login");
      }
    });
  },
};
</script>