<template>
  <transition name="slide">
    <div class="slidesitem" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "GuleSlidesItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: "",
      reverse: false
    };
  },
  computed: {
    visible() {
      return this.selected === this.name;
    }
  }
};
</script>
<style lang="scss" scoped>
.slide-leave-active {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
.slide-enter {
  transform: translateX(100%) scale(0.5);
}
.slide-leave-to {
  transform: translateX(-100%) scale(0.5);
}
.slide-enter.reverse {
  transform: translateX(-100%) scale(0.5);
}
.slide-leave-to.reverse {
  transform: translateX(100%) scale(0.5);
}
.slidesitem {
}
</style>
