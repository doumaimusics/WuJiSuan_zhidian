 <!-- 头部模块 -->
<template>
        <div class="top">
            <!-- 导航栏 -->
            <van-nav-bar left-arrow @click-left="goBack" class="nav_bar" :border="false"></van-nav-bar>
            <!-- 个人信息 -->
            <div class="person_info">
                <van-row>
                    <van-col span="6">
                        <van-image round width="70" height="70" :src="avatar" />
                    </van-col>
                    <van-col span="12">
                        <div class="media_title">
                            <span class="name">{{username}}</span>
                            <van-icon name="location-o" />
                            <span class="adress">杭州滨江</span>
                        </div>
                        <div class="media_position">
                            <span class="company">{{company}}</span>
                            <span class="position">{{position}}</span>
                            <van-icon name="medel-o" />
                        </div>
                        <div class="school">{{graduatedSchool}}</div>
                    </van-col>
                    <van-col span="24">
                        <p class="desc">{{introduction}}</p>
                    </van-col>
                </van-row>
                <div class="tag_box" @click="toEditing">
                    <van-tag class="tag_text" plain>编辑</van-tag>
                </div>
            </div>
        </div>
    
</template>

<script>
export default {
    props:["avatar","username","company","position","graduatedSchool","introduction","userId"],   // 头像，公司，职位，大学，介绍
    methods:{
        goBack(){
            this.$router.go("-1")
        },
        toEditing(){   // 跳转编辑个人信息页面
            this.$router.push({
                name:'editingHome'
            })
        }
    }
}
</script>

<style lang="less" scoped>
.top {
    width: 100%;
    height: 146px;
    background: linear-gradient(#66adff, #6692ff);
    border-radius: 0px 0px 10px 10px;
    margin-bottom: 62px;
    .nav_bar{
        background-color: rgba(255, 255, 255, 0);
        .van-icon,
        .van-nav-bar__title {
            color: #fff;
        }
    }
    .person_info {
        width: 96%;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        padding: 12px 16px;
        position: relative;
        .tag_box{
            position: absolute;
            top:5px;
            right: 16px;
            .tag_text{
                color:#f4ad5a;
                padding: 2px 15px;
            }
        }
        .van-row {
            font-size: 10px;
            color: #999;
            text-align: left;
            .van-col--6 {
            text-align: center;
            .number {
                margin-top: 20px;
                font-size: 16px;
                font-weight: 500;
                color: #666;
            }
            }
            .van-col--12 {
            .media_title {
                .name {
                    font-size: 18px;
                    font-weight: 500;
                    color: #333;
                }
                .van-icon {
                    font-size: 10px;
                    color: #6692ff;
                    margin-left: 10px;
                    margin-right: 4px;
                }
                .adress {
                    font-size: 10px;
                    color: #666;
                }
            }
            .media_position {
                margin: 8px 0px 6px;
                font-size: 12px;
                color: #999;
                .position {
                    margin: 0 8px;
                }
                .van-icon {
                    color: #f4ad5a;
                }
            }
            }
            .van-col--24 {
                margin: 8px 0px;
                font-size: 10px;
                color: #333;
            .label {
                padding: 0 12px;
                border-right: 1px solid #666;
                .number {
                    color: #6692ff;
                }
            }
            .label:last-child {
                border-right: 0px;
            }
            .desc {
                color: #666;
            }
            }
        }
    }
}
</style>