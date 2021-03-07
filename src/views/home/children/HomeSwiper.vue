<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper">
      <!-- slides -->
      <swiper-slide
        ><img
          src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/161985/22/9240/98037/60409a82Ed23fd025/9aaec853d3ffbf12.jpg!q70.jpg.dpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/36958/34/5025/100639/5cbf5749Ee9fcfb22/b6eb36331095813a.jpg!cr_1125x445_0_171!q70.jpg.dpg"
          alt=""
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
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          bulletElement: "span",
        },
        reverseDirection: true,
      },
    };
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