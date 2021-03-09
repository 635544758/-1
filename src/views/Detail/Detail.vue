<template>
  <div class="detail">
    <detail-back />
    <banner />
    <detail-link :lists="lists"></detail-link>
  </div>
</template>


<script>
import banner from "./components/DetailHeader";
import detailBack from "./components/DetailBack";
import DetailBack from "./components/DetailBack.vue";
import detailLink from "./components/Detail3";
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      gallery: [],
      lists: [],
    };
  },
  components: {
    banner,
    detailBack,
    DetailBack,
    detailLink,
  },
  mounted() {
    axios
      .get("/mock/detail.json", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => {
        res = res.data;
        this.lists = res.data.categoryList;
      });
  },
};
</script>


<style lang="less" scoped>
</style>