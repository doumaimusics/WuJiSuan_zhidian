<template>
    <div class="readNetwork">
        <!-- 主体 -->
        <div class="mainBox">
            <van-icon name="add-o" class="plus_btn" ref="popRef" @click="isShow = !isShow">
                <ul class="plus_cont" v-show="isShow">
                    <li>
                        <van-icon class="iconfont my-icon-yaoqing" />
                        <div ref="get_btn" @click="getCallLog">获取通讯录</div>
                    </li>
                </ul>
            </van-icon>
            <van-tabs v-model="active" title-active-color="#333" title-inactive-color="#666">
                <van-tab title="图谱">
                    <NetworkEcharts/>
                </van-tab>
                <van-tab title="探索">
                    <Explore/>
                </van-tab>
                <van-tab title="附近">
                    <NearbyMap/>
                </van-tab>
            </van-tabs>


            <!-- <button @click="aaa">跳转</button> -->
        </div>

        
        
        <!-- Tabbar 标签栏 -->
        <tabBar :tabActive="tabActive" class="tabBar"></tabBar>
    </div>
</template>

<script>
import { getAddressBook } from '@/config/readNetwork'
import NetworkEcharts from './components/networkEcharts';
import Explore from './explore/explore';
import NearbyMap from './nearby/nearbyMap';
import tabBar from '@/components/tabbar';
export default {
    name: 'readNetwork',//阅人脉
    data () {
        return {
            active: 0,
            tabActive: 1,
            isShow: false,
            mailListL:[],   // 通讯录
        }
    },
    methods: {
        // aaa(){
        //     this.$store.dispatch("setMailListData",this.mailListL);
        //     this.$router.push({
        //         name:'addressBook'
        //     })
        // },
        getInfor(data){
            getAddressBook({
                bookStr:data
            }).then(res => {
                if(res.data.status == 10000){
                    console.log(JSON.stringify(res))
                    this.$store.dispatch("setMailListData",res.data.data);
                    this.$router.push({
                        name:'addressBook'
                    })
                } else {
                    this.$toast(res.data.data)
                }
            })
        },
        getCallLog() {   // 打包生app请求通讯录
            let that = this;
            var content="";
            try{
                plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function (addressbook) {
                    addressbook.find(["displayName","phoneNumbers"],function(contacts){
                        that.mailListL = JSON.stringify(contacts)
                        console.log(JSON.stringify(that.mailListL)+'里面的');    // 获取手机号数据
                        console.log("请求接口")
                        that.getInfor(that.mailListL)
                        console.log("请求成功")
                    }, function () {
                        content="error";
                    },{multiple:true});
                },function(e){
                    content="Get address book failed: " + e.message;
                });
            } catch(e){
                content+=e.message;
            }
            console.log(JSON.stringify(that.mailListL)+'外面的');
        }
    },
    components: {
        tabBar,
        NetworkEcharts,
        Explore,
        NearbyMap
    },
    mounted() {
        let _this = this;
        this.$nextTick(() => {
            document.addEventListener("click", function(e) {
                if (e.target.className.indexOf('plus_btn') != -1) return;
                _this.isShow = false;
            });
        })

        this.$nextTick(() => {   // 获取通讯录
            document.addEventListener("plusready", function(){
                console.log("进入获取通讯录阶段")
                plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function(addressbook){
                    console.log("现在是进行通讯录操作")
                },function (e) {
                    console.log("操作有错误！！！")
                })
            },false)
        })

    },
    created() {
    },
    
}
</script>

<style lang="less" scoped>
.readNetwork {
    background-color: #fff;
    .mainBox {
        height: calc(100vh);
        text-align: left;
        position: relative;
        .plus_btn {
            position: absolute;
            top: 10px;
            right: 18px;
            font-size: 20px;
            color: #666;
            z-index: 999;
            .plus_cont {
                position: absolute;
                top: 30px;
                right: -10px;
                z-index: 999;
                font-size:12px;
                color: #fff;
                width: 100px;
                // height: 107px;
                background:rgba(0,0,0,0.8);
                border-radius: 4px;
                &::before {
                    content: "";
                    width: 0px;
                    height: 0px;
                    border-left: 8px solid transparent; 
                    border-right: 8px solid transparent;
                    border-bottom: 6px solid rgba(0,0,0,0.8); 
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
                    .my-icon-saoyisao {
                        font-size: 14px;
                        margin-top: 10px;
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
        .van-tabs {
            /deep/ .van-tabs__wrap {
                width: 50%;
            }
            /deep/ .van-tab--active {
                font-weight: 500;
            }
            /deep/ .van-tabs__line {
                background-color: #6692FF;
            }
            /deep/ .van-hairline--top-bottom::after {
                border-width: 0;
            }
        }
        
    }
    .tabBar {
        position: fixed;
        bottom: 0px;
    }
}
</style>
