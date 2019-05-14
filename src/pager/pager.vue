<template>
  <div class="g-pager" :class="{hide:hideIfOnePage && totalPage<=1}">
    <span class="g-pager-nav prev" :class="{disabled:currentPage===1}">
      <g-icon name="left"></g-icon>
    </span>
    <template v-for="(page, index) in pages">
      <template v-if="page === currentPage">
        <span class="g-pager-item current" :key="index">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <g-icon class="g-pager-separator" :key="index" name="omit"></g-icon>
      </template>
      <template v-else>
        <span class="g-pager-item other" :key="index" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span
      class="g-pager-nav prev"
      :class="{disabled:currentPage===totalPage}"
      @click="onClickPage(currentPage+1)"
    >
      <g-icon name="right"></g-icon>
    </span>
  </div>
</template>
<script>
import Icon from "../icon";
export default {
  name: "GuluPager",
  components: {
    "g-icon": Icon
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    pages() {
      return unique(
        [
          1,
          this.currentPage,
          this.currentPage - 1,
          this.currentPage - 2,
          this.currentPage + 1,
          this.currentPage + 2,
          this.totalPage
        ]
          .filter(n => n > 0 && n <= this.totalPage)
          .sort((a, b) => a - b)
      ).reduce((prev, current, index, array) => {
        prev.push(current);
        array[index + 1] !== undefined &&
          array[index + 1] - array[index] > 1 &&
          prev.push("...");
        return prev;
      }, []);
    }
  },
  data() {
    return {};
  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit("update:currentPage", n);
      }
    }
  }
};

function unique(array) {
  // return [...new Set(array)]
  const obj = {};
  array.map(num => {
    obj[num] = true;
  });
  return Object.keys(obj).map(s => parseInt(s, 10));
}
</script>
<style lang="scss" scoped>
@import "./../../styles/var";
.g-pager {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  $width: 20px;
  $height: 20px;
  $font-size: 12px;
  &.hide {
    display: none;
  }
  &-separator {
    width: $width;
    font-size: $font-size;
  }
  &-item {
    min-width: $width;
    height: $height;
    font-size: $font-size;
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;
    &.current,
    &:hover {
      border-color: $blue;
    }
    &.current {
      cursor: default;
    }
  }
  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: $grey;
    height: $height;
    width: $width;
    border-radius: $border-radius;
    font-size: $font-size;
    cursor: pointer;
    &.disabled {
      cursor: default;
      svg {
        fill: darken($grey, 30%);
      }
    }
  }
}
</style>
