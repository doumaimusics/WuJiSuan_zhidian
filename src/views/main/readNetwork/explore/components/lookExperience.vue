<template>
  <div class="allFriends_box">
    <div class="top">
      <!-- 导航栏 -->
      <van-nav-bar left-arrow @click-left="goBack" class="nav_bar">
      </van-nav-bar>
      <!-- 个人信息 -->
      <div class="person_info">
        <van-image
          width="70"
          height="70"
          round
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="person_name">小鸡爪</div>
      </div>
    </div>
    <!-- 我的好友 -->
    <div class="area_main">
      <div class="media_box">
        <div class="media_title">工作经历</div>
        <van-row>
          <van-col span="6">
            <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18">
            <van-cell
              title="新浪微博"
              value="2022.02-至今"
              
            />
            <div class="position">资深工程师</div>
            <p class="desc">负责给大家端茶倒水，整理下周报，还和PM撕逼（其实我很温柔）。没事的时候给大家讲讲段子。</p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="6">
            <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18">
            <van-cell
              title="新浪微博"
              value="2022.02-至今"
            />
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
            <van-cell
              title="北京大学"
              value="2022.02-至今"
            />
            <div class="position">
              <span>资深工程师</span>
              <span class="education">硕士</span>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lookExperience", //朋友详情
  components: {},
  data() {
    return {
      searchVal: "",
      isShow: false
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
    .van-icon,.van-nav-bar__title {
      // color: #fff;
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
    height: 115px;
    .person_info {
      .person_name {
        font-size:18px;
        color: #333;
        font-weight:500;
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
      font-size:12px;
      color: #fff;
      width: 100px;
      // height: 107px;
      background:rgba(0,0,0,0.8);
      border-radius: 4px;
      &::before {
          content: "";
          width: 0px;
          height: 0px;
          border-left: 8px solid transparent; 
          border-right: 8px solid transparent;
          border-bottom: 6px solid rgba(0,0,0,0.8); 
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
      .van-row:last-child {
        // border-bottom: 0px;
      }
    }
    .media_box:last-child {
      border-bottom: 0px;
    }
  }
}
</style>
