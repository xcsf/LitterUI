<template>
  <div class="toast">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluToast",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-color: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed; top: 0; left: 50%; display: flex; align-items: center;
  background-color: $toast-color; font-size: $font-size; height: $toast-height;
  color: white; transform: translateX(-50%); border-radius: 4px;
  box-shadow: 0, 0, 3px, 0,rgba(0, 0, 0, 0.5); padding: 0 16px;
}
</style>
