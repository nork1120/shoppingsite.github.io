<template>
  <LoadIng :active="isload"></LoadIng>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="commodity"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="text row">
            <div class="textLeft col">
              <div
                class="img"
                :style="{ backgroundImage: 'url(' + comDity.imageUrl + ')' }"
              ></div>
              <div class="Ttitle row">
                <div class="TtitleLeft col">
                  <h5>{{ comDity.title }}</h5>
                </div>
                <div class="Ttitlerigth col">
                  <div class="refund">
                    <h5>七日可免費退費</h5>
                  </div>
                </div>
              </div>
              <div class="rough">
                <h5>
                  {{ comDity.description }}
                </h5>
              </div>
              <div class="choose row">
                <div class="chooseLeft col-4">
                  <h5>剩餘名額</h5>
                  <p>{{ comDity.unit }}</p>
                  <h5>位</h5>
                </div>
                <div class="chooseRigth col-8">
                  <div class="cR1 row">
                    <div class="cR1-1 col-5">
                      <h5>原價{{ comDity.origin_price }}</h5>
                    </div>
                    <div class="cR1-2 col-7">
                      <h5>TWD ${{ comDity.price }}</h5>
                    </div>
                  </div>
                  <div class="cR2 row">
                    <div class="cR2-1 col">
                      <label>
                        <div class="qty">
                          <h5>旅客數量</h5>
                          <input type="number" v-model="comDity.people" />
                          <h5>人</h5>
                        </div>
                      </label>
                    </div>
                    <div class="cR2-2 col">
                      <span class="mas">預約</span>
                      <button @click="gobuy(comDity)">預約</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="textRight col">
              <div class="top">
                <div class="trTlite">
                  <h3>詳細介紹</h3>
                </div>
                <div class="trtext">
                  <h4>
                    {{ comDity.description }}
                  </h4>
                </div>
                <div class="detail">
                  <h4 class="grey">
                    {{ comDity.content }}
                  </h4>
                </div>
                <div class="fish">
                  <h4>{{ comDity.replenish }}</h4>
                </div>
              </div>
              <div class="bottom">
                <div class="rebottom">
                  <h3>注意事項</h3>
                  <h4>
                    本賣場海釣行程七日內可免費退費，超過七日將無法退費，退費需等
                    一日工作天不包掛假日。
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="wrap">
    <div class="titl">
      <h1>海釣行程</h1>
    </div>
  </div>
  <div class="content">
    <div class="cont_rigth">
      <div class="contr1">
        <div>
          <h2
            @click="
              col = 1;
              alldata();
              this.papss();
            "
            class="totl"
            :class="{ ch: col == 1 }"
          >
            全部
          </h2>
          <h2
            @click="
              col = 2;
              north();
              this.papss();
            "
            :class="{ ch: col == 2 }"
          >
            北部的海釣地點
          </h2>
          <h2
            @click="
              col = 3;
              middle();
              this.papss();
            "
            :class="{ ch: col == 3 }"
          >
            中部的海釣地點
          </h2>
          <h2
            @click="
              col = 4;
              South();
              this.papss();
            "
            :class="{ ch: col == 4 }"
          >
            南部的海釣地點
          </h2>
          <h2
            @click="
              col = 5;
              night();
              this.papss();
            "
            class="end"
            :class="{ ch: col == 5 }"
          >
            夜釣的海釣地點
          </h2>
        </div>
      </div>
      <div class="contr2">
        <img
          src="../imgoricons/0hIbX082IzFk1lSQCr3AZpGjcUCjwNP09aGnEMbxIMVipNKllPCixcKxAdSS9LLlFMUCxeI0BNTy5LcFcfDSxcRUFJSntPcVETDSpZKEdADXwdKgROCi5Q.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="cont_left">
      <div class="context">
        <div class="commodity" v-for="e in thing" :key="e.id">
          <div class="img">
            <img :src="e.imageUrl" alt="" />
          </div>
          <div class="text">
            <div class="text_left">
              <h1>{{ e.title }}</h1>
              <p class="introduce">
                {{ e.description }}
              </p>
              <p class="type">{{ e.replenish }}</p>
            </div>
            <div class="text_rigth">
              <div class="text_rigth1">
                <h1>TWD {{ e.price }}</h1>
                <div class="butt">
                  <button type="button" @click="selected(e), cd.show()">
                    預定
                  </button>
                </div>
              </div>
              <div class="text_rigth2">
                <h1>最早可預訂日: 2022-06-06</h1>
              </div>
              <div class="text_rigth3">
                <h1>七日可免費退費</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="apge">
        <paginat ref="ape" :paa="page" @pag="papss"></paginat>
      </div>
    </div>
  </div>
</template>
<script>
import modal from "../../node_modules/bootstrap/js/dist/modal";
import paginat from "@/components/PagInat.vue";
export default {
  inject: ["mitter"],
  data() {
    return {
      col: 1,
      cd: {},
      comDity: {},
      thing: [],
      newthing: [],
      allthing: [],
      page: {},
      papa: 4,
      isload: false,
    };
  },
  components: {
    paginat,
  },
  methods: {
    getdat() {
      this.isload = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((e) => {
        this.thing = Object.values(e.data.products);
        this.thing = this.thing.filter((e) => {
          return e.category == "海釣行程";
        });
        this.newthing = JSON.parse(JSON.stringify(this.thing));
        this.allthing = JSON.parse(JSON.stringify(this.thing));
        this.page.total_pages = Math.ceil(this.thing.length / this.papa);
        this.papss();
        this.isload = false;
      });
    },
    selected(e) {
      this.comDity = e;
      console.log(this.comDity);
    },
    papss(page = 1) {
      this.page.current_page = page;
      if (page == 1) {
        this.thing = this.allthing.slice(0, 4);
        this.page.has_next = true;
        this.page.has_pre = false;
        if (this.page.total_pages == 1) {
          this.page.has_next = false;
          this.page.has_pre = false;
        }
      } else {
        this.thing = this.allthing.slice(
          this.papa * (page - 1),
          this.papa * page
        );
        this.page.has_pre = true;
        this.page.has_next = true;
        if (this.page.total_pages == page) {
          this.page.has_next = false;
        }
      }
      console.log(this.thing);
    },
    alldata() {
      this.$refs.ape.page = 1;
      this.allthing = this.newthing;
      this.thing = JSON.parse(JSON.stringify(this.allthing));
      this.page.total_pages = Math.ceil(this.allthing.length / this.papa);
    },
    north() {
      this.$refs.ape.page = 1;
      this.allthing = this.newthing.filter((e) => {
        return e.category2 == "北部的海釣地點";
      });
      this.thing = JSON.parse(JSON.stringify(this.allthing));
      this.page.total_pages = Math.ceil(this.allthing.length / this.papa);
    },
    middle() {
      this.$refs.ape.page = 1;
      this.allthing = this.newthing.filter((e) => {
        return e.category2 == "中部的海釣地點";
      });
      this.thing = JSON.parse(JSON.stringify(this.allthing));
      this.page.total_pages = Math.ceil(this.allthing.length / this.papa);
    },
    South() {
      this.$refs.ape.page = 1;
      this.allthing = this.newthing.filter((e) => {
        return e.category2 == "南部的海釣地點";
      });
      this.thing = JSON.parse(JSON.stringify(this.allthing));
      this.page.total_pages = Math.ceil(this.allthing.length / this.papa);
    },
    night() {
      this.$refs.ape.page = 1;
      this.allthing = this.newthing.filter((e) => {
        return e.category2 == "夜釣的海釣地點";
      });
      this.thing = JSON.parse(JSON.stringify(this.allthing));
      this.page.total_pages = Math.ceil(this.allthing.length / this.papa);
    },
    gobuy(e) {
      this.cd.hide();
      this.mitter.emit("journey", e);
      this.$router.push("/gobay");
    },
  },
  created() {
    this.getdat();
  },
  mounted() {
    this.cd = new modal(this.$refs.commodity);
    scrollTo({ top: 0 });
  },
};
</script>

<style scoped lang="scss">
.modal {
  .modal-dialog {
    .modal-content {
      .modal-body {
        padding: 2rem;
        .text {
          .textLeft {
            margin-right: 1rem;
            .img {
              height: 40vh;
              width: 100%;
              background-size: 100% 100%;
            }
            .Ttitle {
              margin-top: 1.6rem;
              .TtitleLeft {
                h5 {
                  font-size: 2rem;
                  font-weight: bold;
                  color: #d43030;
                }
              }
              .Ttitlerigth {
                .refund {
                  display: flex;
                  flex-direction: row-reverse;
                  h5 {
                    background: #f96868;
                    padding: 0.2rem 1.2rem 0.2rem 1.2rem;
                    border-radius: 7px;
                    margin-right: 0.2rem;
                    margin-top: 0.3rem;
                    display: inline;
                    font-size: 0.8rem;
                    color: rgb(255, 255, 255);
                  }
                }
              }
            }
            .rough {
              margin-top: 1.4rem;
              h5 {
                font-size: 1.2rem;
                font-weight: 600;
              }
            }
            .choose {
              margin-top: 1rem;
              .chooseLeft {
                display: flex;
                align-items: center;
                justify-content: center;
                h5 {
                  font-size: 1.4rem;
                  font-weight: 600;
                }
                p {
                  font-size: 1.4rem;
                  font-weight: 600;
                  color: #c32020;
                }
              }
              .chooseRigth {
                .cR1 {
                  margin-bottom: 0.5rem;
                  .cR1-1 {
                    display: flex;
                    flex-direction: column-reverse;
                    h5 {
                      font-size: 1.2rem;
                      text-align: center;
                      color: #7a7878;
                      text-decoration: line-through;
                    }
                  }
                  .cR1-2 {
                    font-size: 2rem;
                    font-weight: 400;
                    color: #2ba86c;
                  }
                }
                .cR2 {
                  .cR2-1 {
                    display: flex;
                    flex-direction: column-reverse;
                    .qty {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      input[type="number"]::-webkit-outer-spin-button,
                      input[type="number"]::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                      }
                      input {
                        width: 10%;
                        border: none;
                        font-size: 1.2rem;
                        font-weight: 600;
                        margin: 0 0.5rem 0 0.5rem;
                      }
                      h5 {
                        font-size: 1.2rem;
                        color: #000;
                        font-weight: 600;
                      }
                    }
                  }
                  .cR2-2 {
                    position: relative;
                    overflow: hidden;
                    transition: 0.5s;
                    letter-spacing: 1px;
                    width: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .mas {
                      width: 87%;
                      position: absolute;
                      color: #e53e3e;
                      border: #e53e3e solid 2px;
                      padding: 0.5rem 0 0.5rem 0;
                      text-align: center;
                      font-size: 1.2rem;
                      overflow: hidden;
                      font-weight: bold;
                    }
                    button {
                      width: 101%;
                      background-color: #e53e3e;
                      border: none;
                      font-size: 1.2rem;
                      color: rgb(255, 255, 255);
                      padding: 0.7rem 0 0.7rem 0;
                      mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
                      mask-size: 3000% 100%;
                      cursor: pointer;
                      animation: ani2 0.7s steps(29) forwards;
                      &:hover {
                        animation: ani 0.7s steps(29) forwards;
                      }
                    }
                  }
                }
              }
            }
          }
          .textRight {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h3 {
              font-size: 2.2rem;
              font-weight: 600;
              color: #c65c5c;
            }
            h4 {
              font-size: 1.2rem;
              font-weight: 600;
              color: #000;
              line-height: 32px;
            }
            .detail {
              margin-top: 1rem;
              .grey {
                color: #6d6262;
              }
            }
            .fish {
              h4 {
                color: #0a93a6;
              }
            }
          }
        }
      }
    }
  }
}
.wrap {
  .titl {
    background: no-repeat center / contain;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: multiply;
    background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/runapi/1662544570382.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XR%2FoxOB30lyz0qln2UgL64iiGaIcUQLmWxd9Womu4%2FPll3nt2jBKESF4zuYJp%2FXeMOKb9xwk0v9V5UoMbU2B4KCjjmMkmtojOHpg9yYQnowWh5HGCb5W4aU1PBL%2Fx3YCrYbe1irADzz0FvWJ%2BWDK02lXTAdabgUuCECvkm%2Fe9WE13rWbROv%2FVDXvDq%2BhtgetjU6Ej3fqVuwc5D8rKtybk%2F4RL4PnrGJVLmQ3M1jPs2DgrB8kKf7NEAkmDiYh%2B54ZWYcXZNM0n4QkBXmRHJdd3gjrimPRt92k2S%2F8ptY0kVCppI50RjSC8I2lMN6SwD2yD5n9ZNHIpObXPA5kDMlbWA%3D%3D");
    background-size: cover;
    display: flex;
    justify-content: center;
    padding: 7rem;
    h1 {
      font-size: 4rem;
      color: rgb(255, 255, 255);
    }
  }
}
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  .cont_rigth {
    width: 15%;
    .contr1 {
      width: 68%;
      margin-bottom: 13rem;
      div {
        padding: 1rem 0 1rem 0;
        border-right: #ff6c6c solid 7px;
        .totl {
          margin-bottom: 4rem;
        }
        .ch {
          color: #055cac;
          border-bottom: #055cac solid 1px;
        }
        h2 {
          &:hover {
            color: #055cac;
          }
          text-align: center;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 2rem;
          margin-right: 1rem;
          cursor: pointer;
        }
        .end {
          margin-bottom: 0;
        }
      }
    }
    .contr2 {
      margin-bottom: 3rem;
      img {
        width: 80%;
      }
    }
  }
  .cont_left {
    width: 75%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .context {
      display: flex;
      flex-wrap: wrap;
      .commodity {
        width: 40%;
        margin-right: 5rem;
        margin-bottom: 5rem;
        .img {
          position: relative;
          filter: drop-shadow(0px 1px 12px #000000);
          z-index: 0;
          img {
            width: 100%;
            height: 15vh;
            object-fit: cover;
          }
        }
        .text {
          position: relative;
          z-index: 1;
          background-color: white;
          padding: 1rem;
          display: flex;
          .text_left {
            width: 50%;
            h1 {
              font-size: 1.2rem;
              font-weight: 600;
            }
            p {
              font-weight: 600;
            }
            .introduce {
              font-size: 0.8rem;
              line-height: 1rem;
              color: #978e8e;
              margin: 0.5rem 0 0.5rem 0;
            }
            .type {
              font-weight: 600;
              font-size: 0.9rem;
            }
          }
          .text_rigth {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: end;
            .text_rigth1 {
              display: flex;
              justify-content: space-around;
              align-items: center;
              h1 {
                margin-right: 1rem;
                font-size: 1.4rem;
                font-weight: 600;
              }
              .butt {
                button {
                  background: white;
                  padding: 0.8rem 2rem 0.8rem 2rem;
                  border: #5bafd3 solid 2px;
                  color: #0098d9;
                  font-weight: 600;
                  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
                  transition: all 0.1s ease-in;
                  &:hover {
                    transform: scale(1.1);
                  }
                }
              }
            }
            .text_rigth2 {
              margin-top: 1rem;
              h1 {
                font-size: 0.5rem;
                color: rgba(62, 203, 212);
              }
            }
            .text_rigth3 {
              background: #f96868;
              padding: 0.2rem 1.2rem 0.2rem 1.2rem;
              border-radius: 7px;
              margin-right: 0.2rem;
              margin-top: 0.3rem;
              h1 {
                font-size: 0.8rem;
                color: rgb(255, 255, 255);
              }
            }
          }
        }
      }
    }
    .apge {
      display: flex;
      justify-content: center;
    }
  }
}
@keyframes ani {
  from {
    mask-position: 0 0;
  }

  to {
    mask-position: 100% 0;
  }
}
@keyframes ani2 {
  from {
    mask-position: 100% 0;
  }

  to {
    mask-position: 0 0;
  }
}
@media screen and (max-width: 720px) {
  .modal {
    .modal-dialog {
      .modal-content {
        .modal-body {
          padding: 2rem;
          .text {
            display: flex;
            flex-direction: column;
            .textLeft {
              margin-right: 0;
              .img {
                height: 25vh;
                width: 100%;
                background-size: 100% 100%;
              }
              .Ttitle {
                margin-top: 1.6rem;
                display: flex;
                flex-direction: column;
                .TtitleLeft {
                  width: 100%;
                  h5{
                    text-align: center;
                  }
                }
                .Ttitlerigth {
                  .refund {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                  }
                }
              }
              .choose {
                margin-top: 1rem;
                display: flex;
                flex-direction: column-reverse;
                .chooseLeft {
                  width: 100%;
                }
                .chooseRigth {
                  width: 100%;
                  .cR1 {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    .cR1-1 {
                      width: 100%;
                    }
                    .cR1-2 {
                      width: 100%;
                      h5 {
                        text-align: center;
                      }
                    }
                  }
                  .cR2 {
                    display: flex;
                    flex-direction: column;
                    .cR2-1 {
                      display: flex;
                      flex-direction: column-reverse;
                    }
                    .cR2-2 {
                      width: 100%;
                      margin: 1rem 0 1rem 0;
                    }
                  }
                }
              }
            }
            .textRight {
              margin-top: 1rem;
              .top{
                .trTlite{
                  h3{
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .wrap {
    .titl {
      padding: 7rem 0 7rem 0;
      h1 {
        font-size: 4rem;
        color: rgb(255, 255, 255);
      }
    }
  }
  .content {
    flex-direction: column;
    margin-top: 1rem;
    .cont_rigth {
      width: 100%;
      .contr1 {
        width: 100%;
        margin-bottom: 0;
        div {
          display: flex;
          justify-content: center;
          border-right: none;
          border-bottom: #ff6c6c solid 7px;
          flex-wrap: wrap;
          flex: 2 2 80px;
          .totl {
            margin-bottom: 1rem;
          }
          .ch {
            color: #055cac;
            border-bottom: #055cac solid 1px;
          }
          h2 {
            width: 33%;
            font-size: 1rem;

            &:hover {
              color: #055cac;
            }
          }
          .end {
            margin-bottom: 0;
          }
        }
      }
      .contr2 {
        display: none;
        margin-bottom: 3rem;
        img {
          width: 80%;
        }
      }
    }
    .cont_left {
      width: 100%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .context {
        display: flex;
        flex-direction: column;
        .commodity {
          width: 100%;
          .text {
            .text_left {
              width: 50%;
            }
            .text_rigth {
              width: 50%;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: end;
              .text_rigth1 {
                flex-direction: column;
                h1 {
                  margin-right: 1rem;
                  font-size: 1.4rem;
                  font-weight: 600;
                  margin-bottom: 1rem;
                }
                .butt {
                  button {
                    background: white;
                    padding: 0.8rem 2rem 0.8rem 2rem;
                    border: #5bafd3 solid 2px;
                    color: #0098d9;
                    font-weight: 600;
                    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
                    transition: all 0.1s ease-in;
                    &:hover {
                      transform: scale(1.1);
                    }
                  }
                }
              }
              .text_rigth2 {
                margin-top: 1rem;
                h1 {
                  font-size: 0.5rem;
                  color: rgba(62, 203, 212);
                }
              }
              .text_rigth3 {
                background: #f96868;
                padding: 0.2rem 1.2rem 0.2rem 1.2rem;
                border-radius: 7px;
                margin-right: 0.2rem;
                margin-top: 0.3rem;
                h1 {
                  font-size: 0.8rem;
                  color: rgb(255, 255, 255);
                }
              }
            }
          }
        }
      }
      .apge {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
