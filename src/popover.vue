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
