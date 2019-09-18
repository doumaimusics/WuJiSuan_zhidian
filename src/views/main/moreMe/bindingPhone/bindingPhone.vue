<template>
    <div class="bindingPhone">
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" class="nav_bar"/>        
        <div class="main_box">
            <div class="top">为账户安全，请绑定手机号</div>
            <div class="setPhone_box">
                <div class="from_box">
                    <van-cell-group :border="false">
                        <van-field v-model="phone" type="number" clearable label="+86" />
                    </van-cell-group>

                    <van-cell-group :border="false">
                        <van-field v-model="code" center clearable >
                            <van-button :class="{codeColor:phone!=''}" slot="button" size="small" type="primary">获取验证码</van-button>
                        </van-field>
                    </van-cell-group>
                </div>

                <!-- 绑定手机号按钮 -->
                <div class="btn_box" @click="bindingFun" :class="{btnBxColor:phone !='' && code != ''}">绑定手机号</div>

                <!-- 修改手机号下一步按钮 -->
                <div class="btn_box">下一步</div>
                <!-- 修改手机号确认按钮 -->
                <div class="btn_box">确认</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'bindingPhone',
    data(){
        return{
            phone:'',  // 手机号码
            code:'',   // 验证码
        }
    },
    methods:{
        goBack(){
            this.$router.go("-1")
        },
        bindingFun(){  // 确定绑定
            if(this.phone && this.code){
                this.$router.push({
                    name:'bindingSuccess'
                })
            }
        }
    }
}
</script>

<style scoped src="../../../../assets/css/navTar.css"></style>
<style lang="less" scoped>
    .bindingPhone{
        .main_box{
            .top{
                height: 30px;
                background: #f4f7ff;
                font-size: 10px;
                line-height: 30px;
                text-align: center;
                color: #6692FF;
            }
            .setPhone_box{
                padding: 20px 50px;
                .from_box{
                    margin-bottom: 60px;
                }
                .van-cell-group{
                    margin-bottom: 26px;
                    .van-cell{
                       font-size: 14px;
                       color: #666;
                       /deep/ .van-field__label{
                           width: 30px;
                           margin-right: 6px;
                       }
                    }
                    
                    /deep/ .van-cell__value{
                        border-bottom: 1px solid #D7D7D7;
                    }
                    /deep/ .van-field__button{
                        border-left: 1px solid #bababa;
                        margin-bottom: 5px;
                    }
                    .van-button--primary{
                        background: #fff;
                        border: none;
                        font-size: 12px;
                        color: #bababa;
                    }
                    .codeColor{
                        color: #6692FF;
                    }
                }
                .btn_box{
                    width: 260px;
                    height: 48px;
                    border: 1px solid #979797;
                    border-radius: 23px;
                    font-size: 16px;
                    color: #999;
                    text-align: center;
                    line-height: 48px;
                }
                .btnBxColor{
                    border: none;
                    color: #fff;
                    background: #6692FF;
                }
            }
        }
    }
</style>