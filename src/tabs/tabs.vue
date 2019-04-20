<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GuluTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    },
    type: {
      type: String,
      validator(value) {
        return value == "card" || value == "border-card";
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console && console.warn && console.warn("Tabs 没有子组件");
      }
    },
    selectTab() {
      this.$children.forEach(vm => {
        if (vm.$options.name === "GuluTabsHead") {
          vm.$children.forEach(childVm => {
            if (
              childVm.$options.name === "GuluTabsItem" &&
              childVm.name === this.selected
            ) {
              this.eventBus.$emit("update:selected", this.selected, childVm);
            }
          });
        }
      });
    }
  },
  computed: {
    items: function() {
      return this.$children.filter(vm => {
        return ["GuluTabsBody", "GuluTabsHead"].indexOf(vm.$options.name) >= 0;
      });
    }
  },
  mounted() {
    console.log(this.type);
    this.checkChildren();
    this.selectTab();
    this.$nextTick(() => {
      this.items.forEach(vm => {
        vm.type = this.type;
      });
    });
  },
  created() {}
};
</script>
<style lang="scss" scoped>
</style>
