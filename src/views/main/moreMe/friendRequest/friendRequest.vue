<template>
    <div class="friendRequest">
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" class="nav_bar"/>        
        <div class="main_box">
            <ul>
                <li class="content_box">
                    <div class="left_box">
                        <div class="header_box"></div>
                        <div class="text_box">
                            <h3>下鸡爪</h3>
                            <p>雾计算 <van-icon name="user-o" color="#85CB35"/></p>
                            <div class="tag_box">
                                <van-tag size="medium">标签</van-tag>
                                <van-tag size="medium">标签</van-tag>
                            </div>
                        </div>
                    </div>
                    <div class="btn_box">
                        <div class="btn btn1">通过</div>
                        <div class="btn btn2">忽略</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'friendRequest',
    data(){
        return{
        }
    },
    methods:{
        goBack(){
            this.$router.go("-1")
        },
    }
}
</script>

<style scoped src="../../../../assets/css/navTar.css"></style>
<style lang="less">
    .friendRequest{
        text-align: left;
        box-sizing: border-box;
        .main_box{
            .content_box{
                display: flex;
                justify-content: space-between;
                padding: 10px 20px 10px 30px;
                border-bottom: 1px solid #f5f5f5;
                .left_box{
                    display: flex;
                    .header_box{
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        background: #ccc;
                        margin-right: 10px;
                        margin-top: 8px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .text_box{
                        h3{
                            font-size: 14px;
                            color: #333;
                            margin-bottom: 2px;
                        }
                        p{
                            font-size: 12px;
                            color: #666;
                        }
                        .tag_box{
                            .van-tag {
                                margin-right: 8px;
                                background: #e0e8fd;
                                font-size: 10px;
                                color: #6692FF;
                            }
                        }
                    }
                }
                
                .btn_box{
                    display: flex;
                    padding-top: 22px;
                    .btn{
                        width: 50px;
                        height: 26px;
                        border-radius: 4px;
                        font-size: 12px;
                        text-align: center;
                        line-height: 26px;
                    }
                    .btn1{
                        border:1px solid #6692FF;
                        color: #6692FF;
                        margin-right: 10px;
                    }
                    .btn2{
                        border:1px solid #BABABA;
                        color: #BABABA;
                    }
                }
            }
        }
    }
</style>