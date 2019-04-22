
<template>
  <div>
    <s-wrapper title="简单按钮">
      <template slot="component">
        <g-tabs :selected.sync="selectedTab">
          <g-tabs-head>
            <g-tabs-item name="title1">Title1</g-tabs-item>
            <g-tabs-item name="title2">Title2</g-tabs-item>
            <g-tabs-item name="title3">Title3</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="title1">Content1</g-tabs-pane>
            <g-tabs-pane name="title2">Content2</g-tabs-pane>
            <g-tabs-pane name="title3">Content3</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="选项卡样式">
      <template slot="component">
        <g-tabs :selected.sync="selectedTab" type="card">
          <g-tabs-head>
            <g-tabs-item name="title1">Title1</g-tabs-item>
            <g-tabs-item name="title2">Title2</g-tabs-item>
            <g-tabs-item name="title3">Title3</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="title1">Content1</g-tabs-pane>
            <g-tabs-pane name="title2">Content2</g-tabs-pane>
            <g-tabs-pane name="title3">Content3</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
    <s-wrapper title="卡片化">
      <template slot="component">
        <g-tabs :selected.sync="selectedTab" type="border-card">
          <g-tabs-head>
            <g-tabs-item name="title1">Title1</g-tabs-item>
            <g-tabs-item name="title2">Title2</g-tabs-item>
            <g-tabs-item name="title3">Title3</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="title1">Content1</g-tabs-pane>
            <g-tabs-pane name="title2">Content2</g-tabs-pane>
            <g-tabs-pane name="title3">Content3</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
      </template>
      <pre slot="code"><code>{{code3}}</code></pre>
    </s-wrapper>
    <s-wrapper title="按钮">
      <template slot="component">
        <g-tabs :selected.sync="selectedTab">
          <g-tabs-head>
            <template slot="actions">设置</template>
            <g-tabs-item name="title1">Title1</g-tabs-item>
            <g-tabs-item name="title2">Title2</g-tabs-item>
            <g-tabs-item name="title3">Title3</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="title1">Content1</g-tabs-pane>
            <g-tabs-pane name="title2">Content2</g-tabs-pane>
            <g-tabs-pane name="title3">Content3</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
      </template>
      <pre slot="code"><code>{{code4}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Tabs from "../../../src/tabs/tabs";
import TabsBody from "../../../src/tabs/tabs-body";
import TabsHead from "../../../src/tabs/tabs-head";
import TabsItem from "../../../src/tabs/tabs-item";
import TabsPane from "../../../src/tabs/tabs-pane";
import Icon from "../../../src/icon";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-pane": TabsPane,
    "g-tabs-item": TabsItem,
    "g-tabs-head": TabsHead,
    "g-tabs-body": TabsBody,
    "g-icon": Icon,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      selectedTab: "title2",
      code1: `<g-tabs :selected.sync="selectedTab">
  <g-tabs-head>
    <g-tabs-item name="title1">Title1</g-tabs-item>
    <g-tabs-item name="title2">Title2</g-tabs-item>
    <g-tabs-item name="title3">Title3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="title1">Content1</g-tabs-pane>
    <g-tabs-pane name="title2">Content2</g-tabs-pane>
    <g-tabs-pane name="title3">Content3</g-tabs-pane>
  </g-tabs-body>
</g-tabs>`,
      code2: `<g-tabs :selected.sync="selectedTab" type="card">
  <g-tabs-head>
    <g-tabs-item name="title1">Title1</g-tabs-item>
    <g-tabs-item name="title2">Title2</g-tabs-item>
    <g-tabs-item name="title3">Title3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="title1">Content1</g-tabs-pane>
    <g-tabs-pane name="title2">Content2</g-tabs-pane>
    <g-tabs-pane name="title3">Content3</g-tabs-pane>
  </g-tabs-body>
</g-tabs> `,
      code3: `<g-tabs :selected.sync="selectedTab" type="border-card">
  <g-tabs-head>
    <g-tabs-item name="title1">Title1</g-tabs-item>
    <g-tabs-item name="title2">Title2</g-tabs-item>
    <g-tabs-item name="title3">Title3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="title1">Content1</g-tabs-pane>
    <g-tabs-pane name="title2">Content2</g-tabs-pane>
    <g-tabs-pane name="title3">Content3</g-tabs-pane>
  </g-tabs-body>
</g-tabs>`,
      code4: `<g-tabs :selected.sync="selectedTab">
  <g-tabs-head>
    <template slot="actions">设置</template>
    <g-tabs-item name="title1">Title1</g-tabs-item>
    <g-tabs-item name="title2">Title2</g-tabs-item>
    <g-tabs-item name="title3">Title3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="title1">Content1</g-tabs-pane>
    <g-tabs-pane name="title2">Content2</g-tabs-pane>
    <g-tabs-pane name="title3">Content3</g-tabs-pane>
  </g-tabs-body>
</g-tabs>`
    };
  }
};
</script>