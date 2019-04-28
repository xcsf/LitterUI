
<template>
  <div>
    <s-wrapper title="基础用法" :instruction="instruction1">
      <template slot="component">
        <g-slides :selected.sync="selectedSlides">
          <g-slides-item name="first">
            <div class="box">0</div>
          </g-slides-item>
          <g-slides-item name="second">
            <div class="box">1</div>
          </g-slides-item>
          <g-slides-item name="third">
            <div class="box">2</div>
          </g-slides-item>
          <g-slides-item name="four">
            <div class="box">3</div>
          </g-slides-item>
          <g-slides-item name="five">
            <div class="box">4</div>
          </g-slides-item>
        </g-slides>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="autoPlay 与 autoPlayDelay" :instruction="instruction2">
      <template slot="component">
        <g-slides :selected.sync="selectedSlides1" autoPlay :autoPlayDelay='2000'>
          <g-slides-item name="first">
            <div class="box">0</div>
          </g-slides-item>
          <g-slides-item name="second">
            <div class="box">1</div>
          </g-slides-item>
          <g-slides-item name="third">
            <div class="box">2</div>
          </g-slides-item>
          <g-slides-item name="four">
            <div class="box">3</div>
          </g-slides-item>
          <g-slides-item name="five">
            <div class="box">4</div>
          </g-slides-item>
        </g-slides>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
    <s-wrapper title="card 卡片化">
      <template slot="component">
        <g-slides :selected.sync="selectedSlides" card>
          <g-slides-item name="first">
            <div class="box">0</div>
          </g-slides-item>
          <g-slides-item name="second">
            <div class="box">1</div>
          </g-slides-item>
          <g-slides-item name="third">
            <div class="box">2</div>
          </g-slides-item>
          <g-slides-item name="four">
            <div class="box">3</div>
          </g-slides-item>
          <g-slides-item name="five">
            <div class="box">4</div>
          </g-slides-item>
        </g-slides>
      </template>
      <pre slot="code"><code>{{code3}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Slides from "../../../src/slides/slides";
import SlidesItem from "../../../src/slides/slides-item";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-slides": Slides,
    "g-slides-item": SlidesItem,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      selectedSlides: "second",
      selectedSlides1: "first",
      instruction1:"使用 :selected.sync 绑定 slides-item 中唯一标识属性 name 类型为 String",
      instruction2:"添加 autoPlay 属性开启自动切换, 可通过 autoPlayDelay 属性设置间隔时间，单位：毫秒(ms)，默认为 3000ms,当鼠标移入时则会停止自动切换",
      code1: `<g-slides :selected.sync="selectedSlides">
  <g-slides-item name="first">
    <div class="box">0</div>
  </g-slides-item>
  <g-slides-item name="second">
    <div class="box">1</div>
  </g-slides-item>
  <g-slides-item name="third">
    <div class="box">2</div>
  </g-slides-item>
  <g-slides-item name="four">
    <div class="box">3</div>
  </g-slides-item>
  <g-slides-item name="five">
    <div class="box">4</div>
  </g-slides-item>
</g-slides>`,
      code2: `<g-slides :selected.sync="selectedSlides1" autoPlay :autoPlayDelay='2000'>
  <g-slides-item name="first">
    <div class="box">0</div>
  </g-slides-item>
  <g-slides-item name="second">
    <div class="box">1</div>
  </g-slides-item>
  <g-slides-item name="third">
    <div class="box">2</div>
  </g-slides-item>
  <g-slides-item name="four">
    <div class="box">3</div>
  </g-slides-item>
  <g-slides-item name="five">
    <div class="box">4</div>
  </g-slides-item>
</g-slides>`,
      code3: `<g-slides :selected.sync="selectedSlides" card>
  <g-slides-item name="first">
    <div class="box">0</div>
  </g-slides-item>
  <g-slides-item name="second">
    <div class="box">1</div>
  </g-slides-item>
  <g-slides-item name="third">
    <div class="box">2</div>
  </g-slides-item>
  <g-slides-item name="four">
    <div class="box">3</div>
  </g-slides-item>
  <g-slides-item name="five">
    <div class="box">4</div>
  </g-slides-item>
</g-slides>`
    };
  }
};
</script>
<style lang="scss" scoped>
.box {
  height: 200px;
  width: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
