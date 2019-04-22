
<template>
  <div>
    <s-wrapper title="简单弹出层">
      <template slot="component">
        <g-popover>
          <template v-slot:content>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
          </template>
          <g-button>上</g-button>
        </g-popover>
        <g-popover position="bottom">
          <template v-slot:content>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
          </template>
          <g-button>下</g-button>
        </g-popover>
        <g-popover position="left">
          <template v-slot:content>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
          </template>
          <g-button>左</g-button>
        </g-popover>
        <g-popover position="right">
          <template v-slot:content>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
          </template>
          <g-button>右</g-button>
        </g-popover>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="关闭按钮">
      <template slot="component">
        <g-popover>
          <template v-slot:content="{close}">
            <g-button @click="close">关闭</g-button>内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </template>
          <g-button>点我</g-button>
        </g-popover>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
    <s-wrapper title="hover 触发">
      <template slot="component">
        <g-popover trigger="hover">
          <template v-slot:content>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</template>
          <g-button>上</g-button>
        </g-popover>
        <g-popover position="bottom" trigger="hover">
          <template v-slot:content>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
          </template>
          <g-button>下</g-button>
        </g-popover>
        <g-popover position="left" trigger="hover">
          <template v-slot:content>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
          </template>
          <g-button>左</g-button>
        </g-popover>
        <g-popover position="right" trigger="hover">
          <template v-slot:content>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
          </template>
          <g-button>右</g-button>
        </g-popover>
      </template>
      <pre slot="code"><code>{{code3}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Button from "../../../src/button/button";
import Popover from "../../../src/popover";
import ButtonGroup from "../../../src/button/button-group";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-button": Button,
    "g-button-group": ButtonGroup,
    "g-popover": Popover,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      code1: `<g-popover>
  <template v-slot:content>
    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
  </template>
  <g-button>上</g-button>
</g-popover>
<g-popover position="bottom">
  <template v-slot:content>
    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
  </template>
  <g-button>下</g-button>
</g-popover>
<g-popover position="left">
  <template v-slot:content>
    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
  </template>
  <g-button>左</g-button>
</g-popover>
<g-popover position="right">
  <template v-slot:content>
    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
  </template>
  <g-button>右</g-button>
</g-popover>`,
      code2: `<g-popover>
  <template v-slot:content="{close}">
    <div>
      <g-button @click="close">关闭</g-button>内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </div>
  </template>
  <g-button>点我</g-button>
</g-popover>`,
      code3: `<g-popover trigger="hover">
  <template v-slot:content>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</template>
  <g-button>上</g-button>
</g-popover>
<g-popover position="bottom" trigger="hover">
  <template v-slot:content>
    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
  </template>
  <g-button>下</g-button>
</g-popover>
<g-popover position="left" trigger="hover">
  <template v-slot:content>
    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
  </template>
  <g-button>左</g-button>
</g-popover>
<g-popover position="right" trigger="hover">
  <template v-slot:content>
    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
  </template>
  <g-button>右</g-button>
</g-popover>`
    };
  }
};
</script>
<style lang="scss">
.content-wrapper {
  z-index: 11;
}
</style>
