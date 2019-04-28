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
    position: relative;
  }
  &.cardhead {
    & .line {
      display: none;
    }
  }
  &.bordercardhead {
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
    position: absolute;
    right: 0;
    top: 0;
    height: $tabs-height;
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
.bordercardhead {
  & .items-wrapper {
    background-color: #f5f7fa;
    & .tabs-item {
      border: 1px solid #f5f7fa;
      &.active {
        background-color: white;
        border-bottom-color: white;
      }
    }
    & .tabs-item:not(:first-child) {
      &.active {
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
      }
    }
    & .tabs-item:last-child {
    }
    & .tabs-item:first-child {
      &.active {
        border-right: 1px solid #ddd;
      }
    }
  }
}
</style>

