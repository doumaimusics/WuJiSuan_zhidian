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
        <div class="addResult" v-if="haveResult">
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
          <div class="divider_text">相似人脉</div>
        </div>
        <van-cell-group>
          <van-cell>
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">
                雾计算产品经理
                <van-icon name="medel-o" />
              </div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <van-tag round type="primary">3个共同好友</van-tag>
            </div>
            <van-button icon="manager-o" type="default" size="small" class="apply_btn" @click="addSuccess">已申请</van-button>
          </van-cell>
          <van-cell>
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">
                雾计算产品经理
                <van-icon name="medel-o" />
              </div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <van-tag round type="primary">3个共同好友</van-tag>
              <van-tag round type="primary">同行</van-tag>
            </div>
            <van-button icon="plus" type="info" size="small" @click="addSuccess">加好友</van-button>
          </van-cell>
          <van-cell>
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">
                雾计算产品经理
                <van-icon name="medel-o" />
              </div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <van-tag round type="primary">3个共同好友</van-tag>
            </div>
            <van-button icon="plus" type="info" size="small" @click="addSuccess">加好友</van-button>
          </van-cell>
          <van-cell>
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">
                雾计算产品经理
                <van-icon name="medel-o" />
              </div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <van-tag round type="primary">3个共同好友</van-tag>
            </div>
            <van-button icon="plus" type="info" size="small" @click="addSuccess">加好友</van-button>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addFriend", //阅人脉---探索---加好友
  components: {},
  data() {
    return {
      haveResult: true
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
    /**
     * 查看他人详情
     */
    addSuccess() {
      this.$router.push({
        path: "/readNetwork/addSuccess",
        query: {}
      });
    }
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
      .van-cell {
        font-size: 16px;
        color: #333;
        padding: 10px 30px 10px 78px;
        .van-cell__title {
          position: relative;
          .position {
            font-size: 10px;
            color: #999;
            .van-icon {
              color: #85cb35;
              position: relative;
              top: 2px;
              left: 4px;
            }
          }
          .van-tag {
            padding: 2px 4px;
            background: rgba(102, 146, 255, 0.1);
            border-radius: 4px;
            color: #6692ff;
            margin-right: 8px;
          }
          .avator {
            position: absolute;
            top: 4px;
            left: -60px;
          }
        }
        .van-button {
          top: 20px;
          border-radius: 4px;
        }
        .apply_btn {
          color: #6692FF;
          border: 1px solid #6692FF;
        }
      }
      .van-hairline--top-bottom::after {
        border-width: 0px;
      }
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
        .divider_text {
          width: 100px;
          margin: 0 auto;
          font-size: 12px;
          text-align: center;
          position: relative;
          color: #999;
          &::before {
            content: " ";
            width: 150%;
            height: 2px;
            border-bottom: 1px solid #d7d7d7;
            position: absolute;
            top: 6px;
            left: -138px;
          }
          &::after {
            content: " ";
            width: 150%;
            height: 2px;
            border-bottom: 1px solid #d7d7d7;
            position: absolute;
            top: 6px;
            right: -138px;
          }
        }
      }
    }
  }
}
</style>
