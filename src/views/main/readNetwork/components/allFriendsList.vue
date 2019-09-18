<template>
  <div class="allFriends_box">
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
            <van-cell @click="lookFriendDetail(item.userId)" v-for="(item,index) in friendsList" :key="index">
              <div slot="title">
                <div class="name">{{item.username}}</div>
                <div class="position">{{item.positionName}}<van-icon name="medel-o" /></div>
                <van-image
                  class="avator"
                  round
                  width="40"
                  height="40"
                  :src="item.avatar"
                />
              </div>
            </van-cell>
        </div>


        <!-- 
          先不做字母筛选
          <van-index-bar highlight-color="#6692FF">
          <van-index-anchor index="A" />
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>

          <van-index-anchor index="B" />
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>

          <van-index-anchor index="C" />
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>

          <van-index-anchor index="D" />
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          
          <van-index-anchor index="E" />
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>

          <van-index-anchor index="F" />
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>

          <van-index-anchor index="G" />
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>

          <van-index-anchor index="I" />
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>

          <van-index-anchor index="J" />
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          
          <van-index-anchor index="K" />
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
          <van-cell @click="lookFriendDetail">
            <div slot="title">
              <div class="name">小鸡爪</div>
              <div class="position">雾计算产品经理<van-icon name="medel-o" /></div>
              <van-image
                class="avator"
                round
                width="40"
                height="40"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-cell>
        </van-index-bar> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getFriends } from '@/config/readNetwork'
export default {
  name: "allFriendsList", //我的好友
  data() {
    return {
      friendsList:[],   // 好友列表
      searchVal: "",
    };
  },
  methods: {
    //返回上一页
    goBack() {
      this.$router.go("-1");
    },

    getFriendsList(){    // 获取好友列表
      getFriends().then((res) => {
        console.log(res)
        if(res.data.status == 10000) {
          this.friendsList = res.data.data;
          console.log(this.friendsList)
        } else {
            this.$toast(res.data.data);
          }
      })
    },

    //确定搜索
    onSearch() {
      console.log(this.searchVal);
    },
    // 取消搜索
    onCancel() {
      this.searchVal = "";
    },
    //查看朋友详情
    lookFriendDetail(id) {
      this.$router.push({
          name:'lookFriendDetail',
          params:{
            userId:id
          }
      })
    }
  },
  created() {
    this.getFriendsList();   // 获取好友列表
  },
};
</script>

<style lang="less" scoped>
.allFriends_box {
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
                color: #6692FF;
                background:#f6f9ff;
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
                      color: #85CB35;
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
            }
        }
    }
  }
}
</style>
