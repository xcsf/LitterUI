<template>
  <div class="popover" @click="onClick" ref="popover">
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
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let { width, height, top, left } = this.$el.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
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
  transform: translateY(-100%);
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  margin-top: -10px;
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
    left: 10px;
  }
  &::before {
    border-top-color: black;
    top: 100%;
  }
  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>
