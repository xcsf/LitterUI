<template></template>
<script>
export default {
  name: "g-table-column",
  props: {
    text: {
      type: String,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    width: {
      type: Number
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
