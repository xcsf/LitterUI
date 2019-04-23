
<template>
  <div>
    <s-wrapper title="基础用法">
      <template slot="component">
        <g-cascader :source="sourceStatic" popover-height="height:200px"></g-cascader>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="基础用法--动态数据">
      <template slot="component">
        <g-cascader :source="source" popover-height="height:200px" :load-data="loadData"></g-cascader>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Cascader from "../../../src/cascader/cascader";
import db from "../../../tests/fixture/db";
import Wrapper from "./wrapper";
function ajax2(pareateId = 0) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      let result = db.filter(item => {
        return item.parent_id == pareateId;
      });
      result.map(node => {
        // console.log(node);
        if (
          db.filter(item => {
            return item.parent_id === node.id;
          }).length > 0
        ) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      reslove(result);
    }, 500);
  });
}
export default {
  components: {
    "g-cascader": Cascader,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      source: [],
      sourceStatic: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [
                {
                  name: "上城"
                },
                {
                  name: "下城"
                },
                {
                  name: "江干"
                }
              ]
            },
            {
              name: "嘉兴",
              children: [
                {
                  name: "南湖"
                },
                {
                  name: "秀洲"
                },
                {
                  name: "嘉善"
                }
              ]
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [
                {
                  name: "鼓楼"
                },
                {
                  name: "台江"
                },
                {
                  name: "仓山"
                }
              ]
            }
          ]
        },
        {
          name: "安徽",
          children: [
            {
              name: "合肥",
              children: [
                {
                  name: "瑶海"
                },
                {
                  name: "庐阳"
                }
              ]
            }
          ]
        }
      ],
      code1: `<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>`,
      code2: `<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button>更多</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>`
    };
  },
  created() {
    ajax2(0).then(result => {
      this.source = result;
    });
  },
  methods: {
    loadData(newSelected, callback) {
      let { id } = newSelected;
      ajax2(id).then(result => {
        callback(result);
      });
    }
  }
};
</script>