
<template>
  <div>
    <s-wrapper title="基础用法" :instruction="instruction1">
      <template slot="component">
        <g-collapse :selected.sync="selectedcoll" style="width:200px;">
          <g-collapse-item title="标题1" name="1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</g-collapse-item>
          <g-collapse-item
            title="标题2"
            name="2"
          >内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2</g-collapse-item>
          <g-collapse-item title="标题3" name="3">内容3内容3</g-collapse-item>
        </g-collapse>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="single 选项">
      <template slot="component">
        <g-collapse single :selected.sync="selectedcoll" style="width:200px;">
          <g-collapse-item title="标题1" name="1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</g-collapse-item>
          <g-collapse-item
            title="标题2"
            name="2"
          >内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2</g-collapse-item>
          <g-collapse-item title="标题3" name="3">内容3内容3</g-collapse-item>
        </g-collapse>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Collapse from "../../../src/collapse/Collapse";
import CollapseItem from "../../../src/collapse/collapse-item";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      selectedcoll: ["3"],
      code1: `<g-collapse :selected.sync="selectedcoll" style="width:200px;">
  <g-collapse-item title="标题1" name="1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</g-collapse-item>
  <g-collapse-item
    title="标题2"
    name="2"
  >内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2</g-collapse-item>
  <g-collapse-item title="标题3" name="3">内容3内容3</g-collapse-item>
</g-collapse>`,
      instruction1: `每个collapse-item 都需要设置其唯一标识 name 属性;使用 :selected.sync 绑定当前选的元素的 name 属性`,
      code2: `<g-collapse single :selected.sync="selectedcoll" style="width:200px;">
  <g-collapse-item title="标题1" name="1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</g-collapse-item>
  <g-collapse-item
    title="标题2"
    name="2"
  >内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2</g-collapse-item>
  <g-collapse-item title="标题3" name="3">内容3内容3</g-collapse-item>
</g-collapse>`
    };
  }
};
</script>