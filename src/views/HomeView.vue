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
          <button @click="goSea">海釣行程</button>
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
  methods: {
    goSea() {
      this.$router.push("/seafishing");
    },
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
    background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/runapi/1662544321242.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kPvlh4OLSUiBRaAqqrh9KER5b7%2B5PvuBvXGRgWviyRjAeJtYvPZH%2BIPGH7U7Xf0LJsbHgPYtnH%2BR3T2JuR5qP8Oxin9iHB%2Fn00hBfTIjnU1Ue9oGQfnzdAfYXFAXIJudUu7%2BoSTkvKcL3mN0RmoMxEjdBQpb4lT%2FzEkFLz%2FsCmoST9MVjSCXx6UjQIWS7bpA44OpFQjx0QEK%2FrCTekl3tLL7OOqfIniEP%2FV%2BHogBIWkIBIAdRgo898v5do8UOvVSZKkAul1iVwyGEIbKg6alBuLX4Qmp9Lz%2By9rUl74OXQC8a6uXOdtWs3b1N2fckMoPOj%2FPlCnndUXcLfd7j8IY7Q%3D%3D");
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
        transition: all 0.8s ease;
        margin-top: 1rem;
        border: 1px solid #fff;
        &:hover {
          border: 1px solid rgba(255, 255, 255, 0);
        }
        button {
          transition: all 0.8s ease;
          width: 100%;
          border: 1px solid #fff;
          font-size: 1.5rem;
          color: #eefdff;
          background-color: rgba(255, 255, 255, 0);
          padding: 0.5rem;
          font-weight: 900;
          &:focus {
            outline-color: transparent;
            box-shadow: hsl(210, 80%, 42%) 2px 2px 22px;
          }
          &:hover {
            position: relative;
            padding: 0.5rem;
            background: none;
            cursor: pointer;
            width: 100%;
            font-weight: 900;
            font-size: 1.5rem;
            color: #eefdff;
            box-shadow: hsla(210, 40%, 52%, 0.4) 2px 2px 22px;
            z-index: 0;
            background-color: hsl(210, 81%, 60%);
            border: 1px solid rgba(255, 255, 255, 0);
            overflow: hidden;
            &::before {
              content: "";
              pointer-events: none;
              opacity: 0.6;
              background: radial-gradient(
                  circle at 20% 35%,
                  transparent 0,
                  transparent 2px,
                  hsla(210, 50%, 85%, 1) 3px,
                  hsla(210, 50%, 85%, 1) 4px,
                  transparent 4px
                ),
                radial-gradient(
                  circle at 75% 44%,
                  transparent 0,
                  transparent 2px,
                  hsla(210, 50%, 85%, 1) 3px,
                  hsla(210, 50%, 85%, 1) 4px,
                  transparent 4px
                ),
                radial-gradient(
                  circle at 46% 52%,
                  transparent 0,
                  transparent 4px,
                  hsla(210, 50%, 85%, 1) 5px,
                  hsla(210, 50%, 85%, 1) 6px,
                  transparent 6px
                ),
                radial-gradient(
                  circle at 11% 62%,
                  transparent 0,
                  transparent 4px,
                  hsla(210, 50%, 85%, 1) 5px,
                  hsla(210, 50%, 85%, 1) 6px,
                  transparent 6px
                ),
                radial-gradient(
                  circle at 90% 57%,
                  transparent 0,
                  transparent 4px,
                  hsla(210, 50%, 85%, 1) 5px,
                  hsla(210, 50%, 85%, 1) 6px,
                  transparent 6px
                );

              width: 100%;
              height: 300%;
              top: 0;
              left: 0;
              position: absolute;
              animation: bubbles 3s linear infinite both;
            }
          }
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
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}
@keyframes bubbles {
  from {
    transform: translate();
  }
  to {
    transform: translate(0, -66.666%);
  }
}
@media screen and (max-width: 720px) {
  .home {
    .wrap {
      animation: none;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        padding: 0px;
        margin-left: 0px;
        width: 100%;
        border: none;
        margin-top: 0;
        h1 {
          font-size: 1.4rem;
          text-align: center;
        }
        .textbutt {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          button {
            width: 50%;
            position: relative;
            padding: 0.5rem;
            background: none;
            cursor: pointer;
            font-weight: 900;
            font-size: 1.5rem;
            color: #eefdff;
            box-shadow: hsla(210, 40%, 52%, 0.4) 2px 2px 22px;
            z-index: 0;
            background-color: hsl(210, 81%, 60%);
            border: 1px solid rgba(255, 255, 255, 0);
            overflow: hidden;
            &::before {
              content: "";
              pointer-events: none;
              opacity: 0.6;
              background: radial-gradient(
                  circle at 20% 35%,
                  transparent 0,
                  transparent 2px,
                  hsla(210, 50%, 85%, 1) 3px,
                  hsla(210, 50%, 85%, 1) 4px,
                  transparent 4px
                ),
                radial-gradient(
                  circle at 75% 44%,
                  transparent 0,
                  transparent 2px,
                  hsla(210, 50%, 85%, 1) 3px,
                  hsla(210, 50%, 85%, 1) 4px,
                  transparent 4px
                ),
                radial-gradient(
                  circle at 46% 52%,
                  transparent 0,
                  transparent 4px,
                  hsla(210, 50%, 85%, 1) 5px,
                  hsla(210, 50%, 85%, 1) 6px,
                  transparent 6px
                ),
                radial-gradient(
                  circle at 11% 62%,
                  transparent 0,
                  transparent 4px,
                  hsla(210, 50%, 85%, 1) 5px,
                  hsla(210, 50%, 85%, 1) 6px,
                  transparent 6px
                ),
                radial-gradient(
                  circle at 90% 57%,
                  transparent 0,
                  transparent 4px,
                  hsla(210, 50%, 85%, 1) 5px,
                  hsla(210, 50%, 85%, 1) 6px,
                  transparent 6px
                );

              width: 100%;
              height: 300%;
              top: 0;
              left: 0;
              position: absolute;
              animation: bubbles 3s linear infinite both;
            }
          }
        }
      }
    }
  }
}
</style>
