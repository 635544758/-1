<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="cityList">
        <span class="c-title">当前城市</span>
        <div class="warpper">
          <span class="w-bot">{{ this.$store.state.city }}</span>
        </div>
      </div>
      <div class="cityList">
        <span class="c-title">热门城市</span>
        <div class="warpper">
          <span
            class="w-bot"
            v-for="item in hotCities"
            :key="item.id"
            @click="transferCity(item.name)"
            >{{ item.name }}</span
          >
        </div>
      </div>
      <div class="cityList" v-for="(val, key) in cities" :key="key">
        <span class="c-title" :ref="key">{{ key }}</span>
        <ul class="c-list" v-for="item in val" :key="item.id">
          <li @click="transferCity(item.name)">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    //   创建插件实例对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
    });
  },
  props: {
    cities: {
      type: Object,
      default: {},
    },
    hotCities: {
      type: Array,
      default: [],
    },
    letter: String,
  },
  watch: {
    letter() {
      if (this.letter) {
        //   根据右侧点击传进来对应的字母
        let letter = this.letter;
        // 使用插件的方法，跳转到对应的DOM元素位置
        this.scroll.scrollToElement(this.$refs[letter][0]);
      }
    },
  },
  methods: {
    transferCity(city) {
      // 点击更换城市
      this.$store.commit("setCity", city);
    },
  },
};
</script>


<style lang="less" scoped>
.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .cityList {
    .c-title {
      display: block;
      line-height: 0.46rem;
      height: 0.46rem;
      background-color: #ececec;
    }
    .warpper {
      padding: 0.2rem;
      .w-bot {
        display: inline-block;
        font-size: 0.25rem;
        padding: 0.05rem 0.4rem;
        border-radius: 0.05rem;
        border: 1px solid #ccc;
        margin: 0 0.15rem 0.25rem 0;
      }
    }
    .c-list {
      li {
        font-size: 0.25rem;
        padding: 0.2rem;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>