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
        <div class="code-wrapper" :style="codeWrapperSty">
          <div style="overflow:hidden;">
            <slot name="code"></slot>
          </div>
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
      default: ""
    }
  },
  data() {
    return {
      codeVisable: false
    };
  },
  components: {
    "g-icon": Icon
  },
  mounted() {},
  computed: {
    arrow() {
      return this.codeVisable ? "up" : "down";
    },
    arrowClass() {
      return {
        open: !this.codeVisable,
        close: this.codeVisable
      };
    },
    codeWrapperSty() {
      if (this.codeVisable) {
        return {
          height:
            this.$el.querySelector(".code-wrapper div").getBoundingClientRect()
              .height + "px"
        };
      } else {
        return {
          height: "0px"
        };
      }
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
.s-content {
  .s-component {
    width: 100%;
  }
}
.s-wrapper {
  & h3 {
    position: relative;
    z-index: 0;
    margin-top: -4.6rem;
    padding-top: 4.6rem;
  }
  & .s-instruction {
    color: #5e6d82;
  }
  & .s-content {
    border: 1px solid gainsboro;
    padding: 1em;
    padding-bottom: 0;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: box-shadow 0.3s linear;
    position: relative;
    z-index: 1;
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
        transition: all 0.5s;
        width: 100%;
        overflow: hidden;
        height: 0px;
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


