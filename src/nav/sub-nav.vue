<template>
  <div class="g-sub-nav">
    <span>
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluSubNav",
  props:{
    
  }
};
</script>
<style lang="scss" scoped>
.g-sub-nav {
  position: relative;
  padding: 12px;
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: gray;
    white-space: nowrap;
  }
}
</style>
