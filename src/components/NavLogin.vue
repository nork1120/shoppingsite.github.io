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
    ref="mod4"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">登入</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="login">
            <form>
              <div class="email form-floating">
                <input
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': swd }"
                  id="floatingInputValue"
                  placeholder="name@example.com"
                  v-model="user.username"
                  @input="ss"
                />
                <label for="floatingInputValue">帳號</label>
              </div>
              <div class="password form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="name@example.com"
                  v-model="user.password"
                />
                <label for="floatingInputValue">密碼</label>
              </div>
              <div class="sub">
                <button class="btn btn-success" @click.prevent="login()">
                  送出
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="mod5"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">會員中心</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h1 v-if="ssg == undefined"></h1>
          <div v-else-if="ssg == 0" class="bodytext">
            <div class="title">
              <h5>會員資料填寫</h5>
            </div>
            <form>
              <div class="name form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="name"
                  v-model="user1.name"
                />
                <label for="floatingInputValue">姓名</label>
              </div>
              <div class="mail form-floating">
                <input
                  type="test"
                  class="form-control"
                  :class="{ 'is-invalid': vy1 }"
                  id="floatingInputValue"
                  placeholder="mail"
                  v-model="user1.mail"
                  @input="mailVerify"
                />
                <label for="floatingInputValue">信箱</label>
              </div>
              <div class="phone form-floating">
                <input
                  type="test"
                  class="form-control"
                  :class="{ 'is-invalid': vy2 }"
                  id="floatingInputValue"
                  v-model="user1.phone1"
                  placeholder="090132845"
                />
                <label for="floatingInputValue">手機</label>
              </div>
              <div class="address form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="address"
                  v-model="user1.address"
                />
                <label for="floatingInputValue"
                  ><h5>地址</h5>
                  <p>不是必填</p></label
                >
              </div>
            </form>
            <div class="button">
              <button
                type="button"
                class="btn btn-secondary"
                @click="this.mod5.hide()"
              >
                取消
              </button>
              <button
                type="button"
                class="btn btn-primary"
                :disabled="vy1 == true || vy2 == true"
                @click="register"
              >
                送出
              </button>
            </div>
          </div>
          <div v-else-if="ssg == 1" class="bodytext">
            <div class="title">
              <h5>會員資料編輯</h5>
            </div>
            <form>
              <div class="name form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="name"
                  v-model="user1.name"
                />
                <label for="floatingInputValue">姓名</label>
              </div>
              <div class="mail form-floating">
                <input
                  type="test"
                  class="form-control"
                  :class="{ 'is-invalid': vy1 }"
                  id="floatingInputValue"
                  placeholder="mail"
                  v-model="user1.mail"
                />
                <label for="floatingInputValue">信箱</label>
              </div>
              <div class="phone form-floating">
                <input
                  type="test"
                  class="form-control"
                  :class="{ 'is-invalid': vy2 }"
                  id="floatingInputValue"
                  v-model="user1.phone1"
                  placeholder="090132845"
                />
                <label for="floatingInputValue">手機</label>
              </div>
              <div class="address form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="address"
                  v-model="user1.address"
                />
                <label for="floatingInputValue"
                  ><h5>地址</h5>
                  <p>不是必填</p></label
                >
              </div>
            </form>
            <div class="button">
              <button
                type="button"
                class="btn btn-secondary"
                @click="this.mod5.hide()"
              >
                取消
              </button>
              <button
                type="button"
                class="btn btn-primary"
                :disabled="vy1 == true || vy2 == true"
                @click="edit()"
              >
                編輯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <toastall></toastall>
</template>
<script>
import modal from "../../node_modules/bootstrap/js/dist/modal";
import toastall from "../components/ToastsAll.vue";
export default {
  inject: ["mitter"],
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      user1: {
        name: "",
        mail: "",
        phone1: "",
        address: "",
        title: "1",
        category: "1",
        unit: "1",
        price: 1,
        origin_price: 1,
        is_enabled: 1,
        shoppingcart: [],
        Order: [],
        coupon: [],
        journey: [],
      },
      swd: false,
      vy1: true,
      vy2: true,
      mod4: {},
      mod5: {},
      Certification: false,
      isload: false,
      old: "",
    };
  },
  props: ["ssg"],
  components: {
    toastall,
  },
  mounted() {
    this.mod4 = new modal(this.$refs.mod4);
    this.mod5 = new modal(this.$refs.mod5);
  },
  methods: {
    show() {
      this.mod4.show();
    },
    show5() {
      this.mod5.show();
    },
    login() {
      console.log(this.user.username);
      console.log(this.user.password);
      this.isload = true;
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user).then((e) => {
        const { expired, token, message } = e.data;
        console.log(e, message, 555555555);
        document.cookie = `member = ${token};expires = ${new Date(expired)}`;
        this.isload = false;
        if (e.data.success) {
          this.mitter.emit("test", {
            style: "rgb(0, 187, 93)",
            success: "登入成功",
          });
          this.Certification = true;
          this.$emit("reg");
          this.$emit("Logmemberin", this.Certification);
          this.mod4.hide();
        } else {
          this.mitter.emit("test", {
            style: "rgb(230, 57, 57)",
            success: "登入失敗",
            message: "帳號或密碼錯誤",
          });
        }
      });
      this.user.username = "";
      this.user.password = "";
    },
    ss() {
      let regex =
        /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (regex.test(this.user.username)) {
        this.swd = false;
      } else {
        this.swd = true;
      }
    },
    mailVerify() {
      let regex =
        /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (regex.test(this.user1.mail)) {
        this.vy1 = false;
      } else {
        this.vy1 = true;
        console.log(typeof this.user1.mail);
      }
    },
    register() {
      this.isload = true;
      const api = `${process.env.VUE_APP_API}api/testrunapi/admin/product`;
      this.$http.post(api, { data: this.user1 }).then((e) => {
        this.$emit("reg");
        console.log(e);
        this.isload = false;
        this.mod5.hide();
      });
    },
    edit() {
      this.isload = true;
      const api = `${process.env.VUE_APP_API}api/testrunapi/admin/product/${this.user1.id}`;
      this.$http.put(api, { data: this.user1 }).then((e) => {
        console.log(e);
        this.isload = false;
        this.mod5.hide();
      });
    },
  },
  watch: {
    user1: {
      handler(o) {
        let regex = /([^0-9])+$/;
        if (regex.test(this.user1.phone1)) {
           this.user1.phone1 =  this.old.phone1;
        }
        regex = /^(?=.{10}$)((09)+([0-9]))/;
        if (regex.test(this.user1.phone1)) {
          this.vy2 = false;
        } else {
          this.vy2 = true;
        }
        regex = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(this.user1.mail)) {
          this.vy1 = false;
        } else {
          this.vy1 = true;
        }
        this.old = JSON.parse(JSON.stringify(o));
      },
      deep: true,
    },
  },
};
</script>
<style scoped lang="scss">
.login {
  form {
    .email {
      margin-bottom: 0.5rem;
    }
    .password {
      margin-bottom: 0.5rem;
    }
    .sub {
      padding: 1rem;
    }
  }
}
.modal {
  .modal-dialog {
    .modal-content {
      .modal-body {
        .bodytext {
          padding: 1rem;
          .title {
            width: 100%;
            display: flex;
            justify-content: center;
            h5 {
              font-size: 1.4rem;
              font-weight: 600;
            }
          }
          form {
            padding: 1rem;
            .form-floating {
              margin-bottom: 1rem;
            }
            .phone {
              input[type="number"]::-webkit-outer-spin-button,
              input[type="number"]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }
            .address {
              label {
                width: 100%;
                display: flex;
                justify-content: space-between;
                p {
                  font-size: 0.5rem;
                  color: rgb(19, 163, 50);
                }
              }
            }
          }
          .button {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            .btn-primary {
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
