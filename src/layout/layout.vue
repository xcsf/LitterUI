<template>
  <div class="g-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    // console.log("layout mounted");
    this.$children.forEach(vm => {
      if (vm.$el.classList.contains("g-sider")) {
        this.layoutClass.hasSider = true;
      }
    });
  },
  created() {
    // console.log("layout created");
  }
};
</script>

<style lang="scss" scoped>
.g-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
