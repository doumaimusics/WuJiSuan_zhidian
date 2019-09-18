<template>
    <div class="main_box">
        <!-- 等待生成 -->
        <div class="main" v-if="isPay == 1 && isSuccess == 1">
            <div class="main_text">
                您的申请时间为{{createtime | dateFrm}} 我们将在两个工作日内生产您的职业规划报告 请耐心等候
            </div>
        </div>

        <!-- 生成失败展示 -->
        <div class="main" v-if="isPay == 1 && isSuccess == 3">
            <div class="main_text">
                感谢您的耐心等待，由于您的信息不完整，所以无法为您生产职业规划报告，请认真填写完整信息后再次查询。
            </div>
            <div class="btn_box" @click="showPopup">去补充</div>
        </div>

        <div class="select_add">
            <van-popup v-model="showSelectItem" round>
                <ul>
                    <li @click="addExperience">补充工作经历</li>
                    <li @click="addTarget">补充工作目标</li>
                </ul>
            </van-popup>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            showSelectItem: false,
        }
    },
    methods: {
        /**
         * 展示弹窗
         */
        showPopup() {
            this.showSelectItem = true;
        },
        /**
         * 补充工作经历
         */
        addExperience() {
            this.$router.push({
                path: '/happyGrowth/addExperience',
                query: {
                }
            })
        },
        /**
         * 补充工作目标
         */
        addTarget() {
            this.$router.push({
                path: '/happyGrowth/addTarget',
                query: {
                }
            })
        },
    },
    filters:{
        dateFrm:function(el){    //时间过滤器  "YYYY"+年+"MM"+月+"DD"+"日"
        return moment(el).format('YYYY'+'年'+'MM'+'月'+'DD'+'日')
        }
    },
    props:["isSuccess","isPay","createtime"]   //isSuccess:1-等待生成2-已生成3-生成失败;   isPay:0-未付费  1-已付费;  createtime:申请时间
}
</script>

<style lang="less" scoped>
    .main_box{
        height: 100vh;
        background: #fff;
        padding: 30px 48px;
        color: #333;
        .main{
            .main_text{
                font-size: 12px;
                color: #999;
                text-align: center;
                background: #f4f7ff;
                padding: 10px 20px;
                border-radius: 4px;
                margin-bottom: 54px;
            }
            .btn_box{
                width: 100%;
                height: 46px;
                border: 1px solid #6692FF;
                border-radius: 23px;
                text-align: center;
                line-height: 46px;
                font-size: 16px;
                color: #6692FF;
            }
        }
        .select_add {
            .van-popup {
                width: 80%;
            }
            ul {
                li {
                    font-size:12px;
                    color: #666;
                    line-height: 50px;
                    text-align: center;
                }
                li:first-child {
                    border-bottom: 2px solid #F5F5F5;
                }
            }
        }
    }
</style>