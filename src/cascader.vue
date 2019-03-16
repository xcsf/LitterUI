<template>
  <div class="cascader">
    <div>
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="(item,index) in source" :key="index">
        <cascader-item :sourceitem="item"></cascader-item>
      </div>
    </div>
  </div>
</template>
<script>
import CascaderItem from "./cascader-item"
export default {
  name: "GuluCascader",
  components: {
    'cascader-item': CascaderItem
  },
  props: {
    source: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
.cascader {
}
</style>
