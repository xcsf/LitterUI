
<template>
  <div>
    <s-wrapper title="基础用法" :instruction="instruction1">
      <template slot="component">
        <g-button @click="showToast1">顶部提示</g-button>
        <g-button @click="showToast2">中部提示</g-button>
        <g-button @click="showToast3">底部提示</g-button>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="设置 autoClose" :instruction="instruction2">
      <template slot="component">
        <g-button @click="showToast4">中部提示</g-button>
        <g-button @click="showToast5">中部提示</g-button>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
    <s-wrapper title="设置 closeButton" :instruction="instruction2">
      <template slot="component">
        <g-button @click="showToast6">中部提示</g-button>
      </template>
      <pre slot="code"><code>{{code3}}</code></pre>
    </s-wrapper>
    <s-wrapper title="设置 enableHtml">
      <template slot="component">
        <g-button @click="showToast7">中部提示</g-button>
      </template>
      <pre slot="code"><code>{{code4}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Button from "../../../src/button/button";
import Wrapper from "./wrapper";
import Vue from "vue";
import Plugin from "../../../src/plugin";
Vue.use(Plugin);
export default {
  components: {
    "g-button": Button,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      instruction1: "调用 this.$toast() 函数即可使用Toast。",
      code1: `<g-button @click="showToast1">顶部提示</g-button>
<g-button @click="showToast2">中部提示</g-button>
<g-button @click="showToast3">底部提示</g-button>

//position属性取值为"top"、"middle"、"bottom"之一
//默认为五秒自动关闭，可以通过设置autoClose改变。
// methods:
showToast1() {
  this.$toast("顶部弹窗", {
    position: "top"
  });
},
showToast2() {
  this.$toast("中部弹窗", {
    position: "middle"
  });
},
showToast3() {
  this.$toast("底部弹窗", {
    position: "bottom"
  });
}`,
      instruction2: "",
      code2: `<g-button @click="showToast4">中部提示</g-button>
<g-button @click="showToast5">中部提示</g-button>

// methods:
showToast4() {
  this.$toast("2s后关闭", {
    position: "middle",
    autoClose: 2
  });
},
showToast5() {
  this.$toast("不自动关闭", {
    position: "middle",
    autoClose: false
  });
}`,
      code3: `<g-button @click="showToast6">中部提示</g-button>
// methods:
showToast6() {
  this.$toast("默认提示", {
    position: "middle",
    closeButton: {
      text: "Close",
      callback() {
        console.log("点击关闭回调");
      }
    }
  });
}`,
      code4: `<g-button @click="showToast7">中部提示</g-button>
// methods:
showToast7() {
  this.$toast(
    '<p>html标签<a target="_blank" href="https://xcsf.github.io/LitterUI/">LitterUI</a></p><p>html标签<a target="_blank" href="https://xcsf.github.io/LitterUI/">LitterUI</a></p>',
    {
      position: "middle",
      enableHtml: true
    }
  );
}`
    };
  },
  methods: {
    showToast1() {
      this.$toast("顶部弹窗", {
        position: "top"
      });
    },
    showToast2() {
      this.$toast("中部弹窗", {
        position: "middle"
      });
    },
    showToast3() {
      this.$toast("底部弹窗", {
        position: "bottom"
      });
    },
    showToast4() {
      this.$toast("2s后关闭", {
        position: "middle",
        autoClose: 2
      });
    },
    showToast5() {
      this.$toast("不自动关闭", {
        position: "middle",
        autoClose: false
      });
    },
    showToast6() {
      this.$toast("默认提示", {
        position: "middle",
        closeButton: {
          text: "Close",
          callback() {
            console.log("点击关闭回调");
          }
        }
      });
    },
    showToast7() {
      this.$toast(
        '<p>html标签<a target="_blank" href="https://xcsf.github.io/LitterUI/">LitterUI</a></p><p>html标签<a target="_blank" href="https://xcsf.github.io/LitterUI/">LitterUI</a></p>',
        {
          position: "middle",
          enableHtml: true
        }
      );
    },
    showToast(position) {
      this.$toast(
        '<p>html标签<a target="_blank" href="https://xcsf.github.io/LitterUI/">LitterUI</a></p><p>html标签<a target="_blank" href="https://xcsf.github.io/LitterUI/">LitterUI</a></p>',
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