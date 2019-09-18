<template>
    <div class="top-box">
        <van-nav-bar title="我" @click-right="onClickRight" :border="false">
            <van-icon name="comment-o" slot="right" />
        </van-nav-bar>
        <div class="inform-box">
            <!--  <div class="right-con" :style="{backgroundImage: 'url(' + (coverImgUrl ? coverImgUrl : baseImg) + ')', backgroundSize:'contain'}">
</div> -->
            <div class="header-box" :class="{bgCol:!avatar}">
                <van-image width="60px" height="60px" class="imgs" :src="avatar" v-show="avatar"/>
            </div>
            <div class="infor-text" @click="toPersonalHome">
                <p class="p1">{{userName}}</p>
                <p class="p2" v-show="company"> <span>{{company}}  </span> <span>{{position}}</span>  >></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    props:["avatar","userName","company","position","userId"],   // 头像，名字，公司，职位,用户id
    methods:{
        onClickRight(){   // 跳转消息
            this.$router.push({
                name:'newsPage'
            })
        },
        toPersonalHome() {   // 跳转详情
            this.$router.push({
                path:'/main/moreMe/personalHomePage',
                query:{
                    id:this.userId
                }
            })
        },
    },

    created(){
    }
}
</script>

<style lang="less" scoped>
      .top-box{
        background:linear-gradient(to right,#66ADFF,#6692FF);
        .van-nav-bar__title{
            max-width: none;
            color: #fff;
            font-size: 18px;
            line-height: 46px;
        }
        .van-icon{
            color: #fff;
        }
        .van-nav-bar {
            background:linear-gradient(to right,#66ADFF,#6692FF);
        }
        .inform-box{
            padding:12px 14px;
            display: flex;
            .header-box{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                .imgs{
                    border-radius: 50%;
                }
            }
            .bgCol{
                background: #fff;
            }
            .infor-text{
                color: #fff;
                padding-top: 10px;
                font-size: 14px;
                text-align: left;
                margin-left: 12px;
                .p1{
                    margin-bottom: 7px;
                }
                .p2{
                    background: #6692FF;
                    padding: 2px 8px;
                    border-radius: 10px;
                    font-size: 10px;
                }
            }
        }
    }
</style>