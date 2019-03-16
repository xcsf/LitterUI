<template>
  <div class="cascader-item">
    <!-- {{sourceitem.name}}
    <template v-if="sourceitem.children">
      <gulu-cascader-item
        v-for="(item,index) in sourceitem.children"
        :key="index"
        :sourceitem="item"
      ></gulu-cascader-item>
    </template>-->
    <div class="left">
      <div
        class="lable"
        v-for="(item,index) in items"
        :key="index"
        @click="leftSelected = item"
      >{{item.name}}</div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-item :items="rightItems"></gulu-cascader-item>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluCascaderItem",
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      }else{
        return null
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.cascader-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .left {
    border: 1px solid red;
  }
  .right {
  }

}
</style>
