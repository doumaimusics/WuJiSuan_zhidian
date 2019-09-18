<template>
  <div class="testQuestions">
    <!-- 卡特尔16PF测试 -->
    <div class="testQuestions_main">
      <van-divider>卡特尔16PF测试</van-divider>
      <!-- 题 -->
      <div class="test_uestion_box">
        <!-- {{itemDetail[itemNum-1].topic_num}} -->
        <div class="test_title" v-text="itemDetail[itemNum - 1].qualityEvaluation"></div>
        <div class="radio_box">
            <van-radio-group v-model="radio">
                <van-radio @click="selectItem(item.fraction)" :name="item.fraction" v-for="(item, index) in itemDetail[itemNum-1].answers" :key="index">{{item.name}}</van-radio>
            </van-radio-group>
        </div>
      </div>

      <!-- 上一题、下一题按钮 -->
      <div class="arrow_box clearfix" v-if="itemNum != itemDetail.length">
        <!-- <van-icon class="iconfont my-icon-fangxiangyuanjiantou-xiangzuo" @click="upperItem"/> -->
        <van-icon class="iconfont my-icon-fangxiangyuanjiantou-xiangyou" @click="nextItem"/>
      </div>

      <!-- 提交按钮 -->
       <van-button type="info" size="large" class="test_btn" round @click="submit" v-if="itemNum == itemDetail.length">提交</van-button>
    </div>
  </div>
</template>

<script>
import { getQualityLibrary,saveEvaluationResult } from '@/config/happyGrowth'
export default {
  name: "testQuestions", //悦成长---卡特尔16PF测试
  data() {
    return {
        radio: null,    // 选择答案的索引  
        fraction:null, //选中每一项的答案
        subjectId:'',
        itemDetail:[{ // 题目列表
          id:null,
          qualityEvaluation:'',   // 题目标题
          answers:[],  // 选项列表
        }],   
        itemNum:1,   // 第几题 
        answerid:[], // 答案，最后传给后端的
    };
  },
  methods: {
    getAnswerList(){   // 获取题目列表
        getQualityLibrary({}).then((res) => {
            this.itemDetail = res.data.data;
        })
    },
    selectItem(fraction){
      this.fraction = fraction;   // 答案
    },
    nextItem(){   // 点击下一题
        if(this.radio != null) {
            this.radio = null;
            this.answerid.push({   // 将答案追加到数组中
                id:this.itemDetail[this.itemNum - 1].id,
                fraction:this.fraction
            })
            if(this.itemNum < this.itemDetail.length){   // 判断是否是最后一题
                this.itemNum += 1;   // 题目+1
            } else {
                this.$toast("已经是最后一题了哦！！！");
            }
        } else {
            this.$toast("您还没有选择答案哦！！！");
        }
    },
    upperItem(){   // 点击上一页
        if(this.itemNum != 1) {
            this.itemNum -= 1;
            this.radio = this.radio;
        } else {
            this.$toast("已经是第一页，前面没有了！！！")
        }
    },
    //提交
    submit() {
      if(this.radio != null){
          this.answerid.push({   // 将答案追加到数组中
              id:this.itemDetail[this.itemNum - 1].id,
              fraction:this.fraction
          })
          saveEvaluationResult({
              answerDtoList:this.answerid
          }).then((res) => {
              if(res.data.status == 10000){
                this.$router.push({
                    name:'capabilityAnalysis'
                })
              } else {
                this.$toast(res.data.data)
              }
          })
      } else {
          this.$toast("请选择最后一项的答案！！！")
      }
        
    }
  },
  created() {
        this.getAnswerList();
  },
};
</script>

<style lang="less" scoped>
.testQuestions {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .testQuestions_main {
    text-align: left;
    height: calc(100vh - 46px);
    padding: 40px 30px;
    .van-divider {
        font-size:16px;
        color: #666;
        font-weight:500;
        margin-bottom: 50px;
    }
    .arrow_box {
        margin-bottom: 10px;
        padding: 0 20px;
        .iconfont {
            font-size: 26px;
            color: #6692FF;
            margin-top: 20px;
        }
        .my-icon-fangxiangyuanjiantou-xiangyou {
            float: right;
        }
    }
    .test_uestion_box {
        .test_title {
            font-size:16px;
            font-weight:500;
            color: #333;
            text-align: center;

        }
        .radio_box {
            margin: 30px 0px 50px;
            padding-left: 45px;
            .van-radio-group {
                .van-radio {
                    font-size:14px;
                    color: #333;
                    margin-bottom: 30px;
                }
            }
        }
    }
  }
}
</style>
