<template>
  <div class="chatInput">
    <van-uploader v-bind:class="{hide_photo:isHidePhoto}"  class="left" multiple :after-read="afterRead">
      <van-icon class="iconfont my-icon-tupian" />
    </van-uploader>
    <van-field class="center" v-model="value" placeholder="" right-icon="smile-o"/>
    <div class="right" @click="send">发送</div>
  </div>
</template>

<script>
export default {
  name: "chatInput",
  props: {
    isHidePhoto: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      value: "",
      hidePhoto: false,
    };
  },
  created() {
    
  },
  methods: {
    /**
     * 文件读取完成后的回调函数
     */
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file);
      this.$emit('getFileList',file)
    },
    /**
     * 发送
     */
    send() {
      this.$emit('getSendVal',this.value);
      this.value = "";
    }
  }
};
</script>

<style lang="less" scoped>
.chatInput {
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 44px;
  box-sizing: border-box;
  background-color: #6692ff;
  padding: 10px 12px;
  .left {
    width: 30px;
    font-size: 26px;
    color: #fff;
    line-height: 26px;
    .my-icon-tupian {
      margin-left: 0px;
    }
  }
  .center {
    flex: 1;
    padding: 0 12px;
    /deep/ .van-icon-smile-o {
      color: #6692FF;
    }
  }
  .right {
    width: 60px;
    font-size:12px;
    line-height: 26px;
    margin-left: 10px;
    background-color: #fff;
    color: #6692FF;
  }
  .hide_photo {
    display: none !important;
  }
}
</style>

