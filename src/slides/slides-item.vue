<template>
  <transition name="slide">
    <div class="g-slidesitem" v-if="visible" :class="[{reverse:reverse},positionCard]">
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
      card: undefined,
      reverse: false,
      prev: "",
      next: ""
    };
  },
  computed: {
    visible() {
      if (this.card) {
        return (
          this.selected === this.name ||
          this.selected === this.prev ||
          this.selected === this.next
        );
      } else {
        return this.selected === this.name;
      }
    },
    positionCard() {
      if (this.card) {
        return {
          card: true,
          "position-prev": this.selected === this.next,
          "position-center": this.selected === this.name,
          "position-next": this.selected === this.prev
        };
      } else {
        return {};
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.g-slidesitem {
  width: 100%;
  height: 100%;
  &.slide-leave-active {
    position: absolute;
    // top: 0;
    // left: 0;
  }
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 1s;
  }
  &.slide-enter {
    transform: translateX(100%);
  }
  &.slide-leave-to {
    transform: translateX(-100%);
  }
  &.slide-enter.reverse {
    transform: translateX(-100%);
  }
  &.slide-leave-to.reverse {
    transform: translateX(100%);
  }
}
.card {
  &.g-slidesitem {
    height: 100%;
    width: 40%;
    transition: all 1s;
    // &.slide-leave-active {
    //   position: absolute;
    // }
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
    &.slide-leave-to,
    &.slide-enter {
      z-index: 0;
      opacity: 0;
      transform: translateX(0) scale(0);
    }
  }
}
</style>