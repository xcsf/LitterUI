<template>
  <div class="slides">
    <div class="slides-window">
      <div class="slides-wapper">
        <slot></slot>
      </div>
    </div>
    <div class="slides-dots">
      <span
        :class="{active:selectedIndex === index}"
        v-for="(child, index) in $children"
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
      lastSelectedIndex: undefined
    };
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0;
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
      let index = this.selectedIndex;
      // 使用setTimeout代替setInterval
      // setInterval(() => {
      //   if (index === names.length) {
      //     index = 0;
      //   }
      //   this.$emit("update:selected", name[index + 1]);
      //   index++;
      // }, 2000);
      let run = () => {
        let newIndex = index - 1;
        if (newIndex === -1) {
          newIndex = this.names.length - 1;
        }
        if (index === this.names.length) {
          newIndex = 0;
        }
        this.selectItem(newIndex);
        console.log("index", index);
        setTimeout(() => {
          run();
        }, 2000);
      };
      // setTimeout(() => {
      //   run();
      // }, 2000);

      // merge = a =>
      //   a.reduce(
      //     (result, n) =>
      //       result.concat(result[result.length - 1] === n ? [] : [n]),
      //     []
      //   );
    },
    getSelected() {
      return this.selected || this.$children[0].name;
    },
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
        this.$nextTick(()=>{
          vm.selected = selected;
        })
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
    & .active {
      background-color: red;
    }
  }
}
</style>
