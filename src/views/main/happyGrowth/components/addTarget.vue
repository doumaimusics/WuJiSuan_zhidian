<template>
    <div class="addTarget">
        <!-- 导航栏 -->
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" />
        <!-- 工作目标 -->
        <div class="add_main">
            <div class="label_name">目标行业</div>
            <van-cell :title="target.industryName" is-link to="/register/selectIndustry" />
            <div class="label_name">公司名称</div>
            <van-cell :title="target.companyName || ' '" is-link to="/register/selectCompany" />
            <!-- <van-cell :title="target.company" is-link/> -->
            <div class="label_name">目标职位</div>
            <van-cell :title="target.positionName" is-link to="/register/selectPosition" />
            <div class="label_name">达成时间</div>
            <van-cell :title="target.expectDate" @click="showTimePicker" />
            <van-popup v-model="timePicker" round position="bottom" :style="{ height: '20%' }">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    @confirm="handleTimePickerConfirm"
                    @cancel="handleTimePickerCancel"
                />
            </van-popup>
            <div class="label_name">目标薪资（年薪）</div>
            <!-- <van-cell :title="target.salary" is-link to="/register/selectIndustry" /> -->
            <van-field v-model="target.expectSalary" clearable placeholder="请输入" />
            <van-button round size="large" class="next_btn" @click="submitNext">查看目标能力/下一步</van-button>
        </div>
    </div>
</template>

<script>
import { saveUserGoal } from "@/config/register";
export default {
    name: "addTarget", //悦成长---工作目标
    data() {
        return {
            target: {
                companyName: this.$store.getters.personalInfoCompany.companyName,   // 公司名称
                companyId: this.$store.getters.personalInfoCompany.companyId,    // 公司id
                industryName: this.$store.getters.personalInfoIndystry.industryName,
                industryId: this.$store.getters.personalInfoIndystry.industryId,
                positionName: this.$store.getters.personalInfoPosition.positionName,
                positionId: this.$store.getters.personalInfoPosition.positionId,
                expectDate: "",
                expectSalary: 100000
            },
            timePicker: false,
            currentDate: new Date()
        };
    },
    methods: {
        //返回上一页
        goBack() {
            this.$router.go("-1");
        },
        //显示时间选择弹框
        showTimePicker() {
            this.timePicker = true;
        },
        //时间选择---完成按钮时触发的事件
        handleTimePickerConfirm(val) {
            // console.log(this.format_timestamp(this.format_slowTime(val)).withoutTime);
            this.target.expectDate = this.format_timestamp(
                this.format_slowTime(val)
            ).withoutTime;
            this.timePicker = false;
        },
        //时间选择---点击取消按钮时触发的事件
        handleTimePickerCancel() {
            this.timePicker = false;
        },
        //下一步
        submitNext() {
            const vm = this;
            let params = this.target;
            params.userId = JSON.parse(
                window.localStorage.getItem("userInfo")
            ).userId;

            saveUserGoal(params).then(res => {
                if (res.data.status == 10000) {
                    this.$toast("成功");
                    setTimeout(() => {
                        this.$router.push({
                            path: "/happyGrowth/capabilityAnalysis",
                            query: {}
                        });
                    }, 1000);
                    console.log(res.data.data);
                } else {
                    this.$toast(res.data.data);
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.addTarget {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    .van-nav-bar__title {
        max-width: none;
    }
    .add_main {
        text-align: left;
        height: calc(100vh - 46px);
        width: 260px;
        margin: 0 auto;
        padding-top: 20px;
        .label_name {
            font-size: 16px;
            color: #333;
            margin-bottom: 6px;
        }
        .van-cell {
            font-size: 16px;
            color: #333;
            height: 46px;
            line-height: 46px;
            background-color: #f6f9ff;
            border-radius: 6px;
            margin-bottom: 14px;
            padding: 0px 10px 0px 24px !important;
            .van-cell__right-icon {
                margin-top: 12px;
            }
        }
        .next_btn {
            border: 1px solid #6692ff;
            color: #6692ff;
        }
    }
}
</style>
