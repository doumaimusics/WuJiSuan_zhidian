<template>
    <div class="setUp">
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" class="nav_bar"/>        
        <div class="main_box">
            <van-cell-group>
                <van-cell title="账号与安全" is-link :to="{name:'accountSet'}" />
            </van-cell-group>

            <van-cell-group>
                <van-cell title="反馈与建议" is-link :to="{name:'proposalPage'}" />
            </van-cell-group>

            <van-cell-group :border="false">
                <van-cell title="隐私协议" is-link  />
                <van-cell title="版本更新" is-link  />
                <van-cell title="清除缓存" is-link  />
                <van-cell title="关于我们" is-link  />
            </van-cell-group>

            <van-cell-group>
                <div class="returnBtn" @click="returnLogin">退出登录</div>
            </van-cell-group>
        </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    data(){
        return{

        }
    },
    methods:{
        returnLogin(){
            Dialog.confirm({
                title: '提示',
                message: '确认要退出登录吗'
            }).then(() => {
                this.$store.commit("delToken");
                this.$toast({
                    message:'退出成功',
                    duration:1300
                })
                this.$router.push({ name:'login' })
            }).catch(() => {
                // on cancel
            });
        },
        goBack(){
            this.$router.push({
                name:'moreMe'
            })
        }
    }
}
</script>

<style scoped src="../../../../assets/css/navTar.css"></style>
<style lang="less" scoped>
    .setUp{
        box-sizing: border-box;
        text-align: left;
        background: #F5F5F5;
        height: 100vh;
        .main_box{
            padding-top: 12px;
            .van-cell-group{
                margin-bottom: 12px;
                 font-size: 14px;
                    color: #666;
                .van-cell{
                    line-height: 40px;
                    padding-left: 20px;
                }
                .van-icon{
                    line-height: 40px;
                    margin-right: 18px;
                }
                .returnBtn{
                    width: 100%;
                    line-height: 40px;
                   text-align: center;
                }
            }
        }
    }
</style>