<template>
  <LoadIng :active="isload"></LoadIng>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="records"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">訂單詳細資料</h5>
        </div>
        <div class="modal-body">
          <div class="main">
            <div class="mainbox">
              <div class="compendium">
                <div class="comtitl">
                  <h4>商品</h4>
                </div>
                <div
                  class="comtext"
                  v-for="se in recosMaterial.orders"
                  :key="se.id"
                >
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
                          釣竿租借 {{ se.fishingQty }}隻${{
                            se.fishingQty * 100
                          }}
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
                  <div class="all_2">
                    <h6>{{ recosMaterial.toto }}</h6>
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
                    <h4>{{ recosMaterial.name }}</h4>
                  </div>
                  <div class="text email">
                    <h4>電子信箱</h4>
                    <h4>{{ recosMaterial.mail }}</h4>
                  </div>
                  <div class="text liaison">
                    <h4>聯絡方式</h4>
                    <h4>{{ recosMaterial.phone1 }}</h4>
                  </div>
                  <div class="text payment">
                    <h4>付款方式</h4>
                    <h4>{{ recosMaterial.paymethod }}</h4>
                  </div>
                  <div class="text money">
                    <h4>金額</h4>
                    <h4 class="green">${{ recosMaterial.toto }}</h4>
                  </div>
                  <div class="text address">
                    <h4>地址</h4>
                    <h4>{{ recosMaterial.address }}</h4>
                  </div>
                  <div class="message">
                    <h4>留言</h4>
                    <p>{{ recosMaterial.message }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary S1" @click="recsohide">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="body">
    <div class="content">
      <table>
        <thead>
          <tr>
            <th class="th1">品項</th>
            <th class="th1">購買人姓名</th>
            <th class="th2">訂單ID</th>
            <th class="th1">訂單金額</th>
            <th class="th1">付款方式</th>
            <th class="th1">詳細資料</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="se in thing" :key="se.uuid">
            <td>{{ se.orders[0].category }}</td>
            <td class="name">{{ se.name }}</td>
            <td>{{ se.uuid }}</td>
            <td class="TWD">{{ se.toto }} TWD</td>
            <td class="pay">{{ se.paymethod }}</td>
            <td class="det"><button @click="recsoshow(se)">詳細資料</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="bottom">
    <div class="apge">
      <paginat :paa="page" @pag="getdat"></paginat>
    </div>
  </div>
</template>
<script>
import paginat from "@/components/PagInat.vue";
import modal from "../../node_modules/bootstrap/js/dist/modal";
export default {
  data() {
    return {
      thing: [],
      page: {},
      papa: 7,
      isload: false,
      recos: {},
      recosMaterial: {},
    };
  },
  components: {
    paginat,
  },
  methods: {
    getdat(page = 1) {
      this.isload = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.$http.get(api).then((e) => {
        this.thing = Object.values(e.data.products);
        this.thing = this.thing.filter((e) => {
          return e.category == "優惠劵訂單";
        });
        console.log(this.thing, 55555);
        if (this.thing[0].OrDer == undefined) {
          this.thing = [];
        } else {
          this.thing = this.thing[0].OrDer;
        }
        this.isload = false;
        this.page.total_pages = Math.ceil(this.thing.length / this.papa);
        if (this.page.total_pages == 0) {
          this.page.total_pages = 1;
        }
        this.page.current_page = page;
        if (page == 1) {
          this.thing = this.thing.slice(0, 7);
          this.page.has_next = true;
          this.page.has_pre = false;
          if (this.page.total_pages == page) {
            this.page.has_next = false;
          }
        } else {
          this.thing = this.thing.slice(
            this.papa * (page - 1),
            this.papa * page
          );
          this.page.has_pre = true;
          this.page.has_next = true;
          if (this.page.total_pages == page) {
            this.page.has_next = false;
          }
        }
      });
    },
    recsoshow(e) {
      this.recosMaterial = e;
      this.recos.show();
    },
    recsohide() {
      this.recos.hide();
    }
  },
  mounted() {
    this.recos = new modal(this.$refs.records);
  },
  created() {
    this.getdat();
  },
};
</script>
<style scoped lang="scss">
.modal {
  .modal-dialog {
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background: #106de6;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #104391;
    }
    .modal-content {
      height: 70vh;
      border-radius: 1.5rem;
      overflow: hidden;
      .modal-header {
        background-color: #feecec;
        display: flex;
        justify-content: center;
        align-items: center;
        h5 {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
      .modal-body {
        padding: 1rem 1.5rem 1rem 1.5rem;
        display: flex;
        justify-content: center;
        .main {
          width: 100%;
          display: flex;
          justify-content: center;
          .mainbox {
            width: 100%;
            .compendium {
              width: 100%;
              .comtitl {
                width: 100%;
                padding: 1rem;
                background: #feecec;
                h4 {
                  font-size: 1.4rem;
                  font-weight: 600;
                }
              }
              .comtext {
                border-bottom: black solid 1px;
                width: 100%;
                display: flex;
                .img {
                  width: 30%;
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
                      font-size: 1.4rem;
                      font-weight: 900;
                      color: #d43030;
                    }
                    p {
                      margin-top: 1.2rem;
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
                        font-size: 1.4rem;
                        width: 100%;
                        text-align: end;
                        color: #1aaf67;
                      }
                      p {
                        font-size: 1.4rem;
                      }
                    }
                  }
                }
              }
              .all {
                display: flex;
                font-size: 1.4rem;
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
                  font-size: 1.2rem;
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
                  margin-top: 1.2rem;
                  color: #676767;
                }
              }
            }
          }
        }
      }
      .modal-footer {
        border: none;
        .S1 {
          border: none;
          background-color: #d86666;
          padding: 0.5rem;
          &:hover{
            background-color: #c05e5e;
          }
        }
      }
    }
  }
}
.body {
  .content {
    table {
      width: 100%;
      thead {
        background-color: #f6efef;
        width: 100%;
        tr {
          th {
            padding: 1rem;
            width: 16%;
            font-size: 1.2rem;
            text-align: center;
            color: #000;
            font-weight: 600;
            background-color: #f6efef;
            position: sticky;
            top: -20px;
            z-index: 1;
          }
          .th1 {
            width: 15%;
          }
          .th2 {
            width: 25%;
          }
        }
      }
      tbody {
        tr {
          border-bottom: 1px solid #000;
          .name {
            color: #1a77ab;
          }
          .TWD {
            color: #1aaf67;
          }
          .pay {
            color: #35579a;
          }
          .det {
            button {
              padding: 0.5rem 1rem 0.5rem 1rem;
              color: #dd0f0f;
              border: 1px solid #dd0f0f;
              background-color: #fff;
              font-weight: 600;
              border-radius: 3px;
              position: relative;
              overflow: hidden;
              transition: all 0.2s ease-in-out;
              z-index: 0;
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
          td {
            text-align: center;
            font-size: 1.2rem;
            font-weight: 600;
            padding: 1.8rem 0 1.8rem 0;
          }
        }
      }
    }
  }
}
.bottom {
  .apge {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
}
</style>
