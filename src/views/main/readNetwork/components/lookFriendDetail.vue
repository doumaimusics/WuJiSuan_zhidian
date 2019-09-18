<template>
  <div class="allFriends_box">
    <div class="top">
      <!-- 导航栏 -->
      <van-nav-bar left-arrow @click-left="goBack" class="nav_bar">
        <van-icon name="more-o" slot="right" class="plus_btn" ref="popRef" @click="isShow = !isShow">
          <ul class="plus_cont" v-show="isShow">
            <li>
              <div>举报</div>
            </li>
            <li>
              <div>分组</div>
            </li>
          </ul>
        </van-icon>
      </van-nav-bar>
      <!-- 个人信息 -->
      <div class="person_info">
        <van-row>
          <van-col span="6">
            <van-image round width="70" height="70" :src="userInfos.avatar" />
          </van-col>
          <van-col span="12">
            <div class="media_title">
              <span class="name">{{userInfos.username}}</span>
              <van-icon name="location-o" />
              <span class="adress">杭州滨江</span>
            </div>
            <div class="media_position">
              <span class="company">{{userInfos.company}}</span>
              <span class="position">{{userInfos.position}}</span>
              <van-icon name="medel-o" />
            </div>
            <div class="school">{{userInfos.graduatedSchool}}</div>
          </van-col>
          <van-col span="6">
            <div class="number">13</div>
            <span>共同好友</span>
          </van-col>
          <van-col span="24">
            <span class="label">{{userInfos.industry}}</span>
            <span class="label product">{{userInfos.position}}</span>
            <span class="label">
              声望
              <span class="number">99</span>
            </span>
          </van-col>
          <van-col span="24">
            <p class="desc">{{userInfos.introduction}}</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 我的好友 -->
    <div class="area_main">
      <!-- 工经经历 -->
      <div class="media_box">
        <div class="media_title">工作经历</div>
        <van-row v-for="(item,index) in userInfos.workExperiences" :key="index">
          <van-col span="6">
            <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18">
            <van-cell
              :title="item.companyName"
              value="2022.02-至今"
              is-link
            />
            <div class="position">{{item.position}}</div>
            <p class="desc">{{item.workDesc}}</p>
          </van-col>
        </van-row>
      </div>
      <!-- 教育经历 -->
      <div class="media_box">
        <div class="media_title">教育经历</div>
        <van-row v-for="(item,index) in userInfos.educations" :key="index">
          <van-col span="6">
            <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18">
            <van-cell
              :title="item.schoolName"
              value="2022.02-至今"
              is-link
            />
            <div class="position">
              <span>{{item.discipline}}</span>
              <span class="education">{{item.degree}}</span>
            </div>
          </van-col>
        </van-row>
      </div>
      <!-- 职业标签 先不做 -->
      <div class="media_box label_box">
        <div class="media_title">职业标签</div>
        <div class="label_cont">
          <van-tag round plain color="#6692FF">交互设计</van-tag>
          <van-tag round plain color="#6692FF">用户体验(UE/UX)</van-tag>
          <van-tag round plain color="#6692FF">协调沟通能力</van-tag>
          <van-tag round plain color="#6692FF">IT互联网</van-tag>
        </div>
      </div>
      <!-- 更多信息 -->
      <div class="media_box more_box">
        <div class="media_title">更多信息</div>
        <van-row>
          <van-col span="12">
            <span class="name">生日</span>
            <span class="val">{{userInfos.birthDate}}</span>
          </van-col>
          <van-col span="12">
            <span class="name">家乡</span>
            <span class="val">{{userInfos.household}}</span>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 聊天 -->
    <div class="chat_box" @click="goChat">
      <van-icon class="iconfont my-icon-liaotian" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/config/moreMe'
export default {
  name: "lookFriendDetail", //朋友详情
  components: {},
  data() {
    return {
      searchVal: "",
      isShow: false,
      userInfos:{}   // 好友信息
    };
  },
 
  methods: {
    getUser() {   // 获取信息
      let params = {
        userId:this.$route.params.userId
      }
      getUserInfo(params).then((res) => {
          if(res.data.status == 10000) {
              this.userInfos = res.data.data;
              console.log(this.userInfos)
          } else {
              this.$toast(res.data.data);
          }
      })
    },
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
     * 聊天
     */
    goChat() {
      this.$router.push({
          path: '/chatPage',
          query: {
            meta: {
              title: '小鸡爪',
            }
          },
          
      })
    }
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
    this.getUser()
  },
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
  .chat_box {
    position: fixed;
    z-index: 9999;
    width: 40px;
    height: 40px;
    line-height: 44px;
    border-radius: 50%;
    background: rgba(170, 219, 115, 1);
    box-shadow: 0px 2px 4px 0px rgba(140, 169, 108, 0.5);
    font-size: 20px;
    color: #fff;
    top: 50%;
    right: 14px;
  }
}
</style>
