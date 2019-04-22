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
      items: []
    };
  },
  mounted() {
    this.updatedChildren();
    this.listenToChilderen();
  },
  updated() {
    this.updatedChildren();
  },
  computed: {},
  methods: {
    addItem(vm) {
      this.items.push(vm)
    },
    updatedChildren() {
      this.items.forEach(vm => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true;
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
.g-nav {
  display: flex;
  border: 1px solid red;
}
</style>
