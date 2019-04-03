<template>
  <div class="slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="slides-window">
      <div class="slides-wapper">
        <slot></slot>
      </div>
    </div>
    <div class="slides-dots">
      <span
        v-for="(child, index) in $children"
        :class="{active:selectedIndex === index}"
        :key="index"
        @click="selectItem(index)"
      >{{index}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuleSlides",
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      lastSelectedIndex: undefined,
      timeId: undefined
    };
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected);
    },
    names() {
      return this.$children.map(vm => {
        return vm.name;
      });
    }
  },
  mounted() {
    this.updateChildren();
    this.playAutomatically();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    selectItem(index) {
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[index]);
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
        if (newIndex === -1) {
          newIndex = this.names.length - 1;
        }
        if (newIndex === this.names.length) {
          newIndex = 0;
        }
        this.selectItem(newIndex);
        this.timeId = setTimeout(() => {
          run();
        }, 2000);
      };
      this.timeId = setTimeout(() => {
        run();
      }, 2000);

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
      return this.selected || this.$children[0].name;
    },
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (this.timeId) {
          //left->right
          if (
            this.lastSelectedIndex === this.$children.length - 1 &&
            this.selectedIndex === 0
          ) {
            reverse = false;
          }
          //right->left
          if (
            this.lastSelectedIndex === 0 &&
            this.selectedIndex === this.$children.length - 1
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
        &:hover{
          cursor: default;
        }
      }
    }
  }
}
</style>
