<template>
  <div class="gallery" @click="hide">
    <div class="gallery-img">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in gallery" :key="item"
          ><img :src="item" alt=""
        /></swiper-slide>
        <div
          class="swiper-pagination gallery-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // swiper插件配置
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          bulletElement: "span",
        },
        observer: true,
        observeParents: true,
      },
    };
  },
  methods: {
    hide() {
      // 点击退出画廊模式
      this.$emit("hideG");
    },
  },
  props: {
    gallery: {
      type: Array,
      default: [],
    },
  },
};
</script>


<style lang="less" scoped>
/deep/.swiper-container {
  overflow: visible;
}
.gallery {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  .gallery-img {
    background-color: white;
    img {
      width: 100%;
    }
  }
  .gallery-pagination {
    transform: translateY(50px);
    color: white;
    font-size: 0.4rem;
  }
}
</style>