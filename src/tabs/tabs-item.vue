<template>
  <div class="tabs-item" @click="onClick" :class="classes" :name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsItem",
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  created() {
    this.eventBus &&
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit("click", this);
    }
  }
};
</script>
<style lang="scss" scoped>
$blur: blue;
$border-color: #ddd;
$disabled-color: grey;
.tabs-item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  // background-color: #ddd;
  // border-left: 1px solid $border-color;
  // margin: -1px 0 -1px -1px;
  &.active {
    color: $blur;
    // font-weight: bolder;
  }
  &.disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }
}
</style>
