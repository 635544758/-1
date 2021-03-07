<template>
  <div class="home">
    <!-- 头部组件 -->
    <tit></tit>
    <!-- 轮播图组件 -->
    <home-swiper />
    <!-- 导航图标组件 -->
    <icons />
    <!-- 推荐组件 -->
    <recommend />
    <!-- 周末去哪组件 -->
    <weeken />
  </div>
</template>


<script>
import tit from "./children/Title";
import homeSwiper from "./children/HomeSwiper";
import icons from "./children/icons";
import recommend from "./children/Recommend";
import weeken from "./children/Weekend";

export default {
  components: {
    tit,
    homeSwiper,
    icons,
    recommend,
    weeken,
  },
};
</script>

<style lang="less" >
@import "~@/assets/styles/varibles.less";
</style>