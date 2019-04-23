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
  methods:{
    onClick(){
      this.open = !this.open;
    }
  }
};
</script>
<style lang="scss" scoped>
.g-sub-nav {
  position: relative;
  >span{
    padding: 12px;
    display: block;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: gray;
    white-space: nowrap;
  }
}
.g-sub-nav .g-sub-nav .g-sub-nav-popover {
  top: 0;
  left: 100%;
}
</style>
