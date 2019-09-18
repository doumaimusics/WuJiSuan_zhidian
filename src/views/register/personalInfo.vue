<template>
  <div class="personalInfo_box">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow @click-left="goBack" />
    <!-- 选择行业主体 -->
    <div class="personalInfo_main">
      <div class="personal_title">完善资料</div>
      <div class="avator">
        <div class="upload_box img_box">
          <van-uploader :after-read="onRead">
            <img :src="imgUrl" alt v-if="imgUrl" />
            <van-icon name="add-o" v-else />
          </van-uploader>
        </div>
      </div>
      <div class="personalInfo_form">
        <div class="label_name">姓名</div>
        <van-field v-model="submitFormForm.name" type="tel" clearable placeholder="请输入" />
        <div class="label_name">性别</div>
        <van-cell :title="submitFormForm.sex" @click="selectSex" />
        <van-action-sheet v-model="sexSelectStatus" :actions="actions" @select="onSelect" />
        <div class="label_name">地区</div>
        <van-cell :title="submitFormForm.area" is-link to="/register/selectArea"/>
        <div class="label_name">所在行业</div>
        <van-cell :title="submitFormForm.industry" is-link to="/register/selectIndustry"/>
        <van-button
          round
          size="large"
          :class="submitBtnDisabed?'submit_btn_disbed':'submit_btn'"
          @click="submitNext(submitFormForm)"
        >下一步</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadAvator,setUserInfo } from '@/config/register'
export default {
  name: "personalInfo", //完善资料
  components: {},
  data() {
    return {
      imgUrl: "",
      submitFormForm: {
        name: "",
        sex: "",
        area: this.$store.getters.personalInfoArea.text,
        industry: this.$store.getters.personalInfoIndystry.industryName
      },
      sexSelectStatus: false,
      actions: [{ name: "男" }, { name: "女" }],//1是男0是女
      submitBtnDisabed: false //提交按钮默认禁用
    };
  },
  mounted() {
    
  },
  watch: {},
  methods: {
    /**
     *返回上一页
     */
    goBack() {
      this.$router.go("-1");
    },
    /**
     * 读取完成后的回调函数
     */
    onRead(file, detail) {
      // console.log(file);
      let params= {
        "upfile": file.file
      };
      uploadAvator(params).then((res) => {
        if(res.data.status == 10000) {
            // console.log(res.data.data);
            this.imgUrl = res.data.data.picPath;
        }else {
            this.$toast(res.data.data);
        }
      })
    },
    /**
     *选择性别显示ActionSheet 上拉菜单
     */
    selectSex() {
      this.sexSelectStatus = true;
    },
    /**
     *ActionSheet 上拉菜单  选中选项时触发
     */
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.sexSelectStatus = false;
      this.submitFormForm.sex = item.name;
    },
    /**
     * 下一步
     */
    submitNext() {
      var _this = this;
      var tempData = Object.assign({},_this.submitFormForm);
      tempData.avatar = _this.imgUrl;
      tempData.industryId = this.$store.getters.personalInfoIndystry.id;
      tempData.areaId = this.$store.getters.personalInfoArea.id;
      let userInfo = JSON.parse(localStorage.getItem('userInfo'));
      tempData.phone = userInfo.phone;
      if(tempData.sex === '男') {
        tempData.sex = 1;
      }else {
        tempData.sex = 0;
      }
      // console.log(tempData);
      // return;
      if(!tempData.name) {
        _this.$toast('请输入姓名');
        return;
      }
      if(!tempData.sex && tempData.sex!==0 ) {
        _this.$toast('请选择性别');
        return;
      }
      if(!tempData.area) {
        _this.$toast('请选择地区');
        return;
      }
      if(!tempData.industry) {
        _this.$toast('请选择行业');
        return;
      }
      let params = tempData;
      setUserInfo(params).then((res) => {
          if(res.data.status == 10000) {
            // console.log(res.data.data);
            this.$router.push({
                path: '/register/openHumanCircle',
                query: {
                    
                }
            })
          }else {
              _this.$toast(res.data.data);
          }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.personalInfo_box {
  width: 100%;
  background-color: #fff;
  .van-nav-bar__title {
    max-width: none;
  }
  .van-hairline--bottom::after {
    border: 0px;
  }
  .personalInfo_main {
    text-align: left;
    height: calc(100vh - 46px);
    .personal_title {
      text-align: center;
      font-size: 20px;
      color: #6692ff;
    }
    .avator {
      text-align: center;
      margin: 40px 0px 24px;
      .img_box {
        width: 70px;
        height: 70px;
        margin: 0 auto;
        border-radius: 50%;
        background-color: #d8d8d8;
        position: relative;
        .van-uploader {
          position: absolute;
          bottom: -10px;
          right: -4px;
          .van-icon {
            color: #6692ff;
          }
        }
      }
      img {
        width: 70px;
        height: 70px;
        margin: 0 auto;
        border-radius: 50%;
        position: relative;
        left: -4px;
      }
    }
    .personalInfo_form {
      width: 260px;
      margin: 0 auto;
      .label_name {
        font-size: 16px;
        color: #333;
        margin-bottom: 6px;
      }
      .van-cell {
        font-size: 16px;
        color: #333;
        height: 46px;
        line-height: 46px;
        background-color: #f6f9ff;
        border-radius: 6px;
        margin-bottom: 14px;
        padding: 0px 10px 0px 24px !important;
        .van-cell__right-icon {
          margin-top: 12px;
        }
      }
      .submit_btn_disbed {
        background-color: #d7d7d7;
        color: #fff;
        border: 0px;
        margin-top: 14px;
      }
      .submit_btn {
        background-color: #6692ff;
        color: #fff;
        border: 0px;
        margin-top: 14px;
      }
    }
  }
}
</style>
