<template>
    <div class="main">
        <!--资料进度条-->
        <div class="bar-box">
            <div class="progress-box">
                <div class="title-box">
                    <h3>资料完善度</h3>
                    <p class="percentage">50%</p>
                </div>
                <div class="progress">
                    <van-progress :percentage="50" color="#6692FF" :show-pivot="false"/>
                </div>
            </div>
        </div> 

        <!--tab-->
        <div class="tab-box">
            <van-row class="user-links">
                <van-col span="8">
                    <div class="number">{{dynamicNum}}</div>
                    <div class="text">动态</div>
                </van-col>
                <van-col class="999" span="8">
                    <div  @click="toLookFriendGroup">
                        <div class="number">{{friendNum}}</div>
                        <div class="text">好友</div>
                    </div>
                    
                </van-col>
                <van-col span="8">
                    <div class="number">
                        {{visitorNum}}
                        <!-- <span class="add-num">+2</span> -->
                    </div>
                    <div class="text">访客</div>
                </van-col>
            </van-row>
        </div>

        <!--列表-->
        <div class="list-box">
            <van-cell-group>
                <van-cell icon="points" title="会员中心" is-link :to="{name:'membershipCenter'}"/>
                <van-cell icon="gold-coin-o" title="成为认证用户" :to="{name:'userAuthentication'}" is-link />
                <van-cell icon="gift-o" title="我的职业经纪人" is-link />
                <van-cell icon="gift-o" title="我的钱包" is-link />
                <van-cell icon="gift-o" title="薪酬计算器" is-link :to="{name:'payCalculator'}"/>
                <van-cell icon="gift-o" title="我的测评" is-link :to="{name:'myAssessment'}"/>
                <van-cell icon="gift-o" title="职业规划报告" is-link :to="{name:'careerPlanningReport'}"/>
                <van-cell icon="gift-o" title="邀请好友" is-link :to="{name:'friendInvitation'}"/>
                <van-cell icon="gift-o" title="设置" is-link :to="{name:'setUp'}"/>
            </van-cell-group>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:["dynamicNum","friendNum","visitorNum"],   // 动态，好友，访客
    methods:{
        toLookFriendGroup(){   // 跳转好友列表
            this.$router.push({
                name:'lookFriendGroup'
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .main{
        background: #fff;
        text-align: left;
        .bar-box{
            padding: 12px 14px 0px;
            font-size: 14px;
            .title-box{
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
            }
            .progress-box{
                border-bottom: 1px solid #f5f5f5;
                padding-bottom: 17px;
            }
            .progress{
                height: 6px;
                background: #fff;
            }
        }
        .tab-box{
            border-bottom: 4px solid #F5F5F5;
            padding: 14px 0;
            .user-links{
                display: flex;
                justify-content: space-around;
                .van-col{
                    div{
                        text-align: center;
                    }
                    .number{
                        font-size: 16px;
                        color: #333;
                        position: relative;
                        .add-num{
                            font-size: 10px;
                            color: #FB7373;
                            position: absolute;
                            top: 0;
                            right: 35px;
                        }
                    }
                    .text{
                        color: #999;
                        font-size: 12px;
                    }
                }
            }
        }
        .list-box{
            padding-left: 29px;
            margin-bottom: 50px;
                .van-cell{
                    padding: 15px 13px 15px 0;
                    font-size: 14px;
                    background-color: #fff;
                }
            
        }
    }
</style>