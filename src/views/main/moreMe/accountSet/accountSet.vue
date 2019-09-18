<template>
    <div class="accountSet">
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" class="nav_bar"/>        
        <div class="main_box">
                <ul>
                    <li @click="toSetAccount">
                        <div class="left_box">手机号码</div>
                        <div class="right_box">
                            <van-icon color="#AADB73" name="exchange"/>
                            <!-- 绑定手机号后显示在这里 -->
                            <p class="p1">15293939999</p>
                            <van-icon name="arrow"/>
                        </div>
                    </li>
                    <li>
                        <div class="left_box">之点ID</div>
                        <div class="right_box">
                            <p>15293939999</p>
                        </div>
                    </li>
                    <li>
                        <div class="left_box">绑定微信号</div>
                        <div class="right_box">
                            <van-icon color="#AADB73" name="exchange"/>
                            <van-icon name="arrow"/>
                        </div>
                    </li>
                </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"accountSet",
    data(){
        return{

        }
    },
    methods:{
        goBack(){
            this.$router.push({
                name:'setUp'
            })
        },
        toSetAccount(){
            this.$router.push({
                name:"bindingPhone"
            })
        }
    }
}
</script>

<style scoped src="../../../../assets/css/navTar.css"></style>
<style lang="less" scoped>
    .accountSet{
        box-sizing: border-box;
        text-align: left;
        background: #F5F5F5;
        height: 100vh;
        .main_box{
            padding-top: 12px;
            ul{
                background: #fff;
                li{
                    display:flex;
                    justify-content: space-between;
                    font-size: 14px;
                    color: #666;
                    line-height: 40px;
                    border-bottom: 1px solid #f5f5f5;
                    .left_box{
                        padding-left: 20px;
                    }
                    .right_box{
                        padding-right: 20px;
                        display: flex;
                        color: #999;
                        p.p1{
                            margin: 0 8px;
                            font-size: 12px;
                            color: #666;
                        }
                        .van-icon{
                            line-height: 40px;
                        }
                    }
                }
            }
        }
    }
</style>