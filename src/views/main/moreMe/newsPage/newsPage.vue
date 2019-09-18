<template>
    <div class="newsPage">
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" class="nav_bar"/>        
       <div class="main_box">
           <!-- 好友通知的展示 -->
           <van-swipe-cell :right-width="60" @click.native="toFriendRequest">
                <div class="content_box">
                    <div class="left_box">
                        <div class="header_box"></div>
                        <!-- 当是好友通知的时候 只显示好友通知 没有下面的小字 -->
                        <div class="text_box padt">
                            <h3>好友通知</h3>
                            <div class="icon_y"></div>
                            <!-- <p>你已经是对方的好友了，去打个招呼吧～</p> -->
                        </div>
                    </div>
                    <div class="time_box">13:09</div>
                </div>
                <template slot="right">
                    <van-button square type="danger" text="删除" />
                </template>
            </van-swipe-cell>
            <!-- 消息展示 -->
            <van-swipe-cell :right-width="60" @click.native="toFriendRequest">
                <div class="content_box">
                    <div class="left_box">
                        <div class="header_box"></div>
                        <div class="text_box">
                            <h3>小鸡爪</h3>
                            <p>你已经是对方的好友了，去打个招呼吧～</p>
                        </div>
                    </div>
                    <div class="time_box">13:09</div>
                </div>
                <template slot="right">
                    <van-button square type="danger" text="删除" />
                </template>
            </van-swipe-cell>
       </div>
    </div>
</template>

<script>
export default {
    name:'newsPage',
    data(){
        return{
        }
    },
    methods:{
        goBack(){
            this.$router.go("-1");
        },
        toFriendRequest(){
            this.$router.push({
                name:'friendRequest'
            })
        }


    }
}
</script>

<style scoped src="../../../../assets/css/navTar.css"></style>
<style lang="less">
    .newsPage{
        text-align: left;
        box-sizing: border-box;
        .main_box{
            .van-swipe-cell{
                border-bottom: 1px solid #f5f5f5;
                .van-button{
                    height: 24px;
                    background: pink;
                    color: #F95251;
                    border-radius:4px;
                    line-height: 24px;
                    border: none;
                    margin: 12px 10px 0 0;
                    .van-button__text{
                      font-size: 12px; 
                      height: 100%;
                    }
                }
            }
            .content_box{
                display: flex;
                justify-content: space-between;
                padding: 10px 20px 10px 30px;
                .left_box{
                    display: flex;
                    .header_box{
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background: #ccc;
                        margin-right: 10px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .text_box{
                        h3{
                            font-size: 12px;
                            color: #333;
                        }
                        p{
                            font-size: 8px;
                            color: #666;
                        }
                    }
                    .padt{
                        padding-top: 6px;
                        position: relative;
                        .icon_y{
                            width: 10px;
                            height: 10px;
                            border-radius: 50%;
                            background: #f60;
                            position: absolute;
                            left: -18px;top: 0;
                        }
                    }
                }
                
                .time_box{
                    font-size: 8px;
                    color: #999;
                    line-height: 30px;
                }
            }
        }
    }
</style>