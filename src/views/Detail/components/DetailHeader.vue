<template>
  <div class="div">
    <div class="detail-header">
      <div class="banner" @click="displayG">
        <img
          src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
          alt=""
          class="banner-img"
        />
      </div>
      <div class="info">
        <p>大连圣亚海洋世界(AAAA景区)</p>
        <div class="right">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <gallery v-show="isGallery" @hideG="hideG" :gallery="gallery" />
  </div>
</template>


<script>
import gallery from "../../../components/Gallery/Gallery";
import axios from "axios";
export default {
  data() {
    return {
      isGallery: false,
      gallery: [],
    };
  },
  components: {
    gallery,
  },
  methods: {
    displayG() {
      this.isGallery = true;
    },
    hideG() {
      this.isGallery = false;
    },
  },
  mounted() {
    // 获取画廊图片数据
    axios.get("/mock/detail.json").then((res) => {
      res = res.data;
      if (res.ret && res.data) {
        this.gallery = res.data.gallaryImgs;
      }
    });
  },
};
</script>


<style lang="less" scoped>
.banner {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  .banner-img {
    width: 100%;
    vertical-align: middle;
  }
}
.info {
  position: relative;
  display: flex;
  color: white;
  height: 0.3rem;
  line-height: 0.3rem;
  padding-left: 0.2rem;
  padding-top: 0.02rem;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.2)
  );
  p {
    flex: 1;
    font-size: 0.25rem;
  }
  .right {
    position: absolute;
    bottom: 0;
    right: 0.2rem;
    width: 1.3rem;
    text-align: center;
    background-color: black;
    border-radius: 0.2rem;
    .banner-icon {
      font-size: 0.25rem;
    }
  }
}
</style>