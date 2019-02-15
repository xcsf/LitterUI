<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <icon name="error" class="error-icon"></icon>
      <span class="errormessage">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "gulu-input",
  components: {
    Icon
  },
  props: {  
    value: { type: String },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    error: { type: String }
  }
};
</script>
<style lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: red;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {margin-right: 0.5em;}
  &.error {
    > input { border-color: $red; }
    & .error-icon { fill: $red; }
    & .errormessage{ color: $red; }
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover { border-color: $border-color-hover; }
    &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
    &[disabled], &[readonly] { color: #bbb; border-color: #bbb; cursor: not-allowed; }
  }
}
</style>
