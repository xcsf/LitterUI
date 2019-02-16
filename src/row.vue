<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
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
