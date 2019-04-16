
<template>
  <div>
    <s-wrapper title="简单按钮">
      <template slot="component">
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Button from "../../../src/button";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-button": Button,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      code1: `<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>`
    };
  }
};
</script>