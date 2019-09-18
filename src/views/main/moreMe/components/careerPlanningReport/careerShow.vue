<template>
    <div class="main_box">
        <div class="text_box">
            <p>
                {{context}}
            </p>
        </div>
        <!-- 未付费显示遮罩层 -->
        <div class="mask_box" v-if="isPay == 0">
            <div class="tip">补充信息查看我的线路图</div>
        </div>

        <!-- 已经付费 -->
        <div class="btn_box" v-else>
            <van-icon name="eye-o"/>
            <span>查看完整职业规划报告</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props:["context","isSuccess","isPay"],   //context:内容；isSuccess:1-等待生成2-已生成3-生成失败;   isPay:0-未付费  1-已付费
}
</script>

<style lang="less" scoped>
    .main_box{
        height: 100vh;
        background: #e2e8f4;
        padding: 20px 30px;
        color: #333;
        h3{
            font-size: 16px;
            margin-bottom: 6px;
        }
        p{
            font-size: 14px;
        }
    
        .mask_box{
            width: 100%;
            height: 100%;
            background: #ccc;
            position: fixed;
            left: 0;bottom:0;
            opacity: .6;
        }
        .btn_box{
            width: 100%;
            height: 44px;
            background: #6692FF;
            position: fixed;
            left: 0;bottom: 0;
            font-size: 14px;
            line-height: 44px;
            color: #fff;
            display: flex;
            justify-content: center;
            .van-icon{
                line-height: 44px;
                margin-right: 10px;
            }
        }
    }
</style>