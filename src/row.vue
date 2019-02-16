<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluRow",
  props: {
    gutter: [Number, String]
  },
  created() {},
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    }
  },
  mounted() {
    this.$children.forEach(item => {
      item.gutter = this.gutter;
    });
  }
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
