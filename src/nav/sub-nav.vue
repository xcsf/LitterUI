<template>
  <div class="g-sub-nav" :class="[{vertical:root.vertical}]" v-click-outside="close" ref="subnav">
    <span class="g-sub-nav-label" ref="subnavlabel" :class="[{active}]">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="[{activeicon:isOpen}]">
        <g-icon name="right"></g-icon>
      </span>
    </span>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div class="g-sub-nav-popover" v-show="isOpen" ref="subnavpopover">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import ClickOutside from "../click-outside";
import Icon from "../icon";

export default {
  name: "GuluSubNav",
  inject: ["root"],
  directives: { ClickOutside },
  components: {
    "g-icon": Icon
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      trigger: "click",
      t: null
    };
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    }
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.subnavlabel.addEventListener("click", this.onClickLable);
    } else {
      this.$refs.subnav.addEventListener("mouseenter", this.hoverOpen);
      this.$refs.subnav.addEventListener("mouseleave", this.hoverClose);
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.overflow = "hidden";
      el.style.transition = "all 0.3s";
    },
    enter(el) {
      let { height } = el.getBoundingClientRect();
      el.style.height = 0;
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
    },
    afterEnter(el) {
      el.style.overflow = "";
      el.style.height = "auto";
    },
    beforeLeave(el) {
      el.style.overflow = "hidden";
    },
    leave(el) {
      let { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = 0;
    },
    afterLeave(el) {
      el.style.height = "auto";
    },
    onClickLable() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },
    removeTimeout() {
      clearTimeout(this.t);
    },
    hoverOpen() {
      this.open();
      this.removeTimeout();
    },
    hoverClose() {
      this.t = setTimeout(() => {
        this.close();
      }, 200);
    },
    close() {
      this.isOpen = false;
    },
    closeAll() {
      this.close();
      this.$parent.closeAll && this.$parent.closeAll();
    },
    open() {
      this.isOpen = true;
    },
    onClick() {
      this.isOpen = !this.isOpen;
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      this.$parent.updateNamePath && this.$parent.updateNamePath();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../../styles/var";
.g-sub-nav {
  position: relative;
  &-label {
    position: relative;
    padding: 12px;
    display: flex;
    align-items: center;
  }
  &-icon {
    transition: all 0.3s;
    display: inline-flex;
    margin-left: 1em;
    transform: rotate(90deg);
    &.activeicon {
      transform: rotate(-90deg);
    }
  }
  & .g-sub-nav-label.active {
    background-color: $blue-bc;
    color: $blue;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }
  &-popover {
    min-width: 6em;
    font-size: $font-size;
    position: absolute;
    top: 100%;
    left: 0;
    color: $color-light;
    margin-top: 1px;
    background-color: white;
    white-space: nowrap;
    box-shadow: 0 0 3px fade-out($color: black, $amount: 0.8);
    border-radius: $border-radius;
  }
  &.vertical .g-sub-nav-popover {
    border-radius: 0;
    box-shadow: none;
    position: static;
  }
}
.g-sub-nav .g-sub-nav {
  & .g-sub-nav-icon {
    display: inline-flex;
    margin-left: 1em;
    transform: rotate(0);
    &.activeicon {
      transform: rotate(180deg);
    }
  }
  &.vertical .g-sub-nav-icon {
    transform: rotate(0);
    &.activeicon {
      transform: rotate(90deg);
    }
  }
  & .g-sub-nav-label.active {
    background-color: $blue-bc;
    color: $blue;
    &::after {
      display: none;
    }
  }
  & .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
  &.vertical .g-sub-nav-popover {
    margin-left: 0;
    border-radius: 0;
  }
}
</style>
