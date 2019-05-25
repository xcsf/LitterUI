<template>
  <div class="g-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="trigger" v-show="false"></div>
    <ol class="g-uploader-filelist">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status==='uploading'">
          <g-icon name="loading" class="g-uploader-loading">菊花</g-icon>
        </template>
        <template v-else-if="file.type.indexOf('image')===0">
          <img class="g-uploader-image" :src="file.url">
        </template>
        <template v-else>
          <div class="g-uploder-image-default"></div>
        </template>
        <span class="g-uploader-name" :class="{[file.status]:file.status}">{{file.name}}</span>
        <span class="g-uploader-remove" @click="onRemove(file)">Remove</span>
      </li>
    </ol>
  </div>
</template>
<script>
import GIcon from "../icon";
import ajax from "../http";
export default {
  name: "GuluUploader",
  components: { GIcon },
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
    },
    sizeLimit: {
      type: Number
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
        this.uploadFile(input.files); //单文件
        // this.uploadFiles(input.files);
        input.remove();
      });
      input.click();
    },
    // uploadFiles(files) {
    //   let formData = new FormData();
    //   for (let i = 0; i < files.length; i++) {
    //     formData.append(this.name, files[i]);
    //   }
    //   let xhr = new XMLHttpRequest();
    //   xhr.open(this.method, this.action);
    //   xhr.send(formData);
    // },
    createInput() {
      //delete all input element
      this.$refs.trigger.innerHTML = "";
      let input = document.createElement("input");
      input.type = "file";
      input.multiple = true;
      this.$refs.trigger.appendChild(input);
      return input;
    },
    beforeUploadFile(rawFiles, theNames) {
      let addfileList = [];
      for (let i = 0; i < rawFiles.length; i++) {
        let rawFile = rawFiles[i];
        let { size, type } = rawFile;
        if (size > this.sizeLimit) {
          this.$emit("error", "文件" + theNames[i] + "大于2MB");
          return false;
        }
        addfileList.push({
          name: theNames[i],
          size,
          type,
          status: "uploading"
        });
      }
      this.$emit("update:fileList", [...this.fileList, ...addfileList]);
      return true;
    },
    uploadFile(rawFiles) {
      let theNames = [];
      for (let i = 0; i < rawFiles.length; i++) {
        let rawFile = rawFiles[i];
        let theName = this.gengerateName(rawFile.name);
        theNames[i] = theName;
      }
      if (!this.beforeUploadFile(rawFiles, theNames)) {
        return;
      }
      for (let i = 0; i < rawFiles.length; i++) {
        let rawFile = rawFiles[i];
        //分开上传各个文件
        let formData = new FormData();
        formData.append(this.name, rawFile);
        this.doUploadFile(
          formData,
          response => {
            this.url = this.parseResponse(response);
            this.afterUploadFile(rawFile, theNames[i], this.url);
          },
          xhr => {
            this.uploadeError(xhr, theNames[i]);
          }
        );
      }
    },
    uploadeError(xhr, theName) {
      let file = this.fileList.filter(f => f.name === theName)[0];
      let index = this.fileList.indexOf(file);
      let copyfileList = JSON.parse(JSON.stringify(this.fileList));
      copyfileList[index].status = "fail";
      this.$emit("update:fileList", copyfileList);
      let error = "";
      if (xhr.status === 0) {
        error = "网络无法连接";
      }
      this.$emit("error", error);
    },
    afterUploadFile(rawFile, theName, url) {
      // console.log(this.fileList);
      let file = this.fileList.filter(f => f.name === theName)[0];
      let index = this.fileList.indexOf(file);
      let copyfileList = JSON.parse(JSON.stringify(this.fileList));
      copyfileList[index].status = "success";
      copyfileList[index].url = url;
      this.$emit("update:fileList", copyfileList);
    },
    doUploadFile(formData, success, fail) {
      ajax(this.method, this.action, {
        success,
        fail,
        data: formData
      });
      // let xhr = new XMLHttpRequest();
      // xhr.open(this.method, this.action);
      // xhr.onload = () => {
      //   success(xhr.response);
      // };
      // xhr.onerror = () => {
      //   fail(xhr);
      // };
      // xhr.send(formData);
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
@import "./../../styles/var";
.g-uploader {
  &-filelist {
    list-style: none;
    > li {
      border: 1px solid grey;
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
    margin-left: 8px;
    &.success {
      color: green;
    }
    &.fail {
      color: red;
    }
  }
  &-remove {
    margin-left: auto;
    margin-right: 8px;
    user-select: none;
  }
  &-loading {
    @include spin;
    width: 80px;
    height: 80px;
    fill: grey;
  }
}
</style>
