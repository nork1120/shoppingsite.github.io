<template>
  <div class="car">
    <swiper
      :navigation="true"
      :slidesPerView="3"
      :spaceBetween="50"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="mySwiper"
    >
      <swiper-slide
        ><img
          src="../imgoricons/2020062315929030106563881.jpg"
          alt="" /></swiper-slide
      ><swiper-slide
        ><img
          src="../imgoricons/2020062315929030106563881.jpg"
          alt="" /></swiper-slide
      ><swiper-slide
        ><img
          src="../imgoricons/2020062315929030106563881.jpg"
          alt="" /></swiper-slide
      ><swiper-slide
        ><img
          src="../imgoricons/2020062315929030106563881.jpg"
          alt="" /></swiper-slide
      ><swiper-slide
        ><img
          src="../imgoricons/2020062315929030106563881.jpg"
          alt="" /></swiper-slide
      ><swiper-slide
        ><img
          src="../imgoricons/2020062315929030106563881.jpg"
          alt="" /></swiper-slide
      ><swiper-slide
        ><img
          src="../imgoricons/2020062315929030106563881.jpg"
          alt="" /></swiper-slide
      ><swiper-slide
        ><img
          src="../imgoricons/2020062315929030106563881.jpg"
          alt="" /></swiper-slide
      ><swiper-slide
        ><img src="../imgoricons/2020062315929030106563881.jpg" alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
};
</script>
<style scoped lang="scss">
.car {
  width: 100%;
  height: 30vh;
  background: rgba(0, 0, 0, 0.363);
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper {
    width: 70%;
    height: 70%;
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
