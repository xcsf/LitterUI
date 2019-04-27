<template>
  <div class="g-collapseItem">
    <div class="g-title" @click="toggle">{{title}}</div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div class="g-coll-content" v-if="open">
        <div style="margin:8px;">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "GuluCollapseItem",
  inject: ["eventBus"],
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  mounted() {
    this.eventBus.$on("update:selected", names => {
      if (names.indexOf(this.name) >= 0) {
        this.open = true;
      } else {
        this.open = false;
      }
    });
  },
  methods: {
    beforeEnter(el) {
      el.style.overflow = "hidden";
      el.style.transition = "all 0.3s";
    },
    enter(el) {
      let { height } = el.getBoundingClientRect();
      el.style.height = 0;
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
    },
    afterEnter(el) {
      el.style.overflow = "";
      el.style.height = "auto";
    },
    beforeLeave(el) {
      el.style.overflow = "hidden";
    },
    leave(el) {
      let { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = 0;
    },
    afterLeave(el) {
      el.style.height = "auto";
    },
    toggle() {
      if (this.open) {
        this.eventBus.$emit("update:removeselected", this.name);
      } else {
        this.eventBus.$emit("update:addselected", this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.g-collapseItem {
  & .g-title {
    border: 1px solid $grey;
    margin: -1px -1px 0 -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    & .g-title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    & .g-title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      border-bottom: none;
    }
  }
  & .g-coll-content {
  }
}
</style>
