<template>
  <div class="g-table-wrapper">
    <div class="g-table-head">
      <table class="g-table" :class="{headborder:bordered, compact}">
        <thead ref="tablehead">
          <tr>
            <th v-if="selectedItems" style="width:50px;" class="g-table-center">
              <input
                :checked="areAllItemsSelected"
                type="checkbox"
                @change="onChangeAllItem"
                ref="allChecked"
              >
            </th>
            <th v-if="idVisible">id</th>
            <th v-for="(column) in columns" :key="column.field" :style="`width:${column.width}px`">
              <div class="g-table-header">
                {{column.text}}
                <span
                  v-if="column.field in orderBy"
                  class="g-table-sorter"
                  @click="changeOrderBy(column.field)"
                >
                  <g-icon :class="{active: orderBy[column.field] === 'asc'}" name="shang"></g-icon>
                  <g-icon :class="{active: orderBy[column.field] === 'desc'}" name="xia"></g-icon>
                </span>
              </div>
            </th>
            <th ref="actionsHeader" v-if="$scopedSlots.default"></th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="g-table-body" :style="height">
      <table class="g-table" :class="{bodyborder:bordered, compact, striped}">
        <tbody ref="tablebody">
          <tr v-for="(item,index) in dataSource" :key="item.id">
            <td v-if="selectedItems" style="width:50px" class="g-table-center">
              <input
                :checked="isCheckedItem(item)"
                type="checkbox"
                @change="onChangeItem(item , index, $event)"
              >
            </td>
            <td v-if="idVisible">{{item.id}}</td>
            <template v-for="(column,index) in columns">
              <td :key="index" :style="`width:${column.width}px`">{{item[column.field]}}</td>
            </template>
            <td v-if="$scopedSlots.default">
              <div ref="actions" style="display: inline-block;">
                <slot :item="item"></slot>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="loading" class="g-table-loading">
      <g-icon name="loading"></g-icon>
    </div>
  </div>
</template>
<script>
import Icon from "@/icon";
export default {
  name: "GuluTable",
  components: {
    "g-icon": Icon
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    orderBy: {
      type: Object,
      default: () => ({})
    },
    dataSource: {
      type: Array,
      required: true,
      validator(arr) {
        return !arr.filter(item => item.id === undefined).length > 0;
      }
    },
    idVisible: {
      type: Boolean
    },
    bordered: {
      type: Boolean
    },
    striped: {
      type: Boolean
    },
    compact: {
      type: Boolean
    },
    selectedItems: {
      type: Array
      // default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number]
    }
  },
  computed: {
    areAllItemsSelected() {
      let a = this.dataSource.map(t => t.id).sort();
      let b = this.selectedItems.map(t => t.id).sort();
      if (a.length !== b.length) {
        return false;
      }
      let equal = true;
      for (let i = 0; i < a.length; i++)
        if (a[i] !== b[i]) {
          equal = false;
          break;
        }
      return equal;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.updateHeaderWidth();
    });
    this.onWindowResize = () => this.updateHeaderWidth();
    window.addEventListener("resize", this.onWindowResize);

    let div = this.$refs.actions[0];
    let { width } = div.getBoundingClientRect();
    let parent = div.parentNode;
    let styles = getComputedStyle(parent);
    let paddingLeft = styles.getPropertyValue("padding-left");
    let paddingRight = styles.getPropertyValue("padding-right");
    let borderLeft = styles.getPropertyValue("border-left-width");
    let borderRight = styles.getPropertyValue("border-right-width");
    let width2 = width + parseInt(paddingRight) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight) + "px";
    this.$refs.actionsHeader.style.width = width2;
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  watch: {
    selectedItems(val) {
      if (val.length > 0 && val.length < this.dataSource.length) {
        this.$refs.allChecked.indeterminate = true;
      } else {
        this.$refs.allChecked.indeterminate = false;
      }
    }
  },
  methods: {
    updateHeaderWidth() {
      Array.from(this.$refs.tablehead.children[0].children).map((el, index) => {
        let { width } = el.getBoundingClientRect();
        this.$refs.tablebody.children[0].children[index].style.width =
          width + "px";
      });
    },
    changeOrderBy(field) {
      const copy = JSON.parse(JSON.stringify(this.orderBy));
      let oldValue = copy[field];
      if (oldValue === "asc") {
        copy[field] = "desc";
      } else if (oldValue === "desc") {
        copy[field] = true;
      } else {
        copy[field] = "asc";
      }
      this.$emit("update:orderBy", copy);
    },
    onChangeItem(item, index, e) {
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      if (e.target.checked) {
        copy.push(item);
      } else {
        copy = copy.filter(i => i.id !== item.id);
      }
      this.$emit("update:selectedItems", copy);
    },
    onChangeAllItem(e) {
      this.$emit(
        "update:selectedItems",
        e.target.checked ? this.dataSource : []
      );
    },
    isCheckedItem(item) {
      return this.selectedItems.filter(i => i.id === item.id).length > 0;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/var";
$grey: darken($grey, 10%);
.g-table {
  width: 100%;
  border-collapse: collapse;
  & &-center {
    text-align: center;
  }
  &-wrapper {
    position: relative;
  }
  > tbody {
    overflow: auto;
  }
  > thead {
    overflow: scroll;
  }
  &-body {
    height: 400px;
    overflow: auto;
  }
  &-head {
    overflow-y: scroll;
  }
  &.headborder {
    th {
      border: 1px solid $grey;
      border-bottom: none;
    }
  }
  &.bodyborder {
    td {
      border: 1px solid $grey;
    }
  }
  &.compact {
    td,
    th {
      padding: 4px;
    }
  }
  td,
  th {
    border-bottom: 1px solid $grey;
    text-align: left;
    padding: 8px;
  }
  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background-color: white;
        }
        &:nth-child(even) {
          background-color: lighten($grey, 10%);
        }
      }
    }
  }
  &-header {
    display: flex;
    align-items: center;
  }
  &-sorter {
    display: inline-flex;
    flex-direction: column;
    margin: 0 8px;
    cursor: pointer;
    svg {
      fill: $grey;
      width: 8px;
      height: 8px;
    }
    > .active {
      fill: red;
    }
  }

  &-loading {
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 40px;
      height: 40px;
      animation: spin 2s infinite linear;
    }
  }
}
</style>
