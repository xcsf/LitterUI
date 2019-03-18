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
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover-wapper" v-if="popoverVisible">
      <cascader-items
        :items="source"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="selected = $event"
      ></cascader-items>
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
    },
    popoverHeight: {
      type: String
    }
  },
  data() {
    return {
      popoverVisible: false,
      selected: []
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
  position: relative;
  .trigger {
    height: 32px;
    width: 100px;
    background-color: gray;
  }
  .popover-wapper {
    @extend .box-shadow;
    position: absolute;
    background-color: white;
  }
}
</style>
