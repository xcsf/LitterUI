<template>
  <div class="g-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluSubNav",
  props: {},
  data() {
    return {
      open: false
    };
  },
  methods: {
    onClick() {
      this.open = !this.open;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../../styles/var";
.g-sub-nav {
  position: relative;
  > span {
    padding: 12px;
    display: block;
  }
  &-popover {
    min-width: 6em;
    font-size: $font-size;
    position: absolute;
    top: 100%;
    left: 0;
    color: $color-light;
    margin-top: 1px;
    background-color: white;
    white-space: nowrap;
    box-shadow: 0 0 3px fade-out($color: black, $amount: 0.8);
    border-radius: $border-radius;
  }
}
.g-sub-nav .g-sub-nav .g-sub-nav-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
}
</style>
