<template>
  <div class="pantryDetails_box">
    <!-- 导航栏 -->
    <van-sticky>
      <van-nav-bar
        :title="this.$store.getters.navBarTitle"
        left-arrow
        @click-left="goBack"
        class="nav_bar"
      >
        <van-icon
          name="more-o"
          slot="right"
          class="plus_btn"
          ref="popRef"
          @click="isShow = !isShow"
        >
          <ul class="plus_cont" v-show="isShow">
            <li @click="toCollect">
              <van-icon name="like-o" :class="isActive?'activeIcon':''" />
              <div>关注此帖</div>
            </li>
          </ul>
        </van-icon>
      </van-nav-bar>
    </van-sticky>
    
    <div class="area_main">
      <!-- 详情部分 -->
      <div class="detail_cont">
        
        <!-- 详情头部 -->
        <van-cell :value="detaInit.createtime | timeFormat" class="title_box">
          <template slot="title">
            <span class="custom-title">腾讯员工</span>
            <van-icon name="medel-o" class="gold" />
            <span class="label_text">dsaghtj</span>
          </template>
        </van-cell>
        <!-- 详情图文部分 -->
        <div class="cont_box">
            <p class="detail_desc">{{detaInit.context}}</p>
            <van-image width="100%" height="230" :src="detaInit.image" class="detail_img"/>
        </div>
        <!-- 标签部分 
        <div class="media_label clearfix">
          <div class="label_item">
            <van-icon class="iconfont my-icon-biaoqian" />
            <span>阿里巴巴</span>
          </div>
          <div class="label_item">
            <van-icon class="iconfont my-icon-biaoqian" />
            <span>薪酬比较</span>
          </div>
        </div>-->
        <!-- 点赞分享评论部分 -->
        <div class="media_operate">
          <van-row>
            <!-- 点赞 -->
            <van-col span="8">
              <van-icon
                class="iconfont my-icon-dianzan"
                :class="{active_dianzan:detaInit.isPraise}"
                @click="giveThumbs(detaInit.isPraise,detaInit.articleId)"
              />
              <span class="number">{{detaInit.likeNum}}</span>
            </van-col>
            <!-- 点击分享 -->
            <van-col span="8">
              <van-icon class="iconfont my-icon-icon--" />
              <span class="number">{{detaInit.shareNum}}</span>
            </van-col>
            <!-- 评论按钮没有点击效果 -->
            <van-col span="8">
              <van-icon name="comment-o" />
              <span class="number">{{detaInit.commentNum}}</span>
            </van-col>
          </van-row>
        </div>
      </div>
      
      <!-- 评论部分 -->
      <div class="comment_box">
        <!-- 精彩评论 
         <div class="select_comments">
          <div class="comment_title">精彩评论</div>
          <van-cell-group>
            <van-cell>
              <div slot="title">
                <div class="name">小鸡爪</div>
                <div class="position">还是不熬夜了，梦里什么都会有！</div>
                <van-image
                  class="avator"
                  round
                  width="40"
                  height="40"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-icon
                  :class="isGood?'iconfont my-icon-dianzan active_dianzan fr':'iconfont my-icon-dianzan fr'"
                  @click="giveThumbs"
                />
              </div>
            </van-cell>
          </van-cell-group>
        </div> -->

        <!-- 所有评论 -->
        <div class="select_comments">
          <div class="comment_title">所有评论</div>
          <van-cell-group>
            <van-cell v-for="(item,index) in comments" :key="index">
              <div slot="title">
                <div class="comm_top">
                    <div class="comm_left">
                        <van-image class="avator" round width="40" height="40" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    </div>
                    <div class="comm_right">
                        <div class="name">{{item.nickname}}</div>
                        <div class="position">{{item.context}}</div>
                    </div>
                </div>
                
                <div class="comm_bot">
                    <van-icon class="iconfont my-icon-dianzan" :class="{active_dianzan:item.isPraise}"  @click="praiseCommentFun(item.commentId)"/>
                    <span class="number">{{item.likeNum}}</span>
                </div>
                
              </div>
            </van-cell>
          </van-cell-group>
        </div>
      </div>
    </div>
    <!-- chat输入框 -->
     <div class="chatInput">
        <!-- <van-uploader class="left" multiple :after-read="afterRead">
          <van-icon class="iconfont my-icon-tupian" />
        </van-uploader> -->
        <!-- right-icon="smile-o" -->
        <van-field class="center" v-model="values" placeholder="" />
        <div class="right" @click="saveDeatFun">发送</div>
      </div>
  </div>
</template>

<script>
import { praiseArticle,getArticleWithComments,saveComment,praiseComment } from '@/config/musicSharing'
export default {
  name: "lookFriendsCircleDetails", //乐分享---茶水间---查看详情
  data() {
    return {
      isShow: false,
      isActive: false,
      isGood: false,
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
      detaInit:{},  // 详情
      comments:[],  // 评论数据
      values:''   // 发送的内容
    };
  },
  methods: {
    //返回上一页
    goBack() {
      this.$router.push({
        name:'musicSharing',
        query:{
          type:2 //1-茶水间
        }
      });
    },

    getDetaInit(){    // 获取详情
      getArticleWithComments({
          articleId:this.$route.params.detaId
      }).then((res) => {
          if(res.data.status == 10000){
            this.detaInit = res.data.data.article;
            this.comments = res.data.data.comments;
          } else {
            this.$toast(res.data.data);
          }
      })
    },

    saveDeatFun() {    // 发表评论
        if(this.values == '') {
              this.$toast("发送内容不能为空！！！")
        } else {
            let promise = {
              userId:this.userInfo.userId,
              nickname:this.userInfo.username,//用户昵称
              articleId:this.$route.params.detaId,//评论文章id
              createUserId:1,//评论文章创建者id
              createUserName:this.detaInit.authorName,//创建名称
              context:this.values//评论内容
            }
            saveComment(promise).then((res) => {
                if(res.data.status == 10000){
                    this.getDetaInit();
                    this.values='';
                } else {
                    this.$toast(res.data.data);
                }
            })
        }
    },

    praiseCommentFun(id) {   // 评论区点赞
      praiseComment({
          commentId:id
      }).then((res) => {
          console.log(res)
          if(res.data.status == 10000){
              this.getDetaInit();
          } else {
              this.$toast({message:"不能重复点赞",duration:1000});
          }
      })
    },


    //收藏
    toCollect() {
      this.isActive = !this.isActive;
    },

    giveThumbs(isPraise,id) { // 文章点赞
        praiseArticle({
            articleId:id
        }).then((res) => {
            if(res.status == 10000){
                this.getList();
            } else {
                this.$toast({message:"不能重复点赞",duration:1000});
            }
            
        })
    },
    //文件读取完成后的回调函数
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file);
      this.$emit('getFileList',file)
    },
    //上传后的返回值
    getFileList(file) {
        console.log(file);
    },
    //接收发送内容
    getSendVal(val) {
        console.log(val);
    }
  },
  created() {
    this.getDetaInit();
  },
  filters:{
    timeFormat:function(timestamp) {    // 格式化时间
        var mistiming = Math.round((Date.now() - timestamp) / 1000);
        var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
        var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
        for (var i = 0; i < arrn.length; i++) {
            var inm = Math.floor(mistiming / arrn[i]);
            if (inm != 0) {
                return inm + arrr[i] + '前';
            }
        }
    }
  }

};
</script>

<style lang="less" scoped>
.pantryDetails_box {
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
          color: #FB7373 !important;
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
    // height: calc(100vh - 46px);
    padding-bottom: 46px;
    .detail_cont {
      padding: 12px 30px;
      padding-bottom: 0px;
      color: #999;
      border-bottom: 4px solid #f5f5f5;
      .title_box::after {
        border-bottom: 0px;
      }
      .custom-title {
        font-size: 12px;
      }
      .gold {
        color: #85cb35;
        position: relative;
        top: 2px;
        margin: 0 10px 0 6px;
      }
      .label_text {
        font-size: 10px;
      }
      .detail_desc {
        font-size: 14px;
        color: #333;
        font-weight: 500;
        line-height: 20px;
      }
      .detail_img {
        margin-top: 16px;
      }
      .media_label {
        font-size: 10px;
        color: #999;
        margin-bottom: 10px;
        .label_item {
          float: left;
          margin-right: 16px;
          .van-icon {
            margin-right: 6px;
            top: 2px;
          }
        }
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
    .comment_box {
        .comment_title {
            height: 36px;
            line-height: 36px;
            font-size:14px;
            color: #333;
            padding-left: 30px;
        }
      .van-cell-group {
        border-bottom: 4px solid #f5f5f5;
        .van-cell {
          font-size: 16px;
          color: #333;
          padding: 10px 30px 10px 29px;
          
          .van-cell__title {
            position: relative;
            .comm_top{
              display: flex;
              .comm_left{
                margin-right: 10px;
              }
              .comm_right{
                .name {
                  font-size: 10px;
                  color: #666;
                }
                .position {
                  font-size: 12px;
                  color: #333;
                }
              }
            }
            .comm_bot{
              text-align: right;
              font-size: 10px;
              color: #999;
              .number{
                margin-left: 10px;
              }
            }
            .active_dianzan {
              color: #ffb865;
            }
          }
        }
      }
    }
  }
  .chatInput {
    width: 100%;
    position: fixed;
    bottom: 0px;
  }
  .my-icon-dianzan {
      color: #999;
  }
  .chatInput {
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 44px;
  box-sizing: border-box;
  background-color: #6692ff;
  padding: 10px 12px;
  .left {
    width: 30px;
    font-size: 26px;
    color: #fff;
    line-height: 26px;
    .my-icon-tupian {
      margin-left: 0px;
    }
  }
  .center {
    flex: 1;
    padding: 0 12px;
    /deep/ .van-icon-smile-o {
      color: #6692FF;
    }
  }
  .right {
    width: 60px;
    font-size:12px;
    line-height: 26px;
    margin-left: 10px;
    background-color: #fff;
    color: #6692FF;
  }
  .hide_photo {
    display: none !important;
  }
}
}
</style>
