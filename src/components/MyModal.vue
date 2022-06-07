<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="mod"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增商品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body row">
          <div class="reh col-5">
            <p>上傳圖片網址</p>
            <input type="text" class="form-control" v-model="prod.imageUrl" />
            <p>上傳圖片檔案</p>
            <input type="file" class="form-control" ref="img" @change="upda" />
            <img :src="prod.imageUrl" alt="" />
          </div>
          <div class="let col-7">
            <p>標題</p>
            <input type="text" class="form-control" v-model="prod.title" />
            <div class="row">
              <div class="col-6">
                <p>分類</p>
                <input
                  type="text"
                  class="form-control"
                  v-model="prod.category"
                />
                <p>原價</p>
                <input
                  type="number"
                  class="form-control"
                  v-model="prod.origin_price"
                />
              </div>
              <div class="col-6">
                <p>單位</p>
                <input type="text" class="form-control" v-model="prod.unit" />
                <p>售價</p>
                <input
                  type="number"
                  class="form-control"
                  v-model="prod.price"
                />
              </div>
            </div>
            <label for="exampleFormControlTextarea1" class="form-label"
              >產品描述</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="產品描述"
              v-model="prod.description"
            ></textarea>
            <label for="exampleFormControlTextarea1" class="form-label"
              >說明內容</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="說明內容"
              v-model="prod.content"
            ></textarea>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              v-model="prod.is_enabled"
            />
            <label class="form-check-label" for="flexCheckDefault">
              是否啟用
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="nodate"
          >
            關閉
          </button>
          <button type="button" class="btn btn-primary" @click="okdate()">
            確定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modal from "../../node_modules/bootstrap/js/dist/modal";
export default {
  props: ["ss"],
  inject: ["mitter"],
  data() {
    return {
      mod: {},
      prod: {ww:151},
      prodle: {},
      sstate: "",
      sstyle: "",
      smessage: [],
    };
  },
  watch: {
    ss() {
      this.prod = this.ss;
    },
  },
  methods: {
    modshow() {
      this.mod.show();
    },
    okdate() {
      if (this.prod.id != undefined) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.prod.id}`;
        this.$http.put(api, { data: this.prod }).then((e) => {
          if (e.data.success) {
            this.sstate = "編輯成功";
            this.sstyle = "rgb(0, 187, 93)";
            this.smessage = ["以更新商品"];
          } else {
            this.sstate = "編輯失敗";
            this.sstyle = " rgb(230, 57, 57)";
            this.smessage = [...e.data.message];
          }
        this.mitter.emit("test", {
        success: this.sstate,
        style: this.sstyle,
        message: this.smessage.join("、"),
      });
          console.log(e);
        });
        this.prod = {};
        this.mod.hide();
      } else {
        this.$emit("loadin");
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
        this.$http.post(api, { data: this.prod }).then((e) => {
          console.log(e.data);
          if (e.data.success) {
            this.sstate = "新增成功";
            this.sstyle = "rgb(0, 187, 93)";
            this.smessage = ["以新增商品"];
          } else {
            this.sstate = "新增失敗";
            this.sstyle = " rgb(230, 57, 57)";
            this.smessage = [...e.data.message];
          }
          this.mitter.emit("test", {
            success: this.sstate,
            style: this.sstyle,
            message: this.smessage.join("、"),
          });
          console.log(e);
          this.cll();
        });
        this.prod = {};
        this.mod.hide();
      }
    },
    nodate() {
      this.prod = {};
      this.mod.hide();
      this.$emit("currdle");
      this.$refs.img.value = "";
    },
    ssss() {
      console.log(845646541);
    },
    cll() {
      this.$emit("all");
    },
    upda() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      let fromda = new FormData();
      fromda.append("file-to-upload", this.$refs.img.files[0]);
      this.$http.post(api, fromda).then((e) => {
        console.log(e.data.imageUrl);
        this.prod.imageUrl = e.data.imageUrl;
      });
    },
  },
  mounted() {
    this.mod = new modal(this.$refs.mod);
  },
};
</script>
<style scoped lang="scss">
.modal {
  .modal-dialog {
    .modal-content {
      .modal-body {
        .reh {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>