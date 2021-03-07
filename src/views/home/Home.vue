<template>
  <div class="home">
    <tit></tit>
    <home-swiper />
  </div>
</template>


<script>
import tit from "./children/Title";
import homeSwiper from "./children/HomeSwiper";
export default {
  components: {
    tit,
    homeSwiper,
  },
};
</script>

<style lang="less" scoped>
</style>