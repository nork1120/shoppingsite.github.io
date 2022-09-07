<template>
  <div class="con">
    <h3>3.訂單完成</h3>
    <div class="combutton">
      <div class="comtitl">
        <h4>訂單</h4>
      </div>
      <div class="comtext">
        <div class="text name">
          <h4>姓名</h4>
          <h4>{{ noworder.name }}</h4>
        </div>
        <div class="text email">
          <h4>電子信箱</h4>
          <h4>{{ noworder.mail }}</h4>
        </div>
        <div class="text liaison">
          <h4>聯絡方式</h4>
          <h4>{{ noworder.phone1 }}</h4>
        </div>
        <div class="text payment">
          <h4>付款方式</h4>
          <h4>{{ noworder.paymethod }}</h4>
        </div>
        <div class="text money" v-if="noworder.newcoupon != ''">
          <h4>優惠卷</h4>
          <h4 class="green">優惠{{ money }}元</h4>
        </div>
        <div class="text money">
          <h4>金額</h4>
          <h4 class="green">${{ noworder.toto }}</h4>
        </div>
        <div class="text state">
          <h4>付款狀態</h4>
          <h4 class="red">以付款</h4>
        </div>
        <div class="text address">
          <h4>地址</h4>
          <h4>{{ noworder.address }}</h4>
        </div>
        <div class="message">
          <h4>留言</h4>
          <p>{{ noworder.message }}</p>
        </div>
      </div>
      <div class="button">
        <button type="button" @click="front">回首頁</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["mitter"],
  data() {
    return {
      noworder: {},
      money: "",
    };
  },
  mounted() {
    scrollTo({ top: 0 });
    this.mitter.on("returnConsumm", (e) => {
      this.noworder = e;
      this.money = e.newcoupon.money;
    });
    this.$emit("sty", 3);
    this.mitter.emit("Consumm");
  },
  methods: {
    front() {
      this.mitter.emit("finallyended");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="scss">
.con {
  width: 42%;
  margin-top: 8rem;
  margin-bottom: 2rem;
  h3 {
    width: 100%;
    text-align: center;
    font-size: 2.3rem;
    color: #eb2929;
  }
  .combutton {
    width: 100%;
    margin-top: 3rem;
    .comtitl {
      width: 100%;
      background: #feecec;
      padding: 1rem;
      h4 {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
    .text {
      display: flex;
      border-bottom: #a9a9a9 solid 1px;
      padding: 0.5rem;
      h4 {
        font-size: 1.2rem;
        font-weight: 600;
        width: 50%;
      }
      .green {
        color: #1aaf67;
      }
      .red {
        color: #1aaf67;
      }
    }
    .message {
      padding: 0.5rem;
      font-size: 1.2rem;
      font-weight: 600;
      p {
        margin-top: 1.6rem;
        color: #676767;
      }
    }
    .button {
      display: flex;
      justify-content: center;
      margin: 6rem 0 2rem 0;
      button {
        border: none;
        width: 70%;
        background: #67bbeb;
        color: rgb(0, 0, 0);
        padding: 1rem;
        font-size: 1.6rem;
        font-weight: 600;
        border-radius: 0.3rem;
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .con {
    width: 100%;
    .combutton {
      .text {
        h4 {
          width: 40%;
        }
      }
    }
  }
}
</style>
