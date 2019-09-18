<template>
    <div class="friendInvitation">
        <van-nav-bar :title="this.$store.getters.navBarTitle" @click-left="goBack" @click-right="onClickRight" left-arrow>
             <van-icon name="question-o" slot="right" />
        </van-nav-bar> 
        <div class="main_box">
            <!-- 立即邀请好友 -->
            <div class="cart_box">
                <div class="title_box">
                    <p class="first_p1">立即邀请好友</p>
                    <p class="first_p2">好友登录后，可得88算力/代币</p>
                </div>
                
                <div class="first_item">
                    <div class="item" @click="isShortPop = true">
                        <div class="icon_box"></div>
                        <p>短信邀请</p>
                    </div>
                    <div class="item">
                        <div class="icon_box"></div>
                        <p>微信邀请</p>
                    </div>
                    <div class="item">
                        <div class="icon_box"></div>
                        <p>二维码邀请</p>
                    </div>
                </div>
            </div>

            <!-- 3步得算力/代币 -->
            <div class="cart_box">
                <h3 class="cart_title">3步得算力/代币</h3>
                <van-row type="flex">
                    <div class="text_box">
                       <h3 class="cart_text_title">step1</h3>
                       <p>发送邀请给好友</p>
                    </div>
                    <div class="text_box">
                       <h3 class="cart_text_title">step2</h3>
                       <p>好友通过链接或<br/>二维码下载之点</p>
                    </div>
                    <div class="text_box">
                       <h3 class="cart_text_title">step3</h3>
                       <p>好友注册登录并<br/>完成实名认证</p>
                    </div>
                </van-row>
            </div>

            <!-- 邀请记录 -->
            <div class="cart_box">
                <h3 class="cart_title">邀请记录 <span>被邀请人完成实名认证才能获得邀请奖励</span></h3>
                <div class="list_box">
                    <div class="list_cent">
                       <div class="list_tile">
                           <div>日期</div>
                           <div>被邀请人手机号</div>
                           <div>是否完成实名认证</div>
                       </div>
                       <ul class="list">
                           <li>
                               <div>2019-9-10</div>
                               <div>15627372222</div>
                               <div>是</div>
                           </li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>   

        <!-- 短信邀请弹出框 -->
        <div class="shortMessagePop" v-show="isShortPop">
            <van-popup v-model="isShortPop">
                <h3>邀请通过短信发给你的好友</h3>
                <p>你的朋友“小鸡爪”给你送红包啦，快打开之点领取吧！</p>
                <div class="btn_box">
                    <span class="cancel" @click="isShortPop=false">取消</span>
                    <span class="confirm" @click="isShortPop = false">确认</span>
                </div>
            </van-popup>
        </div>           
    </div>
</template>

<script>
export default {
    name:"friendInvitation",
    data(){
        return{
            isShortPop:false,   // 短信邀请弹出框
        }
    },
    methods:{
        goBack(){
            this.$router.push({
                name:'moreMe'
            })
        },
        onClickRight(){   // 跳转活动规则
            this.$router.push({
                name:'activityRules'
            })
        }
    },

}
</script>

<style lang="less" scoped>
    .friendInvitation{
        text-align: left;
        box-sizing: border-box;
        .van-nav-bar__title{
            max-width: none;
            color: #666;
            font-size: 18px;
        }
        .van-icon{
            color: #666;
        }
        .main_box{
            padding: 170px 10px 0;
            background: url('../../../../assets/images/moreMe/01.png') no-repeat;
            background-size: 100% ;
            .cart_box{
                width: 100%;
                border-radius: 8px;
                background: #fff;
                box-shadow:  0 0 10px #ccc;
                margin-bottom: 12px;
                .title_box{
                    padding: 30px 0 0 16px;
                    margin-bottom: 16px;
                    .first_p1{
                        font-size: 10px;
                        color: #999;
                    }
                    .first_p2{
                        font-size: 12px;
                        color: #6692FF;
                    }
                }
                .first_item{
                    display: flex;
                    justify-content: space-around;
                    padding-bottom: 13px;
                    .item{
                        .icon_box{
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            margin: 0 auto 6px;
                        }
                        p{
                            font-size: 10px;
                            color: #666;
                        }
                    }
                    .item:nth-child(1) .icon_box{
                        background: url('../../../../assets/images/moreMe/02.png') no-repeat;
                        background-size: cover;
                    }
                    .item:nth-child(2) .icon_box{
                        background: url('../../../../assets/images/moreMe/03.png') no-repeat;
                        background-size: cover;
                    }
                    .item:nth-child(3) .icon_box{
                        background: url('../../../../assets/images/moreMe/04.png') no-repeat;
                        background-size: cover;
                    }
                }
                h3.cart_title{
                    font-size: 12px;
                    color: #333;
                    border-bottom: 1px solid #f5f5f5;
                    padding: 12px 0 5px 30px;
                    span{
                        font-size: 8px;
                        color: #bababa;
                        margin-left: 8px;
                    }
                }
                .van-row{
                    padding: 13px 10px;
                }
                .text_box{
                    flex-grow: 1;
                    font-size: 10px;
                    text-align: center;
                    h3.cart_text_title{
                        color: #6692FF;
                        margin-bottom: 6px;
                    }
                    p{
                        color: #666;
                    }
                }
                .list_box{
                    padding: 17px 12px 14px;
                    .list_cent{
                        border-radius: 8px;
                        background: #f4f7ff;
                        padding: 8px 0;
                        .list_tile{
                            display: flex;
                            margin-bottom: 7px;
                            div{
                                width: 33.33%;
                                text-align: center;
                                font-size: 10px;
                                color: #999;
                            }
                        }
                        .list{
                            li{
                                font-size: 12px;
                                color: #666;
                                display: flex;
                                margin-bottom: 6px;
                                div{
                                    width: 33.33%;
                                    text-align: center;
                                }

                            }
                        }
                    }
                }
            }
        }
        .shortMessagePop{
            .van-popup{
                width: 300px;
                height: 160px;
                background: #fff;
                border-radius: 4px;
                padding-bottom: 20px;
                h3{
                    font-size: 18px;
                    color: #333;
                    text-align: center;
                    padding-top: 20px;
                    margin-bottom: 18px;
                }
                p{
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 23px;
                    padding: 0 30px;
                }
                .btn_box{
                    text-align: right;
                    padding-right: 30px;
                    span{
                        padding: 5px 10px;
                        font-size: 14px;
                    }
                    span.cancel{
                        color: #999;
                        margin-right: 30px;
                    }
                    span.confirm{
                        color: #6692FF;
                    }
                }
            }
        }
    }
</style>