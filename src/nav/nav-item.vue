<template>
  <div class="g-nav-item" :class="[{selected},{vertical:root.vertical}]" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluNavItem",
  props: {
    name: {
      type: [String],
      required: true
    }
  },
  inject: ["root"],
  data() {
    return {
      selected: false
    };
  },
  created() {
    this.root.addItem(this);
  },
  methods: {
    onClick() {
      this.$emit("add:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../../styles/var";
.g-nav-item {
  position: relative;
  padding: 12px;
  &:hover {
    background-color: $blue-bc;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $blue;
      left: 0;
      width: 100%;
    }
  }
  &.vertical {
    &:hover {
      background-color: $blue-bc;
      &::after {
        display: none;
      }
    }
    &::after {
      display: none;
    }
  }
  &.selected {
    background-color: $blue-bc;
    color: $blue;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $blue;
      left: 0;
      width: 100%;
    }
  }
}
a {
  color: inherit;
  text-decoration-line: none;
}
.g-sub-nav .g-nav-item {
  &:hover {
    background-color: $blue-bc;
    &::after {
      display: none;
    }
  }
  &.selected {
    color: $blue;
    background-color: white;
    &::after {
      display: none;
    }
  }
}
</style>
