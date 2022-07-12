<template>
  <div class="foot">
    <div class="backg"></div>
    <div class="text">
      <carousel></carousel>
      <div class="footText">
        <div class="superior">
          <div><h1>圖片來源pexels</h1></div>
          <div><h1>參考文獻維基百科</h1></div>
          <div><h1>並無商業用途</h1></div>
          <div><h1>作品展示</h1></div>
        </div>
        <div class="middle">
          <div>
            <h1>
              Thank you again for your time and consideration. I look forward to
              hearing from you.
            </h1>
          </div>
        </div>
        <div class="down">
          <div class="n1">
            <div><h1 class="h1">聯絡我們</h1></div>
            <div><h1 class="h2">市話:08-00437961</h1></div>
            <div><h1 class="h2">手機:09-73254827</h1></div>
            <div><h1 class="h2">地址:XXX-XXX-XXX</h1></div>
          </div>
          <div @click = "go" class="n2"><img src="../imgoricons/icon/logo.svg" alt="" /></div>
          <div class="n3">
            <div>
              <img src="../imgoricons/icon/icons8-facebook.svg" alt="" />
            </div>
            <div>
              <img src="../imgoricons/icon/icons8-instagram.svg" alt="" />
            </div>
            <div><img src="../imgoricons/icon/icons8-github.svg" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import carousel from "./CaroUsel.vue";
export default {
  components: {
    carousel,
  },methods:{
    go(){
      this.$router.push("/LoginOK/ObtAin")
      console.log(555);
    }
  }
};
</script>
<style scoped lang="scss">
.foot {
  width: 100%;
  background: #16324b;
  position: relative;
  .backg {
    width: 100%;
    height: 100%;
    background: no-repeat center / contain;
    background-image: url("../imgoricons/pexels-nguyen-hung-10107245.jpg");
    background-size: cover;
    opacity: 10%;
    position: absolute;
    pointer-events: none;
  }
  .text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .footText {
      width: 80%;
      height: 50%;
      div {
        h1 {
          padding: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: rgb(255, 255, 255);
        }
      }
      .superior {
        display: flex;
        justify-content: space-around;
        div {
          width: 20%;
          display: flex;
          justify-content: center;
          padding: 2rem;
          border-bottom: #275a7e solid 3px;
          h1 {
            font-size: 1rem;
          }
        }
      }
      .middle {
        div {
          display: flex;
          justify-content: center;
          border-bottom: #275a7e solid 3px;
          margin-top: 2rem;
          h1 {
            font-weight: 600;
          }
        }
      }
      .down {
        margin-top: 3rem;
        display: flex;
        justify-content: space-around;
        margin-bottom: 3rem;
        div {
          width: 30%;
          display: flex;
          justify-content: center;
        }
        .n1 {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          div {
            width: 100%;
            h1 {
              width: 60%;
              text-align: center;
            }
            .h1 {
              border-bottom: #275a7e solid 3px;
            }
            .h2 {
              border-bottom: #275a7e solid 1px;
            }
          }
        }
        .n3 {
          justify-content: center;
          div {
            img{
              width: 50%;
            }
          }
        }
      }
    }
  }
}
</style>