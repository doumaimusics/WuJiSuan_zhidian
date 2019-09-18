<template>
    <div class="proposalPage">
        <van-nav-bar :title="this.$store.getters.navBarTitle" right-text="关闭" left-arrow @click-left="goBack"  @click-right="onClickRight" class="nav_bar"/>        
        <div class="main_box">
            <!-- 留言 -->
            <div class="text_box">
                <van-field
                    v-model="textareaText"
                    :border="false"
                    type="textarea"
                    placeholder="请输入您的反馈或建议…"
                    rows="10"
                    autosize
                />
                <p class="number_box">0/400</p>

                <div class="upload_box">
                    <div class="img_box">
                        <van-uploader :after-read="updatedFun">
                            <img :src="imgUrl" alt v-if="imgUrl"/>
                            <div  class="icon_box" v-else>
                                <van-icon name="plus" />
                            </div>
                        </van-uploader>
                    </div>
                    <div class="ts_text">添加图片说明</div>
                </div>
            </div>

            <!-- 手机号 -->
            <div class="phone_box">
                <van-cell-group :border="false">
                    <van-field
                        v-model="phones"
                        center
                        clearable
                        label="联系电话"
                        placeholder="选填，便于我们联系您"
                    >
                    </van-field>
                </van-cell-group>
            </div>

            <!-- 按钮 -->
            <div class="subm_btn" @click="sumFun" :class="{submBtnColor:textareaText}">提交</div>
        </div>
    </div>
</template>
<script>
import { feedback } from '@/config/moreMe'
import { Toast } from 'vant';
export default {
    name:'proposalPage',
    data(){
        return{
            textareaText:'',  // 留言内容
            imgUrl:'',
            phones:'',  //填的手机号
        }
    },
    methods:{
        goBack(){
            this.$router.go("-1")
        },
        onClickRight(){
            this.$router.go("-1")
        },
        updatedFun(file, detail){
            this.imgUrl = file.content
        },
        sumFun(){   // 提交
            feedback({
                phone:'16239481111',
                context:'sscscs',
                image:''
            }).then((res) => {
                console.log(res)
            })
            // if(this.textareaText){
            //   Toast('提交成功，感谢您的反馈与建议');  
            // }
        }
    }
}
</script>

<style scoped src="../../../../assets/css/navTar.css"></style>
<style lang="less" scoped>
    .proposalPage{
        box-sizing: border-box;
        .main_box{
            padding: 20px;
            .text_box{
                border-bottom: 1px solid #f5f5f5;
                padding-bottom: 10px;
                margin-bottom: 20px;
                .upload_box{
                .img_box{
                    width: 88px;
                    height: 88px;
                    background: #e9ecf6;
                    /deep/ .van-uploader,
                    /deep/ .van-uploader__wrapper,
                    /deep/ .van-uploader__input-wrapper,
                    /deep/ .icon_box,img{
                        width: 100%;
                        height: 100%;
                    }
                    .icon_box{
                        text-align: center;
                        line-height: 88px;
                        .van-icon{
                            color: #6692FF;
                        }
                    }
                }
                .ts_text{
                    font-size: 10px;
                    color: #999;
                    text-align: left;
                }
            }
            }
            .number_box{
                font-size: 10px;
                color: #999;
                text-align: right;
            }
            .phone_box{
                margin-bottom: 38px;
            }
            /deep/ .van-cell__title{
                text-align: left;
                width: 70px;
                font-size: 14px;
            }
            /deep/ .van-cell__value{
                border-bottom: 1px solid #f5f5f5;
                font-size: 14px;
            }

            .subm_btn{
                width: 260px;
                height: 48px;
                text-align: center;
                line-height: 48px;
                background: #BABABA;
                font-size: 16px;
                margin: 0 auto;
                color: #fff;
                border-radius: 23px;
            }
            .submBtnColor{
                background: #6692FF;
            }
        }
    }
</style>