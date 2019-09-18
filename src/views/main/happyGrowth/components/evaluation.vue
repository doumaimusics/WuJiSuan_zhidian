<template>
  <div class="evaluation">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow @click-left="goBack" />
    <!-- 卡特尔16PF测试 -->
    <div class="evaluation_main">
      <div class="evaluation_cont">
        <div class="title">卡特尔16PF测试</div>
        <div class="details">
          <div class="first">
            <p>
              <img src="../../../../assets/images/eva_avator.jpg" alt />卡特尔16PF测验由美国伊利诺州立大学人格及能力研究所雷蒙德·卡特尔教授编制。卡氏采用系统观察法、科学实验法以及因素分析统计法，经过三十年的研究确定了十六种人格特质，并据此编制了测验量表。卡特尔认为“根源特质”是人类的潜在、稳定的人格特征，是人格测验应把握的实质。
            </p>
          </div>
          <div class="second">
            <p>卡特尔16PF又称卡特尔16PF测验，是世界上最完善的心理测量工具之一。16种个性因素在一个人身上的不同组合，就构成了一个人独特的人格，完整地反映了一个人个性的全貌。它用以测量人们16种基本的性格特质，这16种特质是影响人们学习生活的基本因素。</p>
          </div>
          <div class="second">
            <p>人格是稳定的、习惯化的思维方式和行为风格，它贯穿于人的整个心理，是人的独特性的整体写照。人格对于管理者来说是很重要的，它渗透到管理者的所有行为活动中，影响管理者的活动方式、风格和绩效。大量研究和实践表明：一些样式的人格类型和管理活动有着特定的关系，它们对团体的贡献不同，所适宜的管理环境也不同。利用成熟的人格测验方法对管理者或应聘人员的人格类型进行诊断，可为人事安置、调整和合理利用人力资源提供建议。这正是16PF测验的目的所在。16PF广泛用于人员的选拔和评定。本测试由才储团队根据卡特尔原版测验量表改编而成。16PF类型没有好与坏，请凭第一感觉不假思索答题。根据国际心理量表评测和施测标准化要求，本量表有部分题目实际上并非为其所测维度变量，而是测试你前后态度是否一致，请诚实答题。</p>
          </div>
        </div>
      </div>
      <van-button type="info" size="large" class="test_btn" @click="goTest">开始测试<van-icon class="iconfont my-icon-weibajiantouyou" /></van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "evaluation", //悦成长---卡特尔16PF测试
  data() {
    return {};
  },
  components: {},
  mounted() {
      
  },
  created() {},
  methods: {
    /**
     *返回上一页
     */
    goBack() {
      this.$router.go("-1");
    },
    /**
     * 开始测试
     */
    goTest() {
        this.$router.push({
            path: '/happyGrowth/testQuestions',
            query: {
                
            }
        })
    }
  }
};
</script>

<style lang="less" scoped>
.evaluation {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .van-nav-bar__title {
    max-width: none;
  }
  .van-hairline--bottom::after {
    border: 0px;
  }
  .evaluation_main {
    text-align: left;
    height: calc(100vh - 46px);
    .evaluation_cont {
      font-size: 12px;
      color: #666;
      line-height: 18px;
      padding: 20px 30px;
      .title {
        font-size: 16px;
        color: #333;
        font-weight: 500;
        margin-bottom: 20px;
      }
      .details {
        .first {
          p {
            padding-right: 5px;
            img {
              float: right;
            }
          }
        }
        .second {
          margin: 20px 0px;
        }
      }
    }
    .test_btn {
        position: fixed;
        bottom: 0px;
        .van-icon {
            position: relative;
            top: 2px;
        }
    }
  }
}
</style>
