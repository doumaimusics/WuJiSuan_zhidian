<template>
    <van-tabbar
        class="tabbar"
        :safe-area-inset-bottom="true"
        :z-index="99"
        v-model="active"
        active-color="#6692FF">
        <van-tabbar-item 
            @click="tab(item.name)"
            :replace="true" 
            v-for="(item,index) in tabbars" 
            :key="index">
            <i class="iconfont" :class="item.icon"></i>
            <p>{{item.title}}</p>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    name: 'tabbar',
    props: {
        tabActive: Number
    },
    data () {
       return {
            active: this.tabActive,
            tabbars: [
                {
                    name: '/main/happyGrowth',
                    title: '悦成长',
                    icon: 'iconfont my-icon-shujufenxi'
                },
                {
                    name: '/main/readNetwork',
                    title: '阅人脉',
                    icon: 'iconfont my-icon-ai-connection'
                },
                {
                    name: '/main/musicSharing',
                    title: '乐分享',
                    icon: 'iconfont my-icon-wenzhangfenxiang'
                },
                {
                    name: '/main/moreMe',
                    title: '越自己',
                    icon: 'iconfont my-icon-wode-'
                }
            ]
       }
    },
    methods: {
        tab (name) {
            this.$router.push(name)
        }
    }
}
</script>

<style lang="less" scoped>
.tabbar {
    background:#fff;
    border-top: 1px solid #EDEDED;
    height: 50px;
    color:@gray-color;
    i {
        color:@gray-color;
        font-size: 20px;
        display: block;
    }
    .van-tabbar-item--active {
        i {color: #6692FF;}
    }
    p {
        margin-top: 5px;
        font-size: 10px;
    }
}
</style>

