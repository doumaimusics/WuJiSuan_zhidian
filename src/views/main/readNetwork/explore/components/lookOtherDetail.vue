<template>
  <div class="allFriends_box">
    <div class="top">
      <!-- 导航栏 -->
      <van-nav-bar left-arrow @click-left="goBack" class="nav_bar">
        <van-icon name="more-o" slot="right" class="plus_btn" ref="popRef" @click="isShow = !isShow">
          <ul class="plus_cont" v-show="isShow">
            <li>
              <van-icon class="iconfont my-icon-pingbi1" />
              <div>屏蔽</div>
            </li>
            <li>
              <van-icon name="warn-o" />
              <div>举报</div>
            </li>
            <li>
              <van-icon name="friends-o" />
              <div>分组</div>
            </li>
          </ul>
        </van-icon>
      </van-nav-bar>
      <!-- 个人信息 -->
      <div class="person_info">
        <van-row>
          <van-col span="6">
            <van-image round width="70" height="70" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="12">
            <div class="media_title">
              <span class="name">小鸡爪</span>
              <van-icon name="location-o" />
              <span class="adress">杭州滨江</span>
            </div>
            <div class="media_position">
              <span class="company">杭州雾计算</span>
              <span class="position">产品经理</span>
              <van-icon name="medel-o" />
            </div>
            <div class="school">哈尔滨佛教大学</div>
          </van-col>
          <van-col span="6">
            <div class="number">13</div>
            <span>共同好友</span>
          </van-col>
          <van-col span="24">
            <span class="label">IT/互联网</span>
            <span class="label product">产品</span>
            <span class="label">
              声望
              <span class="number">99</span>
            </span>
          </van-col>
          <van-col span="24">
            <p class="desc">别问自我介绍，问就是一个优雅与妖娆并存的女子</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 我的好友 -->
    <div class="area_main">
      <div class="media_box" @click="lookExperience">
        <div class="media_title">工作经历</div>
        <van-row>
          <van-col span="6">
            <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18">
            <van-cell title="新浪微博" value="2022.02-至今" />
            <div class="position">资深工程师</div>
            <p class="desc">负责给大家端茶倒水，整理下周报，还和PM撕逼（其实我很温柔）。没事的时候给大家讲讲段子。</p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="6">
            <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18">
            <van-cell title="新浪微博" value="2022.02-至今" />
            <div class="position">资深工程师</div>
            <p class="desc">负责给大家端茶倒水，整理下周报，还和PM撕逼（其实我很温柔）。没事的时候给大家讲讲段子。</p>
          </van-col>
        </van-row>
      </div>
      <div class="media_box">
        <div class="media_title">教育经历</div>
        <van-row>
          <van-col span="6">
            <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18">
            <van-cell title="北京大学" value="2022.02-至今" />
            <div class="position">
              <span>资深工程师</span>
              <span class="education">硕士</span>
            </div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="6">
            <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18">
            <van-cell title="北京大学" value="2022.02-至今" />
            <div class="position">
              <span>资深工程师</span>
              <span class="education">硕士</span>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="media_box label_box">
        <div class="media_title">职业标签</div>
        <div class="label_cont">
          <van-tag round plain color="#6692FF">交互设计</van-tag>
          <van-tag round plain color="#6692FF">用户体验(UE/UX)</van-tag>
          <van-tag round plain color="#6692FF">协调沟通能力</van-tag>
          <van-tag round plain color="#6692FF">IT互联网</van-tag>
        </div>
      </div>
      <div class="media_box more_box">
        <div class="media_title">更多信息</div>
        <van-row>
          <van-col span="12">
            <span class="name">生日</span>
            <span class="val">06/16</span>
          </van-col>
          <van-col span="12">
            <span class="name">家乡</span>
            <span class="val">浙江-杭州</span>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 聊天 -->
    <div class="add_box">
      <van-button type="info" size="large" round>加好友</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "lookFriendDetail", //朋友详情
  components: {},
  data() {
    return {
      searchVal: "",
      isShow: false
    };
  },
  mounted() {
    let _this = this;
    this.$nextTick(() => {
      document.addEventListener("click", function(e) {
        if (e.target.className.indexOf('plus_btn') != -1) return;
        _this.isShow = false;
      });
    })
  },
  created() {
    
  },
  watch: {},
  methods: {
    /**
     *返回上一页
     */
    goBack() {
      this.$router.go("-1");
    },
    /**
     * 确定搜索
     */
    onSearch() {
      console.log(this.searchVal);
    },
    /**
     * 取消搜索
     */
    onCancel() {
      this.searchVal = "";
    },
    /**
     * 查看经历详情
     */
    lookExperience() {
      this.$router.push({
        path: "/readNetwork/lookExperience",
        query: {}
      });
    }
  }
};
</script>

<style lang="less" scoped>
.allFriends_box {
  width: 100%;
  background-color: #fff;
  position: relative;
  .nav_bar {
    background-color: rgba(255, 255, 255, 0);
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }
    .van-icon-more-o {
      font-size: 16px;
    }
  }
  .van-nav-bar__title {
    max-width: none;
  }
  .van-hairline--bottom::after {
    border: 0px;
  }
  .top {
    width: 100%;
    height: 146px;
    background: linear-gradient(#66adff, #6692ff);
    border-radius: 0px 0px 10px 10px;
    .person_info {
      width: 96%;
      height: 156px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      padding: 12px 16px;
      .van-row {
        font-size: 10px;
        color: #999;
        text-align: left;
        .van-col--6 {
          text-align: center;
          .number {
            margin-top: 20px;
            font-size: 16px;
            font-weight: 500;
            color: #666;
          }
        }
        .van-col--12 {
          padding-left: 10px;
          border-right: 1px solid #f5f5f5;
          .media_title {
            .name {
              font-size: 18px;
              font-weight: 500;
              color: #333;
            }
            .van-icon {
              font-size: 10px;
              color: #6692ff;
              margin-left: 10px;
              margin-right: 4px;
            }
            .adress {
              font-size: 10px;
              color: #666;
            }
          }
          .media_position {
            margin: 8px 0px 6px;
            font-size: 12px;
            color: #999;
            .position {
              margin: 0 8px;
            }
            .van-icon {
              color: #f4ad5a;
            }
          }
        }
        .van-col--24 {
          margin: 8px 0px;
          font-size: 10px;
          color: #333;
          .label {
            padding: 0 12px;
            border-right: 1px solid #666;
            .number {
              color: #6692ff;
            }
          }
          .label:last-child {
            border-right: 0px;
          }
          .desc {
            color: #666;
          }
        }
      }
    }
  }
  .plus_btn {
    position: relative;
    .plus_cont {
      position: absolute;
      top: 30px;
      right: -10px;
      z-index: 999;
      font-size: 12px;
      color: #fff;
      width: 100px;
      // height: 107px;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 4px;
      &::before {
        content: "";
        width: 0px;
        height: 0px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 6px solid rgba(0, 0, 0, 0.8);
        font-size: 0;
        line-height: 0;
        position: absolute;
        right: 12px;
        top: -5px;
        z-index: 9999;
      }
      li {
        line-height: 30px;
        .van-icon {
          font-size: 16px;
          float: left;
          margin: 8px 0px 0px 8px;
        }
        .my-icon-saoyisao {
          font-size: 14px;
          margin-top: 10px;
        }
        div {
          margin-left: 30px;
          border-bottom: 1px solid #666;
        }
      }
      li:last-child {
        div {
          border-bottom: 0px;
        }
      }
    }
  }
  .area_main {
    text-align: left;
    height: calc(100vh - 146px);
    box-sizing: border-box;
    padding: 58px 10px 0px 10px;
    .media_box {
      .media_title {
        font-size: 14px;
        color: #666;
        margin-top: 16px;
        position: relative;
        padding-left: 14px;
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
      .van-row {
        border-bottom: 4px solid #f5f5f5;
        padding-top: 16px;
        padding-bottom: 16px;
        .van-col--6 {
          text-align: center;
        }
        .van-col--18 {
          .van-cell {
            .van-cell__title {
              font-size: 14px;
              color: #333;
            }
            .van-cell__value {
              font-size: 10px;
              color: #999;
            }
          }
          .van-cell:not(:last-child)::after {
            border-bottom: 0px;
          }
          .position {
            font-size: 12px;
            color: #666;
            margin: 4px 0px 12px;
            span {
              margin-right: 12px;
            }
            .education {
              padding: 0 12px;
              border-left: 1px solid #666;
            }
          }
          .desc {
            font-size: 12px;
            color: #666;
            line-height: 14px;
            text-align: left;
          }
        }
      }
    }
    .media_box:last-child {
      border-bottom: 0px;
    }
    .label_box {
      border-bottom: 4px solid #f5f5f5;
      padding-bottom: 16px;
      .label_cont {
        .van-tag {
          display: inline-block;
          padding: 4px 10px;
          background: rgba(102, 146, 255, 0.1);
          margin: 0 6px;
        }
      }
    }
    .more_box {
      font-size: 12px;
      color: #999;
      .van-row:last-child {
        border-bottom: 0px;
      }
      .val {
        color: #333;
        margin-left: 24px;
      }
    }
  }
  .add_box {
    position: fixed;
    z-index: 9999;
    width: 100%;
    bottom: 20%;
    .van-button {
      width: 260px;
      margin: 0 auto;
    }
  }
}
</style>
