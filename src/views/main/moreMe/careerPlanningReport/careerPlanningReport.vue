
<template>
    <div class="careerPlanningReport">
        <van-nav-bar :title="this.$store.getters.navBarTitle"  left-arrow @click-left="goBack"   class="nav_bar"/>        
        <!-- 未付费 和 已付费展示页面 -->
        <career-show v-if="informs.status == 2" :isPay="informs.type" :context="informs.context"></career-show>

        <!-- 等待生成 和 生成失败展示页面 -->
        <career-null v-else :isSuccess="informs.status" :isPay="informs.type" :createtime="informs.createtime"></career-null>
    </div>
</template>
<script>
import { getCareerReport } from '@/config/moreMe'
import CareerShow from '../components/careerPlanningReport/careerShow';   // 未付费和已付费展示
import CareerNull from '../components/careerPlanningReport/careerNull';   // 等待生成和生成失败展示
export default {
    name:'careerPlanningReport',
    data(){
        return{
            isPage:2,  // 1:未付费和已付费的展示页，2:等待生成和生成失败的展示页面；
            informs:{}
        }
    },
    methods:{
        goBack(){   // 返回上一页
            this.$router.go("-1")
        },
        getDataInfo(){  // 获取职业规报告
            getCareerReport({

            }).then((res) => {
                if(res.data.status == 10000) {
                    this.informs = res.data.data;
                    console.log(this.informs)
                }
            })
        }
    },
    components:{
        CareerShow,
        CareerNull
    },
    created () {
        this.getDataInfo();
    }
}
</script>

<style scoped src="../../../../assets/css/navTar.css"></style>
<style lang="less" scoped>
    .careerPlanningReport{
        box-sizing: border-box;
        text-align: left;
        
    }
</style>