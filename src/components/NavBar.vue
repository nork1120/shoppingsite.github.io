<template>
  <nav class="navbar navbar-expand-lg">
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
          <li class="nav-item n2">
            <router-link class="nav-link" to="/seafishing"
              >海釣行程</router-link
            >
          </li>
          <li class="nav-item n3">
            <router-link class="nav-link" to="/CommoDity">海釣商品</router-link>
          </li>
          <li class="nav-item n4">
            <a class="nav-link" href="#">常見問題</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  inject: ["mitter"],
  data() {
    return {
      sollY: 0,
      variety: 200,
    };
  },
  mounted() {
    let nav = document.querySelector(".navbar");
    let con = document.querySelector(".container-fluid");
    window.addEventListener(
      "scroll",
      throttle(() => {
        this.sollY = window.scrollY;
        if (this.variety < this.sollY) {
          nav.classList.add("newnav");
          con.classList.add("newcontainer-fluid");
        } else {
          nav.classList.remove("newnav");
          con.classList.remove("newcontainer-fluid");
        }
      })
    );
    function throttle(fn, time = 100) {
      let canRun = true;
      return function (...args) {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
          fn.apply(this, args);
          canRun = true;
        }, time);
      };
    }
    this.variety = 200;
    nav.classList.remove("manage");
    this.mitter.on("change", (e) => {
      this.variety = e;
      nav.classList.add("manage");
    });
  },
};
</script>
<style scoped lang="scss">
.manage {
  .navbar-nav {
    font-size: 1.3rem !important;
    font-weight: 600;
    .nav-item {
      margin-left: 2.3rem;
    }
    a {
      color: #384753 !important;
    }
    .n1 {
      a {
        color: #2a73b8 !important;
      }
    }
  }
}
.newnav {
  background-color: rgba(255, 255, 255, 0.904) !important;
  box-shadow: 0 0 3px 5px rgba(255, 255, 255, 0.904);
  .newcontainer-fluid {
    justify-content: space-between;
    .nas {
      margin-left: 1rem;
      .navbar-brand {
        img {
          width: 65% !important;
        }
      }
    }
    .collapse {
      flex-direction: row-reverse;
      margin-right: 2rem;
      .navbar-nav {
        font-size: 1.3rem !important;
        font-weight: 600;
        .nav-item {
          margin-left: 2.3rem;
        }
        a {
          color: #384753 !important;
        }
        .n1 {
          a {
            color: #2a73b8 !important;
          }
        }
      }
    }
  }
}
.navbar {
  width: 100%;
  position: fixed;
  transition: all 0.5s ease-in;
  top: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0);
  z-index: 2;
  padding: 0 !important;
  .container-fluid {
    justify-content: space-between;
    .nas {
      margin-left: 1rem;
      .navbar-brand {
        img {
          width: 100%;
          transition: all 0.5s ease-in;
        }
      }
    }
    .collapse {
      flex-direction: row-reverse;
      margin-right: 2rem;
      .navbar-nav {
        transition: all 0.5s ease-in;
        font-size: 1.4rem;
        font-weight: 600;
        .nav-item {
          margin-left: 2.3rem;
        }
        a {
          transition: all 0.5s ease-in;
          color: #eefdff;
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
