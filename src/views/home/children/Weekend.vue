<template>
  <div class="recommend">
    <div class="infos">
      <div class="title">周末去哪儿</div>
      <div class="info" v-for="obj in weekendList" :key="obj.id">
        <div class="info-left">
          <img :src="obj.imgUrl" alt="" class="info-img" />
        </div>
        <div class="info-right">
          <p class="info-title">{{ obj.title }}</p>
          <p class="info-content">{{ obj.desc }}</p>
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
    weekendList: {
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
    box-sizing: border-box;
    .info-left {
      overflow: hidden;
      height: 0;
      padding-bottom: 37%;
      .info-img {
        width: 100%;
      }
    }
    .info-right {
      padding-left: 0.2rem;
      border-bottom: 2px solid #f9f9f9;
      .info-title {
        font-size: 0.25rem;
        font-weight: 700;
        padding-top: 0.2rem;
      }
      .info-content {
        font-size: 0.2rem;
        padding: 0.2rem 0 0.1rem 0;
        color: #ccc;
      }
    }
  }
}
</style>