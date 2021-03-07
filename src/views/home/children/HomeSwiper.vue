<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper">
      <!-- slides -->
      <swiper-slide
        ><img
          src="//imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="//imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg"
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