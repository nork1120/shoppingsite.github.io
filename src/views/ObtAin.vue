<template>
  <LoadIng :active="isload"></LoadIng>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="dletmod"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            確定要刪除{{ dle.title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">確定刪除的話，按確定鍵</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-dark" @click="dels">確定</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade picture"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="picture"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">圖片</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body"><img :src="pic" alt="" /></div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
  <toastall></toastall>
  <div class="Obtainbody">
    <div class="newdat">
      <button type="button" class="btn btn-primary" @click="show">
        新增商品
      </button>
      <mode
        ref="shwomod"
        @loadin="isl"
        @currdle="currdl"
        @all="datd"
        :ss="curr"
      ></mode>
    </div>
    <table>
      <thead>
        <tr>
          <th class="th1">分類</th>
          <th class="th2">產品類別</th>
          <th class="th3">產品名稱</th>
          <th class="th4">敘述</th>
          <th class="th5">圖片</th>
          <th class="th6">原價</th>
          <th class="th7">售價</th>
          <th class="th8">數量</th>
          <th class="th9">是否啟用</th>
          <th class="th10">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in thing" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.category2 }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button
              class="btn btn-outline-success"
              @click="boot(item.imageUrl)"
            >
              商品圖片
            </button>
          </td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.unit }}</td>
          <td class="tdtext">
            <h1 v-if="item.is_enabled == 1">啟用</h1>
            <h2 v-else>不啟用</h2>
          </td>
          <td class="tdbut">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="curritem(item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="del(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="apge">
    <paginat :paa="page" @pag="getdat"></paginat>
  </div>
</template>
<script>
import mode from "../components/MyModal.vue";
import modal from "../../node_modules/bootstrap/js/dist/modal";
import toastall from "../components/ToastsAll.vue";
import paginat from "@/components/PagInat.vue";
export default {
  data() {
    return {
      thing: [],
      curr: {},
      dlemod: {},
      dle: {},
      isload: false,
      page: {},
      papa: 7,
      picture: {},
      pic: "",
    };
  },
  inject: ["mitter"],
  components: {
    mode,
    toastall,
    paginat,
  },
  methods: {
    show() {
      this.$refs.shwomod.modshow();
    },
    curritem(item) {
      this.curr = item;
      console.log(this.curr);
      this.show();
    },
    getdat(page = 1) {
      this.isload = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.$http.get(api).then((e) => {
        this.thing = Object.values(e.data.products);

        this.thing = this.thing.filter((e) => {
          return e.category == "海釣商品";
        });
        console.log(this.thing);
        console.log(this.thing.length, "66");
        this.isload = false;
        this.page.total_pages = Math.ceil(this.thing.length / this.papa);
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
    del(item) {
      this.dle = item;
      this.dlemod.show();
    },
    datd() {
      this.getdat();
    },
    dels() {
      this.isload = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.dle.id}`;
      this.$http.delete(api).then((e) => {
        this.mitter.emit("test", {
          style: "rgb(230, 57, 57)",
          success: "刪除成功",
          message: e.data.message,
        });
        console.log(e);
        this.getdat();
      });
      this.dlemod.hide();
    },
    currdl() {
      this.curr = {};
    },
    isl() {
      console.log(555);
      this.isload = true;
    },
    boot(e) {
      this.pic = e;
      this.picture.show();
    },
  },

  created() {
    console.log(this.page);
    this.getdat();
  },
  mounted() {
    this.dlemod = new modal(this.$refs.dletmod);
    this.picture = new modal(this.$refs.picture);
    this.mitter.emit("change", 0);
  },
};
</script>
<style scoped lang="scss">
.newdat {
  display: flex;
  flex-direction: row-reverse;
}
table {
  width: 100%;
  thead {
    width: 100%;
    tr {
      border-bottom: black solid 1px;
      .th1 {
        width: 10%;
      }
      .th2 {
        width: 10%;
      }
      .th3 {
        width: 10%;
      }
      .th4 {
        width: 15%;
      }
      .th5 {
        width: 8%;
      }
      .th6 {
        width: 8%;
      }
      .th7 {
        width: 5%;
      }
      .th8 {
        width: 10%;
      }
      .th9 {
        width: 10%;
      }
      .th10 {
        width: 10%;
      }
    }
  }
  tbody {
    tr {
      border-bottom: rgb(190, 184, 184) solid 1px;
      td {
        padding: 0.5rem 0 0.5rem 0;
      }
      .tdtext {
        h1 {
          font-size: 1rem;
          color: rgb(3, 172, 59);
          font-weight: bold;
        }
        h2 {
          font-size: 1rem;
          color: rgb(0, 0, 0);
          font-weight: bold;
        }
      }
      .tdbut {
        button {
          margin-right: 0.3rem;
        }
      }
    }
  }
}
.apge {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}
.modal {
  .modal-dialog {
    .modal-header {
      background-color: rgb(230, 57, 57);
      .modal-title {
        color: rgb(255, 255, 255);
        //   background: rgb(0, 187, 93);
      }
    }
  }
}
.picture {
  .modal-dialog {
    .modal-header {
      background-color: rgba(26, 143, 45, 0.774);
      .modal-title {
        color: rgb(255, 255, 255);
        //   background: rgb(0, 187, 93);
      }
    }
  }
}
</style>
