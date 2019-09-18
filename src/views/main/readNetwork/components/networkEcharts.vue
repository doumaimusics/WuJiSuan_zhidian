<template>
    <div class="networkEcharts">
        <div id="myChart" style="width: 95%;height: 400px;" @click="lookAllFriend"></div>
        <ul class="label_box">
            <li>地区</li>
            <li>公司</li>
            <li>职位</li>
            <li>
                <van-icon name="add-o" />
            </li>
        </ul>
    </div>
</template>

<script>
import echarts from "echarts";
import { getGroupHome } from "@/config/readNetwork";
export default {
    name: "networkEcharts", //阅人脉---图谱
    data() {
        return {
            listDate: [],   // 初始化数据
            getListDate: [],   // 转换后的数据
            pichat: {}
        };
    },
    mounted() {
        window.onresize = function() {
            myChart.resize();
        };
        this.pichat = echarts.init(document.getElementById("myChart"));
        this.initPie(); //初始化饼图
    },

    methods: {
        //初始化饼图
        initPie() {
            let name = this.pichat;
            name.setOption({
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [
                    {
                        name: "好友",
                        type: "pie",
                        radius: ["40%", "70%"],
                        center: ["50%", "60%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                position: "inner"
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: "20",
                                    fontWeight: "bold"
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: this.getListDate
                    }
                ]
            });
            name.on("click", this.handlePieClick);
        },

        gitList() {
            // 列表数据
            getGroupHome({}).then(res => {
                if (res.data.status == 10000) {
                    this.listDate = res.data.data;
                    for (var i = 0; i < this.listDate.length; i++) {
                        this.getListDate.push({
                            name: this.listDate[i].groupName,
                            value: this.listDate[i].userNum
                        });
                    }
                    this.pichat.setOption({
                        series: [{ data: this.getListDate }]
                    });
                }  else {
                    this.$toast(res.data.data);
                }
            });
        },

        //设置折线图数据
        setPieData(name) {},
        //查看全部好友
        lookAllFriend() {
            this.$router.push({
                path: "/readNetwork/allFriendGroups",
                query: {
                    n: 1
                }
            });
        },
        //饼图点击事件
        handlePieClick(param) {}
    },
    created() {
        this.gitList();
    }
};
</script>

<style lang="less" scoped>
.networkEcharts {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    position: relative;
    .label_box {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 9999;
        font-size: 12px;
        color: #666;
        padding-left: 28px;
        padding-top: 20px;
        li {
            float: left;
            margin-right: 25px;
            position: relative;
            &:not(:last-child) {
                &:before {
                    content: "";
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    position: absolute;
                    top: 4px;
                    left: -12px;
                    background-color: #6692ff;
                }
            }
            .van-icon {
                margin-top: 4px;
                margin-left: -10px;
            }
        }
    }
}
</style>
