<template>
  <div class="fade">
    <transition>
      <slot></slot>
    </transition>
  </div>
</template>


<script>
export default {};
</script>

<style lang="less" scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-acitve {
  transition: all 0.5s linear;
}
</style>