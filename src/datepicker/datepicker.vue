<template>
  <div>
    <g-input @focus="onFocusInput" @blur="onBlurInput"></g-input>
    <div class="g-datepicker-popover" v-if="popVisible">
        aaaa
    </div>
  </div>
</template>
<script>
import Input from "../input";
export default {
  name: "g-datepicker",
  components: {
    "g-input": Input
  },
  props: {},
  data() {
    return {
      popVisible: false
    };
  },
  methods: {
    onFocusInput(e) {
      this.popVisible = true;
    },
    onBlurInput(e) {
      this.popVisible = false;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
