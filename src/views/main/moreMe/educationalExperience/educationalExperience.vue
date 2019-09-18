<template>
  <div class="educationalExperience">
    <!-- 导航栏 -->
    <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" />
    <!-- 教育经历表单 -->
    <div class="add_main">
      <div class="label_name">学校名称</div>
      <van-cell :title="schooleName" is-link :to="{name:'searchSchool'}"/>

      <div class="label_name">学校专业</div>
      <van-cell :title="disciplLineName" is-link  :to="{name:'searchMajor'}"/>

      <div class="label_name">学历</div>
      <van-cell :title="picker" is-link arrow-direction="down" @click="selectMajorFun"/>
      <van-popup v-model="selectMajor" round position="bottom">
          <van-picker :columns="columns"  show-toolbar  @cancel="selectMajor=false"
  @confirm="onConfirm" />
      </van-popup>
      

      <div class="label_name">入学时间</div>
        <van-cell
            :title="experience.enterTime"
            is-link
            arrow-direction="down"
            @click="showTimePicker(1)"
        />
        <van-popup v-model="enterTimePicker" round position="bottom" :style="{ height: '20%' }">
            <van-datetime-picker
            v-model="enterTimeDate"
            type="date"
            @confirm="handleTimePickerConfirm($event,1)"
            @cancel="handleTimePickerCancel(1)"
            />
        </van-popup>

      <div class="label_name">毕业时间</div>
      <van-cell
        :title="experience.leaveTime"
        is-link
        arrow-direction="down"
        @click="showTimePicker(2)"
      />
      <van-popup v-model="leaveTimePicker" round position="bottom" :style="{ height: '20%' }">
        <van-datetime-picker
          v-model="leaveTimeDate"
          type="date"
          @confirm="handleTimePickerConfirm($event,2)"
          @cancel="handleTimePickerCancel(2)"
        />
      </van-popup>

      <div class="label_name">学业描述</div>
      <div class="tip">
          添加学业描述，可以让我们更好的了解你的大学生活
<br/>例如：专业课程、学习方向、获得奖励。最多输入2000字。</div>
      <van-field v-model="experience.introduce" type="textarea" autosize rows="1" class="introduce_textarea"/>
      <p style="font-size:12px; color: #DFDFDF;text-align:right;">0/2000</p>
      <van-button type="info" size="large" @click="saveFun" round class="save_btn">保存</van-button>
    </div>
  </div>
</template>

<script>
import { addEducation } from '@/config/moreMe'
export default {
  name: "educationalExperience", //悦成长---工作经历
  data() {
    return {
      // this.$store.getters.
      schooleName:this.$store.getters.selectSchool.schoolName,   // 学校名字
      schooleId:this.$store.getters.selectSchool.schoolId,   // 学校id
      disciplLineName:this.$store.getters.selectDisciplLine.disciplineName,   // 专业名字
      disciplLineId:this.$store.getters.selectDisciplLine.disciplLineId,  // 专业名字
      columns:["博士","硕士","本科","专科"],    // 学历
      picker:'',   // 选择的学历
      experience: {
        enterTime: "",
        leaveTime: "",
        total: null,
        subsidy: '',
        stock: '',
        introduce_inp: ''
      },
      enterTimePicker: false,
      enterTimeDate: new Date(),
      leaveTimePicker: false,
      leaveTimeDate: new Date(),
      activeName: "",
      show: false,
      selectMajor:false,
      
    };
  },
  methods: {
    goBack() {   // 返回上一次
      this.$router.go("-1");
    },
    //显示时间选择弹框
    showTimePicker(type) {
      if (type === 1) {
        this.enterTimePicker = true;
      } else {
        this.leaveTimePicker = true;
      }
    },
    //时间选择---完成按钮时触发的事件
    handleTimePickerConfirm(val, type) {
      if (type === 1) {
        this.experience.enterTime = this.format_timestamp(
          this.format_slowTime(val)
        ).withoutTime;
        this.enterTimePicker = false;
      } else {
        this.experience.leaveTime = this.format_timestamp(
          this.format_slowTime(val)
        ).withoutTime;
        this.leaveTimePicker = false;
      }
    },
    //时间选择---点击取消按钮时触发的事件
    handleTimePickerCancel(type) {
      if (type === 1) {
        this.enterTimePicker = false;
      } else {
        this.leaveTimePicker = false;
      }
    },
    selectMajorFun(){   // 选择学历
        this.selectMajor = true;
    },
    onConfirm(picker, value, index) {  // 选择学历确定
        this.selectMajor = false;
        this.picker = picker;
    },
    saveFun() {   // 保存
        let parameter = {
             userId:JSON.parse(window.localStorage.getItem("userInfo")).userId,
             schoolId:this.schooleId,
             schoolName:this.schooleName,
             discipline:this.disciplLineName,
             degree:this.picker,
             education:this.picker,
             entryDate : this.experience.enterTime ,
             graduationDate : this.experience.leaveTime,
             educationDesc :this.experience.introduce,
             achievement : this.experience.introduce
        }
        addEducation(parameter).then((res) => {
          if(res.data.status == 10000){
              this.$router.go(-1)
          } else {
              this.$toast(res.data.data)
          }
        })
    }
  },
  created() {
    console.log(this.$store.getters.selectSchool.schooleId)
  },
  watch: {
  }
};
</script>

<style lang="less" scoped>
.educationalExperience {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .van-nav-bar__title {
    max-width: none;
  }
  .add_main {
    text-align: left;
    height: calc(100vh - 46px);
    width: 260px;
    margin: 0 auto;
    padding-top: 20px;
    .label_name {
      font-size: 16px;
      color: #333;
      margin-bottom: 6px;
      span {
        font-size: 10px;
        color: #999;
      }
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
        position: absolute;
        margin-top: 0.32rem;
        right: 10px;
        margin-top: 12px;
      }
    }
    .introduce_textarea {
      min-height: 46px;
      height: initial;
      line-height: initial;
      background-color: #fff;
      margin-top: 10px;
      padding: 0px !important;
    }
    .van-cell:not(:last-child)::after {
      left: 0px;
    }
    .tip {
      font-size:12px;
      color: #DFDFDF;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
}
</style>
