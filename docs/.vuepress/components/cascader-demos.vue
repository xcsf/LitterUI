
<template>
  <div>
    <s-wrapper title="基础用法">
      <template slot="component">
        <div style="height:250px;">
          <g-cascader :source="sourceStatic" popover-height="height:200px"></g-cascader>
        </div>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="基础用法--动态数据" :instruction="instruction2">
      <template slot="component">
        <div style="height:250px;">
          <g-cascader :source="source" popover-height="height:200px" :load-data="loadData"></g-cascader>
        </div>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Cascader from "../../../src/cascader/cascader";
import db from "../../../tests/fixture/db";
import Wrapper from "./wrapper";
function ajax(pareateId = 0) {
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
      code1: `<g-cascader :source="sourceStatic" popover-height="height:200px"></g-cascader>`,
      code2: `<g-cascader :source="source" popover-height="height:200px" :load-data="loadData"></g-cascader>

methods: {
  loadData(newSelected, callback) {
    let { id } = newSelected;
    ajax(id).then(result => {
      callback(result);
    });
  }
}`,
      instruction2: `使用load-data选项动态加载数据源`
    };
  },
  created() {
    ajax(0).then(result => {
      this.source = result;
    });
  },
  methods: {
    loadData(newSelected, callback) {
      let { id } = newSelected;
      ajax(id).then(result => {
        callback(result);
      });
    }
  }
};
</script>