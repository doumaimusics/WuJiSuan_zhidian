<template>
    <div class="position_box">
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
                        :title="item.positionName"
                        @click="handleSelectPosition(item)"
                    />
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
import { queryPositionInfo } from "@/config/register";
export default {
    name: "selectPosition", //选择职位名称
    components: {},
    data() {
        return {
            searchVal: "",
            list: [
                {
                    text: "产品经理",
                    id: 0
                },
                {
                    text: "数据产品经理",
                    id: 1
                },
                {
                    text: "后台产品经理",
                    id: 2
                },
                {
                    text: "策略产品经理",
                    id: 3
                },
                {
                    text: "金融产品经理",
                    id: 4
                },
                {
                    text: "高级产品经理",
                    id: 5
                }
            ]
        };
    },
    mounted() {},
    created() {
        this.onSearch();
    },
    watch: {},
    methods: {
        /**
         *返回上一页
         */
        goBack() {
            this.$router.go("-1");
        },
        /**
         * 确定搜索
         */
        onSearch() {
            const vm = this;
            console.log(this.searchVal);
            let params = {
                searchName: this.searchVal
            };
            queryPositionInfo(params).then(res => {
                if (res.data.status == 10000) {
                    console.log(res.data.data);
                    vm.list = res.data.data;
                } else {
                    _this.$toast(res.data.data);
                }
            });
        },
        /**
         * 取消搜索
         */
        onCancel() {
            this.searchVal = "";
        },
        /**
         * 选择职位名称
         */
        handleSelectPosition(item) {
            // console.log(item);
            this.$store.dispatch("setPersonalInfoPosition", item);
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="less" scoped>
.position_box {
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
        }
    }
}
</style>
