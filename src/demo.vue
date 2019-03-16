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
        </g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </g-layout>

    <!-- <g-row>
            <g-col span="12">1</g-col>
            <g-col span="12">2</g-col>
    </g-row>-->
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

export default {
  name: "Demo"
};
</script>
<style lang="scss" scoped>
</style>
