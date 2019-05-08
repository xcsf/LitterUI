<template>
  <transition name="slide">
    <div class="g-sider" v-if="show">
      <slot></slot>
      <!-- <button @click="closeSider">close</button> -->
    </div>
  </transition>
</template>
<script>
export default {
  name: "GuluSider",
  data() {
    return {
      show: true
    };
  },
  methods: {
    // closeSider() {
    //   this.show = false;
    // }
  },
  mounted() {
    // console.log("sider mounted");
  },
  created() {
    // console.log("sider created");
  }
};
</script>

<style lang="scss" scoped>
.g-sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -100%;
}
</style>
