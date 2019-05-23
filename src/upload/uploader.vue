<template>
  <div class="g-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="trigger" v-show="false"></div>
    <ol class="g-uploader-filelist">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status==='uploading'">
          <span>菊花</span>
        </template>
        <template v-if="file.type.indexOf('image')===0">
          <img class="g-uploader-image" :src="file.url">
        </template>
        <template v-else>
          <div class="g-uploder-image-default"></div>
        </template>
        <span class="g-uploader-name" :class="{[file.status]:file.status}">{{file.name}}</span>
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
    beforeUploadFile(rawFile, theName) {
      let { size, type } = rawFile;
      this.$emit("update:fileList", [
        ...this.fileList,
        { name: theName, size, type, status: "uploading" }
      ]);
    },
    uploadFile(rawFile) {
      let theName = this.gengerateName(rawFile.name);
      this.beforeUploadFile(rawFile, theName);
      let formData = new FormData();
      formData.append(this.name, rawFile);
      this.doUploadFile(
        formData,
        response => {
          this.url = this.parseResponse(response);
          this.afterUploadFile(rawFile, theName, this.url);
        },
        () => {
          this.uploadeError(theName);
        }
      );
    },
    uploadeError(theName) {
      let file = this.fileList.filter(f => f.name === theName)[0];
      let index = this.fileList.indexOf(file);
      let copyfileList = JSON.parse(JSON.stringify(this.fileList));
      copyfileList[index].status = "fail";
      this.$emit("update:fileList", copyfileList);
    },
    afterUploadFile(rawFile, theName, url) {
      let file = this.fileList.filter(f => f.name === theName)[0];
      let index = this.fileList.indexOf(file);
      let copyfileList = JSON.parse(JSON.stringify(this.fileList));
      copyfileList[index].status = "success";
      copyfileList[index].url = url;
      this.$emit("update:fileList", copyfileList);
    },
    doUploadFile(formData, success, fail) {
      let xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action);
      xhr.onload = () => {
        if (xhr.status == 200) {
          success(xhr.response);
        } else {
          fail();
          console.log(
            "Error " + xhr.status + " occurred when trying to upload your file."
          );
        }
      };
      xhr.send(formData);
    },
    gengerateName(name) {
      while (this.fileList.filter(f => f.name === name).length > 0) {
        let dotIndex = name.lastIndexOf(".");
        let part1 = name.substring(0, dotIndex);
        let part2 = name.substring(dotIndex);
        name = part1 + "(1)" + part2;
      }
      return name;
    }
  }
};
</script>

<style lang="scss" scoped>
.g-uploader {
  border: 1px solid red;
  &-filelist {
    list-style: none;
    > li {
      display: flex;
      align-items: center;
      margin: 8px 0;
    }
  }
  &-image {
    border: 1px solid red;
    width: 80px;
    height: 80px;
    &-default {
      width: 80px;
      height: 80px;
    }
  }
  &-name {
    &.success {
      color: green;
    }
    &.fail {
      color: red;
    }
  }
}
</style>
