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
      <div class="component">
        <slot name="component"></slot>
      </div>
      <div class="code">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>
<script>
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
  }
};
</script>
<style lang="scss" scoped>
article.a-post:target {
  padding-top: 44px;
}
.s-wrapper {
  & h3 {
  }
  & .s-content {
    border: 1px solid gainsboro;
    padding: 1em;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: box-shadow 0.3s linear;
    &:hover {
      transition: box-shadow 0.3s linear;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    }
    & .component {
      margin-bottom: 1em;
    }
    & .code {
      border-top: 1px solid gainsboro;
      > pre {
        margin-bottom: 0;
      }
    }
  }
}
</style>
