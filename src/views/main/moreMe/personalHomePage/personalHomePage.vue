<template>
    <div class="personal">
        <!-- 头部 -->
        <persona-top :avatar="userInfos.avatar"
        :username="userInfos.username"
        :company="userInfos.company"
        :position="userInfos.position"
        :graduatedSchool="userInfos.graduatedSchool"
        :userId="userInfos.userId"
        :introduction="userInfos.introduction"></persona-top>
        <!-- 主题部分 -->
        <!-- 工作经历 -->
        <experience-main 
        mediaTitle="工作经历" 
        :experienceData="userInfos.workExperiences"
        mediaTitleType="1"
       @toDetaile="toDetaile"
        btnText="添加工作经历"
        @addExperience="addExperience"></experience-main>

        <!-- 教育经历 -->
        <experience-main 
        mediaTitle="教育经历" 
        :experienceData="userInfos.educations"
        mediaTitleType="2"
        @toDetaile="toDetaile"
        btnText="添加教育经历"
        @addExperience="addExperience"></experience-main>

        <!-- 职业标签 -->
        <label-modular 
        mediaTitle="职业标签" 
        :tagData="occupationTag" 
        btnText="添加职业标签"
        @isShowPop="isShowPop"></label-modular>

        <!-- 更多信息模块 -->
        <more-inform isSelect="1"></more-inform>

        <!-- 添加职业标签弹出 -->
        <van-popup round  v-model="isAddOcccup">
            <div class="popup_box">
                <van-cell-group :border="false">
                   <input class="input_box" type="text" placeholder="请输入标签">
                    <van-button  type="info" @click="isAddOcccup=false">确认添加</van-button>
                </van-cell-group>
            </div>
        </van-popup>

    </div>
</template>


<script>
import { getUserInfo } from '@/config/moreMe'
import PersonaTop from '../components/personalHomePage/personaTop';  // 头部模块
import ExperienceMain from '../components/personalHomePage/experience';   // 经历模块
import LabelModular from '../components/personalHomePage/labelModular';   // 标签模块
import MoreInform from '../components/personalHomePage/moreInform';   // 更多信息模块
export default {
    name:'personalHomePage',
    data () {
        return {
            userInfos:'', // 工作经历数据
            occupationTag:[
                { text:'交互设计师' },
                { text:'用户体验(UE/UX)' },
                { text:'协调沟通能力' },
                { text:'IT互联网' },
                { text:'交互设计师' },
                { text:'交互设计师' }
            ],
            isAddOcccup:false,   // 添加职业标签弹窗
        }
    },
    methods: {
        getUser() {    // 获取个人信息
            let params = {
                userId:this.$route.query.id
            }
            getUserInfo(params).then((res) => {
                console.log(res)
                if(res.data.status == 10000) {
                    this.userInfos = res.data.data;
                    console.log(this.userInfos)
                } else {
                    this.$toast(res.data.data);
                }
            })
        },
        toDetaile(data) {    // 跳转经历详情
            this.$router.push({
                path:'/main/moreMe/experienceDetails'
            })
        },
        addExperience(val) {   // 按钮事件，跳转对应添加或编辑页面
            console.log(val)
            if(val == 1) {
                this.$router.push({    // 跳转工作经历
                    name:'addExperience'
                })
            } else {
                this.$router.push({   // 跳转教育经历
                    name:'educationalExperience'
                })
            }
        },
        isShowPop() {   // 添加标签
             console.log(111)
            this.isAddOcccup = true;
        }
    },
    created () {
        this.getUser();  
    },
    components:{
       PersonaTop,
       ExperienceMain,
       LabelModular,
       MoreInform
    }
}
</script>

<style lang="less" scoped>
.input_box::-webkit-input-placeholder {font-size: 14px;}
        .input_box:-moz-placeholder {font-size: 14px;}
        .input_box:-ms-input-placeholder {font-size: 14px;}​
    .media_box:last-child{
        border:none;
    }
    .van-popup{
        width: 100%;
        background: transparent;
    }
    .popup_box{
        width: 70%;
        height: 100px;
        background: #fff;
        margin: 0 auto;
        border-radius: 8px;
        padding: 30px 10px;
        .input_box{
            border: 1px solid #f5f5f5;
            height: 40px;
            border-radius: 8px;
            margin-bottom: 10px;
            padding: 5px;
            font-size: 20px;
        }
       
    }
     
</style>