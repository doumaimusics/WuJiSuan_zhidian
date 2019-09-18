<template>
  <div class="experienceDetails">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow @click-left="goBack" />
    <!-- 头像 -->
    <div class="avator_box">
      <van-image round width="70px" height="70px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="avator_name">{{name}}</div>
    </div>
    <!-- 主体 -->
    <!-- 工作经历 -->
    <experience-main 
    mediaTitle="工作经历" 
    :experienceData="workeXperience"
    btnText="添加工作经历"
    mediaTitleType="1"
    isList="2"
    @addExperience="addExperience"></experience-main>

    <!-- 教育经历 -->
    <experience-main 
    mediaTitle="教育经历" 
    :experienceData="educationXperience"
    btnText="添加教育经历"
    mediaTitleType="2"
    isList="2"
    @addExperience="addExperience"></experience-main>
     <!-- 更多信息模块 -->
    <more-inform isSelect="2"></more-inform>

  </div>
</template>

<script>
import ExperienceMain from '../components/personalHomePage/experience';   // 经历模块
import MoreInform from '../components/personalHomePage/moreInform';   // 更多信息
export default {
  name: "experienceDetails", 
  data() {
    return {
      name: "小鸡爪",
      activeName: "",
      workeXperience:[
        {
            headPortrait:'https://img.yzcdn.cn/vant/cat.jpeg',
            title:'新浪微博',
            timeFrame:'2017.09-至今',
            position:'前端开发',
            details:'负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕负责给大家端茶倒水，整理下周报，和PM撕'
        }
      ],   // 工作经历数据
      educationXperience:[
        {
            headPortrait:'https://img.yzcdn.cn/vant/cat.jpeg',
            title:'北京大学',
            position:'人工智能',
            academicDegree: '硕士',
            timeFrame:'2017.09-至今',
        },
      ],
    };
  },
  components: {
      ExperienceMain,
      MoreInform
  },
  mounted() {},
  created() {},
  methods: {
    /**
     *返回上一页
     */
    goBack() {
      this.$router.go("-1");
    },

    addExperience(val) {   // 按钮事件，跳转对应添加或编辑页面
        console.log(val)
        if(val == 1) {
            this.$router.push({    // 跳转工作经历
                name:'addExperience'
            })
        } else {
            this.$router.push({   // 跳转教育经历
                name:'educationalExperience'
            })
        }
    }
  
    
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.experienceDetails {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .van-nav-bar__title {
    max-width: none;
  }
  .van-hairline--bottom::after {
    border: 0px;
  }
  .avator_box {
    text-align: center;
    .avator_name {
      font-size: 18px;
      color: #333;
      font-weight: 500;
    }
  }
}
</style>
