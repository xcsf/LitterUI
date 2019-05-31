<template>
  <div class="g-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="g-sticky" :class="stickyClass" :style="{width,left,top}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
//
export default {
  name: "GuluSticky",
  props: {
    distance: {
      type: Number
    }
  },
  data() {
    return {
      sticky: false,
      top: undefined,
      left: undefined,
      width: undefined,
      height: undefined
    };
  },
  computed: {
    stickyClass() {
      return {
        sticky: this.sticky
      };
    }
  },
  mounted() {
    //在滑动的时再获取高度，防止图片加载未完成前获取错误高度
    window.addEventListener("scroll", this.windowScrollHandle);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.windowScrollHandle);
  },
  watch: {},
  created() {},
  methods: {
    getTop() {
      let { top } = this.$refs.wrapper.getBoundingClientRect();
      return top + window.scrollY;
    },
    windowScrollHandle() {
      //top只能取一次
      let top = this.getTop();
      if (window.scrollY > top - this.distance) {
        let { height, left, width } = this.$refs.wrapper.getBoundingClientRect();
        //设置高度防止其脱离文档后，内容高度消失导致页面滚动条消失产生bug
        this.height = height + "px";
        //脱离文档前需要确定其宽度以及left
        this.left = left + "px";
        this.width = width + "px";
        this.top = this.distance + "px";
        this.sticky = true;
      } else {
        //清除style
        this.height = undefined;
        this.left = undefined;
        this.width = undefined;
        this.top = undefined;
        this.sticky = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.g-sticky {
  &.sticky {
    position: fixed;
  }
}
</style>
