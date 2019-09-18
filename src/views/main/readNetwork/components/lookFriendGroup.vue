<template>
  <div class="friendGroup_box">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="this.$store.getters.navBarTitle"
      left-arrow
      @click-left="goBack"
      
      class="nav_bar"
    >
      <span slot="right" @click="onClickRight">{{optionType?'编辑':'删除'}}</span>
    </van-nav-bar>
    <!-- 我的好友 -->
    <div class="area_main">
      <div class="search_box">
        <form action="/">
          <van-search v-model="searchVal" placeholder="搜索分组" @search="onSearch" @cancel="onCancel" />
        </form>
      </div>
      <div class="search_cont">
       <div class="van-index-bar">
         <van-checkbox-group v-model="checkBoxArr">
           <van-cell-group>
                <van-cell v-for="(item,index) in getListDate" :key="index">
                  <div slot="title">
                    <div class="name">{{item.username}}</div>
                    <div class="position">
                      <span>{{item.companyName}}</span>
                      <span>{{item.positionName}}</span> 
                      <van-icon name="medel-o" />
                    </div>
                    <van-image
                      class="avator"
                      round
                      width="40"
                      height="40"
                      :src="item.avatar"
                    />
                  </div>
                  <van-checkbox :name="item.username" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
                </van-cell>
              </van-cell-group>
          </van-checkbox-group >
        </div> 
         <!-- <van-checkbox-group v-model="checkBoxArr">
          <van-cell-group>
            <van-index-bar highlight-color="#6692FF">
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
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
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
                </div>
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
              </van-cell>

              <van-index-anchor index="B" />
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
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
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
                </div>
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
              </van-cell>

              <van-index-anchor index="C" />
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
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
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
                </div>
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
              </van-cell>

              <van-index-anchor index="D" />
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
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
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
                </div>
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
              </van-cell>

              <van-index-anchor index="E" />
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
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
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
                </div>
              </van-cell>

              <van-index-anchor index="F" />
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
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
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
                </div>
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
              </van-cell>

              <van-index-anchor index="G" />
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
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
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
                </div>
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
              </van-cell>

              <van-index-anchor index="I" />
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
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
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
                </div>
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
              </van-cell>

              <van-index-anchor index="J" />
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
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
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
                </div>
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
              </van-cell>

              <van-index-anchor index="K" />
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
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
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
                </div>
                <van-checkbox name="小鸡爪" ref="checkboxes" slot="right-icon" v-show="showCheckBox"/>
              </van-cell>
            </van-index-bar>
          </van-cell-group>
        </van-checkbox-group>  -->
      </div>
    </div>
    <!-- 添加 -->
    <div class="add_box">
      <van-icon name="plus" />
    </div>
  </div>
</template>

<script>
import { getGroupUsersByGroupId } from '@/config/readNetwork'
import { log } from 'util';
export default {
  name: "lookFriendGroup", //我的好友
  components: {},
  data() {
    return {
      getListDate:[], // 获取列表
      searchVal: "",
      checkBoxArr: [],
      optionType: true,
      showCheckBox: false,
    };
  },
  methods: {
    getList(){    // 获取分组列表
      getGroupUsersByGroupId({
        groupId:this.$route.query.groupId,
        type:this.$route.query.type
      }).then((res) => {
          if(res.data.status == 10000) {
              this.getListDate = res.data.data;
              console.log(this.getListDate)
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
     * 点击右侧按钮时触发
     */
    onClickRight() {
      this.optionType = !this.optionType;
      if(this.optionType) {
          console.log(this.checkBoxArr);
          this.showCheckBox = false;
      }else {
          this.showCheckBox = true;
      }
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
  created() {
    this.getList()
  },
};
</script>

<style lang="less" scoped>
.friendGroup_box {
  width: 100%;
  background-color: #fff;
  .nav_bar {
    background: linear-gradient(#66adff, #6692ff);
    .van-icon,
    .van-nav-bar__title,.van-nav-bar__right {
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
  .add_box {
    position: fixed;
    z-index: 9999;
    width: 40px;
    height: 40px;
    line-height: 48px;
    border-radius: 50%;
    background: rgba(170, 219, 115, 1);
    box-shadow: 0px 2px 4px 0px rgba(140, 169, 108, 0.5);
    font-size: 20px;
    color: #fff;
    bottom: 60px;
    right: 14px;
  }
}
</style>
