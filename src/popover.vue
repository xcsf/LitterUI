<template>
  <div class="popover" @click="onClick" ref="popover">
    <div
      class="content-wrapper"
      :class="{[`position-${position}`]:true}"
      ref="contentWrapper"
      v-if="visible"
    >
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
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return { visible: false };
  },
  methods: {
    positionContent() {
      const { contentWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let { height: contentHeight } = contentWrapper.getBoundingClientRect();
      let { width, height, top, left } = this.$el.getBoundingClientRect();
      // if (this.position === "bottom") {
      //   contentWrapper.style.left = left + window.scrollX + "px";
      //   contentWrapper.style.top = top + height + window.scrollY + "px";
      // } else if (this.position === "left") {
      //   contentWrapper.style.left = left + window.scrollX + "px";
      //   contentWrapper.style.top = top - (contentHeight - height) / 2 + window.scrollY + "px";
      // } else if (this.position === "right") {
      //   contentWrapper.style.left = left + width + window.scrollX + "px";
      //   contentWrapper.style.top = top - (contentHeight - height) / 2 + window.scrollY + "px";
      // } else {
      //   contentWrapper.style.left = left + window.scrollX + "px";
      //   contentWrapper.style.top = top + window.scrollY + "px";
      // }
      let positions = {
        top: { top: top + window.scrollY, left: left + window.scrollX },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - contentHeight) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - contentHeight) / 2,
          left: left + window.scrollX + width
        }
      };
      contentWrapper.style.left = positions[this.position].left + "px";
      contentWrapper.style.top = positions[this.position].top + "px";
    },
    onClickDoc(e) {
      //防止点popover内容以及trigger冒泡到document触发的click
      if (
        !this.$refs.popover.contains(e.target) &&
        !this.$refs.contentWrapper.contains(e.target)
      ) {
        this.Close();
      }
    },
    Open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDoc);
      });
    },
    Close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDoc);
    },
    onClick(event) {
      //点trigger
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.Close();
        } else {
          this.Open();
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  // box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background-color: white;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
  }
  &.position-top {
    left: 10px;
    margin-top: -10px;
    transform: translateY(-100%);
    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    left: 10px;
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>
