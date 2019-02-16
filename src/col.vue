<template>
  <div :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Gulu-Col",
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  computed: {
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    },
    colClass() {
      let { span, offset } = this;
      return [span && `col-${span}`, "col", offset && `offset-${offset}`];
    }
  },
  data() {
    return {
      gutter: [Number, String]
    };
  },
  methods: {
    foo(params) {}
  }
};
</script>
<style lang="scss" scoped>
.col {
  width: 50%;
  //col-n
  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
