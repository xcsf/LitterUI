<template>
  <div
    class="slides"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="slides-window">
      <div class="slides-wapper">
        <slot></slot>
      </div>
    </div>
    <div class="slides-dots">
      <span @click="selectItem(selectedIndex-1)">
        <g-icon name="left"></g-icon>
      </span>
      <span
        v-for="(child, index) in childrenLength"
        :class="{active:selectedIndex === index}"
        :key="index"
        :data-index="index"
        @click="selectItem(index)"
      >{{index}}</span>
      <span @click="selectItem(selectedIndex+1)">
        <g-icon name="right"></g-icon>
      </span>
    </div>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "GuleSlides",
  components: {
    "g-icon": Icon
  },
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayDelay: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      lastSelectedIndex: undefined,
      timeId: undefined,
      touchStart: undefined,
      childrenLength: undefined
    };
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected);
      return index === -1 ? 0 : index;
    },
    names() {
      return this.items.map(vm => {
        return vm.name;
      });
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === "GuleSlidesItem");
    }
  },
  mounted() {
    this.updateChildren();
    if (this.autoPlay) {
      this.playAutomatically();
    }
    this.childrenLength = this.items.length;
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    onTouchStart(e) {
      console.log("touchstart");
      this.touchStart = e.touches[0];
      console.log(e.touches[0]);
      this.pause();
    },
    onTouchMove() {
      console.log("touchmove");
    },
    onTouchEnd(e) {
      console.log("touchend");
      let { clientX: x1, clientY: y1 } = this.touchStart;
      let { clientX: x2, clientY: y2 } = e.changedTouches[0];
      console.log(x1, y1);
      console.log(x2, y2);
      let dx = Math.abs(x1 - x2);
      let dy = Math.abs(y1 - y2);
      if (dx > dy) {
        console.log("小于45");
        if (x1 < x2) {
          console.log("right");
          this.selectItem(this.selectedIndex - 1);
        } else {
          console.log("left");
          this.selectItem(this.selectedIndex + 1);
        }
      }
      this.playAutomatically();
    },
    selectItem(newIndex) {
      this.lastSelectedIndex = this.selectedIndex;
      if (newIndex === -1) {
        newIndex = this.names.length - 1;
      }
      if (newIndex === this.names.length) {
        newIndex = 0;
      }
      this.$emit("update:selected", this.names[newIndex]);
    },
    playAutomatically() {
      // 使用setTimeout代替setInterval
      // setInterval(() => {
      //   if (index === names.length) {
      //     index = 0;
      //   }
      //   this.$emit("update:selected", name[index + 1]);
      //   index++;
      // }, 2000);
      if (this.timeId) {
        return;
      }
      let run = () => {
        let index = this.selectedIndex;
        let newIndex = index + 1;
        this.selectItem(newIndex);
        this.timeId = setTimeout(() => {
          run();
        }, this.autoPlayDelay);
      }; 
      this.timeId = setTimeout(() => {
        run();
      }, this.autoPlayDelay);

      // merge = a =>
      //   a.reduce(
      //     (result, n) =>
      //       result.concat(result[result.length - 1] === n ? [] : [n]),
      //     []
      //   );
    },
    pause() {
      clearTimeout(this.timeId);
      this.timeId = undefined;
    },
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.playAutomatically();
    },
    getSelected() {
      return this.selected || this.items[0].name;
    },
    updateChildren() {
      let selected = this.getSelected();
      this.items.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (this.timeId) {
          //left->right
          if (
            this.lastSelectedIndex === this.items.length - 1 &&
            this.selectedIndex === 0
          ) {
            reverse = false;
          }
          //right->left
          if (
            this.lastSelectedIndex === 0 &&
            this.selectedIndex === this.items.length - 1
          ) {
            reverse = true;
          }
        }
        vm.reverse = reverse;
        //这里子组件 不会立即更新reverse类  所以nexttick 更新selected
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.slides {
  & .slides-window {
    overflow: hidden;
    & .slides-wapper {
      position: relative;
    }
  }
  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      height: 20px;
      width: 20px;
      display: inline-flex;
      background-color: #ddd;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      margin: 0 8px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background-color: black;
        color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
