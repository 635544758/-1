<template>
  <div class="Cityright">
    <ul>
      <li
        @click="ckTab(item)"
        v-for="item in letters"
        :key="item"
        @touchstart="handlTouch"
        @touchmove="handlMove"
        @touchend="handlEnd"
        :ref="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTouch: false,
      startA: 0,
      timer: null,
    };
  },
  props: {
    cities: {
      type: Object,
      default: {},
    },
  },
  computed: {
    letters() {
      let letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }

      return letters;
    },
  },
  methods: {
    ckTab(key) {
      // 传递点击的字母给父组件，父组件再传递给list城市列表组件达到跳转目的
      this.$emit("change", key);
    },
    handlTouch() {
      // 手指触击屏幕标示为true用于计算滑动位置对应字母
      this.isTouch = true;
    },
    handlMove(e) {
      // 如果之前的操作还没有完成，那么取消上一次操作
      if (this.timer) {
        clearTimeout(this.timer);
      }
      //  如果上一次没有操作那么延迟20毫秒后开始下一次操作
      this.timer = setTimeout(() => {
        if (this.isTouch) {
          // 手指移动坐标减去头部高度，算出手指在容器内的坐标
          let touche = e.touches[0].clientY - 93;
          // 手指的坐标减去距离顶部的位置/字母的高度等于字母的下标
          let index = parseInt(Math.floor(touche - this.startA) / 24);
          // 下标不小于0且不小于数组长度
          if (index >= 0 && index < this.letters.length) {
            // 调用父组件的跳转事件，传出对应字母
            this.$emit("change", this.letters[index]);
          }
        }
      }, 20);
    },
    handlEnd() {
      this.isTouch = false;
    },
  },
  updated() {
    //  当页面进入运行阶段时候去获取A元素距离顶部的距离
    this.startA = this.$refs["A"][0].offsetTop;
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/varibles.less";
.Cityright {
  position: fixed;
  top: 54%;
  right: 0;
  transform: translateY(-50%);
  ul {
    li {
      padding: 0.07rem 0;
      color: @color;
    }
  }
}
</style>