<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper" v-if="swiperList.length">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id"
        ><img :src="item.imgUrl" alt=""
      /></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      swiperOption: {
        // 插件自动轮播属性
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        // 无缝滚动
        loop: true,
        // 轮播图小点
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          bulletElement: "span",
        },
        reverseDirection: true,
      },
    };
  },
  props: {
    swiperList: {
      type: Array,
      default: [],
    },
  },
};
</script> 


<style lang="less" scoped>
.wrapper {
  .swiper {
    img {
      width: 100%;
    }
  }
  //穿透样式
  /deep/.swiper-pagination-bullet {
    background-color: white !important;
  }
}
</style>