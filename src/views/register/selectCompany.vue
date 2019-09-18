<template>
    <div class="company_box">
        <!-- 导航栏 -->
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" />
        <!-- 选择职位名称 -->
        <div class="area_main">
            <div class="search_box">
                <form action="/">
                    <van-search
                        v-model="searchVal"
                        placeholder="请输入搜索关键词"
                        show-action
                        @search="onSearch"
                        @cancel="onCancel"
                    />
                </form>
            </div>
            <div class="search_cont">
                <van-list>
                    <van-cell
                        v-for="(item,index) in list"
                        :key="index"
                        :title="item.companyName"
                        @click="handleSelectPosition(item)"
                    />
                </van-list>

                <!-- 当搜索当公司不存在时候显示 -->
                <van-cell class="item_null_box" @click="handleSelectPosition({companyName:searchVal,companyId:0})" :title="searchVal"  v-if="list.length == 0"/>
            </div>
        </div>
    </div>
</template>

<script>
import { queryCompanyInfo } from "@/config/register";
import { setTimeout } from 'timers';
export default {
    name: "selectPosition", //选择公司名称
    components: {},
    data() {
        return {
            searchVal: "",
            list: []
        };
    },
    mounted() {},
    created() {
        this.onSearch();
    },
    watch: {},
    methods: {
        
        goBack() {  //返回上一页
            this.$router.go("-1");
        },
        
        onSearch() {  // 确定搜索
            const vm = this;
            let params = {
                searchName: this.searchVal
            };
            queryCompanyInfo(params).then(res => {
                if (res.data.status == 10000) {
                    vm.list = res.data.data;
                    console.log(vm.list)
                } else {
                    this.$toast(res.data.data);
                }
            });
        },
        
        onCancel() {  // 取消搜索
            this.searchVal = "";
        },
        
        handleSelectPosition(item) {  //选择公司名称
            this.$store.dispatch("setPersonalInfoCompany", item);
            console.log(this.$store.getters.personalInfoCompany.companyName)
            this.$router.go(-1);
        }
    },
    watch: {
        searchVal(val){
            setTimeout(() => {
                this.onSearch();
            },200)
        }
    },
};
</script>

<style lang="less" scoped>
.company_box {
    width: 100%;
    background-color: #fff;
    .van-nav-bar__title {
        max-width: none;
    }
    .area_main {
        text-align: left;
        height: calc(100vh - 46px);
        .search_box {
            border-bottom: 1px solid #f5f5f5;
            .van-search {
                height: 40px;
                line-height: 40px;
                .van-search__content {
                    background-color: #fff;
                }
                padding: 0 20px;
            }
        }
        .search_cont {
            .van-list {
                .van-cell {
                    height: 40px;
                    line-height: 40px;
                    font-size: 12px;
                    padding-left: 20px;
                }
            }
            .item_null_box{
                height: 40px;
                line-height: 40px;
                font-size: 12px;
                padding-left: 20px;
            }
        }
    }
}
</style>
