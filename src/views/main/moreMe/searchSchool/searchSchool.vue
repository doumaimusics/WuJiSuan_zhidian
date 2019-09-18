<template>
  <div class="company_box">
    <!-- 导航栏 -->
    <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" />
    <!-- 选择职位名称 -->
    <div class="area_main">
      <div class="search_box">
        <form action="/">
          <van-search
            v-model="searchVal"
            placeholder="请输入搜索关键词"
            show-action
            @cancel="onCancel"
          />
        </form>
      </div>
      <div class="search_cont">
        <van-list>
          <van-cell v-for="(item,index) in list" :key="index" :title="item.schoolName" @click="handleSelectPosition(item)"/>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { getSchool } from '@/config/moreMe'
import { setTimeout } from 'timers';
export default {
  name: "searchSchool",
  components: {},
  data() {
    return {
      searchVal: "",   // 搜索的内容
      list: [],   // 学校list
      timeSet:null
    };
  },
  methods: {
    
    goBack() { //返回上一页
      this.$router.go("-1");
    },
    getSchoolList(){  // 获取学校列表
        getSchool({
          searchName:this.searchVal
        }).then((res) => {
          if(res.data.status == 10000){
              this.list = res.data.data;
              console.log(this.list)
          } else {
              this.$toast(res.data.data);
          }
        })
    },
    
    
    onCancel() { //取消搜索
      this.searchVal = "";
    },
   
    handleSelectPosition(item) { // 选择学校
        this.$store.dispatch("setSearchSchool",item);
        this.$router.go(-1)
    }
  },
  created () {
    this.getSchoolList()
  },
  watch: {
    searchVal(val){   // 搜索
        this.timeSet = setTimeout(() => {
          this.getSchoolList()
        },200)
    }
  },
};
</script>

<style lang="less" scoped>
.company_box {
  width: 100%;
  background-color: #fff;
  .van-nav-bar__title {
    max-width: none;
  }
  .area_main {
    text-align: left;
    height: calc(100vh - 46px);
    .search_box {
      border-bottom: 1px solid #f5f5f5;
      .van-search {
        height: 40px;
        line-height: 40px;
        .van-search__content {
          background-color: #fff;
        }
        padding: 0 20px;
      }
    }
    .search_cont {
        .van-list {
            .van-cell {
                height: 40px;
                line-height: 40px;
                font-size:12px;
                padding-left: 20px;
            }
        }
    }
  }
}
</style>
