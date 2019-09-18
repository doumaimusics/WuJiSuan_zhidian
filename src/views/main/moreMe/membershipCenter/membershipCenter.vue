<template>
    <div class="membership">
        <van-nav-bar class="bar_box" :title="this.$store.getters.navBarTitle" :border="false" left-arrow @click-left="goBack" />
        <div class="top">
            <div class="swipe_box">
                <div class="swipe_item"></div>
            </div>
        </div> 

        <div class="main_box">
            <h3 class="title">
                <div class="title_text">乐享会员特权</div>
                <div class="bor_b"></div>
            </h3>
            <div class="check_box">
                <van-checkbox-group v-model="result">
                    <van-cell-group :border="false">
                        <van-cell :border="false" class="ppp" v-for="(item, index) in checkList" 
                        clickable :key="item" :title="item" @click="toggle(index)">
                            <van-checkbox :name="item" ref="checkboxes" slot="right-icon"/>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
            </div>
        </div>
        
        <div class="btn_box">立即支付88元 <van-icon name="arrow"  /></div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            result:[],
            checkList:[
                "90天内可查看过我的用户",
                "无限量搜索一/二度人脉",
                "定制化的职业发展报告",
                "个人发展计划提醒功能",
                "问答环节可查看过往问答",
                "复用他人计划权限",
                "职业经纪人权限"
            ]
        }
    },
    methods:{
        goBack(){
            this.$router.go('-1')
        },
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="less" scoped>
    .membership{
        position: relative;
        .van-icon{
            color: #fff;
            
        }
        .van-nav-bar__title{
            max-width: 100%;
            background: linear-gradient(#66ADFF, #6692FF);
            color: #fff;
        }
        .top{
            height: 200px;
            margin-bottom: 30px;
            position: relative;
             background:linear-gradient(#6692FF,#85ADFF,#9FC4FF,#fff);
            .swipe_box{
                width: 100%;
                height: 140px;
                position: absolute;
                left: 0;top:30px;
                .swipe_item{
                    width:340px;
                    height: 140px;
                    background: #fff;
                    border-radius:10px;
                    margin: 0 auto;
                    box-shadow:  0 0 10px #9FC4FF;
                }
            }
        }
        .main_box{
            padding-bottom: 60px;
            .title{
                width: 100%;
                height: 30px;
                font-size: 16px;
                color: #333;
                position: relative;
                margin-bottom: 25px;
                .title_text{
                    position: absolute;
                    left: 0;right: 0;
                    margin: auto;
                    z-index: 1;
                }
                
                .bor_b{
                    width: 96px;
                    height: 8px;
                    background: #6692FF;
                    position: absolute;
                    left: 0;right: 0;
                    bottom: 8px;
                    margin: auto;
                }
            }
            .check_box{
                text-align: left;
                padding: 0 30px;
                font-size: 14px;
                color: #666;
                .van-cell{
                    margin-bottom: 24px;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    -webkit-tap-highlight-color: transparent;
                
                }
            }
        }
        .btn_box{
            width: 100%;
            height: 44px;
            background: #6692FF;
            position: fixed;
            left: 0;bottom: 0;
            font-size: 14px;
            color: #fff;
            text-align: center;
            line-height: 44px;
            .van-icon{
                vertical-align: sub;
            }
        }
    }
</style>