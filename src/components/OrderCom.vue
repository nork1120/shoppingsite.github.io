<template>
  <div class="cont">
    <div class="titl">
      <h1>2.訂單確認</h1>
    </div>
    <div class="main">
      <div class="compendium">
        <div class="comtitl">
          <h1>商品</h1>
        </div>
        <div class="comtext">
          <div class="img">
            <img
              src="../imgoricons/海釣行程/螢幕快照-2019-04-16-下午12.25.23-768x487.png"
            />
          </div>
          <div class="text">
            <div class="left">
              <h1>蘇花粉鳥林漁港</h1>
              <p>釣竿租借 2隻</p>
              <p>漁具租借 2組</p>
            </div>
            <div class="rigth">
              <div class="quantity">
                <h1>數量</h1>
                <p>1</p>
              </div>
              <div class="amount">
                <h1>1600</h1>
                <p>元</p>
              </div>
            </div>
          </div>
        </div>
        <div class="all">
          <div class="all_1">
            <b>總金額</b>
          </div>
          <div class="all_2">
            <h6>1600</h6>
            <p>元</p>
          </div>
        </div>
      </div>
      <div class="combutton">
        <div class="comtitl">
          <h4>訂單</h4>
        </div>
        <div class="comtext">
          <div class="text name">
            <h4>姓名</h4>
            <h4>傻B凱</h4>
          </div>
          <div class="text email">
            <h4>電子信箱</h4>
            <h4>sadw151@gmail.com</h4>
          </div>
          <div class="text liaison">
            <h4>聯絡方式</h4>
            <h4>0956231854</h4>
          </div>
          <div class="text payment">
            <h4>付款方式</h4>
            <h4>信用卡</h4>
          </div>
          <div class="text money">
            <h4>金額</h4>
            <h4 class="green">$1,600</h4>
          </div>
          <div class="text state">
            <h4>付款狀態</h4>
            <h4 class="red">未付款</h4>
          </div>
          <div class="text address">
            <h4>地址</h4>
            <h4>屏東縣東港鎮鎮海裡63號</h4>
          </div>
          <div class="message">
            <h4>留言</h4>
            <p>嗨你好</p>
          </div>
        </div>
        <div class="button">
          <button type="button">確定付款</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.cont {
  width: 42%;
  .titl {
    margin-top: 8rem;
    margin-bottom: 2rem;
    width: 100%;
    h1 {
      text-align: center;
      font-size: 2.3rem;
      color: #eb2929;
    }
  }
  .main {
    width: 100%;
    .compendium {
      width: 100%;
      .comtitl {
        width: 100%;
        padding: 1rem;
        background: #feecec;
        h1 {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
      .comtext {
        border-bottom: black solid 1px;
        width: 100%;
        display: flex;
        .img {
          width: 35%;
          img {
            background: url("../imgoricons/海釣行程/螢幕快照-2019-04-16-下午12.25.23-768x487.png")
              no-repeat center center;
            background-size: cover;
            width: 100%;
            height: 0;
            padding-top: 50%;
          }
        }
        .text {
          width: 65%;
          display: flex;
          .left {
            width: 50%;
            padding: 0.6rem;
            h1 {
              font-size: 1.6rem;
              font-weight: 900;
              color: #d43030;
            }
            p {
              margin-top: 1rem;
              font-weight: 600;
              color: #000;
            }
          }
          .rigth {
            width: 50%;
            padding: 0.6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-weight: 600;
            .quantity {
              width: 100%;
              display: flex;
              font-size: 1.2rem;
              h1 {
                width: 100%;
                text-align: end;
              }
              p {
                color: #ed1e1e;
              }
            }
            .amount {
              width: 100%;
              display: flex;
              margin-bottom: 1rem;
              h1 {
                font-size: 1.2rem;
                width: 100%;
                text-align: end;
                color: #1aaf67;
              }
              p {
                font-size: 1.2rem;
              }
            }
          }
        }
      }
      .all {
        display: flex;
        font-size: 1.8rem;
        font-weight: 600;
        justify-content: space-between;
        padding: 1rem;
        b {
          color: #d43030;
        }
        .all_2 {
          display: flex;
          h6 {
            color: #1aaf67;
          }
        }
      }
    }
    .combutton {
      width: 100%;
      .comtitl {
        width: 100%;
        background: #feecec;
        padding: 1rem;
        h4 {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
      .text {
        display: flex;
        border-bottom: #a9a9a9 solid 1px;
        padding: 0.5rem;
        h4 {
          font-size: 1.2rem;
          font-weight: 600;
          width: 50%;
        }
        .green {
          color: #1aaf67;
        }
        .red {
          color: #d31e1e;
        }
      }
      .message {
        padding: 0.5rem;
        font-size: 1.2rem;
        font-weight: 600;
        p {
          margin-top: 1.6rem;
          color: #676767;
        }
      }
      .button {
        display: flex;
        justify-content: center;
        margin: 2rem 0 2rem 0;
        button {
          border: none;
          background: #249e30;
          color: rgb(255, 255, 255);
          padding: 0.5rem;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 0.3rem;
        }
      }
    }
  }
}
</style>
