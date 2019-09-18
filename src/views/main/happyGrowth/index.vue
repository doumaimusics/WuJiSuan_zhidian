<template>
    <div class="happyGrowth">
        <!-- 主体 -->
        <div class="mainBox">
            <van-tabs v-model="active" title-active-color="#333" title-inactive-color="#666">
                <van-tab title="线路图">
                    <CircuitDiagramEcharts v-if="isShowLineEchart"/>
                    <div class="img_holder" v-else @click="showPopup">
                        <van-icon name="lock" />
                        <div class="tip">补充信息查看我的线路图</div>
                    </div>
                </van-tab>
                <van-tab title="积跬步">
                    <div class="silicon_box">
                        <van-row>
                            <van-col span="6">
                                <div class="bgb zheye">
                                    <van-icon class="iconfont my-icon-zhiyeguihua" />
                                    <div>职业规划</div>
                                </div>
                            </van-col>
                            <van-col span="6">
                                <div class="bgb ceping">
                                    <van-icon class="iconfont my-icon-zhuanyecepingbaogaon" />
                                    <div>我的测评</div>
                                </div>
                            </van-col>
                            <van-col span="6">
                                <div class="bgb jisuanji">
                                    <van-icon class="iconfont my-icon-jisuanqi" />
                                    <div>薪酬计算器</div>
                                </div>
                            </van-col>
                            <van-col span="6">
                                <div class="bgb yaoqing">
                                    <van-icon class="iconfont my-icon-yaoqing" />
                                    <div>邀请好友</div>
                                </div>
                            </van-col>
                        </van-row>
                    </div>
                    <div class="media_box">
                        <van-row>
                            <van-col span="6">
                                <van-image
                                    width="70px"
                                    height="70px"
                                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                                />
                            </van-col>
                            <van-col span="18">
                                <div class="media_title ellipsis">5G商用牌照发放；联想官微更名…</div>
                                <div class="media_details ellipsis_two">6月3日消息，据新华社官方微博“新华视点”消息，近期，工业和信息化部将发放…</div>
                                <div class="media_company">杭州日报</div>
                            </van-col>
                        </van-row>
                        <van-row>
                            <van-col span="6">
                                <van-image
                                    width="70px"
                                    height="70px"
                                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                                />
                            </van-col>
                            <van-col span="18">
                                <div class="media_title ellipsis">5G商用牌照发放；联想官微更名…</div>
                                <div class="media_details ellipsis_two">6月3日消息，据新华社官方微博“新华视点”消息，近期，工业和信息化部将发放…</div>
                                <div class="media_company">杭州日报</div>
                            </van-col>
                        </van-row>
                        <div class="btn_box">
                            <van-button plain round type="info" size="large" class="more_btn">查看更多</van-button>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <!-- 补充弹窗 -->
        <div class="select_add">
            <van-popup v-model="showSelectItem" round>
                <ul>
                    <li @click="addExperience">补充工作经历</li>
                    <li @click="addTarget">补充工作目标</li>
                </ul>
            </van-popup>
        </div>
        <!-- Tabbar 标签栏 -->
        <tabBar :tabActive="tabActive" class="tabBar"></tabBar>
    </div>
</template>

<script>
import tabBar from '@/components/tabbar';
import CircuitDiagramEcharts from './components/circuitDiagramEcharts';
import { queryHappyGrouthEcharts } from '@/config/happyGrowth'
export default {
    name: 'happyGrowth',//悦成长
    data () {
        return {
            active: '',
            tabActive: 0,
            isShowLineEchart: false,
            showSelectItem: false,
        }
    },
    components: {
        tabBar,
        CircuitDiagramEcharts
    },
    mounted() {
        
    },
    created() {
        this.queryHappyGrouthData();
    },
    methods: {
        /**
         * 悦成长线路图
         */
        queryHappyGrouthData() {
            let params= {};
            queryHappyGrouthEcharts(params).then((res) => {
                if(res.data.status == 10000) {
                    console.log(res.data.data);
                    this.isShowLineEchart = true;
                }else {
                    this.isShowLineEchart = false;
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
    }
}
</script>

<style lang="less" scoped>
.happyGrowth {
    background-color: #fff;
    .mainBox {
        min-height: calc(100vh);
        text-align: left;
        padding-bottom: 50px;
        .van-tabs {
            /deep/ .van-tabs__wrap {
                width: 50%;
            }
            /deep/ .van-tab--active {
                font-weight: 500;
            }
            /deep/ .van-tabs__line {
                background-color: #6692FF;
            }
            /deep/ .van-hairline--top-bottom::after {
                border-width: 0;
            }
        }
        .img_holder {
            height: calc(100vh - 56px);
            text-align: center;
            .van-icon {
                margin-top: 70%;
                color: #6692FF;
            }
            .tip {
                font-size:12px;
                color: #333;
            }
        }
        .silicon_box {
            width: 100%;
            height: 300px;
            background: url('../../../assets/images/wechatbg.jpeg') no-repeat center bottom;
            position: relative;
            .van-row {
                position: absolute;
                width: 100%;
                bottom: 40px;
                .van-col {
                    text-align: center;
                    .bgb {
                        margin: 0 auto;
                        width: 50px;
                        height: 50px;
                        line-height: 50px;
                        border-radius: 50%;
                        font-size: 28px;
                        color: #fff;
                        position: relative;
                    }
                    .zheye {
                        background-color: #527FF0;
                        >div {
                            position: absolute;
                            top: 20px;
                            z-index: 999;
                            font-size: 12px;
                            font-weight:600;
                            color: #fff;
                        }
                    }
                    .ceping {
                        background-color: #F99E33;
                        >div {
                            position: absolute;
                            top: 20px;
                            z-index: 999;
                            font-size: 12px;
                            font-weight:600;
                            color: #fff;
                        }
                    }
                    .jisuanji {
                        background-color: #8CCB46;
                        >div {
                            position: absolute;
                            top: 20px;
                            left: -10px;
                            z-index: 999;
                            font-size: 12px;
                            font-weight:600;
                            color: #fff;
                        }
                    }
                    .yaoqing {
                        background-color: #FA7B63;
                        >div {
                            position: absolute;
                            top: 20px;
                            z-index: 999;
                            font-size: 12px;
                            font-weight:600;
                            color: #fff;
                        }
                    }
                }
            }
        }
        .media_box {
            box-sizing: border-box;
            .van-row {
                border-bottom: 4px solid #F5F5F5;
                .van-col {
                    padding: 20px;
                    .media_title {
                        font-size:18px;
                        color: #333;
                        font-weight:500;
                    }
                    .media_details {
                        font-size:14px;
                        color: #666;
                        line-height: 24px;
                        margin: 10px 0px 8px;
                    }
                    .media_company {
                        font-size:10px;
                        color: #BABABA;
                    }
                }
            }
            .btn_box {
                text-align: center;
                .more_btn {
                    width: 80%;
                }
            }
        }
    }
    .tabBar {
        position: fixed;
        bottom: 0px;
    }
    .ellipsis {
        text-overflow: ellipsis; /*文字以省略号的方式隐藏*/
        white-space: nowrap;/*禁止文字内容折行*/
        overflow: hidden;/*超出部分溢出隐藏*/
    }
    .ellipsis_two {
        display: -webkit-box; /* 弹性盒模型*/
        -webkit-box-orient: vertical; /* 文字垂直排列 */
        -webkit-line-clamp:2; /*文字显示的行数*/
        overflow: hidden; /*超出部分溢出隐藏*/
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
