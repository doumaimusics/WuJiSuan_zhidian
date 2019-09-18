<template>
  <div class="chatPage">
    <!-- 导航栏 -->
    <van-sticky>
        <van-nav-bar
        :title="this.$store.getters.navBarTitle"
        left-arrow
        @click-left="goBack"
        @click-right="onClickRight"
        class="nav_bar"
        >
        <van-icon name="more-o" slot="right" />
        </van-nav-bar>
    </van-sticky>
    <div class="chat_main">
      <div class="chat_item">
        <div class="chat_time">6月19日</div>
        <div class="chat_notice">小鸡爪通过了你的好友请求，现在开始聊天吧</div>
        <van-row class="self">
          <van-col span="4">
            <van-image class="chat_avator" round width="40" height="40" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="16">
              <p class="chat_message">这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息</p>
          </van-col>
        </van-row>
        <van-row class="self">
          <van-col span="4">
            <van-image class="chat_avator" round width="40" height="40" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="16">
              <p class="chat_message">这是一条消息这是一</p>
          </van-col>
        </van-row>
        <van-row class="other">
          <van-col span="4">
            <van-image class="chat_avator" round width="40" height="40" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="16">
              <p class="chat_message">这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息</p>
          </van-col>
        </van-row>
      </div>
      <div class="chat_item">
        <div class="chat_time">昨天 11:11</div>
        <!-- <div class="chat_notice">小鸡爪通过了你的好友请求，现在开始聊天吧</div> -->
        <van-row class="other">
          <van-col span="4">
            <van-image class="chat_avator" round width="40" height="40" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="16">
              <p class="chat_message">这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息</p>
          </van-col>
        </van-row>
        <van-row class="self">
          <van-col span="4">
            <van-image class="chat_avator" round width="40" height="40" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="16">
              <p class="chat_message">这是一条消息这是一</p>
          </van-col>
        </van-row>
        <van-row class="other">
          <van-col span="4">
            <van-image class="chat_avator" round width="40" height="40" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="16">
              <p class="chat_message">这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息</p>
          </van-col>
        </van-row>
        <van-row class="self">
          <van-col span="4">
            <van-image class="chat_avator" round width="40" height="40" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="16">
              <p class="chat_message">这是一条消息这是一</p>
          </van-col>
        </van-row>
        <van-row class="other">
          <van-col span="4">
            <van-image class="chat_avator" round width="40" height="40" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="16">
              <p class="chat_message">这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- chat输入框 -->
    <ChatInput class="chatInput" @getFileList="getFileList" @getSendVal="getSendVal" :isHidePhoto="isHidePhoto"/>
  </div>
</template>

<script>
import ChatInput from "@/components/chatInput";
export default {
  name: "chatPage",
  props: {},
  components: {
    ChatInput
  },
  data() {
    return {
        isHidePhoto: true,
    };
  },
  methods: {
    /**
     *返回上一页
     */
    goBack() {
      this.$router.go("-1");
    },
    /**
     *点击右侧按钮时触发
     */
    onClickRight() {
      this.$router.go("-1");
    },
    /**
     * 上传后的返回值
     */
    getFileList(file) {
        console.log(file);
    },
    /**
     * 接收发送内容
     */
    getSendVal(val) {
        console.log(val);
    }
  }
};
</script>

<style lang="less" scoped>
.chatPage {
  background-color: #fff;
  .nav_bar {
    background: linear-gradient(#66adff, #6692ff);
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }
    .van-nav-bar__right {
      .my-icon-wenzhangfenxiang {
        color: #fff;
        font-size: 16px;
      }
    }
  }
  .van-nav-bar__title {
    max-width: none;
  }
  .van-hairline--bottom::after {
    border: 0px;
  }
  .chat_main {
    // height: 100%;
    padding: 8px 20px 46px 20px;
    box-sizing: border-box;
    font-size: 12px;
    color: #666;
    min-height: calc(100vh - 46px);
    background:rgba(102,146,255,0.06);
    .chat_item {
      .chat_time,
      .chat_notice {
        font-size: 10px;
        color: #999;
        margin-bottom: 12px;
      }
      .chat_notice {
        padding: 6px 40px;
        background:rgba(102,146,255,0.06);
        border-radius:4px;
      }
      .van-row {
        margin-bottom: 12px;
        .van-col {
            .chat_avator {
                vertical-align: middle;
            }
            .chat_message {
                text-align: left;
                padding: 6px 12px;
                background-color: #fff;
                line-height:17px;
                border-radius:4px;
                position: relative;
                &::before {
                    content:"";
                    width:0;
                    height:0;
                    position: absolute;
                    border-top:solid 6px transparent;
                    border-bottom:solid 6px transparent;
                }
            }
        }
        .van-col--4 {
            text-align: center !important;
        }
      }
      .self {
        .van-col {
            float: right;
            .chat_message {
                &::before {
                    // top: 50%;
                    right: -6px;
                    transform: translate-y(-50%);
                    border-left:solid 6px #fff;
                }
            }
        }
      }
      .other {
        .van-col {
            float: left;
            .chat_message {
                &::before {
                    // top: 50%;
                    left: -6px;
                    transform: translate-y(-50%);
                    border-right:solid 6px #fff;
                }
            }
        }
      }
    }
  }
  .chatInput {
    width: 100%;
    position: fixed;
    bottom: 0px;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    background:rgba(102,146,255,1);
    padding: 10px 12px;
    .van-icon {
      color: #999;
    }
    .my-icon-tupian {
      font-size: 24px;
    }
    .van-icon-smile-o {
      font-size: 24px;
    }
    .van-dropdown-menu {
      height: 28px;
    }
    .van-col--12 {
      line-height: 24px;
    }
  }
}
</style>

