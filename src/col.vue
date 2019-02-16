<template>
  <div
    :class="[span && `col-${span}`,'col',offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}"
  >
    <div style="border: 1px solid green;height: 100%">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gulu-Col",
  props: {
    span: [Number, String],
    offset: [Number, String]
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
  height: 100px;
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
