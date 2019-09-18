<template>
  <div class="customeGroups_box">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="this.$store.getters.navBarTitle"
      left-arrow
      @click-left="goBack"
      @click-right="onClickRight"
      class="nav_bar"
    >
      <van-icon name="setting-o" slot="right" />
    </van-nav-bar>
    <!-- 自定义分组 -->
    <div class="area_main">
      <div class="search_box">
        <form action="/">
          <van-search v-model="searchVal" placeholder="搜索分组" @search="onSearch" @cancel="onCancel" />
        </form>
      </div>
      <div class="search_cont">
        <van-cell-group>
          <van-cell v-for="(item,index) in list" :title="item.text" :key="index" is-link to />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "customeGroups", //自定义分组
  components: {},
  data() {
    return {
      searchVal: "",
      list: [
        {
          text: "杭州雾计算科技有限公司",
          id: 0
        },
        {
          text: "江苏雾计算科技有限公司",
          id: 1
        },
        {
          text: "南京雾计算科技有限公司",
          id: 2
        },
        {
          text: "上海雾计算科技有限公司",
          id: 3
        },
        {
          text: "北京雾计算科技有限公司",
          id: 4
        },
        {
          text: "郑州雾计算科技有限公司",
          id: 5
        }
      ]
    };
  },
  mounted() {},
  watch: {},
  methods: {
    /**
     *返回上一页
     */
    goBack() {
      this.$router.go("-1");
    },
    /**
     * 确定搜索
     */
    onSearch() {
      console.log(this.searchVal);
    },
    /**
     * 点击右侧按钮时触发
     */
    onClickRight() {
        this.$router.push({
            path: "/readNetwork/customeGroupSettings",
            query: {}
        });
    },
    /**
     * 取消搜索
     */
    onCancel() {
      this.searchVal = "";
    },
  }
};
</script>

<style lang="less" scoped>
.customeGroups_box {
  width: 100%;
  background-color: #fff;
  .nav_bar {
    background: linear-gradient(#66adff, #6692ff);
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }
    .van-icon-setting-o {
      font-size: 16px;
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
    height: calc(100vh - 46px);
    .search_box {
      border-bottom: 1px solid #f5f5f5;
      .van-search {
        height: 40px;
        line-height: 40px;
        background: linear-gradient(#6692ff, #66adff) !important;
        .van-search__content {
          background-color: #fff;
          border-radius: 18px;
          text-align: center;
        }
        padding: 0 20px;
      }
    }
    .search_cont {
      .van-cell-group {
        .van-cell {
          height: 40px;
          line-height: 40px;
          font-size: 12px;
          padding-left: 20px;
          .van-cell__right-icon {
            position: relative;
            top: 8px;
          }
        }
      }
    }
  }
}
</style>
