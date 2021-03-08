<template>
  <div class="home">
    <!-- 头部组件 -->
    <tit></tit>
    <!-- 轮播图组件 -->
    <home-swiper :swiperList="swiperList" />
    <!-- 导航图标组件 -->
    <icons :iconList="iconList" />
    <!-- 推荐组件 -->
    <recommend :recommendList="recommendList" />
    <!-- 周末去哪组件 -->
    <weeken :weekendList="weekendList" />
  </div>
</template>


<script>
import tit from "./children/Title";
import homeSwiper from "./children/HomeSwiper";
import icons from "./children/icons";
import recommend from "./children/Recommend";
import weeken from "./children/Weekend";
import axios from "axios";

export default {
  components: {
    tit,
    homeSwiper,
    icons,
    recommend,
    weeken,
  },
  data() {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
    };
  },
  mounted() {
    axios.get("/mock/index.json").then((res) => {
      // 请求本地json文件内的数据，传递给对应的子组件
      this.iconList = res.data.data.iconList;
      this.recommendList = res.data.data.recommendList;
      this.swiperList = res.data.data.swiperList;
      this.weekendList = res.data.data.weekendList;
    });
  },
};
</script>

<style lang="less" >
@import "~@/assets/styles/varibles.less";
</style>