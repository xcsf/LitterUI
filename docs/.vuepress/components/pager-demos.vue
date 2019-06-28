
<template>
  <div>
    <s-wrapper title="基本使用" :instruction="instruction1">
      <template slot="component">
        <g-pager :totalPage="15" :currentPage.sync="currentPage"></g-pager>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="hideIfOnePage 选项" :instruction="instruction2">
      <template slot="component">
        <g-pager :totalPage="1" :currentPage.sync="currentPage" :hide-if-one-page="false"></g-pager>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Pager from "../../../src/pager/pager";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-pager": Pager,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      currentPage: 8,
      code1: `<g-pager :totalPage="15" :currentPage.sync="currentPage"></g-pager>`,
      code2: `<g-pager :totalPage="1" :currentPage.sync="currentPage" :hide-if-one-page="false"></g-pager>`,
      instruction1: "totalPage:Number类型，必须。指示总页数。currentPage.sync;Number类型、必须。指示当前页。",
      instruction2:
        "hide-if-one-page: Boolean类型。当只有一页时,是否显示分页器。"
    };
  }
};
</script>