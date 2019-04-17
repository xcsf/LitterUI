<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <!-- <div>
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="(item,index) in source" :key="index">
        <cascader-item :sourceitem="item"></cascader-item>
      </div>
    </div>-->
    <div class="trigger" @click="toggle">{{reuslt}}</div>
    <div class="popover-wapper" v-if="popoverVisible">
      <cascader-items
        :items="source"
        :height="popoverHeight"
        :selected.sync="selected"
        :selectedItem="selectedItem"
        @update:selected="onUpdateSource"
      ></cascader-items>
    </div>
  </div>
</template>
<script>
import CascaderItems from "./cascader-items";
import ClickOutside from "./../click-outside";
export default {
  name: "GuluCascader",
  directives: { ClickOutside },
  components: {
    "cascader-items": CascaderItems
  },
  data() {
    return {
      popoverVisible: false,
      selected: [],
      selectedItem: {}
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
    //注释的为方法1   此处使用指令的方法
    // onClickDoc(e) {
    //   let { cascader } = this.$refs;
    //   if (e.target === cascader || cascader.contains(e.target)) {
    //     return;
    //   }
    //   this.close();
    // },
    open() {
      this.popoverVisible = true;
      // document.addEventListener("click", this.onClickDoc);
    },
    close() {
      this.popoverVisible = false;
      // document.removeEventListener("click", this.onClickDoc);
    },
    toggle() {
      if (this.popoverVisible) {
        this.close();
      } else {
        this.open();
      }
    },
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
        this.selectedItem = {}
      };
      //don't loadData if click item is leaf
      if (this.loadData) {
        !lastSelected.isLeaf && this.loadData(lastSelected, updateSource);
        this.selectedItem = lastSelected
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../var";
.cascader {
  display: inline-block;
  position: relative;
  .trigger {
    height: $input-height;
    line-height: $input-height;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background-color: $button-bg;
  }
  .popover-wapper {
    @extend .box-shadow;
    position: absolute;
    z-index: 1;
    background-color: white;
    margin-top: 8px;
  }
}
</style>
