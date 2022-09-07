<template>
  <div class="body">
    <div class="go" :class="{ gogo: anim }">
      <div
        class="Transi"
        :class="{ newTransi: newanim, orde: ord, FinishOrde: finord }"
      >
        <div class="bac">
          <div class="bacc"><div class="baccc"></div></div>
        </div>
      </div>
    </div>
    <div class="schedule">
      <div
        class="sc"
        :class="{ Nowsc: snow == 1, schover: snow == 2 }"
        @click="goback"
      >
        <h1>填寫資料</h1>
        <h2>1.</h2>
      </div>
      <div class="sc" :class="{ Nowsc: snow == 2 }">
        <h1>訂單確認</h1>
        <h2>2.</h2>
      </div>
      <div class="sc" :class="{ Nowsc: snow == 3 }" @click="ami">
        <h1>付款完成</h1>
        <h2>3.</h2>
      </div>
    </div>
    <div class="content">
      <router-view
        @sty="nowstyle"
        @animat="ami"
        @sta="goord"
        @Fini="finii"
      ></router-view>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["mitter"],
  data() {
    return {
      snow: "0",
      anim: false,
      newanim: false,
      ord: false,
      finord: false,
    };
  },
  Created() {},
  mounted() {
    this.anim = true;
    setTimeout(() => {
      this.anim = false;
    }, 2000);
  },
  methods: {
    nowstyle(e) {
      this.snow = e;
    },
    goback() {
      if (this.snow == 2) {
        this.$router.go(-1);
      }
    },
    ami() {
      this.anim = true;
      this.newanim = true;
      setTimeout(() => {
        this.anim = false;
        this.newanim = false;
      }, 2000);
    },
    goord() {
      this.anim = true;
      this.ord = true;
    },
    finii() {
      this.ord = false;
      this.finord = true;
      setTimeout(() => {
        this.anim = false;
      }, 1000);
    },
  },
};
</script>
<style scoped lang="scss">
.body {
  .go {
    display: none;
    .Transi {
      overflow: hidden;
      background-color: rgb(49, 171, 223);
      background-image: url("../imgoricons/7668b05273a2d60a6083fb0073c39831.gif");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      width: 100vw;
      height: 100vh;
      position: fixed;
      animation: tra 1s linear;
      animation-fill-mode: forwards;
      z-index: 2;
      top: 0;
      .bac {
        width: 15vw;
        height: 30vh;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 3;
        .bacc {
          width: 15%;
          height: 120%;
          position: absolute;
          z-index: 3;
          right: 10px;
          background-color: #fff;
          transform: rotate(40deg);
          .baccc {
            width: 100%;
            height: 160%;
            position: absolute;
            z-index: 3;
            right: 100px;
            top: -100px;
            background-color: #fff;
          }
        }
      }
    }
    .newTransi {
      animation: newtra 2s linear !important;
    }
    .orde {
      animation: orde 1s linear !important;
    }
    .FinishOrde {
      animation: finorde 1s linear !important;
    }
  }
  .gogo {
    display: flex !important;
  }
  .schedule {
    position: fixed;
    top: 36vh;
    .sc {
      transition: all 0.3s ease;
      margin-top: 5rem;
      width: 8vw;
      height: 5vh;
      background: #1d5575;
      border-radius: 0px 2rem 3px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        transition: all 0.3s ease;
        color: rgb(255, 255, 255);
        font-size: 1.2rem;
      }
      h2 {
        transition: all 0.3s ease;
        color: rgb(255, 255, 255);
        font-size: 1.4rem;
      }
      padding: 1rem;
      &:first-child {
        margin-top: 0;
      }
    }
    .Nowsc {
      border-radius: 0px 2.5rem 3px 0px !important;
      h1 {
        font-size: 1.8rem !important;
      }
      h2 {
        font-size: 1.8rem !important;
      }
      width: 11vw !important;
      height: 6vh !important;
      background: #0085ff !important;
    }
    .schover {
      &:hover {
        border-radius: 0px 2.5rem 3px 0px;
        cursor: pointer;
        h1 {
          font-size: 1.8rem;
        }
        h2 {
          font-size: 1.8rem;
        }
        width: 11vw;
        height: 6vh;
        background: #0085ff;
      }
    }
  }
  .content {
    display: flex;
    justify-content: center;
  }
}
@keyframes tra {
  from {
    left: 0;
  }
  to {
    left: 100vw;
  }
}
@keyframes newtra {
  from {
    left: -100vw;
  }
  to {
    left: 100vw;
  }
}
@keyframes orde {
  from {
    left: -100vw;
  }
  to {
    left: 0;
  }
}
@keyframes finorde {
  from {
    left: 0;
  }
  to {
    left: -100vw;
  }
}
@media screen and (max-width: 720px) {
  .body {
    .schedule {
      display: none;
    }
  }
}
</style>
