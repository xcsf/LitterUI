
<template>
  <div class="box">
    <s-wrapper title="数据绑定">
      <template slot="component">
        <g-input value="text" v-model="message"></g-input>
        <p style="display:inline-block;margin:0 20px;">
          <b>绑定数据：</b>
          {{message}}
        </p>
      </template>
      <pre slot="code"><code>{{content}}</code></pre>
    </s-wrapper>
    <s-wrapper title="Disable 属性">
      <g-input slot="component" value="text" disabled></g-input>
      <pre slot="code"><code>{{content}}</code></pre>
    </s-wrapper>
    <s-wrapper title="Readonly 属性">
      <g-input slot="component" value="text" readonly></g-input>
      <pre slot="code"><code>{{content}}</code></pre>
    </s-wrapper>
    <s-wrapper title="Error 提示">
      <g-input slot="component" value="text" error="亲人两行泪"></g-input>
      <pre slot="code"><code>{{content}}</code></pre>
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
      content: `<g-input value="阿斯顿" v-model="message"></g-input>
    <p>{{message}}</p>
    <g-input value="梵蒂冈" disabled></g-input>
    <g-input value="梵蒂冈" readonly></g-input>
    <g-input value="梵蒂冈" error="亲人两行泪" @change="inputchange"></g-input>
      `
        .replace(/\t+| +/g, "")
        .trim(),
      message: "value"
    };
  }
};
</script>
<style lang="scss" scoped>
.box {
  & .wapper {
    border: 1px solid gainsboro;
    padding: 1em;
    border-radius: 5px;
    margin-bottom: 20px;
  }
}
</style>
