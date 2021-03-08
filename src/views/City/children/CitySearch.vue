<template>
  <div class="citySearch">
    <div class="search">
      <input type="text" placeholder="请输入城市名或者拼音" v-model="keyword" />
    </div>
    <div class="serch-list" v-show="keywros" ref="serch-list">
      <div class="content">
        <ul>
          <li
            v-for="item in searchList"
            :key="item.id"
            @click="transferCity(item.name)"
          >
            {{ item.name }}
          </li>
          <li v-show="searchLists">找不到匹配的城市数据</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import scroll from "better-scroll";
export default {
  data() {
    return {
      isS: false,
      searchList: [],
      keyword: "",
      timer: null,
    };
  },
  props: {
    cities: {
      type: Object,
      default: {},
    },
  },
  mounted() {
    this.scroll = new scroll(this.$refs["serch-list"], {
      click: true,
    });
  },
  methods: {
    transferCity(city) {
      // 点击更换城市
      this.$store.commit("setCity", city);
      // 跳转主页路由
      this.$router.push("/home");
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.searchList = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.name.trim().indexOf(this.keyword) > -1) {
              result.push(item);
            }
          });
        }
        this.searchList = result;
      }, 100);
    },
  },
  computed: {
    keywros() {
      return this.keyword.length;
    },
    searchLists() {
      return !this.searchList.length;
    },
  },
};
</script>


<style lang="less" scoped>
@import "~@/assets/styles/varibles.less";
.search {
  background-color: @color;
  height: 0.72rem;
  text-align: center;
  padding: 0 0.2rem;
  input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    padding-left: 0.3rem;
    border-radius: 0.1rem;
    color: #999;
  }
}
.serch-list {
  position: absolute;
  overflow: hidden;
  top: 1.57rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 999;
  ul {
    li {
      font-size: 0.25rem;
      padding: 0.2rem 0.5rem;
    }
  }
}
</style>