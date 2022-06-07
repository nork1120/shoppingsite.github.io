<template>
  <LoadIng :active="isload"></LoadIng>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="dletmod"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            確定要刪除{{ dle.content }}
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
  <toastall></toastall>
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
  <table class="table table-sm">
    <thead>
      <tr>
        <th class="th1">分類</th>
        <th class="th2">產品名稱</th>
        <th class="th3">原價</th>
        <th class="th4">售價</th>
        <th class="th5">是否啟用</th>
        <th class="th6">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in thing" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.origin_price }}</td>
        <td>{{ item.price }}</td>
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
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(api).then((e) => {
        console.log(e.data);
        this.thing = e.data.products;
        this.isload = false;
        this.page = e.data.pagination;
        console.log(this.page);
      });
    },
    del(item) {
      this.dle = item;
      this.dlemod.show();
    },
    datd() {
      console.log(515156156);
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
  },

  created() {
    console.log(this.page);
    this.getdat();
  },
  mounted() {
    this.dlemod = new modal(this.$refs.dletmod);
  },
};
</script>


<style scoped  lang="scss">
.newdat {
  display: flex;
  flex-direction: row-reverse;
  margin: 3rem;
}
table {
  thead {
    width: 100%;
    tr {
      .th1 {
        width: 10%;
      }
      .th2 {
        width: 48%;
      }
      .th3 {
        width: 10%;
      }
      .th5 {
        width: 8%;
      }
      .th6 {
        width: 10%;
      }
    }
  }
  tbody {
    tr {
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
  width: 100%;
  display: flex;
  justify-content: center;
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
</style>