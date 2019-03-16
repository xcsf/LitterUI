<template>
  <div class="cascader-item">
    {{sourceitem.name}}
    <template v-if="sourceitem.children">
      <gulu-cascader-item
        v-for="(item,index) in sourceitem.children"
        :key="index"
        :sourceitem="item"
      ></gulu-cascader-item>
    </template>
  </div>
</template>
<script>
export default {
  name: "GuluCascaderItem",
  props: {
    sourceitem: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.cascader-item {
  margin: 5px;
  border: 1px solid red;
}
</style>
