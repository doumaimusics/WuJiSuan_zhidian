<template>
  <div class="focusTheme_box">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow @click-left="goBack" @click-right="onClickRight">
      <van-button round size="small" slot="right">跳过</van-button>
    </van-nav-bar>
    <!-- 关注主题 -->
    <div class="focusTheme_main">
      <div class="title">关注主题</div>
      <div class="detail">选择感兴趣的内容，定制你的之点头条</div>
      <div class="theme_img_box">
        <van-row>
          <van-checkbox-group v-model="checkList">
            <van-col span="12" v-for="(item,index) in themeList" :key='index'>
                <!-- <div class="media_body" :style="{'background': 'url('+item.imgUrl+') no-repeat center center'}">
                    <div class="media_title">{{item.title}}</div>
                    <div class="media_detail">{{item.detail}}</div>
                    <van-checkbox :name="item.id" checked-color="#6692FF"></van-checkbox>
                </div> -->
                <div class="media_body" :style="{'background': 'url('+imgUrl+') no-repeat center center'}">
                    <div class="media_title">{{item.name}}</div>
                    <div class="media_detail">{{item.label}}</div>
                    <van-checkbox :name="item.id" checked-color="#6692FF"></van-checkbox>
                </div>
            </van-col>
          </van-checkbox-group>
        </van-row>
      </div>
      <div class="btn_box">
          <van-button type="info" round size="large" class="ok" @click="goMenu">选好了，进入之点</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { queryFocusConversation,submitFocusConversation } from '@/config/register'
export default {
  name: "focusTheme", //关注主题
  components: {},
  data() {
    return {
        checkList: [],
        imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
        themeList: [
            // {
            //     imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
            //     title: '行业精选',
            //     detail: '557882人关注',
            //     id: 1
            // },
            // {
            //     imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
            //     title: '行业精选',
            //     detail: '557882人关注',
            //     id: 2
            // },
            // {
            //     imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
            //     title: '行业精选',
            //     detail: '557882人关注',
            //     id: 3
            // },
            // {
            //     imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
            //     title: '行业精选',
            //     detail: '557882人关注',
            //     id: 4
            // },
            // {
            //     imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
            //     title: '行业精选',
            //     detail: '557882人关注',
            //     id: 5
            // }
        ]
    };
  },
  mounted() {},
  watch: {},
  created() {
    this.queryFocusConversationData();
  },
  methods: {
    /**
     *返回上一页
     */
    goBack() {
      this.$router.go("-1");
    },
    /**
     * 导航栏右侧点击事件
     */
    onClickRight() {
      // this.$store.dispatch('setPersonalInfofocusTheme',this.selectedfocusThemeData);
      // this.$router.push({
      //     path: '/register/personalInfo',
      //     query: {
      //     }
      // })
    },
    /**
     * 获取人脉
     */
    queryFocusConversationData() {
      var _this = this;
      let params= {};
      queryFocusConversation(params).then((res) => {
        if(res.data.status == 10000) {
          console.log(res.data.data);
          _this.themeList = res.data.data;
        }else {
            _this.$toast(res.data.data);
        }
      })
    },
    /**
     * 进入主页
     */
    goMenu() {
      // console.log(this.checkList);
      let params= {
        newsTypeIds: this.checkList
      };
      submitFocusConversation(params).then((res) => {
        if(res.data.status == 10000) {
          // console.log(res.data.data);
          this.$router.push({
              path: '/main/happyGrowth',
              query: {
              }
          })
        }else {
            _this.$toast(res.data.data);
        }
      })
    },
  }
};
</script>

<style lang="less" scoped>
.focusTheme_box {
  width: 100%;
  background-color: #fff;
  .van-nav-bar {
    .van-nav-bar__right {
      .van-button {
        border: 1px solid #dfdfdf;
        background-color: #fff;
        color: #bababa;
      }
    }
  }
  .van-hairline--bottom::after {
    border: 0px;
  }
  .focusTheme_main {
    text-align: left;
    height: calc(100vh - 46px);
    padding: 12px 22px;
    box-sizing: border-box;
    .title {
      font-size: 20px;
      color: #6692ff;
      font-weight: 500;
      padding-left: 36px;
    }
    .detail {
      font-size: 12px;
      color: #666;
      padding-left: 36px;
      margin: 4px 0px 26px 0px;
    }
    .theme_img_box {
        .van-row {
            .van-col {
                position: relative;
                .media_body {
                    height:110px;
                    background-color: #eee;
                    margin: 5px;
                    padding: 14px 16px;
                    border-radius: 8px;
                    box-sizing: border-box;
                    .van-checkbox {
                        position: absolute;
                        top: 15px;
                        right: 15px;
                    }
                    .media_title {
                        font-size:14px;
                        color: #fff;
                        margin: 46px 0px 4px 0px;
                    }
                    .media_detail {
                        font-size:12px;
                        color: #fff;
                    }
                }
            }
        }
    }
    .btn_box {
        padding: 0 20px;
        .ok {
            margin-top: 20px;
        }
    }
  }
}
</style>
