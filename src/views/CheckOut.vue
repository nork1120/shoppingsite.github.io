<template>
  <div class="body">
    <div class="content">
      <div class="contop"><h1>1.資料填寫</h1></div>
      <div class="contbottom">
        <div class="left">
          <div class="enter">
            <div class="label">
              <h1>姓名</h1>
              <p>*</p>
            </div>
            <div class="fill"><input type="text" /></div>
          </div>
          <div class="enter">
            <div class="label">
              <h1>電子信箱</h1>
              <p>*</p>
            </div>
            <div class="fill"><input type="text" /></div>
          </div>
          <div class="enter">
            <div class="label">
              <h1>連絡電話</h1>
              <p>*</p>
            </div>
            <div class="fill"><input type="text" /></div>
          </div>
          <div class="enter menu">
            <div class="label">
              <h1>付款方式</h1>
              <p>*</p>
            </div>
            <div class="fill">
              <select name="付款方式">
                <option hidden>請選擇</option>
                <option value="貨到付款">貨到付款</option>
                <option value="信用卡">信用卡</option>
                <option value="比特幣">比特幣</option>
              </select>
            </div>
          </div>
          <div class="enter">
            <div class="label">
              <h1>地址</h1>
              <p>*</p>
            </div>
            <div class="fill"><input type="text" /></div>
          </div>
          <div class="enter">
            <div class="label">
              <h1>留言</h1>
              <p>*</p>
            </div>
            <div class="fill">
              <textarea cols="35" rows="10" style="resize: none"></textarea>
            </div>
            <div class="button"><button type="button">確定送出</button></div>
          </div>
        </div>
        <div class="rigth">
          <div class="rigth_titl">
            <div class="amount"><h1>訂單金額</h1></div>
            <div class="money">
              <h1>$2,200</h1>
              <p>元</p>
            </div>
          </div>
          <div class="rigth_titl payment">
            <div class="amount method">
              <h1>付款方式:</h1>
              <h2>線上支付</h2>
            </div>
            <div class="icons">
              <img src="../imgoricons/icon/visa.svg" alt="" />
              <img src="../imgoricons/icon/maestro.svg" alt="" />
              <img src="../imgoricons/icon/paypal.svg" alt="" />
              <img src="../imgoricons/icon//bitcoin.svg" alt="" />
            </div>
          </div>
          <div class="statement">
            <div class="title">
              <h1>信用卡付款聲明書</h1>
            </div>
            <div class="text">
              <h1>
                1.請輸入以上信用卡資料、以便於向發卡行取得交易授權。
                完成交易授權只是發卡行確認信用卡的有效性及授權交易
                額度，您的信用卡信用額度在交易金額範圍內會被保留，
                但不代表您的付款已經完成，這筆交易也還不會出現在您
                的信用卡帳單中。 2.如果您所訂購的商品仍有存貨、且交
                易條件經確認無誤，我們才會向發卡行請款，只有當我們
                收到信用卡交易款項時，您的付款程序才算完成。 3.為確
                保網路交易安全，您同意本公司得就此筆交易向發卡銀行、
                收單行及持卡人核對是否屬實；您所填寫的身份證字號、
                出生年月日資料，亦將於核對完成後刪除。
              </h1>
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
.body {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10rem 0 5rem 0;
  .content {
    width: 55%;
    margin-left: 5rem;
    .contop {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      h1 {
        font-size: 2.2rem;
        color: #eb2929;
      }
    }
    .contbottom {
      display: flex;
      width: 100%;
      .left {
        padding: 2rem 0 0 2rem;
        width: 40%;
        background: rgba(203, 203, 203, 0.3);
        .enter {
          width: 100%;
          margin-top: 1rem;
          .label {
            display: flex;
            h1 {
              font-size: 1.2rem;
              font-weight: 600;
            }
            p {
              color: rgb(255, 0, 0);
              font-weight: bold;
            }
          }
          .fill {
            width: 100%;
            margin-top: 0.5rem;
            input {
              width: 80%;
              font-size: 1.4rem;
              padding: 0.3rem 0 0.3rem 1rem;
            }
            select {
              width: 80%;
              font-size: 1.4rem;
              padding: 0.3rem 0 0.3rem 1rem;
              font-weight: 600;
            }
          }
          .button {
            width: 80%;
            display: flex;
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 3rem;
            button {
              background: rgba(5, 18, 68, 1);
              color: rgb(255, 255, 255);
              width: 50%;
              border: none;
              font-size: 1.2rem;
              font-weight: 600;
              padding: 0.5rem 2rem 0.5rem 2rem;
            }
          }
        }
      }
      .rigth {
        width: 50%;
        padding: 1rem 1rem 1rem 3.5rem;
        .rigth_titl {
          width: 90%;
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: rgba(234, 155, 63, 1) solid 3px;
          .amount {
            font-size: 1.6rem;
            color: #7b7a7a;
            font-weight: 600;
          }
          .money {
            font-size: 1.6rem;
            display: flex;
            margin-right: 1rem;
            h1 {
              color: #459d43;
            }
          }
        }
        .payment {
          padding: 1rem 0rem 1rem 2.8rem;
          display: flex;
          flex-direction: column;
          .method {
            display: flex;
            font-size: 1.1rem;
            h2 {
              margin-left: 1rem;
              color: #ed3838;
            }
          }
          .icons {
            margin-top: 0.5rem;
            display: flex;
            img {
              margin-right: 1rem;
            }
          }
        }
        .statement {
          width: 90%;
          padding: 1rem;
          .title {
            padding: 0.5rem 0 1rem 1rem;
            font-size: 1.2rem;

            h1{
                font-weight: 600;
            }
          }
          .text {
            h1{
                line-height: 38px;
                color: #8d7d79;
                font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>