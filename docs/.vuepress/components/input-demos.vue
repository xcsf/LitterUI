
<template>
  <div class="box">
    <s-wrapper title="数据绑定">
      <template slot="component">
        <g-input value="text" v-model="message"></g-input>
        <p style="display:inline-block;margin:0 20px;">
          <b style="font-size:14px;">绑定数据：</b>
          {{message}}
        </p>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="Disable 禁用">
      <g-input slot="component" value="text" disabled></g-input>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
    <s-wrapper title="Readonly 只读">
      <g-input slot="component" value="text" readonly></g-input>
      <pre slot="code"><code>{{code3}}</code></pre>
    </s-wrapper>
    <s-wrapper title="Error 错误">
      <g-input slot="component" value="text" error="亲人两行泪"></g-input>
      <pre slot="code"><code>{{code4}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Input from "../../../src/input";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-input": Input,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      code1: `<g-input value="text" v-model="message"></g-input>
<p style="display:inline-block;margin:0 20px;">
  <b style="font-size:14px;">绑定数据：</b>
  {{message}}
</p>`,
      code2: `<g-input value="text" disabled></g-input>`,
      code3: `<g-input value="text" readonly></g-input>`,
      code4: `<g-input value="text" error="亲人两行泪"></g-input>`,
      message: "value",
      instruction: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.box {
}
</style>
