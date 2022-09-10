<template>
  <div class="cont">
    <div class="titl">
      <h1>2.訂單確認</h1>
    </div>
    <div class="main">
      <div class="compendium">
        <div class="comtitl">
          <h1>商品</h1>
        </div>
        <div class="comtext" v-for="se in ConfirmOrder.orders" :key="se.id">
          <div class="img">
            <img :src="se.imageUrl" />
          </div>
          <div class="text">
            <div class="left">
              <div class="tltop">
                <h1>{{ se.title }}</h1>
              </div>
              <div class="tlbottom">
                <p v-if="se.fishingQty > 0">
                  釣竿租借 {{ se.fishingQty }}隻${{ se.fishingQty * 100 }}
                </p>
                <p v-if="se.refrigeratorQty > 0">
                  冰箱租借 {{ se.refrigeratorQty }}個${{
                    se.refrigeratorQty * 50
                  }}
                </p>
                <p v-if="se.stagepropertyQty > 0">
                  漁具租借 {{ se.stagepropertyQty }}組${{
                    se.stagepropertyQty * 100
                  }}
                </p>
              </div>
            </div>
            <div class="rigth">
              <div class="quantity">
                <h1>數量</h1>
                <p>{{ se.people }}</p>
              </div>
              <div class="amount">
                <h1>{{ se.price }}</h1>
                <p>元</p>
              </div>
            </div>
          </div>
        </div>
        <div class="all">
          <div class="all_1">
            <b>總金額</b>
          </div>
          <div class="allnewcoupon" v-if="ConfirmOrder.newcoupon != ''">
            <h5>優惠{{ necou }}元</h5>
          </div>
          <div class="all_2">
            <h6>{{ ConfirmOrder.toto }}</h6>
            <p>元</p>
          </div>
        </div>
      </div>
      <div class="combutton">
        <div class="comtitl">
          <h4>訂單</h4>
        </div>
        <div class="comtext">
          <div class="text name">
            <h4>姓名</h4>
            <h4>{{ ConfirmOrder.name }}</h4>
          </div>
          <div class="text email">
            <h4>電子信箱</h4>
            <h4>{{ ConfirmOrder.mail }}</h4>
          </div>
          <div class="text liaison">
            <h4>聯絡方式</h4>
            <h4>{{ ConfirmOrder.phone1 }}</h4>
          </div>
          <div class="text payment">
            <h4>付款方式</h4>
            <h4>{{ ConfirmOrder.paymethod }}</h4>
          </div>
          <div class="text money" v-if="ConfirmOrder.newcoupon != ''">
            <h4>優惠卷</h4>
            <h4 class="green">優惠{{ necou }}元</h4>
          </div>
          <div class="text money">
            <h4>金額</h4>
            <h4 class="green">${{ ConfirmOrder.toto }}</h4>
          </div>
          <div class="text state">
            <h4>付款狀態</h4>
            <h4 class="red">未付款</h4>
          </div>
          <div class="text address">
            <h4>地址</h4>
            <h4>{{ ConfirmOrder.address }}</h4>
          </div>
          <div class="message">
            <h4>留言</h4>
            <p>{{ ConfirmOrder.message }}</p>
          </div>
        </div>
        <div class="button">
          <button type="button" @click="GenerateOrders">確定付款</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
export default {
  inject: ["mitter"],
  data() {
    return {
      ConfirmOrder: {},
      newuser: {},
      uuii: "",
      cou: {},
      necou: "",
    };
  },
  mounted() {
    scrollTo({ top: 0 });
    this.mitter.on("returnGenOrd", (e) => {
      this.newuser = e;
      this.newuser.journey = {};
      if (this.newuser.Order == undefined) {
        this.newuser.Order = [];
      }
      if (this.newuser.coupon == undefined) {
        this.newuser.coupon = [];
      }
    });
    this.mitter.on("returnConfirmOrder", (e) => {
      this.ConfirmOrder = e;
      this.necou = this.ConfirmOrder.newcoupon.money;
    });
    this.mitter.emit("ConfirmOrder");
    this.mitter.emit("GenOrd");
    this.$emit("sty", 2);
  },
  methods: {
    GenerateOrders() {
      this.uuii = uuidv4();
      this.uuii = this.uuii.slice(0, 20);
      if (this.necou != undefined) {
        let arr = [];
        this.ConfirmOrder.coupon.forEach((e) => {
          if (e.couponID != this.ConfirmOrder.newcoupon.couponID) {
            arr.push(e);
          }
        });
        this.ConfirmOrder.coupon = JSON.parse(JSON.stringify(arr));
      }
      if (this.ConfirmOrder.coupon != undefined) {
        this.newuser.coupon = JSON.parse(
          JSON.stringify(this.ConfirmOrder.coupon)
        );
      }
      console.log(222222);
      if (this.ConfirmOrder.orders[0].category == "海釣行程") {
        this.cou.money = Math.ceil(Math.random() * 10) * 10 + 100;
        this.cou.couponID = uuidv4();
        this.cou.name = this.ConfirmOrder.name;
        this.newuser.coupon.push(this.cou);
      }
      console.log(111111);
      this.newuser.Order.push({
        orders: this.ConfirmOrder.orders,
        paymethod: this.ConfirmOrder.paymethod,
        message: this.ConfirmOrder.message,
        toto: this.ConfirmOrder.toto,
        name: this.ConfirmOrder.name,
        mail: this.ConfirmOrder.mail,
        address: this.ConfirmOrder.address,
        phone1: this.ConfirmOrder.phone1,
        uuid: this.uuii,
      });
      console.log(3333333);
      let len = this.newuser.Order.length;
      if (this.ConfirmOrder.orders[0].category == "海釣商品") {
        this.newuser.shoppingcart = [];
      }
      this.$emit("sta");
      console.log(4444444);
      const api = `${process.env.VUE_APP_API}api/testrunapi/admin/product/${this.newuser.id}`;
      this.$http.put(api, { data: this.newuser }).then((e) => {
        console.log(e);
        this.$emit("Fini");
        this.mitter.emit("again", this.cou);
        this.mitter.emit("wwuse", this.ConfirmOrder.newcoupon);
        this.mitter.emit("Backstage", this.newuser.Order[len - 1]);
        this.$router.push("/confirm/consummation");
      });
      console.log(555555);
    },
  },
};
</script>
<style scoped lang="scss">
.cont {
  width: 42%;
  .titl {
    margin-top: 8rem;
    margin-bottom: 2rem;
    width: 100%;
    h1 {
      text-align: center;
      font-size: 2.3rem;
      color: #eb2929;
    }
  }
  .main {
    width: 100%;
    .compendium {
      width: 100%;
      .comtitl {
        width: 100%;
        padding: 1rem;
        background: #feecec;
        h1 {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
      .comtext {
        border-bottom: black solid 1px;
        width: 100%;
        display: flex;
        .img {
          width: 35%;
          img {
            width: 100%;
            object-fit: cover;
          }
        }
        .text {
          width: 65%;
          display: flex;
          .left {
            width: 50%;
            padding: 0.6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h1 {
              font-size: 1.6rem;
              font-weight: 900;
              color: #d43030;
            }
            p {
              margin-top: 1rem;
              font-weight: 600;
              color: #000;
            }
          }
          .rigth {
            width: 50%;
            padding: 0.6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-weight: 600;
            .quantity {
              width: 100%;
              display: flex;
              font-size: 1.2rem;
              h1 {
                width: 100%;
                text-align: end;
              }
              p {
                color: #ed1e1e;
              }
            }
            .amount {
              width: 100%;
              display: flex;
              margin-bottom: 1rem;
              h1 {
                font-size: 1.2rem;
                width: 100%;
                text-align: end;
                color: #1aaf67;
              }
              p {
                font-size: 1.2rem;
              }
            }
          }
        }
      }
      .all {
        display: flex;
        font-size: 1.8rem;
        font-weight: 600;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        b {
          color: #d43030;
        }
        .allnewcoupon {
          background-color: #d86666;
          padding: 0.5rem;
          h5 {
            font-size: 1.2rem;
            color: #fff;
          }
        }
        .all_2 {
          display: flex;
          h6 {
            color: #1aaf67;
          }
        }
      }
    }
    .combutton {
      width: 100%;
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
          color: #d31e1e;
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
        margin: 2rem 0 2rem 0;
        button {
          border: none;
          background: #249e30;
          color: rgb(255, 255, 255);
          padding: 0.5rem;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 0.3rem;
        }
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .cont {
    width: 100%;
    .main {
      .combutton {
        .text {
          h4 {
            width: 40%;
          }
        }
      }
    }
  }
}
</style>
