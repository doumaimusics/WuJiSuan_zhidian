<template>
  <div class="industry_box">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="this.$store.getters.navBarTitle"
      right-text="确定"
      left-arrow
      @click-left="goBack"
      @click-right="onClickRight"
    />
    <!-- 选择行业主体 -->
    <div class="industry_main">
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item v-for="(item,index) in industryList" :key='index' :title="item.industryName">
          <van-button v-for="(val,key) in item.childLists" :key='key' plain type="info" @click="handleSelectIndustry(val,key)" :class="{active_btn: activeIndex == val.id}">{{val.industryName}}</van-button>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import { queryIndustry } from '@/config/register'
export default {
  name: "selectIndustry", //选择行业
  components: {},
  data() {
    return {
      activeNames: "1",
      industryList: [],
      selectedIndustry: {},
      activeIndex: null,
    };
  },
  created() {
    this.queryIndustryData();
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
     * 导航栏右侧点击事件
     */
    onClickRight() {
        if(!this.selectedIndustry.industryName) {
          this.$toast('选择行业');
          return;
        }
        this.$store.dispatch('setPersonalInfoIndystry',this.selectedIndustry);
        this.$router.go("-1");
        // this.$router.push({
        //     path: '/register/personalInfo',
        //     query: {

        //     }
        // })
    },
    /**
     * 选中的行业
     */
    handleSelectIndustry(industry,index) {
        // console.log(industry);
        this.selectedIndustry = industry;
        this.activeIndex = industry.id;
    },
    /**
     * 获取行业
     */
    queryIndustryData() {
      var _this = this;
      let params= {};
      queryIndustry(params).then((res) => {
        if(res.data.status == 10000) {
          console.log(res.data.data);
          _this.industryList = res.data.data;
        }else {
            _this.$toast(res.data.data);
        }
      })
    },
  }
};
</script>

<style lang="less" scoped>
.industry_box {
  width: 100%;
  background-color: #fff;
  .van-nav-bar__title {
    max-width: none;
  }
  .industry_main {
    text-align: left;
    height: calc(100vh - 46px);
    .van-button {
      margin: 0px 20px 10px 0px;
      border: 1px solid #6692ff;
      color: #666;
      border-radius: 4px;
    }
    .active_btn {
      background:#F6F9FF;
      color: #6692FF;
    }
  }
}
</style>
