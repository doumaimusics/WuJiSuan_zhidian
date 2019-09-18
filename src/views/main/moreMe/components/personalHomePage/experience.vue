 <!-- 经历模块 -->
<template>
  <div class="experience_main">
    <div class="media_box">
      <!-- 标题 -->
      <div class="media_title">{{mediaTitle}}</div>
      <!-- 列表 -->
      <van-row v-for="(item,index) in experienceData" :key="index">
        <div @click="toExperienceDetails(1)">
          <van-col span="6">
            <van-image width="50" height="50" :src="item.headPortrait" />
          </van-col>
          <!-- 经历信息 -->
          <van-col span="18">
            <van-cell    is-link >
              <!-- 工作经历的标题 -->
               <template slot="title" v-if="mediaTitleType == 1">
                  <span class="custom-title">{{item.companyName}}</span>
              </template>
              <!-- 工作经历时间 -->
              <template v-if="mediaTitleType == 1">
                  <span class="custom-title" v-if="item.status == 2">
                    {{item.enterDate | dateFrm}} -- 今
                  </span>
                  <span class="custom-title" v-else>
                    {{item.enterDate | dateFrm}} -- {{item.leaveDate | dateFrm}}
                  </span>
              </template>
              <!-- 教育经历的标题 -->
               <template slot="title" v-if="mediaTitleType == 2">
                  <span class="custom-title">{{item.schoolName}}</span>
              </template>
              <!-- 教育经历时间 -->
               <template v-if="mediaTitleType == 2">
                  <span class="custom-title" v-if="item.status == 2">{{item.entryDate | dateFrm}} -- 今</span>
                  <span class="custom-title" v-else>{{item.entryDate | dateFrm}} -- {{item.graduationDate | dateFrm}}</span>
              </template>

              <!-- 详情 -->
              <van-icon v-if="isList==2"
               style="line-height: inherit;margin-left:10px;"
               slot="right-icon"
               class="iconfont my-icon-bianji" @click.stop="toAddExperience(mediaTitleType)"/>
            </van-cell>

            <!-- 教育经历下面的样式 -->
            <div class="position">
              {{item.discipline}}
              <span v-if="mediaTitleType == 2">| {{item.education}}</span>
            </div>
            <p class="desc" :class="{showClass:isList != 2}">{{item.workDesc}}</p>
          </van-col>
        </div>
      </van-row>
      <div class="btn_box" >
        <van-button
          plain
          round
          type="info"
          size="large"
          class="add_btn"
          @click="toAddExperience(mediaTitleType)"
        >{{btnText}}</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {};
  },
  methods: {
    toExperienceDetails() {  // 跳转详情页面
      this.$emit("toDetaile");
    },
    toAddExperience(n) {  // 点击按钮跳转对应多页面 n==1添加或编辑工作经历，n==2添加或编辑教育经历
      this.$emit("addExperience",n)
    }
  },
  props: [
    "mediaTitle", // 经历标题，字符串
    "experienceData", // 经历数据  数组
    "btnText", // 按钮文字  字符串
    "mediaTitleType", // 1工作经历，2教育经历
    "isList",  // 个人主页页面经历部分和经历详情页面经历部分页面样式基本一样，所以写出组建形式，通过传值来区分；1:个人主页页面经历部分，2：个人经历详情页面经历部分
  ],
  filters:{
    dateFrm:function(el){    //时间过滤器
        return moment(el).format("YYYY-MM");
    },
  }
};
</script>

<style lang="less" scoped>
.experience_main {
  text-align: left;
  box-sizing: border-box;
  border-bottom: 4px solid #f5f5ff;
  .media_box {
    border-bottom: 4px solid #f5f5f5;
    padding: 0px 10px 18px 10px;
    .media_title {
      font-size: 14px;
      color: #666;
      margin-top: 16px;
      position: relative;
      padding-left: 14px;
      &::before {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: rgba(102, 146, 255, 1);
        position: absolute;
        top: 8px;
        left: 0px;
      }
    }
    .van-row {
      border-bottom: 1px solid #f5f5f5;
      padding: 18px 0;
      .van-col--6 {
        text-align: center;
      }
      .van-col--18 {
        .van-cell {
          padding: 0;
          -webkit-tap-highlight-color:transparent;
          .van-cell__title {
            font-size: 14px;
            color: #333;
          }
          .van-cell__value {
            font-size: 10px;
            color: #999;
          }
        }
        .van-cell:not(:last-child)::after {
          border-bottom: 0px;
        }
        .position {
          font-size: 12px;
          color: #666;
          margin: 4px 0px 12px;
          span {
            margin-right: 12px;
          }
          .education {
            padding: 0 12px;
            border-left: 1px solid #666;
          }
        }
        .desc {
          font-size: 12px;
          color: #666;
          line-height: 14px;
          text-align: left;
        }
        .showClass{
          display: -webkit-box;
          -webkit-line-clamp: 3; //设置要显示几行
          overflow: hidden;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
      }
    }
    .van-row:nth-last-child(2) {
      border: none;
    }
    .btn_box {
      text-align: center;
      .add_btn {
        width: 260px;
        height: 46px;
      }
    }
  }
  .media_box:last-child {
    border-bottom: 0px;
  }
  .label_box {
    border-bottom: 4px solid #f5f5f5;
    padding-bottom: 16px;
    .label_cont {
      margin-bottom: 18px;
      .van-tag {
        display: inline-block;
        padding: 4px 10px;
        background: rgba(102, 146, 255, 0.1);
        margin: 0 6px;
      }
    }
  }
  .more_box {
    font-size: 12px;
    color: #999;
    .van-row:last-child {
      border-bottom: 0px;
    }
    .val {
      color: #333;
      margin-left: 24px;
    }
    .infor_box {
      padding-left: 18px;
    }
  }
}
</style>