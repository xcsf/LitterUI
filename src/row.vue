<template>
  <div :class="['row',rowClass]" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluRow",
  props: {
    gutter: [Number, String],
    align: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].includes(value);
      }
    }
  },
  created() {
    //   console.log("row create");
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    },
    rowClass() {
      let { align } = this;
      return [align && `align-${align}`];
    }
  },
  mounted() {
    //console.log("row mounted");
    this.$children.forEach(item => {
      item.gutter = this.gutter;
    });
  }
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-right {
    justify-content: flex-end;
  }
  &.align-left {
    justify-content: flex-start;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
