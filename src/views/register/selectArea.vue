<template>
  <div class="area_box">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="this.$store.getters.navBarTitle"
      right-text="确定"
      left-arrow
      @click-left="goBack"
      @click-right="onClickRight"
    />
    <!-- 选择地区 -->
    <div class="area_main">
      <van-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @click-nav="onClickNav"
        @click-item="onSelectArea"
      />
    </div>
  </div>
</template>

<script>
import { queryArea } from '@/config/register'
export default {
  name: "selectArea", //选择地区
  components: {},
  data() {
    return {
      items: [],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: null,
      selectedAreaData: {},
    };
  },
  created() {
    this.queryAreaData();
  },
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
        if(!this.selectedAreaData.text) {
          this.$toast('选择地区');
          return;
        }
        this.$store.dispatch('setPersonalInfoArea',this.selectedAreaData);
        this.$router.go("-1");
        // this.$router.push({
        //     path: '/register/personalInfo',
        //     query: {
                
        //     }
        // })
    },
    /**
     * 点击左侧导航时触发
     */
    onClickNav(index) {
      this.mainActiveIndex = index;
    },
    /**
     * 点击右侧选择项时触发
     */
    onSelectArea(data) {
        // console.log(data);
      this.selectedAreaData = data;
      this.activeId = data.id;
    },
    /**
     * 获取地区
     */
    queryAreaData() {
      var _this = this;
      let params= {};
      queryArea(params).then((res) => {
        if(res.data.status == 10000) {
          // console.log(res.data.data);
          var temp = JSON.stringify(res.data.data);
          _this.items = _this.recursionData(temp);
        }else {
            _this.$toast(res.data.data);
        }
      })
    },
    /**
     * 递归处理数据结构
     */
    recursionData(data) {
      // console.log(JSON.parse(data));
      var recursionData = JSON.parse(data);
      function recursion(recursionData) {
        recursionData.forEach(item => {
          item.text = item.areaName;
          item.children = item.childLists;
          delete item.childLists;
          if (item.children.length === 0) {
            // delete item.children;
          } else {
            recursion(item.children)
          }
        })
      }
      recursion(recursionData);
      return recursionData;
    }
  }
};
</script>

<style lang="less" scoped>
.area_box {
  width: 100%;
  background-color: #fff;
  .van-nav-bar__title {
    max-width: none;
  }
  .area_main {
    text-align: left;
    height: calc(100vh - 46px);
    .van-tree-select {
        height: 100% !important;
        .van-tree-select__nav {
            background-color: #fff;
            text-align: center;
            .van-tree-select__nav-item {
                border-bottom: 1px solid #f5f5f5;
            }
            .van-tree-select__nav-item--active {
                background-color: #F6F9FF;
                color: #6692FF;
                text-align: center;
                border: 0px;
            }
        }
        .van-tree-select__content {
            background-color: #F6F9FF;
            color: #666;
            text-align: center;
            .van-tree-select__item--active {
                color: #6692FF;
            }
            .van-icon, .van-icon::before {
                display: none;
            }
        }
    }
  }
}
</style>
