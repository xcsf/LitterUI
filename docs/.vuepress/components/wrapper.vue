<template>
  <div class="s-wrapper">
    <h3 :id="title">
      <a :href="`#${title}`">#</a>
      {{title}}
    </h3>
    <div class="s-instruction">
      <p>{{instruction}}</p>
    </div>
    <div class="s-content">
      <div class="s-component">
        <slot name="component"></slot>
      </div>
      <div class="s-code">
        <div v-show="codeVisable" class="code-wrapper">
          <slot name="code"></slot>
        </div>
        <div class="icon-wrapper" @click="codeVisable=!codeVisable">
          <div class="s-icon" :class="arrowClass">
            <g-icon :name="arrow"></g-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "../../../src/icon";
export default {
  name: "Wapper",
  props: {
    title: {
      type: String,
      default: "title"
    },
    instruction: {
      type: String,
      default: "asdasdsadsad"
    },
    codeVisable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "g-icon": Icon
  },
  computed: {
    arrow() {
      return this.codeVisable ? "up" : "down";
    },
    arrowClass() {
      return {
        open: !this.codeVisable,
        close: this.codeVisable
      };
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes open {
  0% {
  }
  100% {
    transform: translateY(50%);
    opacity: 0;
  }
}
@keyframes close {
  0% {
  }
  100% {
    transform: translateY(-50%);
    opacity: 0;
  }
}
article.a-post:target {
  padding-top: 44px;
}
.s-wrapper {
  & h3 {
  }
  & .s-content {
    border: 1px solid gainsboro;
    padding: 1em;
    padding-bottom: 0;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: box-shadow 0.3s linear;
    &:hover {
      transition: box-shadow 0.3s linear;
      box-shadow: 0 0 8px #3eaf7c;
    }
    & .s-component {
      margin-bottom: 1em;
    }
    & .s-code {
      border-top: 1px solid gainsboro;

      & .code-wrapper {
        width: 100%;
      }
      & .icon-wrapper {
        height: 2em;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          > .s-icon.open {
            animation: open 0.7s infinite;
          }
          > .s-icon.close {
            animation: close 0.7s infinite;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
pre {
}
</style>

