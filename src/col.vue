<template>
  <div class="col" :class="{[`col-${span}`]:true}">
    <slot></slot>
  </div>
</template>
<script>
export default {
    name:'Gulu-Col',
    props: {
        span: [Number,String]
    }
}
</script>
<style lang="scss" scoped>
.col {
  height: 100px;
  background-color: gray;
  width: 50%;
  border: 1px solid red;
  //col-n
  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
}
</style>
