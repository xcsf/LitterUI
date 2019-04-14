<template>
  <transition name="slide">
    <div class="slidesitem" v-if="visible" :class="[{reverse:reverse},positionCard]">
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
      reverse: false,
      prev: "",
      next: ""
    };
  },
  computed: {
    visible() {
      return (
        this.selected === this.name ||
        this.selected === this.prev ||
        this.selected === this.next
      );
    },
    positionCard() {
      return {
        "position-prev": this.selected === this.next,
        "position-center": this.selected === this.name,
        "position-next": this.selected === this.prev
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.slide-leave-active {
  // opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  // transition: all 1s;
}
.slide-enter {
  // transform: translateX(100%);
}
.slide-leave-to {
  // transform: translateX(-100%);
}
.slide-enter.reverse {
  // transform: translateX(-100%);
}
.slide-leave-to.reverse {
  // transform: translateX(100%);
}
.slidesitem {
  height: 100%;
  width: 33%;
  transition: all 1s;
  &.position-prev {
    position: absolute;
    z-index: 1;
    transform: translateX(-80%) scale(0.83);
  }
  &.position-center {
    z-index: 2;
  }
  &.position-next {
    position: absolute;
    z-index: 1;
    transform: translateX(80%) scale(0.83);
  }
  &.slide-leave-to {
    position: absolute;
    z-index: 0;
    opacity: 0;
    transform: translateX(0) scale(0);
  }
  &.slide-enter {
    position: absolute;
    opacity: 0;
    z-index: 0;
    transform: translateX(0) scale(0);
  }
}
</style>