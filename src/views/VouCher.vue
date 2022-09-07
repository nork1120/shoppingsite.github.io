<template>
  <LoadIng :active="isload"></LoadIng>
  <div class="body">
    <div class="content">
      <table>
        <thead>
          <tr>
            <th class="th1">會員</th>
            <th class="th1">優惠卷ID</th>
            <th class="th1">優惠金額</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="se in thing" :key="se.uuid">
            <td class="name">{{ se.name }}</td>
            <td>{{ se.couponID }}</td>
            <td class="TWD">優惠{{ se.money }}元</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="bottom">
    <div class="apge">
      <paginat :paa="page" @pag="getdat"></paginat>
    </div>
  </div>
</template>
<script>
import paginat from "@/components/PagInat.vue";
export default {
  data() {
    return {
      thing: [],
      page: {},
      papa: 7,
      isload: false,
    };
  },
  components: {
    paginat,
  },
  methods: {
    getdat(page = 1) {
      this.isload = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.$http.get(api).then((e) => {
        this.thing = Object.values(e.data.products);
        this.thing = this.thing.filter((e) => {
          return e.category == "優惠劵訂單";
        });
        if (this.thing[0].coupon == undefined) {
          this.thing = [];
        } else {
          this.thing = this.thing[0].coupon;
        }
        this.isload = false;
        this.page.total_pages = Math.ceil(this.thing.length / this.papa);
        if (this.page.total_pages == 0) {
          this.page.total_pages = 1;
        }
        this.page.current_page = page;
        if (page == 1) {
          this.thing = this.thing.slice(0, 7);
          this.page.has_next = true;
          this.page.has_pre = false;
          if (this.page.total_pages == page) {
            this.page.has_next = false;
          }
        } else {
          this.thing = this.thing.slice(
            this.papa * (page - 1),
            this.papa * page
          );
          this.page.has_pre = true;
          this.page.has_next = true;
          if (this.page.total_pages == page) {
            this.page.has_next = false;
          }
        }
      });
    },
  },
  created() {
    this.getdat();
  },
};
</script>
<style scoped lang="scss">
.body {
  .content {
    table {
      width: 100%;
      thead {
        background-color: #f6efef;
        width: 100%;
        tr {
          th {
            padding: 1rem;
            width: 16%;
            font-size: 1.2rem;
            text-align: center;
            color: #000;
            font-weight: 600;
            background-color: #f6efef;
            position: sticky;
            top: -20px;
            z-index: 1;
          }
          .th1 {
            width: 30%;
          }
        }
      }
      tbody {
        tr {
          border-bottom: 1px solid #000;
          .name {
            color: #1a77ab;
          }
          .TWD {
            color: #1aaf67;
          }
          td {
            text-align: center;
            font-size: 1.2rem;
            font-weight: 600;
            padding: 1.8rem 0 1.8rem 0;
          }
        }
      }
    }
  }
}
.bottom {
  .apge {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
}
</style>
