<template>
  <div class="content">
    <div class="ss">
      <div class="right">
        <div class="schedule">
          <input class="sc" type="button" value="電視牆" />
          <input class="sc" type="button" value="海釣行程" />
          <input class="sc" type="button" value="海釣商品" />
          <input class="sc" type="button" value="訂單" />
          <input class="sc" type="button" value="優惠卷" />
        </div>
      </div>
      <div class="left">
        <router-view />
      </div>
    </div>
    <toastall></toastall>
  </div>
</template>
<script>
import toastall from "../components/ToastsAll.vue";
export default {
  inject: ["mitter"],
  data() {
    return {
      ss: process.env.VUE_APP_TOKE,
    };
  },
  components: {
    toastall,
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
<style scoped lang="scss">
.content {
  .ss {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 2rem 2rem 0;
    margin-top: 5rem;
    .right {
      width: 15%;
      margin-top: 2rem;
      .schedule {
        display: flex;
        flex-direction: column;
        .sc {
          transition: all 0.1s ease-in;
          background: #1d5575;
          border: none;
          margin-top: 5rem;
          width: 55%;
          padding: 1rem;
          border-radius: 0px 2rem 3px 0px;
          color: rgb(255, 255, 255);
          font-size: 1.2rem;
          &:nth-child(1) {
            width: 70%;
            font-size: 1.5rem;
            background: #0085ff;
          }
          &:nth-child(5) {
            margin-bottom: 5rem;
          }
          &:hover {
            width: 70%;
            font-size: 1.5rem;
            background: #0085ff;
          }
        }
      }
    }
    .left {
      width: 80%;
      margin-right: 2rem;
    }
  }
}
</style>
