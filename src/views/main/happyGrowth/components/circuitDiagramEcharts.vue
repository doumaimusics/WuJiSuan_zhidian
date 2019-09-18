<template>
    <div class="circuitDiagramEcharts">
        <div id="myChart" style="width: 95%;height: 500px;" @click="lookExperienceDetails"></div>
        <div class="add_box">
            <van-icon name="add-o" @click="showPopup"/>
        </div>
        <div class="select_add">
            <van-popup v-model="showSelectItem" round>
                <ul>
                    <li @click="addExperience">补充工作经历</li>
                    <li @click="addTarget">补充工作目标</li>
                </ul>
            </van-popup>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import echarts from 'echarts';
// 引入legend模块
require("echarts/lib/component/legend");
import { queryHappyGrouthEcharts } from '@/config/happyGrowth'
export default {
    name: 'circuitDiagramEcharts',//悦成长---线路图
    data () {
        return {
            showSelectItem: false,
            
        }
    },
    components: {
        
    },
    mounted() {
        window.onresize = function() {
            myChart.resize();
        };
        let myChart = echarts.init(
            document.getElementById("myChart")
        );
        this.initLine(myChart);//初始化折线图
    },
    created() {
        console.log(this.token)
    },
    methods: {
        /**
         * 初始化折线图
         */
        initLine(name) {
            name.setOption({
                grid: {//grid 组件离容器的距离
                    left: '15%',
                    top: 50,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['平均','我'],
                    orient: 'vertical',
                    left: '120',
                    textStyle:{
                        color: '#666666',
                        fontSize : '14'
                    },
                    formatter: function(name) {
                        // console.log(name);
                        return name
                    }
                },
                xAxis: {
                    type: 'category',
                    name : 'T',
                    boundaryGap: false,//坐标轴两边是否留白
                    data: ['2019', '2022', '2025', '2028']
                },
                yAxis: {
                    type: 'value',
                    name : 'K',
                },
                series: [
                    {
                        name:'我',
                        data: [820, 932, 901, 2500],
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: '#6692FF'
                            }
                        },
                        stack: 'a',
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFFFFF'
                                }, {
                                    offset: .4,
                                    color: '#E9EBFA'
                                }, {
                                    offset: 1,
                                    color: '#C6DFFA'
                                }])
                            }
                        },
                    },
                    {
                        name:'平均',
                        data: [334, 950, 500, 1320],
                        type:'line',
                        smooth:true,
                        stack: 'a',
                        symbol: 'circle',
                        symbolSize: 5,
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: '#F0BFED'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#F0BFED'
                                }, {
                                    offset: .5,
                                    color: '#FCF3FC'
                                }, {
                                    offset: 1,
                                    color: '#FEFBFE'
                                }])
                            }
                        },
                    }
                ]
            });
        this.setLineData(name);//初始化数据
        },
        /**
         * 设置折线图数据
         */
        setLineData(name) {
            let params= {};
            queryHappyGrouthEcharts(params).then((res) => {
                if(res.data.status == 10000) {
                    console.log(res.data.data);
                }else {
                    this.$toast(res.data.data);
                }
            })
        },
        /**
         * 展示弹窗
         */
        showPopup() {
            this.showSelectItem = true;
        },
        /**
         * 补充工作经历
         */
        addExperience() {
            this.$router.push({
                path: '/happyGrowth/addExperience',
                query: {
                }
            })
        },
        /**
         * 补充工作目标
         */
        addTarget() {
            this.$router.push({
                path: '/happyGrowth/addTarget',
                query: {
                }
            })
        },
        /**
         * 查看经历详情
         */
        lookExperienceDetails() {
            this.$router.push({
                path: '/happyGrowth/lookExperienceDetails',
                query: {
                }
            })
        }
    },
    computed: {
        ...mapGetters([
            'token',
            'userName',
        ])
    }
}
</script>

<style lang="less" scoped>
.circuitDiagramEcharts {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    .add_box {
        text-align: right;
        margin-top: -30px;
        .van-icon {
            margin-right: 15px;
            color: #6692FF;
        }
    }
    .select_add {
        .van-popup {
            width: 80%;
        }
        ul {
            li {
                font-size:12px;
                color: #666;
                line-height: 50px;
                text-align: center;
            }
            li:first-child {
                border-bottom: 2px solid #F5F5F5;
            }
        }
    }
}
</style>
