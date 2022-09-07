<template>
  <div class="body">
    <div class="go" :class="{ gogo: anim }">
      <div class="Transi">
        <div class="bac">
          <div class="bacc"><div class="baccc"></div></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="contop">
        <h1>確定行程</h1>
      </div>
      <div class="conbottom">
        <div class="conbottom_left">
          <div class="select">
            <div class="select_left">
              <div class="img">
                <img :src="commo.journey.imageUrl" alt="" />
              </div>
              <div class="preview">
                <div class="preview_left">
                  <h1 class="ti">{{ commo.journey.title }}</h1>
                  <div class="quantity_box">
                    <div class="quantity">
                      <h1>旅客人數</h1>
                      <input
                        type="text"
                        v-model="commo.journey.people"
                        size="1"
                        @input="verifype()"
                      />
                      <h1>人</h1>
                    </div>
                  </div>
                </div>
                <div class="preview_rigth">
                  <div class="previewbox">
                    <h1>TWD ${{ moe }}</h1>
                    <div class="previewvutton">
                      <button
                        type="button"
                        :disabled="commo.journey.people > 0 ? false : true"
                        @click="Sure()"
                      >
                        確定預約
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="select_rigth">
              <h1 class="ti">設備租借</h1>
              <div class="fishing">
                <h1>釣竿:單支100$</h1>
                <div class="select">
                  <label
                    ><input
                      @click="commo.journey.fishingQty = 0"
                      type="radio"
                      v-model="commo.journey.fishing"
                      :value="1"
                    />
                    <h1>無</h1>
                  </label>
                  <label
                    class="la2"
                    @click="
                      commo.journey.fishingQty == 0
                        ? (commo.journey.fishingQty = 1)
                        : (commo.journey.fishingQty = commo.journey.fishingQty)
                    "
                    ><input
                      type="radio"
                      v-model="commo.journey.fishing"
                      :value="2"
                    />
                    <h1>租借</h1>
                    <input
                      @input="verifyfis"
                      class="indivual"
                      type="number"
                      :disabled="commo.journey.fishing == 1"
                      v-model="commo.journey.fishingQty"
                    />
                    <h1>支</h1></label
                  >
                </div>
              </div>
              <div class="fishing fishing1">
                <h1>冰箱:一個50$</h1>
                <div class="select">
                  <label
                    ><input
                      @click="commo.journey.refrigeratorQty = 0"
                      type="radio"
                      v-model="commo.journey.refrigerator"
                      :value="1"
                    />
                    <h1>無</h1></label
                  >
                  <label
                    class="la2"
                    @click="
                      commo.journey.refrigeratorQty == 0
                        ? (commo.journey.refrigeratorQty = 1)
                        : (commo.journey.refrigeratorQty =
                            commo.journey.refrigeratorQty)
                    "
                    ><input
                      type="radio"
                      v-model="commo.journey.refrigerator"
                      :value="2"
                    />
                    <h1>租借</h1>
                    <input
                      @input="verifyre"
                      class="indivual"
                      type="number"
                      :disabled="commo.journey.refrigerator == 1"
                      v-model="commo.journey.refrigeratorQty"
                    />
                    <h1>個</h1></label
                  >
                </div>
              </div>
              <div class="fishing fishing1">
                <h1>漁具:一組100$</h1>
                <div class="select">
                  <label @click="commo.journey.stagepropertyQty = 0"
                    ><input
                      type="radio"
                      v-model="commo.journey.stageproperty"
                      :value="1"
                    />
                    <h1>無</h1></label
                  >
                  <label
                    class="la2"
                    @click="
                      commo.journey.stagepropertyQty == 0
                        ? (commo.journey.stagepropertyQty = 1)
                        : (commo.journey.stagepropertyQty =
                            commo.journey.stagepropertyQty)
                    "
                    ><input
                      type="radio"
                      v-model="commo.journey.stageproperty"
                      :value="2"
                    />
                    <h1>租借</h1>
                    <input
                      @input="verifyop"
                      class="indivual"
                      type="number"
                      :disabled="commo.journey.stageproperty == 1"
                      v-model="commo.journey.stagepropertyQty"
                    />
                    <h1>組</h1></label
                  >
                </div>
              </div>
              <p>漁具包含:釣餌,魚鉤,線材,網子與 一些必備物品</p>
            </div>
          </div>
          <div class="notice">
            <h1>
              為了您海上之旅的安全和愉快，在乘艇出海前，請仔細閱讀以下內容並嚴格遵守。
            </h1>
            <p>
              1.禁止在碼頭和船艇上吸菸;<br />2.凡患有心臟病、高血壓、糖尿病、哮喘病、傳染病、肌肉麻痹症、骨質疏鬆症等影響乘艇安全的疾病及孕婦和嚴重暈船者請不要乘艇，如果遊客隱瞞上述情況，登艇出航發生意外的，後果自負;
              <br />3.遊客必須在工作人員的引導下排隊登艇，在觀海平台和浮動碼頭上應注意安全，以免失足落海，上下引橋台階時要小心;<br />4.六十周歲以上老年人和十周歲以下兒童應由成年人陪同乘艇，出海前還須徵得船長的批准;
              <br />5.上船後請細聽船長或其他船上工作人員的講解說明，包括行程、海況、安全設施的使用方法等，並自覺穿好救生衣;
              <br />6.請自行保管好自身攜帶的手機、相機、攝影機等貴重物品，以免丟失或掉入水中;
              <br />7.在航行過程中，遊客應坐穩抓牢並穿救生衣，同時應服從船長或工作人員指揮，如有不適，應及時向船長報告;
              <br />8.快艇行駛中，嚴禁打傘、拍照、攝影等影響快艇和個人安全的行為;
            </p>
          </div>
        </div>
        <div class="conbottom_rigth">
          <div class="privacy">
            <div class="titl"><h1>隱私權聲明</h1></div>
            <div class="text">
              <h1>
                財團法人資訊工業策進會（以下簡稱本會）尊重並保護您的隱私權。為了幫助您瞭解本會如何蒐集、處理及利用您的個人資料，請務必詳細閱讀本會的「隱私權聲明」。<br />壹、適用範圍<br />
                一、本會「隱私權聲明」適用於您與本會洽辦業務、參與各項活動（如報名研討會/課程、加入網站會員、訂閱電子報等）或透過電話、傳真或本會網站意見信箱提出詢問或建議時（包括本會官網及本會各業務部門網站），所涉及之個人資料蒐集、處理與利用行為。
                二、凡經由本會網站連結至第三方獨立管理、經營之網站，有關個人資料的保護，適用第三方或各該網站的隱私權政策，本會不負任何連帶責任。<br />貳、個人資料之蒐集、處理及利用<br />
                一、當您與本會洽辦業務或參與本會各項活動，我們將視業務或活動性質請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本會不會將個人資料用於其他用途。
                二、如果您使用電話、傳真或本會網站意見信箱與本會聯繫時，請您提供正確的電話、傳真號碼或電子信箱地址，作為回覆來詢事項之用。<br />
                三、您的個人資料在處理過程中，本會將遵守相關之流程及內部作業規範，並依據資訊安全之要求，進行必要之人員控管。<br />
                四、單純瀏覽本會網站及下載檔案之行為，本會不會蒐集任何與個人身分有關之資訊。
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
      commo: {},
      anim: false,
      moe: "",
    };
  },
  methods: {
    verifype() {
      if (this.commo.journey.people < 0) {
        this.commo.journey.people = 0;
      } else if (
        Math.floor(this.commo.journey.people) - this.commo.journey.people <
        0
      ) {
        this.commo.journey.people = Math.floor(this.commo.journey.people);
      }
    },
    verifyfis() {
      if (this.commo.journey.fishingQty < 0) {
        this.commo.journey.fishingQty = 0;
      } else if (
        Math.floor(this.commo.journey.fishingQty) -
          this.commo.journey.fishingQty <
        0
      ) {
        this.commo.journey.fishingQty = Math.floor(
          this.commo.journey.fishingQty
        );
      }
    },
    verifyre() {
      if (this.commo.journey.refrigeratorQty < 0) {
        this.commo.journey.refrigeratorQty = 0;
      } else if (
        Math.floor(this.commo.journey.refrigeratorQty) -
          this.commo.journey.refrigeratorQty <
        0
      ) {
        this.commo.journey.refrigeratorQty = Math.floor(
          this.commo.journey.refrigeratorQty
        );
      }
    },
    verifyop() {
      if (this.commo.journey.stagepropertyQty < 0) {
        this.commo.journey.stagepropertyQty = 0;
      } else if (
        Math.floor(this.commo.journey.stagepropertyQty) -
          this.commo.journey.stagepropertyQty <
        0
      ) {
        this.commo.journey.stagepropertyQty = Math.floor(
          this.commo.journey.stagepropertyQty
        );
      }
    },
    Sure() {
      this.commo.journey.price =
        this.commo.journey.price * this.commo.journey.people +
        this.commo.journey.fishingQty * 100 +
        this.commo.journey.refrigeratorQty * 50 +
        this.commo.journey.stagepropertyQty * 100;
      let orderss = [];
      orderss.push(this.commo.journey);
      this.commo.orders = orderss;
      this.mitter.emit("route", this.commo);
      this.anim = true;
      setTimeout(() => {
        this.$router.push("/confirm/checkout");
      }, 1500);
    },
  },
  mounted() {
    this.moe = JSON.parse(JSON.stringify(this.commo.journey.price));
  },
  created() {
    this.mitter.on("return", (e) => {
      this.commo = JSON.parse(JSON.stringify(e));
      this.commo.journey.newprice = 0;
    });
    this.mitter.emit("change", 0);
    this.mitter.emit("enter");
    this.anim = false;
  },
};
</script>
<style scoped lang="scss">
.body {
  display: flex;
  justify-content: center;
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
  }
  .gogo {
    display: flex !important;
  }
  .content {
    margin-top: 10rem;
    margin-bottom: 3rem;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .contop {
      margin-bottom: 3rem;
      h1 {
        font-size: 2rem;
        color: #eb2929;
      }
    }
    .conbottom {
      display: flex;
      .conbottom_left {
        width: 60%;
        .select {
          display: flex;
          .select_left {
            width: 60%;
            margin-right: 2rem;
            .img {
              width: 100%;
              img {
                box-shadow: 1px 2px 10px black;
                width: 100%;
                object-fit: cover;
                height: 26vh;
              }
            }
            .preview {
              margin-top: 2rem;
              display: flex;
              justify-content: space-between;
              .preview_left {
                width: 50%;
                .ti {
                  font-size: 1.8rem;
                  color: #d43030;
                  margin-bottom: 1rem;
                  font-weight: 600;
                }
                .quantity_box {
                  display: flex;
                  width: 100%;
                  .quantity {
                    width: 78%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: black solid 1px;
                    padding: 0.3rem;
                    input {
                      margin: 0 0.5rem 0 0.5rem;
                      width: 2rem;
                      border: none;
                      outline: none;
                    }
                  }
                }
              }
              .preview_rigth {
                width: 50%;
                display: flex;
                flex-direction: column-reverse;
                .previewbox {
                  width: 100%;
                  h1 {
                    font-size: 2.2rem;
                    font-weight: 900;
                    color: #2ba86c;
                    margin-bottom: 1rem;
                    text-align: end;
                  }
                  .previewvutton {
                    width: 100%;
                    text-align: end;
                    button {
                      padding: 0.8rem 3.4rem 0.8rem 3.4rem;
                      border: 2px solid #e53e3e;
                      border-radius: 0.3em;
                      background-color: #fff;
                      transition: all 0.2s ease-in-out;
                      color: #e53e3e;
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
                        background-color: #e53e3e;
                        color: #fff;

                        &:before {
                          transform: skewX(-45deg) translateX(16.5em);
                          transition: all 0.5s ease-in-out;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .select_rigth {
            width: 40%;
            border-left: #0d9ecc solid 4px;
            padding-left: 2.6rem;
            h1 {
              text-indent: 7px;
            }
            .ti {
              font-size: 1.6rem;
              color: #4d9cbe;
            }
            .fishing {
              margin-top: 1rem;
              margin-left: 0.6rem;
              h1 {
                font-size: 1.2rem;
                font-weight: 600;
              }
              .select {
                display: flex;
                margin-top: 0.6rem;
                label {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-left: 0.4rem;
                  input[type="number"]::-webkit-outer-spin-button,
                  input[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                  .indivual {
                    width: 2.6rem;
                    margin: 0 0.3rem 0 0.3rem;
                  }
                }
                .la2 {
                  margin-left: 2.2rem;
                }
              }
            }
            .fishing1 {
              margin-top: 2.5rem;
            }
            p {
              margin-top: 0.6rem;
              margin-left: 0.6rem;
              padding: 0.8rem;
              font-size: 0.8rem;
              line-height: 1.2rem;
              color: #a4a4a4;
            }
          }
        }
        .notice {
          margin-top: 2.6rem;
          h1 {
            font-size: 1.4rem;
            font-weight: 600;
            color: #a08809;
          }
          p {
            line-height: 34px;
          }
        }
      }
      .conbottom_rigth {
        width: 35%;
        .privacy {
          padding: 1rem;
          .titl {
            border-bottom: #30c4e4 solid 3px;
            width: 35%;
            margin-bottom: 1rem;
            padding-bottom: 0.4rem;
            h1 {
              font-size: 1.6rem;
              color: #716d6d;
            }
          }
          .text {
            h1 {
              line-height: 34px;
              color: #c1c1c1;
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
}
@keyframes tra {
  from {
    left: -100vw;
  }
  to {
    left: 0;
  }
}
@media screen and (max-width: 720px) {
  .body {
    .content {
      .conbottom {
        flex-direction: column;
        .conbottom_left {
          width: 100%;
          .select {
            flex-direction: column;
            .select_left {
              width: 100%;
              margin-right: 0;
              .preview {
                flex-direction: column;
                .preview_left {
                  width: 100%;
                  .ti {
                    width: 100%;
                    text-align: center;
                  }
                  .quantity_box {
                    justify-content: center;
                  }
                }
                .preview_rigth {
                  width: 100%;
                  flex-direction: column;
                  .previewbox {
                    h1 {
                      text-align: center;
                    }
                    .previewvutton {
                      text-align: center;
                    }
                  }
                }
              }
            }
            .select_rigth {
              margin-top: 1rem;
              width: 100%;
              border-left: none;
              padding-left: 0;
              h1 {
                text-align: center;
              }
              .fishing {
                .select {
                  display: flex;
                  flex-direction: row;
                  label {
                    justify-content: inherit;
                  }
                }
              }
            }
          }
        }
        .conbottom_rigth{
          width: 100%;
          .privacy{
            .titl{
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
