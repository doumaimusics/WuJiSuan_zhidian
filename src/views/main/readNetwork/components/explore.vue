<template>
  <div class="explore">
    <div class="search_box">
      <form action="/">
        <van-search v-model="searchVal" placeholder="搜索人脉关系" @search="onSearch" @cancel="onCancel" />
      </form>
    </div>
    <div class="cont_box">
      <van-tabs v-model="active" type="card">
        <van-tab title="推荐">
          <van-notice-bar color="#6692FF" background="rgba(102,146,255,0.06)" mode="closeable"><van-icon name="newspaper-o" />点击开启通讯录权限，发现更多好友</van-notice-bar>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
              </van-cell>
          </van-cell-group>
        </van-tab>
        <van-tab title="同事">
          <van-notice-bar color="#6692FF" background="rgba(102,146,255,0.06)" mode="closeable"><van-icon name="newspaper-o" />点击开启通讯录权限，发现更多好友</van-notice-bar>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
              </van-cell>
          </van-cell-group>
        </van-tab>
        <van-tab title="校友">
          <van-notice-bar color="#6692FF" background="rgba(102,146,255,0.06)" mode="closeable"><van-icon name="newspaper-o" />点击开启通讯录权限，发现更多好友</van-notice-bar>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
              </van-cell>
          </van-cell-group>
        </van-tab>
        <van-tab title="同乡">
          <van-notice-bar color="#6692FF" background="rgba(102,146,255,0.06)" mode="closeable"><van-icon name="newspaper-o" />点击开启通讯录权限，发现更多好友</van-notice-bar>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
              </van-cell>
          </van-cell-group>
        </van-tab>
        <van-tab title="同行">
          <van-notice-bar color="#6692FF" background="rgba(102,146,255,0.06)" mode="closeable"><van-icon name="newspaper-o" />点击开启通讯录权限，发现更多好友</van-notice-bar>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
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
                <van-button icon="plus" type="info" size="small">加好友</van-button>
              </van-cell>
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "explore", ////阅人脉---探索
  data() {
    return {
      searchVal: ""
    };
  },
  components: {},
  mounted() {},
  created() {},
  methods: {
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
.explore {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .search_box {
    border-bottom: 1px solid #f5f5f5;
    .van-search {
      height: 40px;
      line-height: 40px;
      // background-color: #d8d8d8 !important;
      .van-search__content {
        // background-color: #fff;
        background-color: #d8d8d8 !important;
        border-radius: 18px;
        text-align: center;
      }
      padding: 0 20px;
    }
  }
  .cont_box {
    width: 100%;
    // background-color: red;
    .van-tabs {
      /deep/ .van-tabs__wrap {
        height: 40px;
        line-height: 40px;
        width: 100% !important;
        // background-color: #D7D7D7;
        border-bottom: 1px solid #f5f5f5;
      }
      /deep/ .van-tabs__nav {
        // background-color: #D7D7D7;
        margin-top: 6px;
      }
      /deep/ .van-tab--active {
        font-weight: 500;
        background-color: #6692ff;
        color: #fff !important;
        border-radius: 20px;
      }
      /deep/ .van-tabs__line {
        background-color: #6692ff;
      }
      /deep/ .van-hairline--top-bottom::after {
        border-width: 0;
      }
      /deep/ .van-tabs__nav--card {
        border: 0px;
      }
      /deep/ .van-tab {
        border-right: 0px;
        color: #666;
        flex-basis: 20% !important;
      }
    }
    .van-notice-bar {
      height: 22px;
      line-height: 22px;
      text-align: center !important;
      font-size:10px;
      /deep/ .van-notice-bar__content {
        width: 100%;
      }
      .van-icon {
        top: 2px;
        right: 4px;
      }
    }
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
          background:rgba(102,146,255,0.1);
          border-radius:4px;
          color: #6692FF;
        }
        .avator {
          position: absolute;
          top: 4px;
          left: -60px;
        }
      }
      .van-button  {
        top: 20px;
        border-radius:4px;
      }
    }
  }
}
</style>
