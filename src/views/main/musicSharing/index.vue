<template>
    <div class="musicSharing">
        <!-- 主体 -->
        <div class="mainBox">
            <van-tabs v-model="active" title-active-color="#fff" title-inactive-color="#F5F5F5">
                <van-tab title="之汇">
                    <Exchange/>
                </van-tab>
                <van-tab title="茶水间">
                    <keep-alive >
                    <Pantry/>
                    </keep-alive>
                </van-tab>
                <van-tab title="好友圈">
                    <FriendsCircle/>
                </van-tab>
            </van-tabs>
        </div>
        
        <!-- Tabbar 标签栏 -->
        <tabBar :tabActive="tabActive" class="tabBar"></tabBar>
    </div>
</template>

<script>
import Exchange from './exchange/exchange';
import Pantry from './pantry/pantry';
import FriendsCircle from './friendsCircle/friendsCircle';
import tabBar from '@/components/tabbar';
export default {
    name: 'musicSharing',//乐分享
    data () {
        return {
            active: 1,
            tabActive: 2,
        }
    },
    methods:{
    },
    components: {
        tabBar,
        Exchange,
        Pantry,
        FriendsCircle
    },
    mounted() {
        
    },
    created() {
        this.active = this.$route.query.type ? this.$route.query.type : 0;
    }
}
</script>

<style lang="less" scoped>
.musicSharing {
    background-color: #fff;
    .mainBox {
        min-height: calc(100vh);
        text-align: left;
        .van-tabs {
            /deep/ .van-tabs__wrap {
                background: linear-gradient(#66adff, #6692ff) !important;
            }
            /deep/ .van-tabs__nav {
                background: rgba(225, 225, 225, 0);
                width: 50%;
            }
            /deep/ .van-tab--active {
                font-weight: 500;
            }
            /deep/ .van-tabs__line {
                background-color: #fff;
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
