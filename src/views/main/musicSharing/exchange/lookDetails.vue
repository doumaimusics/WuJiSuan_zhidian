<template>
  <div class="addFriend_box">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="this.$store.getters.navBarTitle"
      left-arrow
      @click-left="goBack"
      class="nav_bar"
    >
      <van-icon name="more-o" slot="right" class="plus_btn" ref="popRef" @click="isShow = !isShow">
        <ul class="plus_cont" v-show="isShow">
          <li>
            <van-icon class="iconfont my-icon-icon--" />
            <div>分享</div>
          </li>
          <li @click="toCollect">
            <van-icon name="star" :class="isActive?'activeIcon':''" />
            <div>收藏</div>
          </li>
        </ul>
      </van-icon>
    </van-nav-bar>
    <!-- 我的好友 -->
    <div class="area_main">
      <div class="main_cont">
        <div class="title_box clearfix">
          <div class="title">{{newsDeta.title}}</div>
          <div class="source fl">来源：{{newsDeta.source}}</div>
          <div class="time fr">{{newsDeta.createtime|dateFrm}}</div>
        </div>
        <div class="cont_box">
          {{newsDeta.context}}
          <!--  
          <p>恐怕在前几年谈及AI人工智能的时候，相信很多人还停留在科幻电影的印象里。殊不知，随着手机人工智能芯片所带来的AI算力，已经让人工智能应该悄无声息的来到了我们的生活中。</p>
          <van-image width="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <p>目前在各种手机中广泛采用的骁龙人工智能芯片，已经为超过10亿部用户终端提供领先的人工智能加速，极大的推动了AI在手机中的普及。如今小到每一笔线上交易、每一次新闻推送、每一次人脸解锁；大到AI智慧美颜、智能语音助手、AI游戏加速，人工智能芯片带来的AI算力无不浸润其中，优化着我们的体验、提高着我们的效率。</p>
          <p>根据第三方的调研数据，截至2021年，人工智能所衍生的商业价值将达到3.3万亿美元，AI将成为驱动所有行业变革的关键。高通作为移动芯片行业的领军者，在AI领域积累了深厚的技术和经验，早在2007年，高通就开始了AI基础科学的研究，而在手机人工智能芯片的实践中，从骁龙820开始，高通就已经打造了第一代以异构计算为基本原理的人工智能引擎AI Engine，并配合骁龙芯片进行手机人工智能体验的优化。那个时候AI还不是风口，人工智能应用也很有限，手机厂商们都还没想起来将人工智能芯片作为一个重要的卖点。随着骁龙855的推出，高通的人工智能引擎AI Engine已经演进到第四代。骁龙人工智能芯片也已经成为目前最普及的手机AI平台，见证和推动了近几年来AI功能在手机中的应用和创新，为消费者带来了大量的AI用例。</p>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { getNewsDeta } from '@/config/musicSharing'
export default {
  name: "lookDetails", //乐分享---之汇---查看详情
  components: {},
  data() {
    return {
      isShow: false,
      isActive: false,
      newsDeta:{}
    };
  },
  methods: {
    getNewsDetas() {   // 获取详情
      getNewsDeta({
        newsId:this.$route.params.detaId
      }).then((res) => {
        if(res.data.status == 10000){
          this.newsDeta = res.data.data;
          console.log(this.newsDeta)
        } else {
          this.$toast(res.data.data);
        }
      })
    },  
    // 返回上一页
    goBack() {
      this.$router.push({
        name:'musicSharing',
        query:{
          type:0   // //1-茶水间
        }
      });
    },
    // 收藏
    toCollect() {
      this.isActive = !this.isActive;
    }
  },
  filters:{
    dateFrm:function(el){    //时间过滤器
      return moment(el).format("YYYY-MM-DD HH:mm:ss")
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
    this.getNewsDetas()
  },
 
};
</script>

<style lang="less" scoped>
.addFriend_box {
  width: 100%;
  background-color: #fff;
  .nav_bar {
    background: linear-gradient(#66adff, #6692ff);
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }
    .van-nav-bar__right {
      .van-nav-bar__text {
        color: #fff;
      }
    }
  }
  .van-nav-bar__title {
    max-width: none;
  }
  .van-hairline--bottom::after {
    border: 0px;
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
      // height: 107px;
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
        .van-icon {
          font-size: 16px;
          float: left;
          margin: 8px 0px 0px 8px;
        }
        .my-icon-icon-- {
          font-size: 22px;
          margin-top: 6px;
          margin-left: 4px;
        }
        div {
          margin-left: 30px;
          border-bottom: 1px solid #666;
        }
        .activeIcon {
          color: #ffb865 !important;
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
    height: calc(100vh - 46px);
    .main_cont {
      font-size: 12px;
      color: #333;
      padding: 20px;
      .title_box {
        border-bottom: 1px solid #f5f5f5;
        padding: 6px 10px;
        .title {
          font-size: 16px;
          color: #333;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .source,
        .time {
          font-size: 10px;
          color: #999;
        }
      }
      .cont_box {
        padding: 10px;
        text-indent: 2em;
        p {
          line-height: 20px;
        }
      }
    }
  }
}
</style>
