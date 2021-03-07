<template>
  <div class="icons">
    <swiper>
      <swiper-slide class="swiper" v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" class="icon-img-content" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  computed: {
    pages() {
      // 创建接收数据数组
      const pages = [];
      //   循环定义好的数据数组
      this.iconList.forEach((item, index) => {
        //   定义数组内数据的位数，八个为一组
        const page = Math.floor(index / 8);
        // 判断当前数据对应的数组是否存在
        if (!pages[page]) {
          //不存在就创建
          pages[page] = [];
        }
        //存在就添加
        pages[page].push(item);
      });
      return pages;
    },
  },
  props: {
    iconList: {
      type: Array,
      default: [],
    },
  },
};
</script>


<style lang="less" scoped>
@import "~@/assets/styles/ellipsis.less";
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-top: 0.1rem;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: #333;
      text-align: center;
      .ellipsis();
    }
  }
}
</style>