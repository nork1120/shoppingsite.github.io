<template>
  <div class="home">
    <div class="wrap">
      <div class="text">
        <h1
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          你的故事由你選擇<br />從哪開始
        </h1>
        <div
          class="textbutt"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <h1>海釣行程</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="cont">
    <ContEnt></ContEnt>
  </div>
</template>

<script>
import ContEnt from "../components/ContEnt.vue";
import AOS from "aos";
export default {
  name: "HomeView",
  components: {
    ContEnt,
  },
  mounted() {
    AOS.init();
  },
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
  .wrap {
    width: 100%;
    height: 100vh;
    background: no-repeat center / contain;
    background-image: url("../imgoricons/pexels-lumn-294674.jpg");
    background-size: cover;
    position: absolute;
    z-index: 1;
    animation: enlarge 5s ease-in;
    .text {
      padding-right: 1rem;
      border-right: #eefdff solid 8px;
      width: 22%;
      margin-top: 35rem;
      margin-left: 8rem;
      h1 {
        color: #eefdff;
        font-size: 3rem;
        font-weight: 600;
      }
      .textbutt {
        border: #eefdff solid 1px;
        margin-top: 1rem;
        h1 {
          font-size: 1.5rem;
          padding: 0.5rem;
          text-align: center;
        }
      }
    }
  }
}
.cont {
  background: #8fa8af;
  height: 100%;
}
@keyframes enlarge {
  from{
      transform: scale(1.1);
  }
  to{
      transform: scale(1);
  }
}
</style>
