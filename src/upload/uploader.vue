<template>
  <div class="g-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="trigger" v-show="false"></div>
    <ol>
      <li v-for="file in fileList" :key="file.name">
        <img :src="url">
        {{file.name}}
        <button @click="onRemove(file)">Remove</button>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "GuluUploader",
  props: {
    fileList: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: "POST"
    },
    parseResponse: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      url: "about:blank"
    };
  },
  methods: {
    onRemove(file) {
      if (window.confirm("确认删除？")) {
        let copy = [...this.fileList];
        let index = this.fileList.indexOf(file);
        copy.splice(index, 1);
        this.$emit("update:fileList", copy);
      }
    },
    onClickUpload() {
      let input = this.createInput();
      input.addEventListener("change", () => {
        this.uploadFile(input.files[0]);
        input.remove();
      });
      input.click();
    },
    createInput() {
      let input = document.createElement("input");
      input.type = "file";
      this.$refs.trigger.appendChild(input);
      return input;
    },
    uploadFile(file) {
      let { name, size, type } = file;
      let formData = new FormData();
      formData.append(this.name, file);
      this.doUploadFile(formData, response => {
        this.url = this.parseResponse(response);
        while (this.fileList.filter(f => f.name === name).length > 0) {
          let dotIndex = name.lastIndexOf(".");
          let part1 = name.substring(0, dotIndex);
          let part2 = name.substring(dotIndex);
          name = part1 + "(1)" + part2;
        }
        console.log([...this.fileList, { name, size, type, url: this.url }]);
        this.$emit("update:fileList", [
          ...this.fileList,
          { name, size, type, url: this.url }
        ]);
      });
    },
    doUploadFile(formData, success) {
      let xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action);
      xhr.onload = () => {
        success(xhr.response);
      };
      xhr.send(formData);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
