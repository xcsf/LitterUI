<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>
<script>
import { constants } from "crypto";
export default {
  name: "GuluNav",
  provide() {
    return {
      root: this
    };
  },
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [],
      namePath: []
    };
  },
  mounted() {
    this.updatedChildren();
    this.listenToChilderen();
  },
  watch: {
    selected: function() {
      this.updatedChildren();
    }
  },
  computed: {},
  methods: {
    addItem(vm) {
      this.items.push(vm);
    },
    updatedChildren() {
      this.items.forEach(vm => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true;
          this.namePath = [];
          vm.$parent.updateNamePath && vm.$parent.updateNamePath();
          vm.$parent.closeAll && vm.$parent.closeAll();
        } else {
          vm.selected = false;
        }
      });
    },
    listenToChilderen() {
      this.items.forEach(vm => {
        vm.$on("add:selected", name => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              let copy = JSON.parse(JSON.stringify(this.selected));
              copy.push(name);
              this.$emit("update:selected", copy);
            }
          } else {
            this.$emit("update:selected", [name]);
          }
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../../styles/var";
.g-nav {
  display: flex;
  border-bottom: 1px solid $grey;
  cursor: default;
}
</style>
