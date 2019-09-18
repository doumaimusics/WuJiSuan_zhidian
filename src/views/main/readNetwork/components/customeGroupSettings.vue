<template>
  <div class="customeGroupSettings_box">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="this.$store.getters.navBarTitle"
      left-arrow
      right-text="完成"
      @click-left="goBack"
      @click-right="onClickRight"
      class="nav_bar"
    />
    <!-- 自定义分组 -->
    <div class="area_main">
      <div class="add_box">
        <van-cell title="单元格" icon="add-o" @click="show = !show"/>
      </div>
      <div class="group_box">
        <van-swipe-cell>
          <van-cell is-link>
            <!-- <van-icon slot="icon" name="delete" style="line-height: inherit;" /> -->
            <template slot="title">
              <span class="custom-title">雾计算（321）</span>
            </template>
            <van-icon slot="right-icon" name="wap-nav" style="line-height: inherit;margin-right: 10px;" />
          </van-cell>
          <template slot="right">
            <van-button square type="danger" text="删除" size="small"/>
          </template>
        </van-swipe-cell>
        <van-swipe-cell>
          <van-cell is-link>
            <!-- <van-icon slot="icon" name="delete" style="line-height: inherit;" /> -->
            <template slot="title">
              <span class="custom-title">雾计算（321）</span>
            </template>
            <van-icon slot="right-icon" name="wap-nav" style="line-height: inherit;margin-right: 10px;" />
          </van-cell>
          <template slot="right">
            <van-button square type="danger" text="删除" size="small"/>
          </template>
        </van-swipe-cell>
        <van-swipe-cell>
          <van-cell is-link>
            <!-- <van-icon slot="icon" name="delete" style="line-height: inherit;" /> -->
            <template slot="title">
              <span class="custom-title">雾计算（321）</span>
            </template>
            <van-icon slot="right-icon" name="wap-nav" style="line-height: inherit;margin-right: 10px;" />
          </van-cell>
          <template slot="right">
            <van-button square type="danger" text="删除" size="small"/>
          </template>
        </van-swipe-cell>
        <van-swipe-cell>
          <van-cell is-link>
            <!-- <van-icon slot="icon" name="delete" style="line-height: inherit;" /> -->
            <template slot="title">
              <span class="custom-title">雾计算（321）</span>
            </template>
            <van-icon slot="right-icon" name="wap-nav" style="line-height: inherit;margin-right: 10px;" />
          </van-cell>
          <template slot="right">
            <van-button square type="danger" text="删除" size="small"/>
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <van-dialog
      v-model="show"
      title="添加分组"
      show-cancel-button
      @confirm="submit"
      @cancel="cancel"
    >
      <van-field v-model="groupName" placeholder="请输入新的分组名" />
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: "customeGroupSettings", //自定义分组---分组设置
  components: {},
  data() {
    return {
      show: false,
      groupName: '',
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
        path: "/readNetwork/customeGroups",
        query: {}
      });
    },
    /**
     * 取消搜索
     */
    onCancel() {
      this.searchVal = "";
    },
    /**
     *点击确认按钮时触发
     */
     submit() {
       console.log(1111)
     },
    /**
     *点击取消按钮时触发
     */
     cancel() {
       console.log(2222)
     }
  }
};
</script>

<style lang="less" scoped>
.customeGroupSettings_box {
  width: 100%;
  background-color: #fff;
  .nav_bar {
    background: linear-gradient(#66adff, #6692ff);
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }
    .van-nav-bar__right {
      .van-nav-bar__text {
        color: #fff;
      }
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
    .add_box {
      .van-cell {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #6692FF;
        font-weight:500;
        padding-left: 20px;
        border-bottom: 1px solid #ebedf0;
        .van-cell__left-icon {
          position: relative;
          top: 6px;
        }
      }
    }
    .van-swipe-cell {
      .van-cell {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #666;
        padding-left: 20px;
        .custom-title {
          margin-left: 6px;
        }
      }
      .van-swipe-cell__right,.van-swipe-cell__left {
        .van-button {
          height: 40px;
          line-height: 40px;
          top: -12px;
        }
      }
    }
  }
  .van-dialog {
    .van-field {
      /deep/ .van-field__body {
        padding: 10px;
      }
    }
  }
}
</style>
