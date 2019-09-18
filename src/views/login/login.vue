<template>
    <div class="login">
        <div class="body">
            <div style="height: calc( 100vh - 60px ); overflow: auto;">
                <!-- 头像 -->
                <div class="login_logo">                         
                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986179278,1118313821&fm=27&gp=0.jpg">
                </div>
                <!-- 登录表单 -->
                <div class="login_form">
                    <van-cell-group>
                        <van-field
                            @confirm="checkTelphone(loginForm.telphone)"
                            @blur="checkTelphone(loginForm.telphone)"
                            v-model="loginForm.telphone"
                            type="tel"
                            clearable
                            placeholder="请输入手机号码"
                            :error="telErrorStatus"
                            @clear="handleClear"
                        />
                        <van-field
                            @confirm="checkCaptcha(loginForm.captcha)"
                            @blur="checkCaptcha(loginForm.captcha)"
                            v-model="loginForm.captcha"
                            placeholder="请输入验证码"
                            clearable
                            :error="captchaErrorStatus"
                            @clear="handleClear"
                        >
                            <van-button v-show="sendAuthCode" slot="button" size="small" @click="getAuthCode">获取验证码</van-button>
                            <van-button v-show="!sendAuthCode" slot="button" size="small" @click="toastTip"><span class="repet_get_btn">重新获取</span>{{auth_time}}</van-button>
                        </van-field>
                        <van-button type="primary" round size="large" :class="submitBtnDisabed?'submit_btn_disbed':'submit_btn'" @click="loginIn(loginForm)">登录 / 注册</van-button>
                    </van-cell-group>
                </div>
                <!-- 其他方式登录 -->
                <div class="other_login">
                    <div class="other_login_text">其他方式登录</div>
                    <van-icon class="iconfont my-icon-weixin"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { queryCode,login } from '@/config/login'
import { Field,Toast,Icon } from 'vant';
import { setTimeout } from 'timers';
export default {
    name: 'login',
    data () {
        return {
            loginForm: { 
                telphone: '',
                captcha: '',
            },
            telErrorStatus: false,
            captchaErrorStatus: false,
            sendAuthCode: true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
            auth_time: 0, /*倒计时 计数器*/
            submitBtnDisabed: true,//提交按钮默认禁用
            docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
            showHeight: document.documentElement.clientHeight,   //实时屏幕高度
        }
    },
    mounted () {
        window.onresize = () =>{
            return(()=>{
                this.showHeight = document.body.clientHeight;
            })()
        }
        
    },
    watch: {
        showHeight () {
            if(this.docmHeight > this.showHeight){
                this.showFootPage = false
                const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;// input输入框在iOS中获取到焦点之后界面上移无法回落问题
                window.scrollTo(0, Math.max(scrollHeight - 1, 0));
            }else{
                this.showFootPage = true
            }
        },
        'loginForm.telphone' (val) {
            // console.log(val);
            if(!val) {
                this.telErrorStatus = true;
            }else {
                this.telErrorStatus = false;
            }
            if(val && this.loginForm.captcha) this.submitBtnDisabed = false;
        },
        'loginForm.captcha' (val) {
            // console.log(val);
            if(!val) {
                this.captchaErrorStatus = true;
            }else {
                this.captchaErrorStatus = false;
            }
            if(val && this.loginForm.telphone) this.submitBtnDisabed = false;
        },
    },
    methods: {
        //校验手机号码
        checkTelphone(tel) {
            // console.log(typeof(tel))
            if(!tel) {
                this.telErrorStatus = true;
                this.$toast('请输入手机号码'); 
                return;
            }else {
                this.telErrorStatus = false;
            }
            let phoneReg = /^[1][3,4,5,7,8,9][0-9]{9}$/ //手机号校验
            if(!phoneReg.test(tel)) {
                this.telErrorStatus = true;
                this.$toast('手机号码格式不正确'); 
                return;
            }else {
                this.telErrorStatus = false;
            }
        },
        //校验验证码
        checkCaptcha(captcha) {
            if(!captcha) {
                this.captchaErrorStatus = true;
                this.$toast('请输入验证码');
                return;
            }else {
                this.captchaErrorStatus = false;
            }
        },
        //获取验证码
        getAuthCode() {
            var _this = this;
            this.sendAuthCode = false;
            this.auth_time = 60;
            let params = {
                "phone": _this.loginForm.telphone,
            }
            queryCode(params).then((res) => {
                if(res.data.status == 10000) {
                    _this.$toast(res.data.data);
                    _this.openInterval();
                }else {
                    _this.$toast(res.data.data);
                }
            }).catch(rea => {
                _this.sendAuthCode = true;
            })
        },
        //开启倒计时
        openInterval() {
            this.sendAuthCode = false;
            this.auth_time = 60;
            var auth_timetimer =  setInterval(()=>{
                this.auth_time--;
                if(this.auth_time<=0){
                    this.sendAuthCode = true;
                    clearInterval(auth_timetimer);
                }
            }, 1000);
        },
        //倒计时进行时不可重复点击获取
        toastTip() {
            if(this.auth_time>0) {
                this.$toast('您的短信验证码获取频繁，请稍后再试');
            }
        },
        //点击清除按钮后触发
        handleClear() {
            this.submitBtnDisabed = true;
        },
        //登录
        loginIn(loginForm) {
            if(this.submitBtnDisabed) {//校验登录表单是否为空
                this.checkTelphone(loginForm.telphone);
                this.checkCaptcha(loginForm.captcha);
                return;
            }
            this.$toast.loading({
                forbidClick: true,
                message: '登录中'
            })
            let params = {
                "phone": loginForm.telphone,
                "vcode": loginForm.captcha
            }
            this.$store.dispatch('SetLoginInfo',params).then(res => {
                if (res.data.status == 10000) {
                    console.log(1111)
                    localStorage.setItem('userInfo', JSON.stringify(res.data.data))
                    console.log(res.data.data.first)
                    if(res.data.data.first) {//true 表示第一次登录即为注册所以进入注册引导页
                        console.log(2222)
                        this.$router.push({
                            path: '/register/personalInfo',
                            query: {}
                        })
                    }else {
                        console.log(33333)
                        this.$router.push({
                            name:'happyGrowth'
                        })
                    }
                }else{
                    Toast.fail({
                        forbidClick: true,
                        loadingType: 'iconfont iconmima',
                        message: res.data.data
                    })
                }
            })
        }
    }
}
</script>
<style lang="less">
body{
    .enter-fail-toast{
        text-align: center;
        width: 128px;
    } 
}
</style>
<style lang="less" scoped>
.login{
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    min-height: calc(100vh);
    position: relative;
    .body{
        position: relative;
        overflow: hidden;
        min-height: calc(100vh);
        .login_logo{
            width: 70px;
            height: 70px;
            border-radius:4px;
            margin: 100px auto 54px;
            img{
                width: 100%;
                height: 100%;
                border-radius:4px;
            }
        }
        .login_form{
            width: 260px;
            margin: 0 auto;
            .van-cell-group {
                .van-cell{
                    font-size: 16px;
                    color: #333;
                    height: 46px;
                    line-height: 46px;
                    background-color: #F6F9FF;
                    border-radius:6px;
                    margin-bottom: 14px;
                    padding: 0px 10px 0px 24px !important;
                    .van-button {
                        font-size: 14px;
                        color: #6692FF;
                        border: 0px;background-color: #F6F9FF;
                        border-left: 1px solid #BECFE1;
                        .repet_get_btn {
                            color: #C6D4E2;
                        }
                    }
                }
                .van-cell:not(:last-child)::after{
                    border-bottom: 0px;
                }
                .submit_btn_disbed {
                    background-color: #D7D7D7;
                    color: #fff;
                    border: 0px;
                    margin-top: 14px;
                }
                .submit_btn {
                    background-color: #6692FF;
                    color: #fff;
                    border: 0px;
                    margin-top: 14px;
                }
            }
            .van-hairline--top-bottom::after {
                border-width: 0px;
            }
        } 
        .other_login {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 32px;
            .other_login_text {
                width: 100px;
                margin: 0 auto;
                font-size:12px;
                // counter-reset: #999;
                text-align: center;
                position: relative;
                color: #999;
                &::before {
                    content: ' ';
                    width: 90%;
                    height: 2px;
                    border-bottom: 1px solid #D7D7D7;
                    position: absolute;
                    top: 6px;
                    left: -84px;
                }
                &::after {
                    content: ' ';
                    width: 90%;
                    height: 2px;
                    border-bottom: 1px solid #D7D7D7;
                    position: absolute;
                    top: 6px;
                    right: -84px;
                }
            }
            .wechat_icon {
                margin-top: 10px;
            }
        }
    }
}
</style>
