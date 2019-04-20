<template>
  <div class="tabs-head" :class="typeClass">
    <div class="items-wrapper">
      <slot></slot>
    </div>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluTabsHead",
  inject: ["eventBus"],
  data() {
    return {
      type: ""
    };
  },
  computed: {
    typeClass: function() {
      return {
        cardhead: this.type === "card",
        bordercardhead: this.type === "border-card",
        "": this.type
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", (item, vm) => {
      vm.$nextTick(() => {
        let { width, height, top, left } = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.transform = `translateX(${vm.$el.offsetLeft}px)`;
      });
    });
  },
  updated() {
    console.log(this.type);
    console.log(this.typeClass);
  }
};
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
$blue: blue;
$border-color: #ddd;
.tabs-head {
  position: relative;
  .items-wrapper {
    border-bottom: 1px solid $border-color;
    display: flex;
    height: $tabs-height;
    justify-content: flex-start;
  }
  &.cardhead {
    & .line {
      display: none;
    }
  }
  & .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  & .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
<style lang="scss">
.cardhead {
  & .items-wrapper {
    & .tabs-item {
      border: 1px solid #ddd;
      margin-top: -1px;
      &.active {
        border-bottom-color: white;
      }
    }
    & .tabs-item:not(:first-child) {
      margin-left: -1px;
    }
    & .tabs-item:last-child {
      border-top-right-radius: 5px;
    }
    & .tabs-item:first-child {
      border-top-left-radius: 5px;
    }
  }
}
</style>

