<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
 
 
<script>
import home from "./views/home/Home";

export default {
  components: {
    home,
  },
};
</script>

<style lang="less">
</style>
