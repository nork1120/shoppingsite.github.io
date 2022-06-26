<template>
  <div class="wrap">
    <div class="titl">
      <h1>海釣行程</h1>
    </div>
  </div>
  <div class="content">
    <div class="cont_rigth">
      <div class="contr1">
        <div>
          <h1 class="totl">全部</h1>
          <h1>釣桿</h1>
          <h1>捲線器</h1>
          <h1>釣魚燈/魚鉤</h1>
          <h1>假餌/冰桶</h1>
          <h1>冰桶</h1>
          <h1>釣魚夾克</h1>
          <h1 class="end">漁夫帽</h1>
        </div>
      </div>
      <div class="contr2">
        <img
          src="../imgoricons/0hIbX082IzFk1lSQCr3AZpGjcUCjwNP09aGnEMbxIMVipNKllPCixcKxAdSS9LLlFMUCxeI0BNTy5LcFcfDSxcRUFJSntPcVETDSpZKEdADXwdKgROCi5Q.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="cont_left">
      <div class="context">
        <div class="commodity">
          <div class="img">
            <img
              src="../imgoricons/海釣商品/釣桿/6f7946cffc681959873eaea32d893a2f.jpg"
              alt=""
            />
          </div>
          <div class="text">
            <div class="text_left">
              <h1>【職業釣魚人】台灣現貨優惠價</h1>
            </div>
            <div class="text_rigth">
              <div class="text_rigth3">
                <h1>七日可免費退費</h1>
              </div>
              <div class="text_rigth1">
                <button type="button">預定</button>
              </div>
            </div>
            <div class="money">
              <h1 class="price">TWD $1600</h1>
              <h1 class="original">TWD $2200</h1>
            </div>
          </div>
        </div>
        <div class="commodity">
          <div class="img">
            <img
              src="../imgoricons/海釣商品/釣桿/6f7946cffc681959873eaea32d893a2f.jpg"
              alt=""
            />
          </div>
          <div class="text">
            <div class="text_left">
              <h1>【職業釣魚人】台灣現貨優惠價</h1>
            </div>
            <div class="text_rigth">
              <div class="text_rigth3">
                <h1>七日可免費退費</h1>
              </div>
              <div class="text_rigth1">
                <button type="button">預定</button>
              </div>
            </div>
            <div class="money">
              <h1 class="price">TWD $1600</h1>
              <h1 class="original">TWD $2200</h1>
            </div>
          </div>
        </div>
        <div class="commodity">
          <div class="img">
            <img
              src="../imgoricons/海釣商品/釣桿/6f7946cffc681959873eaea32d893a2f.jpg"
              alt=""
            />
          </div>
          <div class="text">
            <div class="text_left">
              <h1>【職業釣魚人】台灣現貨優惠價</h1>
            </div>
            <div class="text_rigth">
              <div class="text_rigth3">
                <h1>七日可免費退費</h1>
              </div>
              <div class="text_rigth1">
                <button type="button">預定</button>
              </div>
            </div>
            <div class="money">
              <h1 class="price">TWD $1600</h1>
              <h1 class="original">TWD $2200</h1>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.wrap {
  .titl {
    background: no-repeat center / contain;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: multiply;
    background-image: url("../imgoricons/pexels-cottonbro-48222371.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    padding: 7rem;
    h1 {
      font-size: 4rem;
      color: rgb(255, 255, 255);
    }
  }
}
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  .cont_rigth {
    width: 10%;
    .contr1 {
      width: 68%;
      margin-bottom: 13rem;
      div {
        padding: 1rem 0 5rem 0;
        border-right: #ff6c6c solid 7px;
        .totl {
          text-align: center;
          color: #055cac;
          border-bottom: #055cac solid 1px;
          margin-bottom: 4rem;
        }
        h1 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
          margin-right: 1rem;
        }
        .end {
          margin-bottom: 0;
        }
      }
    }
    .contr2 {
      margin-bottom: 3rem;
      img {
        width: 80%;
      }
    }
  }
  .cont_left {
    width: 80%;
    padding: 3rem;
    .context {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .commodity {
        display: flex;
        width: 30%;
        margin-bottom: 5rem;
        margin-left: 1rem;
        .img {
          width: 55%;
          position: relative;
          filter: drop-shadow(0px 1px 12px #000000);
          z-index: 0;
          img {
            height: 100%;
            object-fit: cover;
          }
        }
        .text {
          width: 45%;
          position: relative;
          z-index: 1;
          background-color: white;
          padding: 1rem;
          .text_left {
            h1 {
              font-size: 1.2rem;
              font-weight: 600;
            }
          }
          .text_rigth {
            margin-top: 1rem;
            .text_rigth1 {
              display: flex;
              flex-direction: row-reverse;
              margin-top: 2rem;
              button {
                background: white;
                padding: 0.8rem 2rem 0.8rem 2rem;
                border: #5bafd3 solid 2px;
                color: #0098d9;
                font-weight: 600;
                filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
              }
            }
            .text_rigth3 {
              background: #f96868;
              padding: 0.2rem 1.2rem 0.2rem 1.2rem;
              border-radius: 7px;
              margin-right: 0.2rem;
              margin-top: 0.3rem;
              h1 {
                text-align: center;
                font-size: 0.8rem;
                color: rgb(255, 255, 255);
              }
            }
          }
          .money {
            margin-top: 1rem;
            h1 {
              font-size: 1.4rem;
              font-weight: 600;
              text-align: end;
            }
            .original {
              color: #a9a9a9;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>