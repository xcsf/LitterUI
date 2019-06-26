<template>
  <div class="g-cascader-item" :style="height">
    <div class="left">
      <div class="lable" v-for="(item,index) in items" :key="index" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <div class="icons">
          <template v-if="selectedItem.name===item.name">
            <g-icon class="icon loading" v-if="item.children||item.isLeaf===false" name="loading"></g-icon>
          </template>
          <template v-else>
            <g-icon class="icon" v-if="item.children||item.isLeaf===false" name="right"></g-icon>
          </template>
        </div>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-item
        :level="level+1"
        :selected="selected"
        @update:selected="onUpdateSelected"
        :selectedItem="selectedItem"
        :items="rightItems"
        :height="height"
      ></gulu-cascader-item>
    </div>
  </div>
</template>
<script>
import Icon from "./../icon";
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
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    },
    selectedItem: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      //取消显示后面一级数据
      copy.splice(this.level + 1);
      this.$emit("update:selected", copy);
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    }
  },
  computed: {
    rightItems() {
      //当level 与 selected 都不更新时 无法更新ui
      // let currentSelected = this.selected[this.level];
      // if (currentSelected && currentSelected.children) {
      //   return currentSelected.children;
      // } else {
      //   return null;
      // }
      //改为依赖 source 更新ui
      if (this.selected[this.level]) {
        let currentSelected = this.items.filter(
          item => item.name === this.selected[this.level].name
        );
        if (currentSelected[0] && currentSelected[0].children) {
          return currentSelected[0].children;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../../styles/var";

.g-cascader-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .left {
    @extend .box-shadow;
    height: 100%;
    background-color: white;
    padding-top: 0.4em;
    overflow: auto;
    .lable {
      padding: 0.4em 1em;
      display: flex;
      align-items: center;
      white-space: nowrap;
      cursor: pointer;
      &:hover {
        background-color: $grey;
      }
      .name {
        margin-right: 1em;
        user-select: none;
      }
      .icons {
        margin-left: auto;
        transform: scale(0.8);
        & .loading {
          animation: spin 1s infinite linear;
        }
      }
    }
  }
  .right {
    border-left: 1px solid $border-color-lighten;
  }
}
</style>
