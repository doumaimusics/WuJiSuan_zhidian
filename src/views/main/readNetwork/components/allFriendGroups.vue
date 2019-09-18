<template>
  <div class="allFriends_box">
    <!-- 导航栏 -->
    <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" class="nav_bar"/>
    <!-- 全部好友分组 -->
    <div class="area_main">
      <div class="search_box">
        <form action="/">
          <van-search
            v-model="searchVal"
            placeholder="搜索分组"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </div>
      <div class="search_cont">
        <van-cell title="全部好友" is-link :value="listData.friendNum" to="/readNetwork/allFriendsList"/>
        <div class="friend_catgory">
            <div class="catgory_title">
                <span class="name">自定义分组</span>
                <span class="more" @click="lookCustomeGroups">更多</span>
            </div>
            <van-cell-group>
                <van-cell :title="item.groupName" is-link @click="lookFriendGroup(item.groupId,0)" v-for="(item,index) in listData.customize" :key="index"/>
            </van-cell-group>
        </div>
        <div class="friend_catgory">
            <div class="catgory_title">
                <span class="name">公司</span>
                <span class="more">更多</span>
            </div>
            <van-cell-group>
                <van-cell :title="item.groupName" is-link @click="lookFriendGroup(item.groupId,2)" v-for="(item,index) in listData.company" :key="index"/>
            </van-cell-group>
        </div>
        <div class="friend_catgory">
            <div class="catgory_title">
                <span class="name">学校</span>
                <span class="more">更多</span>
            </div>
            <van-cell-group>
                <van-cell :title="item.groupName" is-link @click="lookFriendGroup(item.groupId,3)" v-for="(item,index) in listData.school" :key="index"/>                
            </van-cell-group>
        </div>
        <div class="friend_catgory">
            <div class="catgory_title">
                <span class="name">行业职能</span>
                <span class="more">更多</span>
            </div>
            <van-cell-group>
                <van-cell :title="item.groupName" is-link @click="lookFriendGroup(item.groupId,4)" v-for="(item,index) in listData.industry" :key="index"/>                
            </van-cell-group>
        </div>
         <!--<div class="friend_catgory">
            <div class="catgory_title">
                <span class="name">聊天时间</span>
                <span class="more">更多</span>
            </div>
            <van-cell-group>
                <van-cell title="雾计算（321）" is-link @click="lookFriendGroup"/>
                <van-cell title="雾计算（321）" is-link @click="lookFriendGroup"/>
            </van-cell-group>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getGroupList } from '@/config/readNetwork'
export default {
  name: "allFriendGroups", //全部好友分组
  components: {},
  data() {
    return {
      searchVal: "",
      listData:{}
    };
  },
  methods: {
    gitList(){    // 列表
      getGroupList({}).then((res) => {
        if(res.data.status == 10000){
          this.listData = res.data.data;
          console.log(this.listData)
        } else {
          this.$toast(res.data.data);
        }
      })
    },
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
     * 取消搜索
     */
    onCancel() {
      this.searchVal = "";
    },
    /**
     * 查看自定义分组
     */
    lookCustomeGroups() {
      this.$router.push({
          path: '/readNetwork/customeGroups',
          query: {
          }
      })
    },
    /**
     * 
     */
    lookFriendGroup(id,type) {
      this.$router.push({
          path: '/readNetwork/lookFriendGroup',
          query: {
            groupId:id,
            type:type
          }
      })
    }
  },
  created(){
    this.gitList();
  }
};
</script>

<style lang="less" scoped>
.allFriends_box {
  width: 100%;
  background-color: #fff;
  .nav_bar {
    background: linear-gradient(#66ADFF, #6692FF);
    .van-icon,.van-nav-bar__title {
        color: #fff;
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
        background: linear-gradient(#6692FF, #66ADFF) !important;
        .van-search__content {
          background-color: #fff;
          border-radius: 18px;
          text-align: center;
        }
        padding: 0 20px;
      }
    }
    .search_cont {
        .van-cell{
            height: 50px;
            line-height: 50px;
            font-size:12px;
            padding-left: 20px;
            padding-right: 15px;
            .van-icon-arrow {
                position: relative;
                top: 12px;
            }
        }
        .friend_catgory {
            .catgory_title {
                height: 50px;
                line-height: 50px;
                padding-left: 20px;
                .name {
                    font-size:16px;
                    color: #666;
                    font-weight: 500;
                    float: left;
                }
                .more {
                    font-size: 12px;
                    color: #6692FF;
                    float: right;
                    margin-right: 15px;
                }
            }
            .van-cell-group {
                .van-cell {
                    padding-left: 50px;
                }
            }
        }
    }
  }
}
</style>
