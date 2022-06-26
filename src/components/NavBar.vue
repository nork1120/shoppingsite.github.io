<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="nas">
        <a class="navbar-brand" href="#"
          ><img src="../imgoricons/icon/logo.svg" alt=""
        /></a>
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
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item n1">
            <a class="nav-link active" aria-current="page" href="#">首頁</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/seafishing">海釣行程</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/CommoDity">海釣商品</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">常見問題</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0) !important;
  z-index: 2;
  .container-fluid {
    justify-content: space-between;
    .nas {
      margin-left: 1rem;
    }
    .collapse {
      flex-direction: row-reverse;
      margin-right: 2rem;
      ul {
        li {
          margin-left: 2.3rem;
          a {
            font-size: 1.6rem;
            font-weight: 500;
            color: #eefdff;
          }
        }
        .n1 {
          a {
            color: #328bdc;
          }
        }
      }
    }
  }
}
</style>