<template>
  <div class="tabs-item" @click="xxx" :class="classes">
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
        active: this.active
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>
<style lang="scss" scoped>
$blur: blue;
.tabs-item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  &.active {
    color: $blur;
    font-weight: bolder;
  }
}
</style>
