<template>
  <div class="cascader">
    <!-- <div>
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="(item,index) in source" :key="index">
        <cascader-item :sourceitem="item"></cascader-item>
      </div>
    </div>-->
    <div class="trigger">
      <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>
<script>
import CascaderItems from "./cascader-items";
export default {
  name: "GuluCascader",
  components: {
    "cascader-items": CascaderItems
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
  .trigger {
  }
}
</style>
