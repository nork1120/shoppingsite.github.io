<template>
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
            <button type="button" class="btn btn-primary">
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="top">
    <button type="button" class="btn btn-primary" @click="show">
      新增商品
    </button>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card">
        <img
          src="https://i.imgur.com/1PmNPWKh.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img
          src="https://i.imgur.com/1PmNPWKh.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img
          src="https://i.imgur.com/1PmNPWKh.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img
          src="https://i.imgur.com/1PmNPWKh.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
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
      TvWall: {},
    };
  },
  methods: {
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
  },
  mounted() {
    this.mod = new modal(this.$refs.modd);
  },
};
</script>
