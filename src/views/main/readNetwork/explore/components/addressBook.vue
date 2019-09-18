<template>
  <div class="addressBook_box">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="this.$store.getters.navBarTitle"
      left-arrow
      @click-left="goBack"
      class="nav_bar"
    />
    <!-- 我的好友 -->
    <div class="area_main">
      <div class="search_box">
        <form action="/">
          <van-search v-model="searchVal" placeholder="搜索分组" @search="onSearch" @cancel="onCancel" />
        </form>
      </div>
      <div class="search_cont">
        <div class="van-index-bar">
          <van-cell v-for="(item,index) in mailList" :key="index">
            <div slot="title">
              <div class="name">{{item.name}}</div>
              <div class="position">
                {{item.phone}}
              </div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
            <!-- 0-未注册用户
            1-注册非好友未发起申请
            2-注册非好友已发送好友申请
            3-注册好友 -->
            <van-button icon="comment-o" type="info" size="small" v-if="item.status == 0">邀请</van-button>

            <van-button icon="plus" type="info" size="small" v-else-if="item.status == 1">加好友</van-button>

             <span v-else-if="item.status == 2">已发送</span>

            <van-button icon="comment-o" type="info" size="small" v-else>发消息</van-button>

          </van-cell>
        </div>
        <!-- <van-index-bar highlight-color="#6692FF">
          <van-index-anchor index="A" />
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
            </div>
            <van-button icon="comment-o" type="info" size="small">发消息</van-button>
          </van-cell>
        </van-index-bar> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addressBook", //通讯录
  data() {
    return {
      searchVal: "",
      mailList:[],   // 通讯录
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
  },
  created () {
    this.mailList = this.$store.getters.mailListData;   // 获取通讯录
    console.log(JSON.stringify(this.$store.getters.mailListData));
    console.log(JSON.stringify(this.mailList))
  }
};
</script>

<style lang="less" scoped>
.addressBook_box {
  width: 100%;
  background-color: #fff;
  .nav_bar {
    background: linear-gradient(#66adff, #6692ff);
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
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
    .search_box {
      border-bottom: 1px solid #f5f5f5;
      .van-search {
        height: 40px;
        line-height: 40px;
        background: linear-gradient(#6692ff, #66adff) !important;
        .van-search__content {
          background-color: #fff;
          border-radius: 18px;
          text-align: center;
        }
        padding: 0 20px;
      }
    }
    .search_cont {
      .van-index-bar {
        /deep/ .van-index-anchor {
          height: 14px;
          line-height: 14px;
          font-size: 12px;
          color: #6692ff;
          background: rgba(102, 146, 255, 0.06);
        }
        /deep/ .van-index-bar__sidebar {
          right: 4px;
        }
        .van-cell {
          font-size: 16px;
          color: #333;
          padding: 10px 0px 10px 78px;
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
            .avator {
              position: absolute;
              top: 4px;
              left: -60px;
            }
          }
          .van-button {
            position: relative;
            top: 10px;
            right: 25px;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
