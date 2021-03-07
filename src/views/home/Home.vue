<template>
  <div class="home">
    <tit></tit>
    <home-swiper />
    <icons />
  </div>
</template>


<script>
import tit from "./children/Title";
import homeSwiper from "./children/HomeSwiper";
import icons from "./children/icons";
export default {
  components: {
    tit,
    homeSwiper,
    icons,
  },
};
</script>

<style lang="less" >
@import "~@/assets/styles/varibles.less";
</style>