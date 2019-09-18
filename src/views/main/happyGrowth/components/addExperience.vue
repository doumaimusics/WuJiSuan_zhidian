<template>
  <div class="addExperience">
    <!-- 导航栏 -->
    <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" />
    <!-- 工作目标 -->
    <div class="add_main">
      <div class="label_name">公司名称</div>
      <van-cell :title="experience.companyName || ' '" is-link to="/register/selectCompany" />
      <div class="label_name">公司行业</div>
      <van-cell :title="experience.industry" is-link to="/register/selectIndustry" />
      <div class="label_name">岗位名称</div>
      <van-cell :title="experience.position" is-link to="/register/selectPosition" />
      <div class="label_name">入职时间</div>
      <van-cell
        :title="experience.enterDate"
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
      <div class="label_name">离职时间</div>
      <van-cell
        :title="experience.leaveDate"
        is-link
        arrow-direction="down"
        @click="showTimePicker(2)"
      />
      <div class="label_name">公司职级</div>
      <van-field v-model="experience.level" type="tel" clearable placeholder="" right-icon="arrow"/>
      <van-popup v-model="leaveTimePicker" round position="bottom" :style="{ height: '20%' }">
        <van-datetime-picker
          v-model="leaveTimeDate"
          type="date"
          @confirm="handleTimePickerConfirm($event,2)"
          @cancel="handleTimePickerCancel(2)"
        />
      </van-popup>
      <div class="label_name">
        薪资
        <span>（我们承诺对您的薪资情况进行保密）</span>
      </div>
      <div class="collapse_box">
        <div class="collapse_label clearfix">
          <van-field v-model="expectSalary" placeholder class="salary_inp fl">
            <span slot="button">元</span>
          </van-field>
          <van-icon name="cross" class="fl cross" />
          <van-field v-model="monthVal" placeholder class="month_inp fl">
            <span slot="button">个月</span>
          </van-field>
          <span class="fl cross">=</span>
          <span class="fl total">{{experience.salary}}万</span>
        </div>
        <van-icon name="play-circle-o" class="fl collapse_arrow" @click="show = !show" />
        <transition name="fade">
          <div v-if="show" class="collapse_cont">
            <van-cell-group>
              <van-field
                v-model="experience.subsidy"
                label="补贴"
                placeholder=""
              />
              <van-field v-model="experience.share" label="期权／股票" placeholder="" />
            </van-cell-group>
          </div>
        </transition>
      </div>
      <div class="label_name">自我介绍</div>
      <div class="tip">添加工作描述，可以让我们更好的了解你的工作。<br/>例如：工作职责或方向、工作上获得的成就。最少输入10字，最多输入2000字。</div>
      <van-field v-model="experience.desc" type="textarea" autosize rows="1" class="introduce_textarea"/>
      <van-button round size="large" class="next_btn">添加工作经历</van-button>
      <van-button type="info" size="large" round class="save_btn" @click="submitNext">保存</van-button>
    </div>
  </div>
</template>

<script>
import { saveWorkExperience } from '@/config/register'
import { Toast } from 'vant';
export default {
  name: "addExperience", //悦成长---工作经历
  data() {
    return {
      experience: {
        companyName: this.$store.getters.personalInfoCompany.companyName,
        companyId: this.$store.getters.personalInfoCompany.companyId,
        industry: this.$store.getters.personalInfoIndystry.industryName,
        industryId: this.$store.getters.personalInfoIndystry.industryId,
        position: this.$store.getters.personalInfoPosition.positionName,
        positionId: this.$store.getters.personalInfoPosition.positionId,
        enterDate: "",
        leaveDate: "",
        level: "",
        salary: null,
        subsidy: 0,
        share: 0
      },
      expectSalary: "",
      monthVal: "",
      enterTimePicker: false,
      enterTimeDate: new Date(),
      leaveTimePicker: false,
      leaveTimeDate: new Date(),
      activeName: "",
      show: false
    };
  },
  components: {},
  mounted() {},
  created() {},
  methods: {
    /**
     *返回上一页
     */
    goBack() {
      this.$router.go("-1");
    },
    /**
     *显示时间选择弹框
     */
    showTimePicker(type) {
      if (type === 1) {
        this.enterTimePicker = true;
      } else {
        this.leaveTimePicker = true;
      }
    },
    /**
     * 时间选择---完成按钮时触发的事件
     */
    handleTimePickerConfirm(val, type) {
      // console.log(this.format_timestamp(this.format_slowTime(val)).withoutTime);
      if (type === 1) {
        this.experience.enterDate = this.format_timestamp(
          this.format_slowTime(val)
        ).withoutTime;
        this.enterTimePicker = false;
      } else {
        this.experience.leaveDate = this.format_timestamp(
          this.format_slowTime(val)
        ).withoutTime;
        this.leaveTimePicker = false;
      }
    },
    /**
     * 时间选择---点击取消按钮时触发的事件
     */
    handleTimePickerCancel(type) {
      if (type === 1) {
        this.enterTimePicker = false;
      } else {
        this.leaveTimePicker = false;
      }
    },
    /**
     * 下一步
     */
    submitNext() {
      const vm = this
      let params= this.experience;
      params.userId = JSON.parse(window.localStorage.getItem('userInfo')).userId
      console.log('______2')
      console.log(params.userId)
      saveWorkExperience(params).then((res) => {
        if(res.data.status == 10000) {
          Toast('成功');
          setTimeout(function () {
            vm.$router.go("-1");
          }, 3000)
          console.log(res.data.data);
        }else {
          $toast(res.data.data);
        }
      })
      // this.$router.push({
      //   path: "/happyGrowth/capabilityAnalysis",
      //   query: {}
      // });
    }
  },
  watch: {
    expectSalary: function (val) {
      this.experience.salary = this.format_number(val * 1 * this.monthVal / 10000);
    },
    monthVal: function (val) {
      this.experience.salary = this.format_number(val * 1 * this.expectSalary / 10000); 
    }
  }
};
</script>

<style lang="less" scoped>
.addExperience {
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
        margin-top: 12px;
      }
    }
    .salary_inp,
    .month_inp {
      width: 100px;
      // height: 46px;
      line-height: 46px;
      background-color: #f8fbff;
      border: 0; // 去除未选中状态边框
      outline: none; // 去除选中状态边框
      padding: 0 0 0 6px !important;
    }
    .month_inp {
      width: 78px;
    }
    .fl {
      float: left;
    }
    .cross {
      font-size: 12px;
      color: #666;
      height: 46px;
      line-height: 46px;
      margin: 0 4px;
    }
    .total {
      font-size: 16px;
      color: #666;
      height: 46px;
      line-height: 46px;
    }
    .collapse_box {
      position: relative;
      z-index: 999;
    }
    .collapse_arrow {
      font-size: 16px;
      color: #6692ff;
      position: absolute;
      transform: rotate(90deg);
      top: 15px;
      right: -18px;
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
    .next_btn {
      border: 1px solid #6692ff;
      color: #6692ff;
    }
    .save_btn {
      margin: 12px 0px 40px;
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
