<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="autoClose" @click="onClickClose()">{{ closeButton.text }}</span>
  </div>
</template>
<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: { type: Boolean, default: true },
    closeDelay: { type: Number, default: 1100 },
    closeButton: {
      type: Object,
      default() {
        return { text: "关闭", callback: undefined };
      }
    },
    enableHtml: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  mounted() {
    this.execAutoClose();
    this.updateStyles();
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      });
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.Close();
        }, this.closeDelay * 1000);
      }
    },
    Close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.Close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-color: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  background-color: $toast-color;
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  color: white;
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  & .message {
    padding: 8px 16px;
  }
  & .close {
    padding: 0 16px;
    flex-shrink: 0;
    &:hover {
      cursor: pointer;
    }
  }
  & .line {
    border-left: 1px solid #666;
    // margin-left: 16px;
    height: 100%;
  }
}
</style>
