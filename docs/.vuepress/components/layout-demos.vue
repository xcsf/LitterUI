<template>
  <div>
    <s-wrapper title="基础布局">
      <template slot="component">
        <g-layout style="color: white;">
          <g-header style="height: 50px; background:lightskyblue;">header</g-header>
          <g-content style="height: 100px; background:deepskyblue;">content</g-content>
          <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
        </g-layout>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="基础布局">
      <template slot="component">
        <g-layout style="color: white; overflow:hidden;">
          <g-header style="height: 50px; background:lightskyblue;">header</g-header>
          <g-layout>
            <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">sider</g-sider>
            <g-content style="height: 100px; background:deepskyblue;">content</g-content>
          </g-layout>
          <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
        </g-layout>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
    <s-wrapper title="基础布局">
      <template slot="component">
        <g-layout style="color: white; overflow:hidden;">
          <g-sider style=" background:#ddd; width:200px; color: black;">sider</g-sider>
          <g-layout>
            <g-header style="height: 50px; background:lightskyblue;">header</g-header>
            <g-content style="height: 100px; background:deepskyblue;">content</g-content>
            <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
          </g-layout>
        </g-layout>
      </template>
      <pre slot="code"><code>{{code3}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Footer from "../../../src/footer";
import Content from "../../../src/content";
import sider from "../../../src/sider";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-footer": Footer,
    "g-content": Content,
    "g-sider": sider,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      code1: `<g-layout style="color: white;">
  <g-header style="height: 50px; background:lightskyblue;">header</g-header>
  <g-content style="height: 100px; background:deepskyblue;">content</g-content>
  <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
</g-layout>`,
      code2: `<g-layout style="color: white; overflow:hidden;">
  <g-header style="height: 50px; background:lightskyblue;">header</g-header>
  <g-layout>
    <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">sider</g-sider>
    <g-content style="height: 100px; background:deepskyblue;">content</g-content>
  </g-layout>
  <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
</g-layout>`,
      code3: `<g-layout style="color: white; overflow:hidden;">
  <g-sider style=" background:#ddd; width:200px; color: black;">sider</g-sider>
  <g-layout>
    <g-header style="height: 50px; background:lightskyblue;">header</g-header>
    <g-content style="height: 100px; background:deepskyblue;">content</g-content>
    <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
  </g-layout>
</g-layout>`
    };
  }
};
</script>