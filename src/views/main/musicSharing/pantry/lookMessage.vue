<template>
  <div class="lookMessage">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="this.$store.getters.navBarTitle"
      left-arrow
      @click-left="goBack"
      @click-right="onClickRight"
      class="nav_bar"
    >
      <van-icon class="iconfont my-icon-wenzhangfenxiang" slot="right" />
    </van-nav-bar>
    <!-- 主体 -->
    <div class="mainBox">
      <div class="message_box" v-if="hasMessage">
        <van-row class="active_bgc">
          <van-col span="6" class="media_img">
            <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="12" class="media_title">匿名昵称评论你的帖子</van-col>
          <van-col span="6" class="media_desc">本科四年，阿里P7，谈了81，要…</van-col>
        </van-row>
        <van-row class="active_bgc">
          <van-col span="6" class="media_img">
            <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="12" class="media_title">匿名昵称评论你的帖子</van-col>
          <van-col span="6" class="media_desc">本科四年，阿里P7，谈了81，要…</van-col>
        </van-row>
        <van-row class="active_bgc">
          <van-col span="6" class="media_img">
            <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="12" class="media_title">匿名昵称评论你的帖子</van-col>
          <van-col span="6" class="media_desc">本科四年，阿里P7，谈了81，要…</van-col>
        </van-row>
        <van-row>
          <van-col span="6" class="media_img">
            <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="12" class="media_title">匿名昵称评论你的帖子</van-col>
          <van-col span="6" class="media_desc">本科四年，阿里P7，谈了81，要…</van-col>
        </van-row>
        <van-row>
          <van-col span="6" class="media_img">
            <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="12" class="media_title">匿名昵称评论你的帖子</van-col>
          <van-col span="6" class="media_desc">
            <van-image width="60" height="60" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
        </van-row>
        <van-row>
          <van-col span="6" class="media_img">
            <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="12" class="media_title">匿名昵称评论你的帖子</van-col>
          <van-col span="6" class="media_desc">本科四年，阿里P7，谈了81，要…</van-col>
        </van-row>
        <van-row>
          <van-col span="6" class="media_img">
            <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="12" class="media_title">匿名昵称评论你的帖子</van-col>
          <van-col span="6" class="media_desc">
            <van-image width="60" height="60" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
        </van-row>
        <van-button type="info" size="large" class="more_btn">
          <van-icon name="clock-o" />更多消息
        </van-button>
      </div>
      <div class="holder_img" v-else>
        <van-image width="60" height="60" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="tip">还没有收到通知呢～</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lookMessage", //乐分享---茶水间---查看消息通知
  data() {
    return {
      hasMessage: true,
    };
  },
  components: {},
  mounted() {},
  created() {},
  methods: {
    //返回上一页
    goBack() {
      this.$router.push({
        name:'musicSharing',
        query:{
          type:1   // //1-茶水间
        }
      });
    },
    //点击右侧按钮时触发
    onClickRight() {
      console.log("点击这里，消息显示全部已读，停留在当前页面，把状态去掉！！！")
    }
  }
};
</script>

<style lang="less" scoped>
.lookMessage {
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
  .mainBox {
    padding-bottom: 52px;
    .van-row {
      padding: 20px 10px;
      font-size: 14px;
      border-bottom: 1px solid #dfdfdf;
      .van-col {
        text-align: left;
      }
      .media_img {
        text-align: center;
      }
      .media_title {
        line-height: 50px;
        color: #666;
      }
      .media_desc {
        font-size: 12px;
        color: #333;
      }
    }
    .van-row:last-child {
      border-bottom: 0px !important;
    }
    .active_bgc {
      background: rgba(102, 146, 255, 0.06);
    }
    .holder_img {
      text-align: center;
      padding-top: 40px;
      .tip {
        font-size:10px;
        color: #BABABA;
      }
    }
  }
  .more_btn {
    position: fixed;
    bottom: 0px;
    left: 0;
    .van-icon {
      position: relative;
      top: 2px;
    }
  }
}
</style>
