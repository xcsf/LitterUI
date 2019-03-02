<template>
  <div class="popover" @click.stop="click">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
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
          document.body.appendChild(this.$refs.contentWrapper);
          let {width, height, top, left} = this.$el.getBoundingClientRect();
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
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
}
.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  border: 1px solid gray;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
}
</style>
