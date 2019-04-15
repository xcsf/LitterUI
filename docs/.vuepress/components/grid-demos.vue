
<template>
  <div>
    <s-wrapper title="24格网格">
      <template slot="component">
        <g-row>
          <g-col span="12">
            <div class="demo">12</div>
          </g-col>
          <g-col span="12">
            <div class="demo">12</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
        </g-row>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="设置(间隔)gutter">
      <template slot="component">
        <g-row gutter="10">
          <g-col span="12">
            <div class="demo">12</div>
          </g-col>
          <g-col span="12">
            <div class="demo">12</div>
          </g-col>
        </g-row>
        <g-row gutter="10">
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
        </g-row>
        <g-row gutter="10">
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
        </g-row>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
    <s-wrapper title="设置(偏移)offset">
      <template slot="component">
        <g-row>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
          <g-col span="8" offset="8">
            <div class="demo">8</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6" offset="3">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6" offset="3">
            <div class="demo">6</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col span="3">
            <div class="demo">6</div>
          </g-col>
          <g-col span="3" offset="3">
            <div class="demo">6</div>
          </g-col>
          <g-col span="3" offset="3">
            <div class="demo">6</div>
          </g-col>
          <g-col span="3" offset="3">
            <div class="demo">6</div>
          </g-col>
        </g-row>
      </template>
      <pre slot="code"><code>{{code3}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Row from "../../../src/Row";
import Col from "../../../src/Col";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-row": Row,
    "g-col": Col,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      code1: `<g-row>
  <g-col span="12">
    <div class="demo">12</div>
  </g-col>
  <g-col span="12">
    <div class="demo">12</div>
  </g-col>
</g-row>
<g-row>
  <g-col span="8">
    <div class="demo">8</div>
  </g-col>
  <g-col span="8">
    <div class="demo">8</div>
  </g-col>
  <g-col span="8">
    <div class="demo">8</div>
  </g-col>
</g-row>
<g-row>
  <g-col span="6">
    <div class="demo">6</div>
  </g-col>
  <g-col span="6">
    <div class="demo">6</div>
  </g-col>
  <g-col span="6">
    <div class="demo">6</div>
  </g-col>
  <g-col span="6">
    <div class="demo">6</div>
  </g-col>
</g-row>`,
      code2: `<g-row gutter="10">
  <g-col span="12">
    <div class="demo">12</div>
  </g-col>
  <g-col span="12">
    <div class="demo">12</div>
  </g-col>
</g-row>
<g-row gutter="10">
  <g-col span="8">
    <div class="demo">8</div>
  </g-col>
  <g-col span="8">
    <div class="demo">8</div>
  </g-col>
  <g-col span="8">
    <div class="demo">8</div>
  </g-col>
</g-row>
<g-row gutter="10">
  <g-col span="6">
    <div class="demo">6</div>
  </g-col>
  <g-col span="6">
    <div class="demo">6</div>
  </g-col>
  <g-col span="6">
    <div class="demo">6</div>
  </g-col>
  <g-col span="6">
    <div class="demo">6</div>
  </g-col>
</g-row>`,
      code3: `<g-row>
  <g-col span="8">
    <div class="demo">8</div>
  </g-col>
  <g-col span="8" offset="8">
    <div class="demo">8</div>
  </g-col>
</g-row>
<g-row>
  <g-col span="6">
    <div class="demo">6</div>
  </g-col>
  <g-col span="6" offset="3">
    <div class="demo">6</div>
  </g-col>
  <g-col span="6" offset="3">
    <div class="demo">6</div>
  </g-col>
</g-row>
<g-row >
  <g-col span="3">
    <div class="demo">6</div>
  </g-col>
  <g-col span="3"  offset="3">
    <div class="demo">6</div>
  </g-col>
  <g-col span="3" offset="3">
    <div class="demo">6</div>
  </g-col>
  <g-col span="3" offset="3">
    <div class="demo">6</div>
  </g-col>
</g-row>`
    };
  }
};
</script>
<style lang="scss">
.s-component {
  > .row {
    > .col {
      box-sizing: border-box;
      > .demo {
        height: 50px;
        border: 1px solid #ccc;
        background-color: #eee;
      }
    }
  }
}
</style>
