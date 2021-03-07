<template>
  <div class="recommend">
    <div class="infos">
      <div class="title">热销推荐</div>
      <div class="info" v-for="obj in recommendList" :key="obj.id">
        <div class="info-left">
          <img :src="obj.imgUrl" alt="" class="info-img" />
        </div>
        <div class="info-right">
          <p class="info-title">{{ obj.title }}</p>
          <p class="info-content">{{ obj.desc }}</p>
          <button class="info-btn">查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: {
    recommendList: {
      type: Array,
      default: [],
    },
  },
};
</script>


<style lang="less" scoped>
.recommend {
  .title {
    font-size: 0.25rem;
    background-color: #ececec;
    padding: 0.2rem 0 0.2rem 0.2rem;
    font-weight: 700;
  }
  .info {
    display: flex;
    padding-left: 0.2rem;
    box-sizing: border-box;
    padding-top: 0.15rem;
    .info-left {
      width: 1.8rem;
      height: 1.5em;
      .info-img {
        width: 100%;
        height: 1.5rem;
      }
    }
    .info-right {
      flex: 1;
      padding-left: 0.2rem;
      border-bottom: 2px solid #f9f9f9;
      .info-title {
        font-size: 0.25rem;
        font-weight: 700;
        padding-top: 0.1rem;
      }
      .info-content {
        font-size: 0.2rem;
        padding: 0.3rem 0 0.2rem 0;
        color: #ccc;
      }
      .info-btn {
        font-size: 0.2rem;
        padding: 0 0.2rem;
        margin-bottom: 0.1rem;
        background-color: #fd8801;
        color: white;
        border-radius: 5px;
      }
    }
  }
}
</style>