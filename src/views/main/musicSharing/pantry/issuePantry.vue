<template>
  <div class="pantryDetails_box">
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
          <div class="desc">小鸡爪小鸡爪小鸡爪</div>
        </div>
      </van-nav-bar>
    </van-sticky>
    <!-- 详情 -->
    <div class="area_main">
      <div class="input_box">
        <van-field v-model="message" type="textarea" placeholder="说点什么呢～" rows="4" autosize />
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
          <!-- 上传图片按钮 -->
          <van-col span="12">
            <van-uploader multiple :after-read="onRead">
              <van-icon class="iconfont my-icon-tupian" />
            </van-uploader>
          </van-col>
          <!-- 表情包按钮 -->
          <van-col span="12">
            <van-icon name="smile-o" />
          </van-col>
        </van-col>
        <van-col span="18">
          <!-- 职位选择 -->
          <van-dropdown-menu direction="up">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { saveArticle } from '@/config/musicSharing'
import { uploadAvator } from '@/config/register'   // 上传图片
export default {
  name: "issuePantry", //乐分享---茶水间---发表茶水间
  components: {},
  data() {
    return {
      message: '',  // 内容
      imgList:[],
      imgUrl:'',   // 上传的图片
      value1: 0,
      option1: [
        { text: '职位：阿里巴巴员工', value: 0 },
        { text: '花名：小鸡爪小鸡爪小鸡…', value: 1 },
      ],
    };
  },
  methods: {
    //返回上一页
    goBack() {
      this.$router.push({
        name:'musicSharing',
        query:{
          type:1   // //1-茶水间
        }
      });
    },
    //点击右侧按钮时触发
    onClickRight() {
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
        let data = {
          authorId:userInfo.userId,  // 用户id
          forumId: 1,  //1-茶水间2-朋友圈
          authorName:userInfo.phone,   // 手机号
          context:this.message,   // 内容
          image:this.imgUrl,   // 图片
          anonymous:1  // 匿名名称
        }
        saveArticle(data).then((res) => {
          console.log(res)
          if(res.data.status == 10000) {
            this.$toast(res.data.data);
            this.goBack();
          } else {
            this.$toast(res.data.data);
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
    /**
     * 读取完成后的回调函数
     */
    onRead(file, detail) {
      let params= {
        "upfile": file.file
      };
      uploadAvator(params).then((res) => {
        if(res.data.status == 10000) {
            this.imgList.push(file.content);
            console.log(this.imgList)
            this.imgUrl = res.data.data.picPath;
        }else {
            this.$toast(res.data.data);
        }
      })
    },
  },
};
</script>
<style lang="less">
.chatInput{
  .van-col--18{
      .van-dropdown-menu__title::after{
        top:20px!important;
      }
      .van-dropdown-menu__title--down::after{
        top:20px!important;
      }
    }
}
</style>
<style lang="less" scoped>
.pantryDetails_box {
  width: 100%;
  background-color: #fff;
  .nav_bar {
    background: linear-gradient(#66adff, #6692ff);
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
      position: relative;
      line-height: none;
      .nav_title {
        position: relative;
        top: -6px;
      }
      .desc {
        position: absolute;
        font-size: 8px;
        color: #fff;
        top: 14px;
        left: 0;
        right: 0;
      }
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
    background:rgba(102,146,255);
    padding: 10px 12px;
    .van-icon {
      color: #fff;
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
