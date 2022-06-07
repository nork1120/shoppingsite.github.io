<template>
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
        <button class="btn btn-success" @click.prevent="login">送出</button>
      </div>
    </form>
  </div>
  <toastall></toastall>
</template>

<script>
import toastall from "../components/ToastsAll.vue";
export default {
  inject:["mitter"],
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      swd: false,
    };
  },components:{
    toastall
  },
  methods: {
    login() {
      console.log(this.user.username);
      console.log(this.user.password);
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user).then((e) => {
        
        const { expired, token, message } = e.data;
        console.log(e, message);
        document.cookie = `hihi = ${token};expires = ${new Date(expired)}`;
        if(e.data.success){
          this.mitter.emit("test", {
          style: "rgb(0, 187, 93)",
          success: "登入成功",
        });
        this.$router.push("/LoginOK")
        }else{
          this.mitter.emit("test", {
          style: "rgb(230, 57, 57)",
          success: "登入失敗",
          message:"帳號或密碼錯誤"
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
  },
};
</script>

<style scoped  lang="scss">
.login {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  form {
    width: 30%;
    .email {
      width: 100%;
      margin-bottom: 2rem;
    }
    .sub {
      margin-top: 1rem;
      display: flex;
      flex-direction: row-reverse;
    }
  }
}
</style>