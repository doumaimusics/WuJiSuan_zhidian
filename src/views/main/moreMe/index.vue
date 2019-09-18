<template>
    <div class="moreMe">
        <!-- 头部 -->
        <userTop :userName="userInfos.username" :avatar="userInfos.avatar" :company="userInfos.company" :position="userInfos.position" :userId="userInfos.userId"/>
        <!-- 主体 -->
        <mainBox :dynamicNum="userInfos.dynamicNum" :friendNum="userInfos.friendNum" :visitorNum="userInfos.visitorNum"/>        
        <!-- Tabbar 标签栏 -->
        <tabBar :tabActive="tabActive" class="tabBar"></tabBar>
    </div>
</template>

<script>
const userInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log(userInfo)
import { getUserInfo } from '@/config/moreMe'
import tabBar from '@/components/tabbar';
import userTop from './components/index/userTop'
import mainBox from './components/index/mainBox'
export default {
    name: 'moreMe',//越自己
    data () {
        return {
            tabActive: 3,
            userInfos:{}
        }
    },
    methods: {
        getUser() {
            let params = {
                userId: JSON.parse(localStorage.getItem("userInfo")).userId
            }
            getUserInfo(params).then((res) => {
                if(res.data.status == 10000) {
                    this.userInfos = res.data.data;
                    console.log(this.userInfos)
                } else {
                    this.$toast(res.data.data);
                }
            })
        }   
    },
    components: {
        tabBar,
        userTop,
        mainBox
    },
    mounted() {
        
    },
    created() {
        this.getUser()
    },
    
}
</script>

<style lang="less" scoped>
.moreMe {
    background-color: #fff;
    box-sizing: border-box;
    .mainBox {
        height: calc(100vh);
        
    }
}
</style>
