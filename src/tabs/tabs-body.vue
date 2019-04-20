<template>
  <div class="tabs-body" :class="typeClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsBody",
  inject: ["eventBus"],
  data() {
    return {
      type: ""
    };
  },
  computed: {
    typeClass: function() {
      return {
        cardbody: this.type === "card",
        bordercardbody: this.type === "border-card",
        "": this.type
      };
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
</style>
