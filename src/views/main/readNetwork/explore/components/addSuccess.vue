<template>
  <div class="addFriend_box">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="this.$store.getters.navBarTitle"
      left-arrow
      right-text="完成"
      @click-left="goBack"
      @click-right="onClickRight"
      class="nav_bar"
    />
    <!-- 我的好友 -->
    <div class="area_main">
      <div class="add_cont">
        <div class="addResult">
          <van-row>
            <van-col span="6">
              <van-image width="40" height="40" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </van-col>
            <van-col span="18">
              <div class="result_main">
                <van-icon class="iconfont my-icon-xiaolian" />
                <span>成功发出好友申请</span>
              </div>
              <span class="add_times">今日加好友剩余次数：4</span>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addSuccess", //阅人脉---探索---加好友---完成
  components: {},
  data() {
    return {
      
    };
  },
  mounted() {},
  watch: {},
  methods: {
    /**
     *返回上一页
     */
    goBack() {
      this.$router.go("-1");
    },
    /**
     * 点击右侧按钮时触发
     */
    onClickRight() {
      this.$router.push({
        path: "/readNetwork/searchNetwork",
        query: {}
      });
    },
    
  }
};
</script>

<style lang="less" scoped>
.addFriend_box {
  width: 100%;
  background-color: #fff;
  .nav_bar {
    background: linear-gradient(#66adff, #6692ff);
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }
    .van-nav-bar__right {
      .van-nav-bar__text {
        color: #fff;
      }
    }
  }
  .van-nav-bar__title {
    max-width: none;
  }
  .van-hairline--bottom::after {
    border: 0px;
  }
  .area_main {
    text-align: left;
    height: calc(100vh - 46px);
    .add_cont {
      width: 100%;
      .addResult {
        .van-row {
          height: 114px;
          padding-top: 40px;
          box-sizing: border-box;
          .van-col--6 {
            height: 100%;
            text-align: center;
          }
          .van-col--18 {
            padding-right: 20px;
            .result_main {
              height: 34px;
              line-height: 34px;
              background: rgba(102, 146, 255, 0.06);
              text-align: center;
              font-size: 14px;
              color: #6692ff;
            }
            .add_times {
              font-size:8px;
              color: #BABABA;
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>
