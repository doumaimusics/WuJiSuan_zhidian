  <!-- 标签模块 -->
<template>
  <div class="media_box">
    <div class="media_title">{{mediaTitle}}</div>
    <div class="label_cont">
      <van-tag round plain color="#6692FF"
      v-for="(item,index) in tagData" :key="index">{{item.text}}</van-tag>
    </div>
    <div class="btn_box">
      <van-button plain round type="info" size="large" class="add_btn" @click="addTagText">{{btnText}}</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    addTagText(){
      this.$emit("isShowPop")
    }
  },
  props: [
      "mediaTitle",   // 标题 string
      "tagData",  // 标签数据  array
      "btnText",  // 按钮文字 string
  ]
};
</script>

<style lang="less" scoped>
.media_box {
  border-bottom: 4px solid #f5f5f5;
  padding: 0px 10px 18px 10px;
  text-align: left;
  .media_title {
    font-size: 14px;
    color: #666;
    margin-top: 16px;
    position: relative;
    padding-left: 14px;
    margin-bottom: 16px;
    &::before {
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(102, 146, 255, 1);
      position: absolute;
      top: 8px;
      left: 0px;
    }
  }

  .btn_box {
    text-align: center;
    .add_btn {
      width: 260px;
      height: 46px;
    }
  }
  .label_cont {
    margin-bottom: 18px;
    padding-left: 10px;
    .van-tag {
      display: inline-block;
      padding: 4px 10px;
      background: rgba(102, 146, 255, 0.1);
      margin: 0 6px;
    }
  }
}
</style>