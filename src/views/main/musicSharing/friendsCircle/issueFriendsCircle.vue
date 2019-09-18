<template>
  <div class="friendsCircleDetails_box">
    <!-- 导航栏 -->
    <van-sticky>
      <van-nav-bar
        left-arrow
        @click-left="goBack"
        right-text="发送"
        @click-right="onClickRight"
        class="nav_bar"
      >
        <div slot="title">
          <div class="nav_title">{{this.$store.getters.navBarTitle}}</div>
        </div>
      </van-nav-bar>
    </van-sticky>
    <!-- 详情 -->
    <div class="area_main">
      <div class="input_box">
        {{message_text}}
      </div>
      <div class="img_box">
        <van-row gutter="10">
          <van-col span="8" v-for="(item, index) in imgList" :key="index">
            <van-icon name="close" class="close_btn" @click="deleteImg(index)"/>
            <van-image width="" height="108" :src="item" @click="previewImg(imgList,index)"/>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- chatInput -->
    <div class="chatInput">
      <van-row>
        <van-col span="6">
          <van-col span="12">
            <van-uploader multiple :max-count="9"  :after-read="onRead">
              <van-icon class="iconfont my-icon-tupian" />
            </van-uploader>
          </van-col>
          <van-col span="12">
            <van-icon name="smile-o" />
          </van-col>
        </van-col>
        <van-col span="18">
          <van-field v-model="message" placeholder="请输入用户名" @blur="showMessgge" @keyup.enter="showMessgge"/>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { saveArticle,getGroupList } from '@/config/musicSharing'   // 发送
import { uploadAvator } from '@/config/register'   // 上传图片
import { constants } from 'crypto';
export default {
  name: "issueFriendsCircle", //乐分享---好友圈---发表好友圈
  components: {
  },
  data() {
    return {
      message: '',   // 输入的文字
      message_text: '',  // 文字展示
      imgList:[],   // 上传的图片
    };
  },
  methods: {
   
    goBack() { //返回上一页
      this.$router.push({
        name:'musicSharing',
        query:{
          type:2   // //1-茶水间
        }
      });
    },
   
    onClickRight() { // 发送
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
        let data = {
          authorId:userInfo.userId,  // 用户id
          forumId: 2,  //1-茶水间2-朋友圈
          authorName:userInfo.phone,   // 手机号
          context:this.message,   // 内容
          image:JSON.stringify(this.imgList),   // 图片
        }
        saveArticle(data).then((res) => {
          console.log(res)
          if(res.data.status == 10000) {
            this.$toast(res.data.data);
            this.goBack();
          } else {
            this.$toast(res.data.data)
          }
        })
    },
    //图片预览
    previewImg(images,index) {
      ImagePreview({
        images: images,
        startPosition: index?index: 0,
        className: 'previewImg_box'
      });
    },
    //删除图片
    deleteImg(index) {
      this.imgList.splice(index,1);
    },
    //文件读取完成后的回调函数
    onRead(file, detail) {
      let params= {
        "upfile": file.file
      };
      uploadAvator(params).then((res) => {
        if(res.data.status == 10000) {
            this.imgList.push(res.data.data.picPath);
        }else {
            this.$toast(res.data.data);
        }
      })
    },
    //回显输入的数据
    showMessgge() {
        this.message_text = this.message;
    },
  },
  created() {
  },
};
</script>

<style lang="less" scoped>
.friendsCircleDetails_box {
  width: 100%;
  background-color: #fff;
  .nav_bar {
    background: linear-gradient(#66adff, #6692ff);
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
      position: relative;
      line-height: none;
    }
    .van-nav-bar__right {
      .van-nav-bar__text {
        color: #fff;
      }
    }
    .van-nav-bar__left {
      z-index: 12;
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
    // height: calc(100vh - 46px);
    padding-bottom: 46px;
    .input_box {
      padding: 16px 20px;
      font-size: 10px;
    }
    .img_box {
      width: 100%;
      box-sizing: content-box;
      .van-row {
        margin-left: 0px !important;
        margin-right: 0px !important;
        .van-col {
          position: relative;
          .close_btn {
            position: absolute;
            top: 5px;
            right: 10px;
            z-index: 10;
            font-size: 14px;
            color: #D7D7D7;
          }
        }
      }
    }
  }
  .chatInput {
    width: 100%;
    position: fixed;
    bottom: 0px;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    background:rgba(102,146,255,0.06);
    padding: 10px 12px;
    .van-icon {
      color: #999;
    }
    .my-icon-tupian {
      font-size: 24px;
    }
    .van-icon-smile-o {
      font-size: 24px;
    }
    .van-dropdown-menu {
      height: 28px;
    }
    .van-col--12 {
      line-height: 24px;
    }
  }
}
</style>
