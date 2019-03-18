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
    <div class="trigger" @click="popoverVisible = !popoverVisible">{{reuslt}}</div>
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
  data() {
    return {
      popoverVisible: false,
      selected: []
    };
  },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    }
  },
  computed: {
    reuslt() {
      return this.selected.map((item)=>{
        return item.name
      }).join('/');
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
  position: relative;
  .trigger {
    height: $input-height;
    width: 100px;
    line-height: $input-height;
    padding: 0 1em;
    min-width: 10em;
    border:1px solid $border-color;
    border-radius: $border-radius;
  }
  .popover-wapper {
    @extend .box-shadow;
    position: absolute;
    background-color: white;
    margin-top: 8px;
  }
}
</style>
