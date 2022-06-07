<template>
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="tost"
  >
    <div class="toast-header" :style=" `background:${ssg.style}`">

      <strong class="me-auto" style="color:rgb(255, 255, 255)">{{ssg.success}}</strong>
      <small>11 mins ago</small>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body">{{ssg.message}}</div>
  </div>
</template>
<script>
import toast from "../../node_modules/bootstrap/js/dist/toast";
export default {
  data() {
    return {

    };
  },props:['ssg'],
  mounted() {
    const tostref = this.$refs.tost;
    const newtost = new toast(tostref);
    newtost.show();
  },
};
</script>