<template>
    <div class="userAughdnt">
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" class="nav_bar"/>
        <div class="main_box">
            <van-cell title="实名认证" is-link @click="goAuthenticationPage(1,dataInfo[0].status)" >
                <template>
                    <span v-if="dataInfo[0].status == 0">审核中</span>
                    <span v-else-if="dataInfo[0].status == 1">审核通过</span>
                    <span v-else-if="dataInfo[0].status == 2">审核失败</span>
                    <span v-else>未审核</span>
                </template>
            </van-cell>
            <!-- <van-cell title="职业认证" is-link :to="{name:'authenticationPage',query:{n:2,title:'职业认证'}}" /> -->
        </div>

    </div>
</template>

<script>
import { getVerifieds } from '@/config/moreMe'
export default {
    name:"userAuthentication",
    data(){
        return {
            // "status":3,//状态0-审核中1-审核通过2-审核失败3-未提交
            dataInfo:[{
                status:0
            }],  // 初始化信息
        }
    },
    methods:{
        goBack(){
            this.$router.go("-1")
        },

        goAuthenticationPage(n,status){   // 跳转认证页面
            if(n==1){   // 实名认证
                if(status == 0){
                    this.$toast("实名正在审核中！！！");
                } else if(status == 1){
                    this.$toast("实名认证已经审核通过。")
                } else {
                    this.$router.push({
                        name:'authenticationPage',
                        query:{
                            n:1,
                            title:'实名认证',
                            status:status
                        }
                    })
                }
            } else {    // 职业认证

            }
        },

        getIsVerifieds(){    // 查看是否认证
            getVerifieds().then((res) =>{
                if(res.data.status == 10000) {
                    this.dataInfo = res.data.data;
                    console.log(this.dataInfo)
                } else {
                    this.$toast(res.data.data);
                }
            })
        },
    },
    created() {
        this.getIsVerifieds()
    },
}
</script>

<style scoped src="../../../../assets/css/navTar.css">
</style>
<style lang="less" scoped>
    .userAughdnt{
        box-sizing: border-box;
        .main_box{
            text-align: left;
            padding-left: 30px;
            .van-cell{
                padding: 20px 0;
                padding-right: 20px;
                border-bottom: 1px solid #f5f5f5;
                font-size: 14px;
                color: #666;
            }
            .van-cell:not(:last-child)::after{
                border: none;
            }
        }

    }
</style>