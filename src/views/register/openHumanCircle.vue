<template>
  <div class="humanCircle_box">
    <!-- 导航栏 -->
    <van-nav-bar
      left-arrow
      @click-left="goBack"
      @click-right="onClickRight"
    >
        <van-button round size="small" slot="right">跳过</van-button>
    </van-nav-bar>
    <!-- 开启人脉圈主体 -->
    <div class="humanCircle_main">
        <div class="humanCircle_top">
            <div class="title">开启人脉圈</div>
            <div class="details">学习前辈经验，完成我的目标</div>
        </div>
        <div class="humanCircle_cont">
            <div class="card">
                <van-row gutter="20">
                    <van-col span="6">
                        <span class="number">145</span>位
                        <div class="position">猎头顾问</div>
                    </van-col>
                    <van-col span="6">
                        <span class="number">145</span>位
                        <div class="position">猎头顾问</div>
                    </van-col>
                    <van-col span="6">
                        <span class="number">145</span>位
                        <div class="position">猎头顾问</div>
                    </van-col>
                    <van-col span="6">
                        <span class="number">145</span>位
                        <div class="position">猎头顾问</div>
                    </van-col>
                </van-row>
                <van-row gutter="20">
                    <van-col span="8">
                        <van-image
                        round
                        width="60px"
                        height="60px"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <div class="name">周宇</div>
                        <div class="position">美团高级技术 专家</div>
                    </van-col>
                    <van-col span="8">
                        <van-image
                        round
                        width="60px"
                        height="60px"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <div class="name">周宇</div>
                        <div class="position">美团高级技术 专家</div>
                    </van-col>
                    <van-col span="8">
                        <van-image
                        round
                        width="60px"
                        height="60px"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <div class="name">周宇</div>
                        <div class="position">美团高级技术 专家</div>
                    </van-col>
                </van-row>
                <van-button type="info" round size="large" class="open" @click="openHuman">立即开启</van-button>
                <div class="tip">联系人将用于拓展你的人脉圈</div>
            </div>
        </div>
        <!--  -->
        <div class="agree">继续即表示您同意《职御服务协议》和《隐私策略》</div>
    </div>
  </div>
</template>

<script>
import { queryHumanCircle } from '@/config/register'
export default {
  name: "openHumanCircle", //开启人脉圈
  components: {},
  data() {
    return {
      
    };
  },
  created() {
    this.queryHumanCircleData();
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
        this.$router.push({
            path: '/register/focusTheme',
            query: {
                
            }
        })
    },
    /**
     * 获取人脉
     */
    queryHumanCircleData() {
      var _this = this;
      let params= {};
      queryHumanCircle(params).then((res) => {
        if(res.data.status == 10000) {
          console.log(res.data.data);
          
        }else {
            _this.$toast(res.data.data);
        }
      })
    },
    /**
     * 开启人脉
     */
    openHuman() {
        
    }
  }
};
</script>

<style lang="less" scoped>
.humanCircle_box {
  width: 100%;
  background-color: #fff;
  .van-nav-bar {
    // width: 100%;
    // position: fixed;
    // top: 0px;
    // left: 0px;
    // z-index: 999;
    // background-color: yellow;
    background:linear-gradient(to right,#0FDCDE,#43599C);
    .van-nav-bar__right {
        .van-button{
            border: 1px solid #fff;
            background-color: #4665BC;
            color: #fff;
        }
    }
  }
  .van-hairline--bottom::after {
    border: 0px;
  }
  .humanCircle_main {
    text-align: left;
    height: calc(100vh - 46px);
    .humanCircle_top {
        width: 100%;
        height: 146px;
        box-sizing: border-box;
        background:linear-gradient(to right,#0FDCDE,#43599C);
        padding: 40px 0px 0px 58px;
        .title {
            font-size:26px;
            color: #fff;
            font-weight:500;
        }
        .details {
            font-size:14px;
            color: #fff;
        }
    }
    .humanCircle_cont {
        padding: 0 18px;
        margin-top: -18px;
        .card {
            background-color: #fff;
            width: 100%;
            height: 448px;
            border-radius: 6px;
            box-shadow:0px 0px 5px 2px rgba(106,177,254,0.2);
            padding: 30px 40px;
            box-sizing: border-box;
            .van-row {
                text-align: center;
                .van-col--6 {
                    font-size: 12px;
                    color: #666;
                    border-bottom: 1px solid #D7D7D7;
                    padding-bottom:  20px;
                    margin-bottom: 20px;
                    .number {
                        font-size:20px;
                        color: #6692FF;
                    }
                    .position {
                        margin-top: 6px;
                        color: #333;
                    }
                }
                .van-col--8 {
                    color: #333;
                    .name {
                        font-size:16px;
                        font-weight:500;
                        margin-top: 14px;
                        margin-bottom: 10px;
                    }
                    .position {
                        font-size:12px;
                    }
                }
            }
            .open {
                margin-top: 50px;
                margin-bottom: 12px;
            }
            .tip {
                font-size:12px;
                color: #A8BBCD;
                text-align: center;
            }
        }
    }
    .agree {
        font-size:10px;
        color: #A8BBCD;
        text-align: center;
        margin-top: 10px;
        // position: fixed;
        // bottom: 10px;
    }
  }
}
</style>
