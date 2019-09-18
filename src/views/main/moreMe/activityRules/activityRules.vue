<template>
    <div class="activityRules">
       <!-- 导航栏 -->
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" />
        <div class="main_box">
                <p>
                    1、被邀请人限定范围:必须是之点APP新用户(之点新注册用户或历史未使用之点APP登录过的用户）。
                </p>
                <p >2、邀请成功</p>
                <p>
                    1)短信:被邀请人在收到邀请3天内登录之点APP并完成之点实名认证;
                </p>
                <p>2)微信或二维码:被邀请人用浏览器扫码等工具在之点APP外打开邀请码/邀请链接,需要先输入自己的手机号码,按照页面提示在3天內登录之点APP并完成实名认证;
                </p>
                <p >3)微信或二维码:被邀请人先登录了之点APP,当天用之点扫邀请人的邀请码/邀请链接,并按照页面提示完成实名认证,如邀请人未获得红包奖励,可再在当天内扫码;
                </p>
                <p>以上3种情况都视为邀请成功;（登录但未实名认证无法返奖</p>
                <p>3、活动周期内,邀请者每邀请成功1个好友,可以获得红包;可根据邀请成功的好友数累积算力,最多可获得10000个算力;</p>
                <p>4、若同一天內,同一用户被多人邀请,则返奖给最新邀请的人，同一个用户被通过多个活动邀请,只返一次奖且返给最新邀请的人;</p>
                <p>5、同一之点账户、手机号、身份证、手机终端,符合以上任条件的,均视为同一用户。如邀请的新用户同一身份证名下已有一个正在使用的账号,则不属于新用户范畴,不作返奖。因之点账号非实名导致用户无法参加活动的,视为用户自动放弃。活动资格;如果违法违规作弊将被取消奖励资格。</p>
        </div>
    </div>
</template>

<script>
export default {
    nanme:'activityRules',
    data(){
        return{

        }
    },
    methods:{
        goBack(){
            this.$router.go("-1")
        }
    }
}
</script>

<style lang="less" scoped>
    .activityRules{
        box-sizing: border-box;
        text-align: left;
        .van-nav-bar__title {
            max-width: none;
            color: #666;
            font-size: 18px;
        }
        .van-icon{
            color: #666;
        }
        .main_box{
            padding:20px 15px;
            p{
                font-size: 16px;
                color: #666;
            }
        }
    }
</style>