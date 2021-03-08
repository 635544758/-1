<template>
  <div class="city-header">
    <div class="city-left iconfont back-icon" @click="goBack">&#xe624;</div>
    城市选择
  </div>
</template>



<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/varibles.less";
.city-header {
  position: relative;
  background-color: @color;
  line-height: 0.86rem;
  height: 0.86rem;
  text-align: center;
  color: white;
  font-size: 0.28rem;
  .city-left {
    position: absolute;
    left: 0.2rem;
    top: 0;
  }
}
</style>