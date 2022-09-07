<template>
  <div class="body">
    <div class="content">
      <div class="contop"><h1>1.資料填寫</h1></div>
      <div class="contbottom">
        <div class="left">
          <div class="enter">
            <div class="label">
              <h1>姓名</h1>
              <p>*</p>
            </div>
            <div class="fill">
              <input type="text" v-model="commodityorder.name" />
            </div>
          </div>
          <div class="enter">
            <div class="label">
              <h1>電子信箱</h1>
              <p>*</p>
            </div>
            <div class="fill">
              <input type="text" v-model="commodityorder.mail" />
            </div>
          </div>
          <div class="enter">
            <div class="label">
              <h1>連絡電話</h1>
              <p>*</p>
            </div>
            <div class="fill">
              <input type="text" v-model="commodityorder.phone1" />
            </div>
          </div>
          <div class="enter menu">
            <div class="label">
              <h1>付款方式</h1>
              <p>*</p>
            </div>
            <div class="fill" v-if="tpe == '海釣行程'">
              <select name="付款方式" v-model="commodityorder.paymethod">
                <option hidden>請選擇</option>
                <option value="信用卡">信用卡</option>
                <option value="比特幣">比特幣</option>
              </select>
            </div>
            <div class="fill" v-else>
              <select name="付款方式" v-model="commodityorder.paymethod">
                <option hidden>請選擇</option>
                <option value="貨到付款">貨到付款</option>
                <option value="信用卡">信用卡</option>
                <option value="比特幣">比特幣</option>
              </select>
            </div>
          </div>
          <div class="enter menu">
            <div class="label">
              <h1>優惠卷</h1>
            </div>
            <div class="fill">
              <select name="優惠卷" v-model="commodityorder.newcoupon">
                <option
                  v-for="se in commodityorder.coupon"
                  :key="se.couponID"
                  :value="se"
                >
                  優惠{{ se.money }}元
                </option>
                <option value="">不使用</option>
              </select>
            </div>
          </div>
          <div
            class="paythodno"
            :class="{ paythod: commodityorder.paymethod == '信用卡' }"
          >
            <div class="pay an">
              <input
                type="text"
                v-model="Num1"
                maxlength="4"
                @input="Num1 = Num1.replace(/[^\d]/g, '')"
                placeholder="卡號"
              />-
              <input
                type="text"
                v-model="Num2"
                maxlength="4"
                @input="Num2 = Num2.replace(/[^\d]/g, '')"
                placeholder="卡號"
              />-
              <input
                type="text"
                v-model="Num3"
                maxlength="4"
                @input="Num3 = Num3.replace(/[^\d]/g, '')"
                placeholder="卡號"
              />-
              <input
                type="text"
                v-model="Num4"
                maxlength="4"
                @input="Num4 = Num4.replace(/[^\d]/g, '')"
                placeholder="卡號"
              />
            </div>
            <div class="date an">
              <h5>有效期限:</h5>
              <input
                type="text"
                v-model="moon"
                maxlength="2"
                @input="
                  moon = moon.replace(/[^\d]/g, '');
                  moon > 12 ? (moon = null) : (moon = moon);
                "
                placeholder="月份"
              />-
              <input
                type="text"
                v-model="year"
                maxlength="2"
                @input="year = year.replace(/[^\d]/g, '')"
                placeholder="年份"
              />
            </div>
            <div class="Safety an">
              <h5>背面後三碼:</h5>
              <input
                type="text"
                v-model="saf"
                maxlength="3"
                @input="saf = saf.replace(/[^\d]/g, '')"
                placeholder="號碼"
              />
            </div>
          </div>
          <div class="enter">
            <div class="label">
              <h1>地址</h1>
              <p>*</p>
            </div>
            <div class="fill">
              <input type="text" v-model="commodityorder.address" />
            </div>
          </div>
          <div class="enter">
            <div class="label">
              <h1>留言</h1>
            </div>
            <div class="fill">
              <textarea
                cols="35"
                rows="10"
                style="resize: none"
                v-model="commodityorder.message"
              ></textarea>
            </div>
            <div class="button">
              <button type="button" @click="send">確定送出</button>
            </div>
          </div>
        </div>
        <div class="rigth">
          <div class="rigth_titl">
            <div class="amount"><h1>訂單金額</h1></div>
            <div class="money">
              <h1>{{ commodityorder.toto }}</h1>
              <p>元</p>
            </div>
          </div>
          <div class="rigth_titl payment">
            <div class="amount method">
              <h1>付款方式:</h1>
              <h2>線上支付</h2>
            </div>
            <div class="icons">
              <img src="../imgoricons/icon/visa.svg" alt="" />
              <img src="../imgoricons/icon/maestro.svg" alt="" />
              <img src="../imgoricons/icon/paypal.svg" alt="" />
              <img src="../imgoricons/icon//bitcoin.svg" alt="" />
            </div>
          </div>
          <div class="statement">
            <div class="title">
              <h1>信用卡付款聲明書</h1>
            </div>
            <div class="text">
              <h1>
                1.請輸入以上信用卡資料、以便於向發卡行取得交易授權。
                完成交易授權只是發卡行確認信用卡的有效性及授權交易
                額度，您的信用卡信用額度在交易金額範圍內會被保留，
                但不代表您的付款已經完成，這筆交易也還不會出現在您
                的信用卡帳單中。 2.如果您所訂購的商品仍有存貨、且交
                易條件經確認無誤，我們才會向發卡行請款，只有當我們
                收到信用卡交易款項時，您的付款程序才算完成。 3.為確
                保網路交易安全，您同意本公司得就此筆交易向發卡銀行、
                收單行及持卡人核對是否屬實；您所填寫的身份證字號、
                出生年月日資料，亦將於核對完成後刪除。
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["mitter"],
  data() {
    return {
      commodityorder: {},
      pay: {},
      Num1: "",
      Num2: "",
      Num3: "",
      Num4: "",
      year: "",
      moon: "",
      saf: "",
      tpe: "",
    };
  },
  mounted() {
    scrollTo({ top: 0 });
    this.mitter.on("returncommodityorder", (e) => {
      this.commodityorder = e;
      this.commodityorder.toto = 0;
      this.commodityorder.newcoupon = "";
      this.commodityorder.paymethod = "請選擇";
      this.commodityorder.orders.forEach((e) => {
        this.commodityorder.toto += e.price;
      });
      this.commodityorder.message = "";
      this.tpe = e.orders[0].category;
    });
    this.mitter.emit("commodityorder");
    this.$emit("sty", 1);
  },
  methods: {
    send() {
      if (this.commodityorder.paymethod == "信用卡") {
        this.pay.Num = this.Num1 + this.Num2 + this.Num3 + this.Num4;
        this.pay.date = this.year + "年" + this.moon + "月";
        this.pay.sa = this.saf;
      }
      if (this.commodityorder.newcoupon != "") {
        this.commodityorder.toto =
          this.commodityorder.toto - this.commodityorder.newcoupon.money;
      }
      this.commodityorder = Object.assign(this.commodityorder, this.pay);
      this.mitter.emit("send", this.commodityorder);
      this.$emit("animat");
      setTimeout(() => {
        this.$router.push("order");
      }, 1000);
    },
  },
};
</script>
<style scoped lang="scss">
.body {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10rem 0 5rem 0;
  .content {
    width: 55%;
    margin-left: 5rem;
    .contop {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      h1 {
        font-size: 2.2rem;
        color: #eb2929;
      }
    }
    .contbottom {
      display: flex;
      width: 100%;
      .left {
        padding: 2rem 0 0 2rem;
        width: 40%;
        background: rgba(203, 203, 203, 0.3);
        .enter {
          width: 100%;
          margin-top: 1rem;
          .label {
            display: flex;
            h1 {
              font-size: 1.2rem;
              font-weight: 600;
            }
            p {
              color: rgb(255, 0, 0);
              font-weight: bold;
            }
          }
          .fill {
            width: 100%;
            margin-top: 0.5rem;
            input {
              width: 80%;
              font-size: 1.2rem;
              padding: 0.3rem 0 0.3rem 1rem;
            }
            select {
              width: 80%;
              font-size: 1.2rem;
              padding: 0.3rem 0 0.3rem 1rem;
              font-weight: 600;
            }
          }
          .button {
            width: 80%;
            display: flex;
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 3rem;
            button {
              color: rgba(5, 18, 68, 1);
              width: 50%;
              border: 2px solid rgba(5, 18, 68, 1);
              border-radius: 0.3em;
              font-size: 1.2rem;
              font-weight: 600;
              padding: 0.5rem 2rem 0.5rem 2rem;
              transition: all 0.2s ease-in-out;
              position: relative;
              overflow: hidden;

              &:before {
                content: "";
                background-color: rgba(255, 255, 255, 0.5);
                height: 100%;
                width: 3em;
                display: block;
                position: absolute;
                top: 0;
                left: -4.5em;
                transform: skewX(-45deg) translateX(0);
                transition: none;
              }
              &:hover {
                background-color: rgba(5, 18, 68, 1);
                color: #fff;
                &:before {
                  transform: skewX(-45deg) translateX(16.5em);
                  transition: all 0.5s ease-in-out;
                }
              }
            }
          }
        }
        .paythodno {
          display: none;
        }
        .paythod {
          display: flex !important;
          flex-direction: column;
          width: 80%;
          transition: all 0.5s ease;
          animation: imd 0.5s ease;
          animation-fill-mode: forwards;
          padding: 1rem 0rem 1rem 0;
          overflow: hidden;
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input {
            width: 20%;
            font-size: 1rem;
            padding: 0.3rem 0 0.3rem 0.3rem;
          }
          .an {
            margin-top: 1rem;
            display: flex;
            align-items: center;
            h5 {
              margin-right: 1rem;
            }
          }
        }
      }
      .rigth {
        width: 50%;
        padding: 1rem 1rem 1rem 3.5rem;
        .rigth_titl {
          width: 90%;
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: rgba(234, 155, 63, 1) solid 3px;
          .amount {
            font-size: 1.6rem;
            color: #7b7a7a;
            font-weight: 600;
          }
          .money {
            font-size: 1.6rem;
            display: flex;
            margin-right: 1rem;
            h1 {
              color: #459d43;
            }
          }
        }
        .payment {
          padding: 1rem 0rem 1rem 2.8rem;
          display: flex;
          flex-direction: column;
          .method {
            display: flex;
            font-size: 1.1rem;
            h2 {
              margin-left: 1rem;
              color: #ed3838;
            }
          }
          .icons {
            margin-top: 0.5rem;
            display: flex;
            img {
              margin-right: 1rem;
            }
          }
        }
        .statement {
          width: 90%;
          padding: 1rem;
          .title {
            padding: 0.5rem 0 1rem 1rem;
            font-size: 1.2rem;

            h1 {
              font-weight: 600;
            }
          }
          .text {
            h1 {
              line-height: 38px;
              color: #8d7d79;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
@keyframes imd {
  from {
    height: 0;
  }
  to {
    height: 18vh;
  }
}
@keyframes sheen {
  0% {
    transform: skewY(-45deg) translateX(0);
  }
  100% {
    transform: skewY(-45deg) translateX(12.5em);
  }
}
@media screen and (max-width: 720px) {
  .body {
    .content {
      width: 100%;
      margin-left: 0;
      .contbottom {
        flex-direction: column;
        .left {
          width: 100%;
          padding: 2rem 0 0 0;
          .enter {
            .label {
              justify-content: center;
            }
            .fill {
              display: flex;
              justify-content: center;
            }
          }
          .paythod {
            width: 100%;
            .pay{
              justify-content: center;
            }
          }
          .enter{
            .button{
              width: 100%;
            }
          }
        }
        .rigth{
          width: 100%;
          .payment{
            .icons{
              justify-content: center;
            }
          }
        }
      }
    }
  }
  @keyframes imd {
    from {
      height: 0;
    }
    to {
      height: 20vh;
    }
  }
}
</style>
