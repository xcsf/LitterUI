<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluTabsHead",
  inject: ["eventBus"],
  created() {}
};
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
.tabs-head {
  border: 1px solid red;
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  & .actions-wrapper {
    margin-left: auto;
  }
}

</style>
