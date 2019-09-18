<template>
    <div class="pantry">
        <!-- 主体 -->
        <div class="mainBox">
            <!-- <div class="message_box" @click="lookMessage">
                <van-image round width="26" height="26" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <span class="message_text">3条新消息</span>
                <van-icon name="arrow" class="rightArrow" />
                <van-icon name="arrow" class="rightArrow" />
            </div> -->

            <!-- 列表 -->
            <div class="media_box">
                <div class="media" v-for="(item,index) in arrList" :key="index">      
                    <!-- 内容 -->
                    <div class="media_text" @click="lookPantryDetails(item.articleId)">
                        <!-- 内容头部 -->
                        <div class="media_title">
                            <span>{{item.authorName}}</span>
                            <van-icon name="medel-o" />
                            <van-icon name="ellipsis" class="more" />
                            <van-icon name="ellipsis" class="plus_btn more" :ref="'popRef' + index"  @click.stop="showMore($event,index)">
                                <!-- 收藏和举报弹框 -->
                                <ul class="plus_cont" v-show="isShow == index">
                                    <li>
                                        <van-icon name="star-o" />
                                        <div>收藏</div>
                                    </li>
                                    <li>
                                        <van-icon name="warn-o" />
                                        <div>举报</div>
                                    </li>
                                </ul>
                            </van-icon>
                        </div>
                        <!-- 内容中间 -->
                        <div class="cont_box">
                            <!-- 左边内容 -->
                            <div class="cont_left">
                                <p class="media_details ellipsis_two">{{item.context}}</p>
                                <!-- 标签
                                    <div class="media_label clearfix">
                                    <div class="label_item" v-for="(val, key) in item.label" :key="key">
                                        <van-icon class="iconfont my-icon-biaoqian" />
                                        <span>{{val}}</span>
                                    </div>
                                </div> -->
                            </div>
                            <!-- 右边图片 -->
                            <div class="cont_right">
                                <van-image width="88" height="64" :src="item.image" />
                            </div>
                        </div>
                        
                    </div>
                    <!-- 点赞分享评论区 -->
                    <div class="media_operate">
                        <van-row>
                            <!-- 点赞 -->
                            <van-col span="8">
                                <van-icon class="iconfont my-icon-dianzan" :class="{active_dianzan:item.isPraise}" @click="giveThumbs(item.isPraise,item.articleId)"/>
                                <span class="number">{{item.likeNum}}</span>
                            </van-col>
                            <!-- 分享 -->
                            <van-col span="8">
                                <van-icon class="iconfont my-icon-icon--" />
                                <span class="number">{{item.shareNum}}</span>
                            </van-col>
                            <!-- 评论 跳转详情页-->
                            <van-col span="8" @click.stop="lookPantryDetails(item.articleId)">
                                <van-icon name="comment-o" />
                                <span class="number">{{item.commentNum}}</span>
                            </van-col>
                        </van-row>
                    </div>
                </div>
            </div>
            <!-- 编辑 -->
            <div class="edit_box">
                <van-icon class="iconfont my-icon-bianji" @click="issuePantry" />
            </div>
        </div>
    </div>
</template>



<script>
import { findPage,praiseArticle } from '@/config/musicSharing'
export default {
    name: "pantry", //乐分享---茶水间
    data() {
        return {
            isShow: -1,   // 收藏和举报弹窗
            arrList: []
        };
    },
    methods: {
        getList() { // 获取列表
            let params = {
                pageNum: 1,
                pageSize: 10,
                type: 1 //1-茶水间;2-朋友圈;3-之汇
            };
            findPage(params).then(res => {
                console.log(res);
                if (res.data.status == 10000) {
                    this.arrList = res.data.data.list;
                    console.log(this.arrList)
                    console.log("请求成功");
                } else {
                    console.log("请求失败");
                }
            });
        },

        lookMessage() { // 查看消息通知
            this.$router.push({
                path: "/musicSharing/lookMessage",
                query: {}
            });
        },

        showMore(event, index) { // pop切换显示
            this.isShow = this.isShow == index ? -1 : index;
        },

        giveThumbs(isPraise,id) { // 点赞
        console.log(id)
            praiseArticle({
                articleId:id,
            }).then((res) => {
                if(res.data.status == 10000){
                    this.getList()
                } else {
                    this.$toast({message:"不能重复点赞",duration:1000})
                }
            })
        },

        lookPantryDetails(id) { // 查看详情
            this.$router.push({
                name: "lookPantryDetails",
                params: {detailsId:id}
            });
        },
        issuePantry() { // 发送茶水间
            this.$router.push({
                path: "/musicSharing/issuePantry",
                query: {}
            });
        }
    },
    mounted() {
        let _this = this;
        this.$nextTick(() => {
            document.addEventListener("click", function(e) {
                if (e.target.className.indexOf("plus_btn") != -1) return;
                _this.isShow = -1;
            });
        });
    },
    created() {
        this.getList();
    }
};
</script>

<style lang="less" scoped>
.pantry {
    background-color: #fff;
    .mainBox {
        height: calc(100vh - 44px);
        text-align: left;
        // padding-bottom: 90px;
        .message_box {
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: rgba(102, 146, 255, 0.06);
            .van-image {
                position: relative;
                top: 6px;
            }
            .message_text,
            .rightArrow {
                font-size: 12px;
                color: #6692ff;
            }
            .message_text {
                margin: 0 10px 0 8px;
            }
            .rightArrow {
                position: relative;
                top: 2px;
            }
        }
        .media_box {
            margin-bottom: 100px;
            .media{
                box-sizing: border-box;
                font-size: 12px;
                color: #333;
                padding: 10px 20px 0px 20px;
                border-bottom: 4px solid #f5f5f5;
                .media_text {
                    width: 100%;
                    padding: 0 10px;
                    padding-bottom: 10px;
                    .media_title {
                        width: 100%;
                        color: #666;
                        position: relative;
                        > .van-icon {
                            color: #85cb35;
                            margin-left: 6px;
                            top: 2px;
                        }
                        .more {
                            position: absolute;
                            right: 10px;
                            color: #666;
                        }
                    }
                    .cont_box{
                        display: flex;
                        justify-content: space-between;
                        .cont_left{
                            width: 100%;
                            margin-right: 20px;
                            .media_details {
                                font-weight: 500;
                                margin: 6px 0;
                            }
                            .media_label {
                                .label_item {
                                    float: left;
                                    margin-right: 16px;
                                    .van-icon {
                                        margin-right: 6px;
                                        top: 2px;
                                    }
                                }
                            }
                        }
                        .cont_right{
                            width: 88px;
                            height: 64px;
                        }
                    }
                }
                .media_operate {
                    text-align: center;
                    border-top: 1px solid #f5f5f5;
                    height: 30px;
                    line-height: 30px;
                    font-size: 10px;
                    color: #999;
                    .van-icon {
                        margin-right: 6px;
                        top: 2px;
                    }
                    .my-icon-dianzan {
                        top: 0px;
                    }
                    .my-icon-icon-- {
                        font-size: 16px;
                    }
                    .active_dianzan {
                        color: #ffb865;
                    }
                }
            }
            // .media:last-child {
            //     border-bottom: none;
            // }
        }
        .edit_box {
            text-align: center;
            position: fixed;
            z-index: 9999;
            width: 40px;
            height: 40px;
            line-height: 44px;
            border-radius: 50%;
            background: rgba(170, 219, 115, 1);
            box-shadow: 0px 2px 4px 0px rgba(140, 169, 108, 0.5);
            font-size: 20px;
            color: #fff;
            bottom: 70px;
            right: 14px;
        }
        .plus_cont {
            position: absolute;
            top: 20px;
            right: -10px;
            z-index: 999;
            font-size: 12px;
            color: #fff;
            width: 100px;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 4px;
            &::before {
                content: "";
                width: 0px;
                height: 0px;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-bottom: 6px solid rgba(0, 0, 0, 0.8);
                font-size: 0;
                line-height: 0;
                position: absolute;
                right: 12px;
                top: -5px;
                z-index: 9999;
            }
            li {
                line-height: 30px;
                .van-icon {
                    font-size: 16px;
                    float: left;
                    margin: 8px 0px 0px 8px;
                }
                div {
                    margin-left: 30px;
                    border-bottom: 1px solid #666;
                }
            }
            li:last-child {
                div {
                    border-bottom: 0px;
                }
            }
        }
    }
    .plus_cont {
        position: absolute;
        top: 20px;
        right: 0px;
        z-index: 999;
        font-size: 12px;
        color: #fff;
        width: 100px;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 4px;
        &::before {
            content: "";
            width: 0px;
            height: 0px;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 6px solid rgba(0, 0, 0, 0.8);
            font-size: 0;
            line-height: 0;
            position: absolute;
            right: 12px;
            top: -5px;
            z-index: 9999;
        }
        li {
            line-height: 30px;
            .van-icon {
                font-size: 16px;
                float: left;
                margin: 0px 0px 0px 8px;
            }
            div {
                margin-left: 30px;
                border-bottom: 1px solid #666;
            }
        }
        li:last-child {
            div {
                border-bottom: 0px;
            }
        }
    }
}
</style>
