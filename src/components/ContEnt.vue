<template>
  <div class="content">
    <div class="background"></div>
    <div class="context">
      <div class="ico" >
        <div class="ic icon1">
          <div class="img">
            <img src="../imgoricons/icon/pin-map.svg" alt="" />
          </div>
          <div class="text">
            <h1>選擇好出發的地方</h1>
            <h2>我們提供多樣的選擇，全台 各地都有合作廠商，供您挑 選。</h2>
          </div>
        </div>
        <div class="ic icon2">
          <img src="../imgoricons/icon/chevron-double-right.svg" alt="" />
        </div>
        <div class="ic icon1">
          <div class="img">
            <img src="../imgoricons/icon/calendar-check.svg" alt="" />
          </div>
          <div class="text">
            <h1>檢查好該帶的物品</h1>
            <h2>船長提供直接租借我們也提 供線上購買服務。</h2>
          </div>
        </div>
        <div class="ic icon2">
          <img src="../imgoricons/icon/chevron-double-right.svg" alt="" />
        </div>
        <div class="ic icon1">
          <div class="img">
            <img src="../imgoricons/icon/check-lg.svg" alt="" />
          </div>
          <div class="text">
            <h1>檢查好該帶的物品</h1>
            <h2>船長提供直接租借我們也提 供線上購買服務。</h2>
          </div>
        </div>
      </div>
      <div class="introduce">
        <div
          class="intleft"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div class="inin intr1">
            <div class="intrimg">
              <img src="../imgoricons/okDSC01568.jpg" alt="" />
            </div>
            <div class="intrtext">
              <h1
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                海釣體驗介紹
              </h1>
              <h2
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                快跟我們一起出發海上釣魚/夜釣小管，嚴選全台六種海釣以
                及夜釣體驗，提供合法安全的船隻以及免裝備服務，讓旅客
                們第一次體驗海釣或夜釣也能輕鬆入門，海釣/夜釣包含基隆
                花蓮、綠島以及澎湖等地區，讓您享受全台海釣活動不用四 處找。
              </h2>
            </div>
          </div>
        </div>
        <div
          class="intright"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div class="inin intr2">
            <div class="intrimg">
              <img src="../imgoricons/1619309325-2444395088-g.jpg" alt="" />
            </div>
            <div class="intrtext">
              <h1
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                綠島夜釣小管拖釣
              </h1>
              <h2
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                大家知道去綠島除了泡溫泉、探索綠島燈塔和來一趟機車環
                島，還有什麼是您一定不能錯過的呢？這次我們前進綠島海
                釣去，傍晚就登船準備出發囉！今晚的海釣目標有：鮪魚、
                鰹魚、小管或魷魚。。
              </h2>
            </div>
          </div>
        </div>
        <div
          class="intleft"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div class="inin intr1 in3">
            <div class="intrimg">
              <img src="../imgoricons/2020062315929030106563881.jpg" alt="" />
            </div>
            <div class="intrtext">
              <h1
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                現釣現吃 & 海鮮BBQ吃到飽
              </h1>
              <h2
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                當天會有廚師現場料理現釣海鮮，超新鮮現切野生紅甘生魚
                片、烤魚下巴、魚肚、烤透抽、咖哩椰漿孔雀蛤、石花凍飲、
                水果、啤洒一箱，飲料暢飲海鮮料理讓大家享用，邊吃美食
                邊欣賞海上美景。
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
export default {
  mounted() {
    AOS.init();
  },
};
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  background: #8fa8af;
  height: 210vh;
  .background {
    width: 100%;
    height: 100vh;
    background: no-repeat center / contain;
    background-image: url("../imgoricons/pexels-nirmal-rajendharkumar-3030015.jpg");
    background-size: cover;
    opacity: 15%;
    position: fixed;
    top: 0;
  }
  .context {
    position: relative;
    .ico {
      height: 16rem;
      background: rgba(24, 174, 207, 0.62);
      margin-bottom: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .ic {
        display: flex;
        .img {
          img {
            width: 5rem;
          }
        }
        .text {
          width: 53%;
          h1 {
            color: #2b6d82;
            font-size: 1.3rem;
            font-weight: 600;
          }
          h2 {
            color: rgb(255, 255, 255);
            font-weight: 500;
          }
        }
      }
      .icon1 {
        width: 20%;
        .img {
          margin-right: 1rem;
        }
      }
      .icon2 {
        width: 10%;
      }
    }
    .introduce {
      width: 100%;
      .intleft {
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: 8rem;
      }
      .intright {
        display: flex;
      }
      .intr1 {
        width: 87%;
        display: flex;
        background: rgba(27, 102, 144, 0.8);
        padding: 2.5rem;
        .intrimg {
          width: 32%;
          margin-left: 10rem;
          img {
            object-fit: cover;
            width: 100%;
            height: 34vh;
          }
        }
        .intrtext {
          width: 35%;
          margin-left: 3rem;
          h1 {
            width: 100%;
            color: rgba(255, 255, 255, 0.932);
            text-align: end;
            font-size: 2.4rem;
            margin-bottom: 1rem;
          }
          h2 {
            width: 100%;
            font-size: 1.2rem;
            font-weight: 600;
            line-height: 50px;
            color: rgba(255, 255, 255, 0.856);
          }
        }
      }
      .intr2 {
        width: 87%;
        display: flex;
        flex-direction: row-reverse;
        background: rgba(17, 54, 74, 0.8);
        padding: 2.5rem;
        .intrimg {
          width: 32%;
          margin-right: 10rem;
          img {
            object-fit: cover;
            width: 100%;
            height: 34vh;
          }
        }
        .intrtext {
          width: 35%;
          margin-right: 3rem;
          h1 {
            width: 100%;
            color: rgba(255, 255, 255, 0.932);
            font-size: 2.4rem;
            margin-bottom: 1rem;
          }
          h2 {
            width: 100%;
            font-size: 1.2rem;
            font-weight: 600;
            line-height: 50px;
            color: rgba(255, 255, 255, 0.856);
          }
        }
      }
      .in3 {
        margin-top: 8rem;
        background: rgba(202, 182, 151, 0.8) !important;
        .intrtext {
          h1 {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>