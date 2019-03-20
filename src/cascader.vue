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
        :selected.sync="selected"
        @update:selected="onUpdateSource"
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
    },
    loadData: {
      type: Function
    }
  },
  computed: {
    reuslt() {
      return this.selected
        .map(item => {
          return item.name;
        })
        .join("/");
    }
  },
  methods: {
    //depth-first traversal "source" to find the "item" which be click  and return the item
    foundItem(source, id) {
      for (let i = 0; i < source.length; i++) {
        if (source[i].id === id) {
          //success find and return
          return source[i];
        } else {
          if (!source[i].children) {
            continue;
          }
          let res = this.foundItem(source[i].children, id);
          //if success find return 
          if (res) {
            return res;
          }
        }
      }
    },
    onUpdateSource(newSelected) {
      let lastSelected = newSelected[newSelected.length - 1];
      let updateSource = reuslt => {
        let copy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = this.foundItem(this.source, lastSelected.id);
        reuslt.length > 0 && this.$set(toUpdate, "children", reuslt);
      };
      this.loadData(lastSelected, updateSource);
    }
  }
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
    border: 1px solid $border-color;
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
