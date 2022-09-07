<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="discount"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">優惠卷</h5>
        </div>
        <div class="modal-body">
          <div class="bodytop">
            <h5>持有的優惠卷</h5>
          </div>
          <div class="bodyfor" v-for="se in DiscOunt" :key="se.couponID">
            <div class="titl">
              <h5>優惠{{se.money}}元</h5>
            </div>
            <div class="illustrate">
              <h5>使用後自動移除</h5>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="hide">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modal from "../../node_modules/bootstrap/js/dist/modal";
export default {
  inject: ["mitter"],
  data() {
    return {
      reco: {},
      DiscOunt: [],
    };
  },
  mounted() {
    this.reco = new modal(this.$refs.discount);
  },
  methods: {
    show() {
      this.reco.show();
    },
    hide() {
      this.reco.hide();
    },
  },
};
</script>
<style scoped lang="scss">
.modal {
  .modal-dialog {
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background: #106de6;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #104391;
    }
    .modal-content {
      height: 60vh;
      border-radius: 1.5rem;
      overflow: hidden;
      .modal-header {
        background-color: #feecec;
        display: flex;
        justify-content: center;
        align-items: center;
        h5 {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
      .modal-body {
        padding: 1rem 1.5rem 1rem 1.5rem;
        h5 {
          font-size: 1.4rem;
          font-weight: 600;
        }

        .bodytop {
          width: 100%;
          background-color: #f6efef;
          padding: 1.2rem;
        }
        .bodyfor {
          width: 100%;
          margin-top: 1.5rem;
          border-radius: 0.5rem;
          overflow: hidden;
          display: flex;
          .titl {
            width: 35%;
            background-color: #d86666;
            padding: 1rem;
            h5 {
              color: #fff;
              text-align: center;
            }
          }
          .illustrate {
            width: 65%;
            background-color: #dec5c5;
            padding: 1rem;
            h5 {
              color: #5a5252;
              text-align: center;
            }
          }
        }
      }
      .modal-footer {
        border: none;
        .btn {
          width: 30%;
          background-color: #e95c5c;
          border: none;
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
