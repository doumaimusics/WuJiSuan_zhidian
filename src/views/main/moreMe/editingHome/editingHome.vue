<template >
    <div class="editing">
        <van-nav-bar left-arrow title="编辑" @click-left="goBack"  class="nav_bar" :border="false"></van-nav-bar>
        <van-cell-group :border="false">
            <van-cell class="tx_box" title="头像" is-link>
                <van-uploader :after-read="updatedFun">
                    <img :src="imgUrl" alt v-if="imgUrl"/>
                    <div  class="icon_box" v-else></div>
                </van-uploader>
            </van-cell>

            <van-cell title="姓名" value="小鸡爪" is-link @click="namePop=true"/>
            <van-cell title="性别" :value="submitFormForm.sex"  is-link @click="selectSex"/>
            <van-cell title="地区" value="杭州-滨江" is-link :to="{name:'selectArea'}"/>
            <van-cell title="行业" value="IT/互联网" is-link :to="{name:'selectIndustry'}" />
            <van-cell title="职业方向" value="产品" is-link />
            <van-cell title="自我介绍" />
        </van-cell-group>
        <div class="p_text">
            <van-field
            :border="false"
            type="textarea"
            placeholder="请输入自我介绍"
            rows="3"
            autosize
            />
        </div>

        <!-- 修改姓名 -->
        <van-popup v-model="namePop">
            <van-field  clearable label="用户名" placeholder="请输入用户名"/>
            <van-button type="primary" size="small" @click="namePop=false">确认</van-button>
        </van-popup>

        <!-- 修改性别 -->
        <van-action-sheet v-model="sexSelectStatus" :actions="actions" @select="onSelect" />

    </div>
</template>

<script>
export default {
    name:'editingHome',
    data(){
        return{
            imgUrl:'',   // 头像地址
            sexSelectStatus: false,
            actions: [{ name: "男" }, { name: "女" }],
            submitFormForm:{
                sex:'男'
            },
            namePop:false,    // 修改姓名弹窗
        }
    },
    methods:{
        goBack(){
            this.$router.go("-1")
        },
        updatedFun(file, detail){
            this.imgUrl = file.content
        },
        selectSex() {   // 选择性别
            this.sexSelectStatus = true;
        },
        /**
         *ActionSheet 上拉菜单  选中选项时触发
        */
        onSelect(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
            this.sexSelectStatus = false;
            this.submitFormForm.sex = item.name;
        },
    }
}
</script>

<style lang="less" scoped>
    .editing{
        text-align: left;
        
        .van-cell-group{
            padding-left: 20px;
        }
        .van-nav-bar__title{
            max-width: 100%;
        }
        .van-cell.tx_box{
            height: 80px;
            position: relative;
            .van-icon{
                line-height: 80px;
            }
            .van-cell__title{
                line-height: 80px;
            }
            .van-uploader{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #f5f5ff;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 10px;
                margin: auto;
                /deep/ .van-uploader,
                /deep/ .van-uploader__wrapper,
                /deep/ .van-uploader__input-wrapper,
                /deep/ .icon_box,img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
        }
        .van-cell{
            font-size: 14px;
            line-height: 46px;
            color: #333;
            border-bottom: 1px solid #f5f5f5; 
            padding: 0px 17px 0 0px;
            .van-icon{
                line-height: 45px;
            }
        }
        .van-cell:last-child{
            border: none;
        }
        .van-cell:not(:last-child)::after{
            border: none;
        }
        .p_text{
            font-size: 14px;
            color: #999;
            padding-left: 20px;
        }
        .van-popup{
            width: 100%;
            border-radius: 8px;
            background: #fff;
            padding: 10px;
            text-align: center;
            .van-field{
                margin-bottom: 20px;
            }
        }
    }
</style>