<template>
  <div class="popover" @click.stop="click">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  data() {
    return { visible: false };
  },
  methods: {
    click() {
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(() => {
          let eventHandler = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    border: 1px solid gray;
    left: 0;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  }
}
</style>
