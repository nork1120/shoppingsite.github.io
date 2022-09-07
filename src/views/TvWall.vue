<template>
  <LoadIng :active="isload"></LoadIng>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modd"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增電視牆</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="reh">
            <p>標題</p>
            <input
              type="text"
              class="form-control mod1"
              v-model="TvWall.title"
            />
            <p>上傳圖片網址</p>
            <input
              type="text"
              class="form-control mod1"
              v-model="TvWall.picture"
            />
            <p>上傳圖片檔案</p>
            <input
              type="file"
              class="form-control mod1"
              ref="img"
              @change="upda"
            />
            <img :src="TvWall.picture" alt="" />
            <label for="exampleFormControlTextarea1" class="form-label"
              >產品描述</label
            >
            <textarea
              class="form-control mod1"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="產品描述"
              v-model="TvWall.description"
            ></textarea>
          </div>
          <div class="button">
            <button type="button" class="btn btn-primary" @click="okdata">
              確定
            </button>
            <button type="button" class="btn btn-danger">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="top">
    <button type="button" class="btn btn-primary" @click="show">
      新增電視牆
    </button>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="mg in data" :key="mg.id">
      <div class="card">
        <img :src="mg.picture" class="card-img-top" alt="..." />
        <div class="card-body row">
          <div class="col-9">
            <h5 class="card-title">{{ mg.title }}</h5>
            <p class="card-text">
              {{ mg.description }}
            </p>
          </div>
          <div class="col-3">
            <div class="row">
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-success"
                  @click="
                    show();
                    TvWall = mg;
                  "
                >
                  編輯
                </button>
              </div>
              <div class="col-6">
                <button type="button" class="btn btn-danger" @click="del(mg)">
                  刪除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modal from "../../node_modules/bootstrap/js/dist/modal";
export default {
  data() {
    return {
      mod: {},
      TvWall: {
        category: "電視牆",
        unit: "0",
        origin_price: 1,
        price: 1,
        is_enabled: true
      },
      data: [],
      isload: true,
      sstate: "",
      sstyle: "",
      smessage: [],
    };
  },
  inject: ["mitter"],
  methods: {
    gatdata() {
      this.isload = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.$http.get(api).then((e) => {
        this.data = Object.values(e.data.products);
        this.data = this.data.filter((e) => {
          return e.category == "電視牆";
        });
        this.isload = false;
        console.log(this.data);
      });
    },
    show() {
      this.mod.show();
    },
    upda() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      let fromda = new FormData();
      fromda.append("file-to-upload", this.$refs.img.files[0]);
      this.$http.post(api, fromda).then((e) => {
        console.log(e.data.imageUrl);
        this.TvWall.picture = e.data.imageUrl;
      });
    },
    okdata() {
      if (this.TvWall.id != undefined) {
        this.isload = true;
        this.mod.hide();
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.TvWall.id}`;
        this.$http.put(api, { data: this.TvWall }).then((e) => {
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
          this.TvWall = {
            category: "電視牆",
            unit: "0",
            origin_price: 1,
            price: 1,
            is_enabled: true
          };
          this.gatdata();
        });
      } else {
        this.isload = true;
        this.mod.hide();
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
        this.$http.post(api, { data: this.TvWall }).then((e) => {
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
          this.TvWall = {
            category: "電視牆",
            unit: "0",
            origin_price: 1,
            price: 1,
            is_enabled: true
          };
          this.gatdata();
        });
      }
    },
    del(dee) {
      this.isload = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${dee.id}`;
      this.$http.delete(api).then((e) => {
        this.mitter.emit("test", {
          style: "rgb(230, 57, 57)",
          success: "刪除成功",
          message: e.data.message,
        });
        console.log(e);
        this.gatdata();
      });
    },
  },
  mounted() {
    this.mod = new modal(this.$refs.modd);
    this.mitter.emit("change", 0);
  },
  created() {
    this.gatdata();
  },
};
</script>
<style scoped lang="scss">
.modal{
  .modal-dialog{
    .modal-content{
      .modal-body{
        .button{
          margin-top: 1rem;
          .btn{
            &:first-child{
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }
}
.top {
  margin-bottom: 2rem;
}
</style>