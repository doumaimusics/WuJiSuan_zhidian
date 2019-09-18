<template>
    <div class="bindingSuccess">
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" class="nav_bar"/>        
        <div class="main_box">
            <div class="phone_img"></div>
            <p>绑定的手机：<span>15626321111</span></p>
            <div class="modify_btn">
                <span>修改手机号</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'bindingSuccess',
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

<style scoped src="../../../../assets/css/navTar.css"></style>
<style lang="less" scoped>
    .bindingSuccess{
        .main_box{
            box-sizing: border-box;
            padding: 30px 0 0 0;  
            font-size: 14px;
            color: #333;
            .phone_img{
                width: 100px;
                height: 100px;
                background: url('../../../../assets/images/moreMe/05.jpg') no-repeat;
                background-size: cover;
                margin: 0 auto 22px;
            }
            p{
                margin-bottom: 20px;
            }
            .modify_btn{
                color: #6692FF;
                span{
                    border-bottom: 1px solid #6692ff;
                }
            }
        }
    }
</style>