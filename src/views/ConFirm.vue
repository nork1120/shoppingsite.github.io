<template>
  <div class="schedule">
    <div class="sc">
      <h1>填寫資料</h1>
      <h2>1.</h2>
    </div>
    <div class="sc">
      <h1>訂單確認</h1>
      <h2>2.</h2>
    </div>
    <div class="sc">
      <h1>付款完成</h1>
      <h2>3.</h2>
    </div>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.schedule {
  position: fixed;
  top: 36vh;
  .sc {
    margin-top: 5rem;
    width: 8vw;
    height: 5vh;
    background: #1d5575;
    border-radius: 0px 2rem 3px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: rgb(255, 255, 255);
      font-size: 1.2rem;
    }
    h2 {
      color: rgb(255, 255, 255);
      font-size: 1.4rem;
    }
    padding: 1rem;
    &:first-child {
      margin-top: 0;
    }
    &:nth-child(1) {
      border-radius: 0px 2.5rem 3px 0px;
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.8rem;
      }
      width: 11vw;
      height: 6vh;
      background: #0085ff;
    }
  }
}
.content {
  display: flex;
  justify-content: center;
}
</style>