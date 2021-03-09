<template>
  <div class="tit">
    <div class="h-left iconfont back-icon">&#xe624;</div>
    <div class="h-center">
      <span class="iconfont search">&#xe632;</span>
      <input type="text" placeholder="输入城市/景点游玩主题" />
    </div>
    <router-link to="/City">
      <div class="h-right">
        {{ this.$store.state.city
        }}<span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  created() {
    console.log(this.$router);
  },
  methods: {},
};
</script>


<style lang="less" scoped>
@import "~@/assets/styles/varibles.less";
.tit {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: @color;
  color: #fff;
  .h-left {
    text-align: right;
    font-size: 0.35rem;
    width: 0.64rem;
    float: left;
  }
  .h-center {
    position: relative;
    flex: 1;
    height: 0.7rem;
    margin: 0.09rem 0 0 0.2rem;
    line-height: 0.7rem;
    background-color: #fff;
    border-radius: 0.3rem;
    color: #999;
    padding-left: 0.3rem;
    input {
      box-sizing: border-box;
      width: 100%;
      height: 0.64rem;
      color: #ccc;
      font-size: 14px;
      padding: 0 0 0.1rem 0.45rem;
      border-radius: 0.3rem;
      vertical-align: middle;
    }
    .search {
      position: absolute;
      top: -1px;
      left: 0.06rem;
      font-size: 0.4rem;
      padding-left: 0.2rem;
    }
  }
  .h-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    font-size: 0.24rem;
    color: white;
    .arrow-icon {
      font-size: 0.2rem;
    }
  }
}
</style>