<template>
  <div class="exchange">
    <!-- 主体 -->
    <div class="mainBox">
      <div class="media_box">
        <van-row @click.native="lookDetails(item.newsId)" v-for="item in listData" :key="item.articleId">
          <van-col span="6">
            <van-image width="70px" height="70px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="18">
            <div class="media_title ellipsis">{{item.title}}</div>
            <div class="media_details ellipsis_two">{{item.context}}</div>
            <div class="media_company">{{item.source}}</div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getNewsList } from '@/config/musicSharing'
export default {
  name: "exchange", //乐分享---之汇
  data() {
    return {
      listData:[]
    };
  },
  methods: {
    getList() { // 获取列表
    let params = {
        'pageNum':1,
        'pageSize':10
      }
      getNewsList(params).then((res) => {
        console.log(res)
        if(res.data.status == 10000) {
          this.listData = res.data.data.list;
          console.log(this.listData)
          console.log("请求成功")
        } else {
          console.log("请求失败")
        }
      });
    },
    lookDetails(id) { // 跳转详情
      this.$router.push({
        name:'lookDetails',
        params:{
          detaId:id
        }
      });
    }
  },
  created() {
    this.getList();
  },
};
</script>

<style lang="less" scoped>
.exchange {
  background-color: #fff;
  .mainBox {
    height: calc(100vh - 44px);
    text-align: left;
    .media_box {
      box-sizing: border-box;
      margin-bottom: 60px;
      .van-row {
        border-bottom: 4px solid #f5f5f5;
        .van-col {
          padding: 20px;
          .media_title {
            font-size: 18px;
            color: #333;
            font-weight: 500;
          }
          .media_details {
            font-size: 14px;
            color: #666;
            line-height: 24px;
            margin: 10px 0px 8px;
          }
          .media_company {
            font-size: 10px;
            color: #bababa;
          }
        }
      }
    }
  }
}
</style>
