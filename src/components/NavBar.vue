<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a
              v-if="verify == false"
              class="nav-link"
              href="#"
              @click.prevent="loin"
              >登入</a
            >
            <a v-else class="nav-link" href="#" @click.prevent="noin">登出</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="#" @click.prevent="obtain">產品列表</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      verify: false
    };
  },
  methods: {
    loin() {
       this.veri();
       this.$router.push("/Login")
    },noin(){
         const api = `${process.env.VUE_APP_API}logout`;
         this.$http.post(api).then(() => {
      this.veri();
    });
        
        this.$router.push("/")
    },veri(){
          var token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hihi\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.defaults.headers.common["Authorization"] = token;
    this.$http.post(api).then((e) => {
      this.verify = e.data.success;
    });
    },obtain(){
         var token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hihi\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.defaults.headers.common["Authorization"] = token;
    this.$http.post(api).then((e) => {
      if(e.data.success) {
          this.$router.push("/LoginOK/ObtAin")
      }else{
          this.$router.push("/Login")
      }
    });
    }
  },
  created() {
     this.veri();
  },
};
</script>