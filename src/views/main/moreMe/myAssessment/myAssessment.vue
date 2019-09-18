<template>
    <div class="myAssessment">
        <!-- :title="this.$store.getters.navBarTitle" -->
        <van-nav-bar :border="false" left-arrow @click-left="goBack" class="nav_bar"/>        
        <div class="main_box">
            <!-- 我的测评 -->
            <div class="assess_box">
                <div class="title_box">
                    <h3>我的测评</h3>
                    <div class="line"></div>
                </div>
                
                <ul>
                    <li>
                        <h4>职配性格测试</h4>
                        <p>寻找职位与性格的最佳切合点</p>
                        <div class="count_box">
                            <van-icon name="friends-o"/> <span class="count">20000人做过</span>
                        </div>
                        <div class="btn" @click="toTestResult">查看结果</div>
                    </li>
                </ul>
            </div>

            <!-- 更多测评 -->
            <div class="assess_box">
                <div class="title_box">
                   <h3>更多测评</h3> 
                   <div class="line"></div>
                </div>
                
                <ul>
                    <li>
                        <h4>职配性格测试</h4>
                        <p>寻找职位与性格的最佳切合点</p>
                        <div class="count_box">
                            <van-icon name="friends-o"/> <span class="count">20000人做过</span>
                        </div>
                        <div class="btn" @click="toText">开始测试</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'myAssessment',
    data() {
        return {

        }
    },
    methods:{
        goBack(){
            this.$router.go('-1')
        },
        toText(){   // 跳转测试页面
            this.$router.push({
                name:'evaluation'
            })
        },
        toTestResult() {   // 测试结果页面
            this.$router.push({
                name:'testResult'
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .myAssessment{
        text-align: left;
        box-sizing: border-box;
        // h1,h2,h3,h4,h5,h6{
        //     font-weight: normal;
        // }
        .main_box{
            padding: 0 10px;
            .assess_box{
                margin-bottom: 30px;
                .title_box{
                    font-size: 16px;
                    color: #333;
                    position: relative;
                    height: 25px;
                    margin-bottom: 15px;
                    h3{
                        position: absolute;
                        left: 0;
                        bottom:0;z-index: 1;
                    }
                    .line{
                        width: 64px;
                        height: 8px;
                        background: #6692FF;
                        position: absolute;
                        left: 0;bottom: 0;
                    }
                }
                ul{
                    li{
                        width: 100%;
                        border-radius: 8px;
                        background: #e3eafe;
                        padding: 16px 26px;
                        box-sizing: border-box;
                        position: relative;
                        h4{
                            font-size: 14px;
                            color: #333;
                            margin-bottom: 4px;
                        }
                        p{
                            font-size: 10px;
                            color: #666;
                            margin-bottom: 20px;
                        }
                        .count_box{
                            color: #999;
                            font-size: 8px;
                        }
                        .btn{
                            height: 26px;
                            line-height: 26px;
                            padding: 5px 10px;
                            border-radius: 4px;
                            font-size: 12px;
                            color: #fff;
                            background: #8AACFF;
                            position: absolute;
                            top: 0;bottom: 0;
                            right: 20px;
                            margin: auto;
                        }
                    }
                }
            }
        }
    }
</style>