<template>
  <div class="linkage">
    <div class="links" v-for="(item, index) in lists" :key="index">
      <span class="list-icon"></span>
      <div class="list-main">{{ item.title }}</div>
      <div class="listbranch" v-if="item.children">
        <detail :lists="item.children"></detail>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "detail",
  data() {
    return {};
  },
  props: {
    lists: {
      type: Array,
      default: [],
    },
  },
};
</script>


<style lang="less" scoped>
.links {
  position: relative;
}
.list-main {
  padding: 0.2rem 0 0.2rem 0.6rem;
  border-bottom: 1px solid #ccc;
}
.list-icon {
  position: absolute;
  top: 0;
  left: 0.1rem;
  width: 0.6rem;
  height: 0.6rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0px -0.6rem
    no-repeat;
  background-size: 0.6rem;
}
.listbranch {
  padding-left: 0.3rem;
}
</style>