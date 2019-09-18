<template>
  <div class="friendsCircle">
    <!-- 主体 -->
    <div class="mainBox">
      <!-- <div class="message_box" @click="lookMessage">
        <van-image round width="26" height="26" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span class="message_text">3条新消息</span>
        <van-icon name="arrow" class="rightArrow" />
        <van-icon name="arrow" class="rightArrow" />
      </div> -->
      <!-- 列表 -->
      <div class="media_box" v-for="(item,index) in arrList" :key="index">
          <!-- 内容区 -->
          <van-row class="media_cont" @click.native="lookFriendsCircleDetails(item.articleId)">
            <van-col span="4" class="media_avator">
              <van-image round width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </van-col>
            <van-col span="18" class="media_info">
              <div class="media_title">{{item.authorName}}</div>
              <div class="media_label">
                <span>杭州雾计算科技有限公司</span>
                <span>产品经理</span>
              </div>
            </van-col>
            <van-col span="2" class="media_more">
              <van-icon name="ellipsis" />
            </van-col>
            <van-col span="24" class="media_desc">
              <p>{{item.context}}</p>
            </van-col>
          </van-row>
          <!-- 图片展示区 暂时没有图片返回-->
          <!-- 一张图片展示的样式 -->
          <van-row class="media_imgs">
            <van-col span="24" class="media_imgs">
              <van-image width="222" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="previewImg"/>
            </van-col>
          </van-row>
          <!-- 两张以上图片展示的样式 
          <van-row class="media_imgs">
            <van-col span="8">
              <van-image width="80" height="80" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="previewImg"/>
            </van-col>
            <van-col span="8">
              <van-image width="80" height="80" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="previewImg"/>
            </van-col>
            <van-col span="8">
              <van-image width="80" height="80" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="previewImg"/>
            </van-col>
          </van-row>-->
          <!-- 评论转发点赞 -->
          <van-row class="media_operate">
            <van-col span="8">
              <van-icon class="iconfont my-icon-icon--" />
              <span class="number">{{item.shareNum}}</span>
            </van-col>
            <van-col span="8">
              <van-icon name="comment-o" />
              <span class="number">{{item.commentNum}}</span>
            </van-col>
            <van-col span="8">
              <van-icon class="iconfont my-icon-dianzan" :class="{active_dianzan:item.isPraise}" @click="giveThumbs(item.isPraise,item.articleId)"/>
              <span class="number">{{item.likeNum}}</span>
            </van-col>
          </van-row>
      </div>

      <!-- 有转发内容的展示样式，这个版本先不做 
      <div class="media_box">
        <van-row class="media_cont">
          <van-col span="4" class="media_avator">
            <van-image round width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18" class="media_info">
            <div class="media_title">小鸡爪</div>
            <div class="media_label">
              <span>杭州雾计算科技有限公司</span>
              <span>产品经理</span>
            </div>
          </van-col>
          <van-col span="2" class="media_more">
            <van-icon name="ellipsis" />
          </van-col>
          <van-col span="24" class="media_desc">
            <p>通信基站概念。建5G网络首先得搞基站，相关基站概念股龙头是海特高新。海特高新成立于1991年，是中国一家综合航空技术服务类上市公司，以成都维修基地为中心，先后在武汉、上海、昆明…</p>
          </van-col>
        </van-row>
        <van-row class="media_transfer transfer_bgc">
          <van-col span="6" class="media_avator">
            <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18" class="transfer_info">
            <p>通信基站概念。建5G网络首先得搞基站，相关基站概念股龙头是海特高新。海特高新成立…</p>
          </van-col>
        </van-row>
        <van-row class="media_operate">
          <van-col span="8">
            <van-icon class="iconfont my-icon-icon--" />
            <span class="number">2</span>
          </van-col>
          <van-col span="8">
            <van-icon name="comment-o" />
            <span class="number">8</span>
          </van-col>
          <van-col span="8">
            <van-icon
              :class="isGood?'iconfont my-icon-dianzan active_dianzan':'iconfont my-icon-dianzan'"
            />
            <span class="number">11</span>
          </van-col>
        </van-row>
      </div>-->
      <!-- 不知道是什么情况的样式，先放这里吧！！！ 
      <div class="media_box">
        <van-row class="media_cont">
          <van-col span="4" class="media_avator">
            <van-image round width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18" class="media_info">
            <div class="media_title">小鸡爪</div>
            <div class="media_label">
              <span>杭州雾计算科技有限公司</span>
              <span>产品经理</span>
            </div>
          </van-col>
          <van-col span="2" class="media_more">
            <van-icon name="ellipsis" />
          </van-col>
          <van-col span="24" class="media_desc">
            <p>通信基站概念。建5G网络首先得搞基站，相关基站概念股龙头是海特高新。海特高新成立于1991年，是中国一家综合航空技术服务类上市公司，以成都维修基地为中心，先后在武汉、上海、昆明…</p>
          </van-col>
        </van-row>
        <van-row class="media_transfer transfer_bgc">
          <van-col span="24">
            <van-row class="media_cont">
              <van-col span="4" class="media_avator">
                <van-image round width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              </van-col>
              <van-col span="18" class="media_info">
                <div class="media_title">小鸡爪</div>
                <div class="media_label">
                  <span>杭州雾计算科技有限公司</span>
                  <span>产品经理</span>
                </div>
              </van-col>
              <van-col span="2" class="media_more">
                <van-icon name="ellipsis" />
              </van-col>
              <van-col span="24" class="media_desc">
                <p>通信基站概念。建5G网络首先得搞基站，相关基站概念股龙头是海特高新。海特高新成立于1991年，是中国一家综合航空技术服务类上市公司，以成都维修基地为中心，先后在武汉、上海、昆明…</p>
              </van-col>
            </van-row>
            <van-row class="media_imgs">
              <van-col span="24" class="media_imgs">
                <van-image width="222" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="previewImg"/>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-row class="media_operate">
          <van-col span="8">
            <van-icon class="iconfont my-icon-icon--" />
            <span class="number">2</span>
          </van-col>
          <van-col span="8">
            <van-icon name="comment-o" />
            <span class="number">8</span>
          </van-col>
          <van-col span="8">
            <van-icon
              :class="isGood?'iconfont my-icon-dianzan active_dianzan':'iconfont my-icon-dianzan'"
            />
            <span class="number">11</span>
          </van-col>
        </van-row>
      </div> -->
      <div class="edit_box">
        <van-icon class="iconfont my-icon-bianji" @click="issueFriendsCircle"/>
      </div>
    </div>
  </div>
</template>

<script>
import { findPage,praiseArticle } from '@/config/musicSharing'
import { ImagePreview } from 'vant';
export default {
  name: "friendsCircle", //乐分享---好友圈
  data() {
    return {
      isGood: false,
      arrList:[],   // 朋友圈列表
    };
  },
  methods: {
    getList() { // 获取列表
        let params = {
            pageNum: 1,
            pageSize: 10,
            type: 2 //2-朋友圈;
        };
        findPage(params).then(res => {
            console.log(res);
            if (res.data.status == 10000) {
                this.arrList = res.data.data.list;
                console.log(this.arrList)
                console.log("请求成功");
            } else {
                console.log("请求失败");
            }
        });
    },

    giveThumbs(isPraise,id) { // 列表点赞
        praiseArticle({
            articleId:id,
        }).then((res) => {
            if(res.data.status == 10000){
                this.getList()
            } else {
                this.$toast({message:"不能重复点赞",duration:1000})
            }
        })
    },
    
    lookFriendsCircleDetails(id) { // 朋友圈详情
        this.$router.push({
          name:'lookFriendsCircleDetails',
          params:{
            detaId:id
          }
        });
    },

    // 查看消息通知
    lookMessage() {
      this.$router.push({
        path: "/musicSharing/lookMessage",
        query: {}
      });
    },
    
    // 图片预览
    previewImg() {
      ImagePreview({
        images: ['https://img.yzcdn.cn/vant/cat.jpeg'],
      });
    },
    // 发表好友圈
    issueFriendsCircle() {
      this.$store.dispatch('setNavBarTitle','小鸡爪');
      this.$router.push({
        path: "/musicSharing/issueFriendsCircle",
        query: {},
      });
    },
  },
  created() {
    this.getList()
  },
};
</script>

<style lang="less" scoped>
.friendsCircle {
  box-sizing: border-box;
  background-color: #fff;
  .mainBox {
    height: 100%;
    text-align: left;
    font-size: 14px;
    color: #333;
    padding-bottom: 52px;
    .message_box {
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: rgba(102, 146, 255, 0.06);
      .van-image {
        position: relative;
        top: 6px;
      }
      .message_text,
      .rightArrow {
        font-size: 12px;
        color: #6692ff;
      }
      .message_text {
        margin: 0 10px 0 8px;
      }
      .rightArrow {
        position: relative;
        top: 2px;
      }
    }
    .media_box {
      border-bottom: 4px solid #f5f5f5;
      box-sizing: border-box;
      .media_cont {
        padding: 0 20px;
        .media_avator {
          padding: 12px 0px;
        }
        .media_info {
          padding: 12px;
          .media_title {
            font-size: 12px;
            color: #666;
            margin-bottom: 4px;
          }
          .media_label {
            font-size: 10px;
            color: #999;
            span {
              margin-right: 4px;
            }
          }
        }
        .media_more {
          line-height: 75px;
          text-align: right;
        }
        .media_desc {
          line-height: 20px;
        }
        .media_imgs {
          text-align: center;
          margin: 12px 0px;
        }
      }
      .media_imgs {
        text-align: center;
        margin: 12px 0px;
      }
      .media_transfer {
        font-size: 12px;
        color: #666;
        padding: 10px 20px;
        box-sizing: border-box;
      }
      .media_operate {
        text-align: center;
        border-top: 1px solid #f5f5f5;
        height: 30px;
        line-height: 30px;
        font-size: 10px;
        color: #999;
        .van-icon {
          margin-right: 6px;
          top: 2px;
        }
        .my-icon-dianzan {
          top: 0px;
        }
        .my-icon-icon-- {
          font-size: 16px;
        }
        .active_dianzan {
          color: #ffb865;
        }
      }
    }
    .transfer_bgc {
      background-color: #f8f8f8 !important;
    }
  }
  .edit_box {
      text-align: center;
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
      bottom: 70px;
      right: 14px;
    }
}
</style>
