<template>
  <div class="detailBack">
    <div class="back-abs" @click="backAbs">
      <div class="h-left iconfont back-icon">&#xe624;</div>
    </div>
    <div class="cityDetails" v-show="isCity" :style="opacitys">
      <div class="city-left iconfont back-icon">&#xe624;</div>
      城市选择
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isCity: false,
      opacitys: {
        opacity: 1,
      },
    };
  },
  methods: {
    backAbs() {
      // 点击跳转回首页
      this.$router.push("/");
    },
    handlScroll() {
      if (window.pageYOffset > 60) {
        this.isCity = true;
        let opacity = window.pageYOffset / 140;

        opacity = opacity > 1 ? 1 : opacity;
        this.opacitys = { opacity };
      } else {
        this.isCity = false;
      }
    },
  },
  activated() {
    //   进入时加载全局滑动事件
    window.addEventListener("scroll", this.handlScroll);
  },
  deactivated() {
    //   离开时解除全局加载滑动事件
    window.removeEventListener("scroll", this.handlScroll);
  },
};
</script>


<style lang="less" scoped>
@import "~@/assets/styles/varibles.less";
.back-abs {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  font-size: 0.5rem;
  color: white;
  line-height: 0.8rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
.cityDetails {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: @color;
  font-size: 0.3rem;
  color: white;
  text-align: center;
  z-index: 999;
  .city-left {
    position: absolute;
    left: 0.2rem;
    top: 0;
  }
}
</style>