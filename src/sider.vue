<template>
  <div class="sider">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluSider",
  mounted() {
    // console.log("sider mounted");
  },
  created() {
    // console.log("sider created");
  }
};
</script>

<style lang="scss" scoped>
.sider {
}
</style>
