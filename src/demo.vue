<template>
  <div>
    <g-layout style="height:100vh">
      <g-sider style="border:1px solid black;">
        <g-collapse single :selected.sync="selectedcoll" style="margin: 40px">
          <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
          <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
          <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
      </g-sider>
      <g-layout>
        <g-header style="border:1px solid black;">header</g-header>
        <g-content style="border:1px solid black;">
          <div>
            <g-button @click="showToast1" :enableHtml="true">Show Toast</g-button>
            <g-button @click="showToast2">Show Toast</g-button>
            <g-button @click="showToast3">Show Toast</g-button>
          </div>
          <div>
            <g-tabs :selected.sync="selectedTab">
              <g-tabs-head type="card">
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
              <template v-slot:content="{close}">
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
          <div style="display:flex;border: 1px solid greenyellow;">
            <span>动态数据</span>
            <g-cascader :source="source" popover-height="height:200px" :load-data="loadData"></g-cascader>
            <span>静态数据</span>
            <g-cascader :source="sourceStatic" popover-height="height:200px"></g-cascader>
          </div>
          <div style="border: 1px solid greenyellow;">
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
          </div>
          <div>
            <g-nav :selected.sync="selectednav" trigger="hover">
              <g-nav-item name="home">
                <a href="https://www.baidu.com" target="_blank">首页</a>
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
              <g-nav-item name="hire">页面3</g-nav-item>
            </g-nav>
          </div>
          <div>
            <g-pager :totalPage="20" :currentPage="3"></g-pager>
          </div>
        </g-content>
        <g-footer style="border:1px solid black;">footer</g-footer>
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
import Button from "./button/button";
import ButtonGroup from "./button/button-group";
import Cascader from "./cascader/cascader";
import Col from "./grid/col";
import Collapse from "./collapse/collapse";
import CollapseItem from "./collapse/collapse-item";
import Content from "./layout/content";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Icon from "./icon";
import Input from "./input";
import Layout from "./layout/layout";
import Nav from "./nav/nav";
import NavItem from "./nav/nav-item";
import Plugin from "./plugin";
import Pager from "./pager/pager";
import Popover from "./popover";
import Row from "./grid/row";
import Sider from "./layout/sider";
import Slides from "./slides/slides";
import SlidesItem from "./slides/slides-item";
import SubNav from "./nav/sub-nav";
import Tabs from "./tabs/tabs";
import TabsBody from "./tabs/tabs-body";
import TabsHead from "./tabs/tabs-head";
import TabsItem from "./tabs/tabs-item";
import TabsPane from "./tabs/tabs-pane";
import Vue from "vue";
import db from "./../tests/fixture/db";
import { removeListener } from "./click-outside";
import { setInterval } from "timers";
import { unwatchFile } from "fs";
import navItemVue from "./nav/nav-item.vue";
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
  name: "Demo",
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: "asd",
      selectedTab: "finance",
      selectedcoll: ["2", "3"],
      selectednav: ["culture"],
      selectedSlides: "second",
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
      ]
    };
  },
  components: {
    "g-slides-item": SlidesItem,
    "g-slides": Slides,
    "g-button": Button,
    "g-icon": Icon,
    "g-button-group": ButtonGroup,
    "g-cascader": Cascader,
    "g-col": Col,
    "g-row": Row,
    "g-layout": Layout,
    "g-sider": Sider,
    "g-input": Input,
    "g-footer": Footer,
    "g-popover": Popover,
    "g-pager": Pager,
    "g-tabs": Tabs,
    "g-tabs-pane": TabsPane,
    "g-tabs-item": TabsItem,
    "g-tabs-head": TabsHead,
    "g-tabs-body": TabsBody,
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem,
    "g-header": Header,
    "g-content": Content,
    "g-nav": Nav,
    "g-nav-item": NavItem,
    "g-sub-nav": SubNav
  },
  created() {
    // ajax(0, result => {
    //   this.source = result;
    // });
    ajax2(0).then(result => {
      this.source = result;
    });
    // removeListener();
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
          autoClose: 5
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
