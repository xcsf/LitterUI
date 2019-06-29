
<template>
  <div>
    <s-wrapper title="简单上传组件">
      <template slot="component">
        <g-upload
          action="http://localhost:3000/upload"
          name="filename"
          :fileList.sync="uplodefilelist"
          :parseResponse="uploaderParseResponse"
        >
          <g-button icon="upload">Upload</g-button>
        </g-upload>
      </template>
      <pre slot="code"><code>{{code1}}</code></pre>
    </s-wrapper>
    <s-wrapper title="method 选项" :instruction="instruction2">
      <template slot="component">
        <g-upload
          action="http://localhost:3000/upload"
          name="filename"
          :fileList.sync="uplodefilelist"
          :parseResponse="uploaderParseResponse"
          method="POST"
        >
          <g-button icon="upload">Upload</g-button>
        </g-upload>
      </template>
      <pre slot="code"><code>{{code2}}</code></pre>
    </s-wrapper>
    <s-wrapper title="sizeLimit 选项" :instruction="instruction3">
      <template slot="component">
        <g-upload
          action="http://localhost:3000/upload"
          name="filename"
          :fileList.sync="uplodefilelist"
          :parseResponse="uploaderParseResponse"
          :size-limit="2*1024*1024"
        >
          <g-button icon="upload">Upload</g-button>
        </g-upload>
      </template>
      <pre slot="code"><code>{{code3}}</code></pre>
    </s-wrapper>
  </div>
</template>
<script>
import Button from "../../../src/button/button";
import Upload from "../../../src/upload/uploader";
import Wrapper from "./wrapper";
export default {
  components: {
    "g-button": Button,
    "g-upload": Upload,
    "s-wrapper": Wrapper
  },
  data() {
    return {
      uplodefilelist: [],
      code1: `<g-upload
  action="http://localhost:3000/upload"
  name="filename"
  :fileList.sync="uplodefilelist"
  :parseResponse="uploaderParseResponse"
>
  <g-button icon="upload">Upload</g-button>
</g-upload>

methods: {
  uploaderParseResponse(response) {
    let obj = JSON.parse(response);
    return \`http://localhost:3000/preview/\${obj.id}\`;
  }
}`,
      instruction2: "method: String类型。指定http请求方法。",
      code2: `<g-upload
  action="http://localhost:3000/upload"
  name="filename"
  :fileList.sync="uplodefilelist"
  :parseResponse="uploaderParseResponse"
  method="POST"
>
  <g-button icon="upload">Upload</g-button>
</g-upload>`,
      instruction3: "sizeLimit: Number类型。前端限制文件大小。作用不大。",
      code3: `<g-upload
  action="http://localhost:3000/upload"
  name="filename"
  :fileList.sync="uplodefilelist"
  :parseResponse="uploaderParseResponse"
  :size-limit="2*1024*1024"
>
  <g-button icon="upload">Upload</g-button>
</g-upload>`
    };
  },
  methods: {
    errorinfo(error) {
      alert(error);
    },
    uploaderParseResponse(response) {
      let obj = JSON.parse(response);
      return `http://localhost:3000/preview/${obj.id}`;
    }
  }
};
</script>