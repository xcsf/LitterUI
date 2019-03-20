<template>
  <div>
    <g-layout style="height:100vh">
      <g-sider>
        <g-collapse single :selected.sync="selectedcoll" style="margin: 40px">
          <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
          <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
          <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        {{selectedcoll}}
      </g-sider>
      <g-layout>
        <g-header>header</g-header>
        <g-content>
          <div>
            <g-button @click="showToast1">Show Toast</g-button>
            <g-button @click="showToast2">Show Toast</g-button>
            <g-button @click="showToast3">Show Toast</g-button>
          </div>
          <div>
            <g-tabs :selected.sync="selectedTab">
              <g-tabs-head>
                <template slot="actions">设置</template>
                <g-tabs-item name="woman">
                  <g-icon name="settings"></g-icon>妹子
                </g-tabs-item>
                <g-tabs-item name="finance">錢</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
              </g-tabs-head>
              <g-tabs-body>
                <g-tabs-pane name="woman">妹子</g-tabs-pane>
                <g-tabs-pane name="finance">钱</g-tabs-pane>
                <g-tabs-pane name="sports">体育</g-tabs-pane>
              </g-tabs-body>
            </g-tabs>
          </div>
          <div style="padding: 50px 100px;overflow: hidden; border: 1px solid greenyellow;">
            <g-popover>
              <template slot="content" slot-scope="{close}">
                <div>
                  <g-button @click="close">点我</g-button>popover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容d
                </div>
              </template>
              <g-button>点我</g-button>
            </g-popover>
            <g-popover position="bottom">
              <template slot="content">
                <div>popover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容d</div>
              </template>
              <g-button>点我</g-button>
            </g-popover>
            <g-popover position="left">
              <template slot="content">
                <div>popover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容d</div>
              </template>
              <g-button>点我</g-button>
            </g-popover>
            <g-popover position="right">
              <template slot="content">
                <div>popover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容d</div>
              </template>
              <g-button>点我</g-button>
            </g-popover>
          </div>
          <div style="padding: 50px 100px;overflow: hidden; border: 1px solid greenyellow;">
            <g-popover trigger="hover">
              <template slot="content">
                <div>popover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容d</div>
              </template>
              <g-button>点我</g-button>
            </g-popover>
            <g-popover trigger="hover" position="bottom">
              <template slot="content">
                <div>popover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容d</div>
              </template>
              <g-button>点我</g-button>
            </g-popover>
            <g-popover trigger="hover" position="left">
              <template slot="content">
                <div>popover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容d</div>
              </template>
              <g-button>点我</g-button>
            </g-popover>
            <g-popover trigger="hover" position="right">
              <template slot="content">
                <div>popover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容dpopover内容d</div>
              </template>
              <g-button>点我</g-button>
            </g-popover>
          </div>
          <div style="height:200px">
            <g-cascader :source="source" popover-height="height:200px" :load-data="loadData"></g-cascader>
          </div>
        </g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </g-layout>
    <div style="margin: 20px 0;">
      <g-input value="阿斯顿" v-model="message"></g-input>
      <p>{{message}}</p>
      <g-input value="梵蒂冈" disabled></g-input>
      <g-input value="梵蒂冈" readonly></g-input>
      <g-input value="梵蒂冈" error="亲人两行泪" @change="inputchange"></g-input>
    </div>
    <div>
      <g-button :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
      <g-button :loading="loading2" @click="loading2 = !loading2" icon="settings">按钮</g-button>
      <g-button
        :loading="true"
        @click="loading3 = !loading3"
        icon="settings"
        icon-position="right"
      >按钮</g-button>
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
    </div>
  </div>
</template>
<script>
import Button from "./button";
import ButtonGroup from "./button-group";
import Cascader from "./cascader";
import Col from "./col";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Icon from "./icon";
import Input from "./input";
import Layout from "./layout";
import Plugin from "./plugin";
import Popover from "./popover";
import Row from "./row";
import Sider from "./sider";
import Tabs from "./tabs";
import TabsBody from "./tabs-body";
import TabsHead from "./tabs-head";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Toast from "./toast";
import db from "./db";
import Vue from "vue";
import { promises } from "fs";
import { Promise } from "q";
Vue.use(Plugin);
function ajax(pareateId = 0, success, faile) {
  let id = setTimeout(() => {
    let result = db.filter(item => {
      return item.parent_id == pareateId;
    });
    success(result);
  }, 3000);
  return id;
}
function ajax2(pareateId = 0) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      let result = db.filter(item => {
        return item.parent_id == pareateId;
      });
      result.map(node => {
        console.log(node)
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
    }, 300);
  });
}
export default {
  name: "Demo",
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: "asd",
      selectedTab: "finance",
      selectedcoll: ["2", "3"],
      source: []
    };
  },
  components: {
    "g-button": Button,
    "g-icon": Icon,
    "g-button-group": ButtonGroup,
    "g-cascader": Cascader,
    "g-col": Col,
    "g-layout": Layout,
    "g-sider": Sider,
    "g-input": Input,
    "g-footer": Footer,
    "g-popover": Popover,
    "g-tabs": Tabs,
    "g-tabs-pane": TabsPane,
    "g-tabs-item": TabsItem,
    "g-tabs-head": TabsHead,
    "g-tabs-body": TabsBody,
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem,
    "g-header": Header,
    "g-content": Content
  },
  created() {
    // ajax(0, result => {
    //   this.source = result;
    // });
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
    },
    inputchange() {},
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast(
        '<p>html标签<a target="_blank" href="https://www.baidu.com">百度一</a></p><p>html标签<a target="_blank" href="https://www.baidu.com">百度一下</a></p>',
        {
          position,
          closeButton: {
            text: "点击关闭",
            callback() {
              console.log("点击关闭回调");
            }
          },
          enableHtml: false,
          autoClose: 1
        }
      );
    }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}

body {
  font-size: var(--font-size);
}
</style>
