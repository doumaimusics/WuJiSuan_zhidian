<template>
  <div class="friendGroup_box">
    <!-- 我的好友 -->
    <div class="area_main">
      <div class="search_box">
        <form action="/">
          <van-search
            v-model="searchVal"
            placeholder="搜索分组"
            show-action
            shape="round"
            @search="onSearch"
          >
            <div slot="action" @click="onCancel">取消</div>
          </van-search>
        </form>
      </div>
      <div class="search_cont">
        <div class="searchNoResult" v-if="haveResult">
          <div class="img_holder">
            <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <div class="no_tex">竟然什么都没有呢～</div>
          </div>
          <div class="divider_text">可能感兴趣</div>
        </div>
        <van-cell-group>
          <van-cell>
            <div slot="title" @click="lookOtherDetail">
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
            <van-button icon="manager-o" type="default" size="small" class="apply_btn">已申请</van-button>
          </van-cell>
          <van-cell>
            <div slot="title" @click="lookOtherDetail">
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
            <van-button icon="comment-o" type="info" size="small">发消息</van-button>
          </van-cell>
          <van-cell>
            <div slot="title" @click="lookOtherDetail">
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
            <van-button icon="plus" type="info" size="small" @click="addFriend">加好友</van-button>
          </van-cell>
          <van-cell>
            <div slot="title" @click="lookOtherDetail">
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
            <van-button icon="lock" type="info" size="small">人脉路径</van-button>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchNetwork", //阅人脉---探索---搜索人脉关系
  components: {},
  data() {
    return {
      searchVal: "",
      checkBoxArr: [],
      optionType: true,
      showCheckBox: false,
      haveResult: true,
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
        this.$router.go('-1')
    },
    /**
     * 查看他人详情
     */
    lookOtherDetail() {
      this.$router.push({
        path: "/readNetwork/lookOtherDetail",
        query: {}
      });
    },
    /**
     * 添加好友
     */
    addFriend() {
      this.$router.push({
        path: "/readNetwork/addFriend",
        query: {}
      });
    }
  }
};
</script>

<style lang="less" scoped>
.friendGroup_box {
  width: 100%;
  background-color: #fff;
  .area_main {
    text-align: left;
    height: calc(100vh - 46px);
    .search_box {
      border-bottom: 1px solid #f5f5f5;
      .van-search {
        height: 50px;
        line-height: 50px;
        background: linear-gradient(#6692ff, #66adff) !important;
        .van-search__content {
          background-color: #fff;
          border-radius: 18px;
          text-align: center;
          margin-right: 10px;
        }
        .van-search__action {
          div {
            color: #fff;
          }
        }
        padding: 0 20px;
      }
    }
    .search_cont {
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
      .searchNoResult {
        .img_holder {
          width: 100%;
          height: 180px;
          box-sizing: border-box;
          text-align: center;
          padding-top: 30px;
        }
        .no_tex {
            font-size: 10px;
            color: #BABABA;
            text-align: center;
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
