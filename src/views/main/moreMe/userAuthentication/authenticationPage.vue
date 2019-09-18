<template>
    <div class="authenticationPage">
        <van-nav-bar :title="this.$route.query.title" left-arrow @click-left="goBack" class="nav_bar"/>        
        <div class="main_box">
            <!-- 顶部提示 -->
            <div class="top_noticeBar">
                <van-notice-bar wrapable :scrollable="false" v-if="this.$route.query.n == 1">
                    身份证信息不会在之点app中显示，认证后即可解锁加好友权益
                </van-notice-bar>
                <van-notice-bar wrapable :scrollable="false" v-else-if="this.$route.query.n == 2">
                    您可以上传护照、驾驶证、港澳通行证或其他能证明您公民身份的材料均可
                </van-notice-bar>
                <van-notice-bar wrapable :scrollable="false" v-else>
                    图层您可以上传能够证明您职业经历的相关材料、名片、在职证明、工牌、工作邮箱或其他证明材料均可
                </van-notice-bar>
            </div>

            <!-- 实名认证模块 -->
            <div class="main" v-if="this.$route.query.n == 1">
                <van-cell-group :border="false">
                    <van-field  v-model="xmName" placeholder="真实姓名" />
                </van-cell-group>
                <van-cell-group :border="false">
                    <van-field v-model="identityId" placeholder="身份证号码" />
                </van-cell-group>
            </div>

            <!-- 其他认证模块 -->
            <div class="upload_box" v-else>
                <div class="img_box">
                    <van-uploader :after-read="updatedFun">
                        <img :src="imgUrl" alt v-if="imgUrl" />
                        <div v-else class="icon_box">
                            <van-icon name="plus" />
                            <p class="p_text">上传照片</p>
                        </div>
                    </van-uploader>
                </div>
                <div class="ts_text">只支持.jpg/png格式</div>
            </div>

            <!-- 按钮 -->
            <div class="btn_box">
                <van-button type="primary" size="large" @click="submission">提交</van-button>
                <p class="p_btn" @click="goOther" v-if="this.$route.query.n == 1">
                    <span>其他认证方式</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { submitVerified } from '@/config/moreMe'
export default {
    name:'authenticationPage',
    data(){
        return{
            imgUrl:'',  // 上传图片
            dataInfo:{},  // 初始化信息
            xmName:'',   // 姓名
            identityId:'',// 身份证id
            //status:0-审核中1-审核通过2-审核失败3-未提交
        }
    },
    methods:{
        goBack(){   // 返回
            this.$router.go("-1")
        },

        submission() {   // 提交认证
            submitVerified({
                "type":this.$route.query.n,  //认证类型:1-实名认证方式一2-实名认证放方式二3职业认证
                "name":this.xmName,
                "identityNumber":this.identityId,
                "verifiedImage":"",
                "status":this.$route.query.status,//状态0-审核中1-审核通过2-审核失败3-未提交
                "userId":JSON.parse(window.localStorage.getItem("userInfo")).userId//用户id
            }).then((res) =>{
                if(res.data.status == 10000){
                    this.$toast("提交成功");
                    this.$router.go(-1)   
                } else {
                    this.$toast(res.data.data);
                }
            })
        },

        

        updatedFun(file, detail){   // 上传文件
            this.imgUrl = file.content
        },
        goOther() {
            this.$router.push({
                name:'authenticationPage',
                query:{n:3,title:'其他认证方式'}
            })
        }
    },
    created() {
    },
}
</script>

<style scoped src="../../../../assets/css/navTar.css"></style>
<style lang="less">
    .authenticationPage{
        box-sizing: border-box;
        .main_box{
            .top_noticeBar{
                text-align: left;
                .van-notice-bar{
                   color: #6692FF; 
                   font-size: 10px;
                   background: #e9ecf6;
                }
            }
        }
        .main{
            padding: 20px 50px;
            .van-cell{
                padding-left: 0;
                margin-bottom: 20px;
                border-bottom: 1px solid #f5f5f5;
            }
        }
        .upload_box{
            .img_box{
                width: 88px;
                height: 88px;
                background: #e9ecf6;
                margin: 40px auto 4px;
                .van-uploader,.van-uploader__wrapper,.van-uploader__input-wrapper,.icon_box,img{
                    width: 100%;
                    height: 100%;
                }
                .icon_box{
                    padding-top: 15px;
                    .van-icon{
                        color: #6692FF;
                    }
                    .p_text{
                        color: #6692ff;
                        font-size: 12px;
                    }
                }
            }
            .ts_text{
                font-size: 10px;
                color: #999;
            }
        }
        .btn_box{
            width: 100%;
            position: fixed;
            bottom: 30px;
            left: 0;
            .van-button--primary{
                width: 260px;
                background: #6692FF;
                color: #fff;
                border-radius: 23px;
                border: none;
                margin-bottom: 10px;
            }
            .p_btn{
                font-size: 14px;
                color: #6692ff;
                span{
                    border-bottom: 1px solid #6692ff;
                }
            }
        }
    }
</style>