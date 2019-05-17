
<template>
  <div>
    <s-wrapper title="顶部导航" :instruction="instruction1" :zindex="9">
      <template slot="component">
        <g-nav :selected.sync="selectednav">
          <g-nav-item name="home">
            <a href="https://xcsf.github.io/LitterUI/" target="_blank">首页</a>
          </g-nav-item>
          <g-sub-nav name="about">
            <template v-slot:title>关于</template>
            <g-nav-item name="culture">企业文化</g-nav-item>
            <g-nav-item name="developers">团队</g-nav-item>
            <g-sub-nav name="contacts">
              <template v-slot:title>联系电话</template>
              <g-nav-item name="wechat">微信</g-nav-item>
              <g-nav-item name="qq">QQ</g-nav-item>
              <g-sub-nav name="phone">
                <template slot="title">手机</template>
                <g-nav-item name="cm">移动</g-nav-item>
                <g-nav-item name="cu">联通</g-nav-item>
                <g-nav-item name="cn">电信</g-nav-item>
              </g-sub-nav>
            </g-sub-nav>
          </g-sub-nav>
          <g-nav-item name="hire">LitterUI</g-nav-item>
        </g-nav>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="vertical 垂直导航" :instruction="instruction2" :zindex="8">
      <template slot="component">
        <g-nav :selected.sync="selectednav" vertical style="width:200px;">
          <g-nav-item name="home">
            <a href="https://xcsf.github.io/LitterUI/" target="_blank">首页</a>
          </g-nav-item>
          <g-sub-nav name="about">
            <template v-slot:title>关于</template>
            <g-nav-item name="culture">企业文化</g-nav-item>
            <g-nav-item name="developers">团队</g-nav-item>
            <g-sub-nav name="contacts">
              <template v-slot:title>联系电话</template>
              <g-nav-item name="wechat">微信</g-nav-item>
              <g-nav-item name="qq">QQ</g-nav-item>
              <g-sub-nav name="phone">
                <template slot="title">手机</template>
                <g-nav-item name="cm">移动</g-nav-item>
                <g-nav-item name="cu">联通</g-nav-item>
                <g-nav-item name="cn">电信</g-nav-item>
              </g-sub-nav>
            </g-sub-nav>
          </g-sub-nav>
          <g-nav-item name="hire">LitterUI</g-nav-item>
        </g-nav>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
    <s-wrapper :zindex="7" title="trigger 触发属性" :instruction="instruction3">
      <template slot="component">
        <g-nav :selected.sync="selectednav" trigger="hover">
          <g-nav-item name="home">
            <a href="https://xcsf.github.io/LitterUI/" target="_blank">首页</a>
          </g-nav-item>
          <g-sub-nav name="about">
            <template v-slot:title>关于</template>
            <g-nav-item name="culture">企业文化</g-nav-item>
            <g-nav-item name="developers">团队</g-nav-item>
            <g-sub-nav name="contacts">
              <template v-slot:title>联系电话</template>
              <g-nav-item name="wechat">微信</g-nav-item>
              <g-nav-item name="qq">QQ</g-nav-item>
              <g-sub-nav name="phone">
                <template slot="title">手机</template>
                <g-nav-item name="cm">移动</g-nav-item>
                <g-nav-item name="cu">联通</g-nav-item>
                <g-nav-item name="cn">电信</g-nav-item>
              </g-sub-nav>
            </g-sub-nav>
          </g-sub-nav>
          <g-nav-item name="hire">LitterUI</g-nav-item>
        </g-nav>
      </template>
      <pre slot="code"><code>{{code3}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Nav from "../../../src/nav/nav";
import NavItem from "../../../src/nav/nav-item";
import SubNav from "../../../src/nav/sub-nav";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-nav": Nav,
    "g-sub-nav": SubNav,
    "g-nav-item": NavItem,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      selectednav: ["culture"],
      instruction1: "水平的顶部导航菜单。",
      instruction2: "垂直菜单，子菜单内嵌在菜单区域。",
      instruction3: "设置sub-nav-item 触发方式。 trigger 属性的值为 'hover'、'click'  默认为 'click'",
      code1: `<g-nav :selected.sync="selectednav">
  <g-nav-item name="home">
    <a href="https://xcsf.github.io/LitterUI/" target="_blank">首页</a>
  </g-nav-item>
  <g-sub-nav name="about">
    <template v-slot:title>关于</template>
    <g-nav-item name="culture">企业文化</g-nav-item>
    <g-nav-item name="developers">团队</g-nav-item>
    <g-sub-nav name="contacts">
      <template v-slot:title>联系电话</template>
      <g-nav-item name="wechat">微信</g-nav-item>
      <g-nav-item name="qq">QQ</g-nav-item>
      <g-sub-nav name="phone">
        <template slot="title">手机</template>
        <g-nav-item name="cm">移动</g-nav-item>
        <g-nav-item name="cu">联通</g-nav-item>
        <g-nav-item name="cn">电信</g-nav-item>
      </g-sub-nav>
    </g-sub-nav>
  </g-sub-nav>
  <g-nav-item name="hire">LitterUI</g-nav-item>
</g-nav>`,
      code2: `<g-nav :selected.sync="selectednav" vertical style="width:200px;">
  <g-nav-item name="home">
    <a href="https://xcsf.github.io/LitterUI/" target="_blank">首页</a>
  </g-nav-item>
  <g-sub-nav name="about">
    <template v-slot:title>关于</template>
    <g-nav-item name="culture">企业文化</g-nav-item>
    <g-nav-item name="developers">团队</g-nav-item>
    <g-sub-nav name="contacts">
      <template v-slot:title>联系电话</template>
      <g-nav-item name="wechat">微信</g-nav-item>
      <g-nav-item name="qq">QQ</g-nav-item>
      <g-sub-nav name="phone">
        <template slot="title">手机</template>
        <g-nav-item name="cm">移动</g-nav-item>
        <g-nav-item name="cu">联通</g-nav-item>
        <g-nav-item name="cn">电信</g-nav-item>
      </g-sub-nav>
    </g-sub-nav>
  </g-sub-nav>
  <g-nav-item name="hire">LitterUI</g-nav-item>
</g-nav>`,
      code3: `<g-nav :selected.sync="selectednav" trigger="hover">
  <g-nav-item name="home">
    <a href="https://xcsf.github.io/LitterUI/" target="_blank">首页</a>
  </g-nav-item>
  <g-sub-nav name="about">
    <template v-slot:title>关于</template>
    <g-nav-item name="culture">企业文化</g-nav-item>
    <g-nav-item name="developers">团队</g-nav-item>
    <g-sub-nav name="contacts">
      <template v-slot:title>联系电话</template>
      <g-nav-item name="wechat">微信</g-nav-item>
      <g-nav-item name="qq">QQ</g-nav-item>
      <g-sub-nav name="phone">
        <template slot="title">手机</template>
        <g-nav-item name="cm">移动</g-nav-item>
        <g-nav-item name="cu">联通</g-nav-item>
        <g-nav-item name="cn">电信</g-nav-item>
      </g-sub-nav>
    </g-sub-nav>
  </g-sub-nav>
  <g-nav-item name="hire">LitterUI</g-nav-item>
</g-nav>`
    };
  }
};
</script>