
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
    <s-wrapper title="组合按钮">
      <template slot="component">
        <g-button-group>
          <g-button icon="left">上一页</g-button>
          <g-button>更多</g-button>
          <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Button from "../../../src/button/button";
import ButtonGroup from "../../../src/button/button-group";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-button": Button,
    "g-button-group": ButtonGroup,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      code1: `<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>`,
      code2: `<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button>更多</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>`
    };
  }
};
</script>