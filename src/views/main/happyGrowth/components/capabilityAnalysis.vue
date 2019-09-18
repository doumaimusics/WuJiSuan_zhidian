<template>
  <div class="capabilityAnalysis">
    <!-- 导航栏 -->
    <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" />
    <!-- 能力分析 -->
    <div class="main_box">
      <div class="model">
        <div id="myChart" ref="myChart" style="width: 100%;height: 300px;"></div>
        <div class="tip">
          注：<span>-</span>为岗位能力要求标准
        </div>
      </div>
      <div class="different" v-if="listData.length != 0">
        <div id="myChartDifferent" style="width: 100%;height: 300px;"></div>
        <div class="tip special">
          注：<span>-</span>为岗位能力要求标准
        </div>
        <div class="last_tip">
          注：<span>-</span>为您的能力要求标准
        </div>
        <van-button type="info" size="large" round class="look_btn" @click="complete">完成</van-button>
        <!-- <div class="jump_box">
            <span class="jump" @click="jump">跳过</span>
        </div> -->
      </div>
      <div class="different_hodel" v-else>
        <div class="title">岗位能力差异</div>
        <div class="hodel_tip" @click="goEvaluation">还未获得您的能力数据，点击此处去测评～</div>
      </div>
      
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import { getEvaluation } from '@/config/happyGrowth'
// 引入legend模块
require("echarts/lib/component/legend");
export default {
  name: "capabilityAnalysis", //悦成长---能力分析
  data() {
    return {
        listData:[],   // 初始化数据
        getListData:[],  // 转换后的数据
        pichat:{}
    };
  },

  mounted() {
    // console.log(this.$store.getters.isShowDifferentEcharts);
    window.onresize = function() {
      myChart.resize();
    };
    this.pichat = echarts.init(this.$refs.myChart);
    this.initPie(); //初始化雷达图---岗位能力模型

    // if(!this.showDifferentEcharts) {
    //   return;
    // }
    // let myChartDifferent = echarts.init(
    //   document.getElementById("myChartDifferent")
    // );
    // this.initDifferentRadar(myChartDifferent); //初始化雷达图---岗位能力差异
  },
  
  methods: {
    getEval(){    // 初始化接口
      getEvaluation({}).then((res) => {
          console.log(res)
          if(res.data.status == 10000) {
              this.listData = res.data.data;
              let len = this.listData.length;
              for(var i = 0; i < len; i++){
                  this.getListData.push({
                      'name':this.listData[i].numberName,
                      'max':this.listData[i].fraction
                  })
              }
              this.pichat.setOption({
                radar:{indicator:this.getListData}
              })
          }
      })
    },
    
    goBack() {   //返回上一页
      this.$router.go("-1");
    },
    
    initPie() {   //初始化雷达图---岗位能力模型
      let name = this.pichat;
      name.setOption({
        title: {
          text: "岗位能力模型",
          textStyle: {
            color: "#666",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: 'Microsoft YaHei'
          }
        },
        tooltip: {
          trigger: "axis"
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#333"
            }
          },
          splitArea: {
            areaStyle: {
              color: [
                "rgba(224, 225, 245, 1)",
                "rgba(199, 202, 237, 1)",
                "rgba(180, 182, 231, 1)",
                "rgba(180, 182, 231, 1)"
              ]
            }
          },
          center: ["50%", "60%"],
          indicator: this.getListData,
        },
        series: [
          {
            name: "岗位能力模型",
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            itemStyle: {
              color: "#6692FF"
            },
            areaStyle: {
              normal: {
                color: "#fff"
              }
            },
            data: [
              {
                value: [],
                name: "岗位能力模型",
                symbol: "rect",
                lineStyle: {
                  color: "#6692FF"
                }
              }
            ]
          }
        ]
      });
      // this.setRadarData(name);//初始化数据
    },
   
    setRadarData(name) {}, //设置雷达图数据---岗位能力模型
    
    initDifferentRadar(name) {  //初始化雷达图---岗位能力差异
      name.setOption({
        title: {
          text: "岗位能力差异",
          textStyle: {
            color: "#666",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: 'Microsoft YaHei'
          }
        },
        tooltip: {
          trigger: "axis"
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#333"
            }
          },
          indicator: [
            { name: "销售", max: 6500 },
            { name: "管理", max: 16000 },
            { name: "信息技术", max: 30000 },
            { name: "客服", max: 38000 },
            { name: "研发", max: 52000 },
            { name: "市场", max: 25000 }
          ],
          splitArea: {
            areaStyle: {
              color: [
                "rgba(224, 225, 245, 1)",
                "rgba(199, 202, 237, 1)",
                "rgba(180, 182, 231, 1)",
                "rgba(180, 182, 231, 1)"
              ]
            }
          },
          center: ["50%", "60%"]
        },
        series: [
          {
            name: "岗位能力模型",
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            itemStyle: {
              color: "#6692FF"
            },
            areaStyle: {
              normal: {
                color: "rgba(102, 146, 255, .5)"
              }
            },
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "岗位能力模型",
                symbol: "rect",
                lineStyle: {
                  color: "#6692FF"
                }
              }
            ]
          },
          {
            name: "岗位能力模型",
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            itemStyle: {
              color: "#FBA9F4"
            },
            areaStyle: {
              normal: {
                color: "rgba(251, 169, 244, .5)"
              }
            },
            data: [
              {
                value: [4300, 8888, 25000, 15000, 6000, 1900],
                name: "岗位能力差异",
                symbol: "rect",
                lineStyle: {
                  color: "#FBA9F4"
                }
              }
            ]
          }
        ]
      });
      // this.setDefferentRadarData(name);//初始化数据
    },
    
    setDefferentRadarData(name) {}, //设置雷达图数据---岗位能力差异
    
    goEvaluation() {   //测评
      this.$router.push({
          path: '/happyGrowth/evaluation',
          query: {
          }
      })
    },
    
    complete() {   //完成
      this.$router.push({
          path: '/main/happyGrowth',
          query: {
          }
      })
    },
    //跳过
    jump() {

    }
  },
 

  created () {
      this.getEval();
  },
  
  watch: {
    // showDifferentEcharts(newVal,oldVal) {
    //   console.log(newVal);
    //   this.showDifferentEcharts = newVal;
    // }
    $route(){
      console.log(this.$route.query.isShow)
    }
  }
};
</script>

<style lang="less" scoped>
.capabilityAnalysis {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .van-nav-bar__title {
    max-width: none;
  }
  .main_box {
    text-align: left;
    box-sizing: border-box;
    height: calc(100vh - 46px);
    padding: 20px 20px 0 20px;
    .tip {
      font-size: 10px;
      color: #333;
      text-align: center;
      margin-top: 24px;
      margin-bottom: 36px;
      span {
        color: #6692ff;
      }
    }
    .special {
      margin-bottom: 0px;
    }
    .last_tip {
      font-size: 10px;
      color: #333;
      text-align: center;
      margin-top: 4px;
      span {
        color: #fba9f4;
      }
    }
    .look_btn {
      margin: 30px 0px 10px;
    }
    .jump_box {
        text-align: center;
        margin-bottom: 20px;
        .jump {
            font-size:14px;
            color: #6692FF;
            text-decoration: underline;
        }
    }
    .different_hodel {
        .title {
            font-size:14px;
            color: #666;
        }
        .hodel_tip {
            font-size:12px;
            color: #6692FF;
            text-align: center;
            text-decoration: underline;
            margin-top: 20px;
        }
    }
  }
}
</style>
