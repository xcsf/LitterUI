<template>
  <div class="g-sub-nav" :class="{active}" v-click-outside="close">
    <span class="g-sub-nav-label" @click="open">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="[{activeicon:isOpen}]">
        <g-icon name="right"></g-icon>
      </span>
    </span>
    <div class="g-sub-nav-popover" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ClickOutside from "../click-outside";
import Icon from "../icon";
import { close } from "fs";

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
      isOpen: false
    };
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    }
  },
  methods: {
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
  &.active {
    background-color: #eefbfa;
    color: #409eff;
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
}
.g-sub-nav .g-sub-nav {
  & .g-sub-nav-icon {
    display: inline-flex;
    margin-left: 1em;
    transform: rotate(0);
  }
  &.active {
    background-color: #eefbfa;
    color: #409eff;
    &::after {
      display: none;
    }
  }
  & .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
}
</style>
