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
            <input
              type="text"
              class="form-control mod1"
              v-model="prod.imageUrl"
            />
            <p>上傳圖片檔案</p>
            <input
              type="file"
              class="form-control mod1"
              ref="img"
              @change="upda"
            />
            <img :src="prod.imageUrl" alt="" />
          </div>
          <div class="let col-7">
            <p>標題</p>
            <input type="text" class="form-control mod1" v-model="prod.title" />
            <div class="row">
              <div class="col-6">
                <div class="row">
                  <div class="col-6">
                    <p>分類</p>
                    <select class="form-select" v-model="prod.category">
                      <option value="" hidden>請選擇</option>
                      <option value="海釣行程">海釣行程</option>
                      <option value="海釣商品">海釣商品</option>
                    </select>
                  </div>
                  <div class="col-6">
                    <p>類別</p>
                    <select
                      v-if="prod.category == '' || prod.category == '海釣行程'"
                      :disabled="prod.category == ''"
                      class="form-select"
                      v-model="prod.category2"
                    >
                      <option value="" hidden>請選擇</option>
                      <option value="北部的海釣地點">北部的海釣地點</option>
                      <option value="中部的海釣地點">中部的海釣地點</option>
                      <option value="南部的海釣地點">南部的海釣地點</option>
                      <option value="夜釣的海釣地點">夜釣的海釣地點</option>
                    </select>
                    <select v-else class="form-select" v-model="prod.category2">
                      <option value="" hidden>請選擇</option>
                      <option value="釣桿">釣桿</option>
                      <option value="捲線器">捲線器</option>
                      <option value="釣魚燈/魚鉤">釣魚燈/魚鉤</option>
                      <option value="假餌/冰桶">假餌/冰桶</option>
                      <option value="冰桶">冰桶</option>
                      <option value="釣魚夾克">釣魚夾克</option>
                      <option value="漁夫帽">漁夫帽</option>
                    </select>
                  </div>
                </div>

                <p>原價</p>
                <input
                  type="number"
                  class="form-control"
                  v-model="prod.origin_price"
                />
              </div>
              <div class="col-6">
                <p>單位</p>
                <input
                  type="text"
                  class="form-control mod1"
                  v-model="prod.unit"
                />
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
              class="form-control mod1"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="產品描述"
              v-model="prod.description"
            ></textarea>
            <label for="exampleFormControlTextarea1" class="form-label"
              >說明內容</label
            >
            <textarea
              class="form-control mod1"
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
          <button type="button" class="btn btn-secondary" @click="nodate">
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
      prod: { category: "", category2: "" },
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
        this.prod = { category: "", category2: "" };
        this.mod.hide();
      }
    },
    nodate() {
      this.prod = { category: "", category2: "" };
      this.mod.hide();
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
          .mod1 {
            margin-bottom: 0.5rem;
          }
        }
        .let {
          .mod1 {
            margin-bottom: 0.5rem;
          }
          .row {
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
