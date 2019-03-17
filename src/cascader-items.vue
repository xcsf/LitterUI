<template>
  <div class="cascader-item" :style="height">
    <!-- {{sourceitem.name}}
    <template v-if="sourceitem.children">
      <gulu-cascader-item
        v-for="(item,index) in sourceitem.children"
        :key="index"
        :sourceitem="item"
      ></gulu-cascader-item>
    </template>-->
    <div class="left">
      <div class="lable" v-for="(item,index) in items" :key="index" @click="leftSelected = item">
        {{item.name}}
        <g-icon class="icon" v-if="item.children" name="right"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-item :items="rightItems" :height="height"></gulu-cascader-item>
    </div>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "GuluCascaderItem",
  components: {
    "g-icon": Icon
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
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
        return this.leftSelected.children;
      } else {
        return null;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .left {
    height: 100%;
    padding-top: 0.3em;
    .lable {
      padding: 0.3em 1em;
      .icon{
        margin-left: 1em;
        transform: scale(0.8);
      }
    }
  }
  .right {
    border-left: 1px solid $border-color-lighten;
  }
}
</style>
