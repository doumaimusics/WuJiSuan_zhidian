<template>
    <div class="payCalculator">
        <van-nav-bar :title="this.$store.getters.navBarTitle" left-arrow @click-left="goBack" class="nav_bar"/>        
        <div class="main_box">
            <van-tabs swipeable :border="false" title-active-color="#333">
                <!-- 税后工资计算器 -->
                <van-tab title="税后工资">
                    <van-cell-group :border="false" >
                        <van-cell title="税前月薪(元)" class="padin">
                            <van-field placeholder="请输入税前月薪" />
                        </van-cell>
                    </van-cell-group>
                    <van-cell-group :border="false" @click="isSocialSecurityFun">
                        <van-cell title="杭州五险一金" class="padin">
                            <van-field placeholder="请输入五险一金" />
                        </van-cell>
                        <!-- 箭头切换 -->
                         <van-icon class="icon_post"  :name="arrowDown" />

                         <!-- 社保列表 -->
                        <div class="socialSecurity" v-show="isSocialSecurity">
                            <div style="margin-bottom:20px;padding-left:30px;">
                                <van-tag  round plain type="danger">标签<van-icon name="arrow-down" /></van-tag>
                            </div>
                            <div class="list">
                                <ul>
                                    <li>
                                        <div>社保缴纳基数</div>
                                        <div></div>
                                        <div>24,311.00</div>
                                    </li>
                                    <li>
                                        <div>公积金比例</div>
                                        <div>12%</div>
                                        <div>2,917.32</div>
                                    </li>
                                    <li>
                                        <div>公积金缴纳基数</div>
                                        <div></div>
                                        <div>1355.4233</div>
                                    </li>
                                    <li>
                                        <div>养老比例</div>
                                        <div>12%</div>
                                        <div>12,1212.00</div>
                                    </li>
                                    <li>
                                        <div>医疗比例</div>
                                        <div>12%</div>
                                        <div>1212</div>
                                    </li>
                                    <li>
                                        <div>失业比例</div>
                                        <div>12%</div>
                                        <div>1212</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </van-cell-group>
                    <van-cell-group :border="false">
                        <van-cell title="个人所得税" class="padin">
                            <van-field placeholder="请输入个人所得税" />
                        </van-cell>
                    </van-cell-group>
                    <van-cell-group :border="false"> 
                        <van-cell title="月薪(元)" class="padin">
                            <span class="salary"></span>
                        </van-cell>
                    </van-cell-group>
                </van-tab>

                <!-- 年薪计算器 -->
                <van-tab title="年薪计算">
                    <van-cell-group>
                        <van-cell title="月基本工资(元)" class="padin">
                            <van-field placeholder="请输入月基本工资" />
                        </van-cell>
                    </van-cell-group>
                    <van-cell-group>
                        <van-cell title="年终奖金(元)" value="内容" class="padin" />
                    </van-cell-group>
                    <van-cell-group>
                        <van-cell title="股票/期权年度金额(元)" value="内容" class="padin" />
                    </van-cell-group>
                    <van-cell-group>
                        <van-cell title="其他补贴(元)" value="内容" class="padin" />
                    </van-cell-group>
                     <van-cell-group>
                        <van-cell title="年薪(元)" class="padin">
                            <span class="salary">1212</span>
                        </van-cell>
                    </van-cell-group>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name:'payCalculator',
    data(){
        return {
            isSocialSecurity:false,
            arrowDown:'arrow-down'
        }
    },
    methods:{
        isSocialSecurityFun(){   // 点击展开社保
            this.isSocialSecurity = !this.isSocialSecurity;
            if(!this.isSocialSecurity){  // 箭头切换
                this.arrowDown = 'arrow-down'
            } else {
                this.arrowDown = 'arrow-up'
            }
        },
        goBack(){
            this.$router.go("-1")
        }
    }
}
</script>

<style scoped src="../../../../assets/css/navTar.css"></style>
<style lang="less" scoped>
    .payCalculator{
        box-sizing: border-box;
        .main_box{
            padding-top: 16px;
            font-size: 14px;
            .salary{
                color: #6692ff;
            }
            .socialSecurity{
                text-align: left;
                border-top: 1px solid #f5f5f5;
                margin-top: 20px;
                padding-top: 10px;
                position: relative;
                .van-tag{
                    padding: 2px 5px;
                    border-radius: 20px;
                    color: #999;
                }
                .list{
                    ul{
                        li{
                            display: flex;
                            line-height: 24px;
                            color: #666;
                            padding-left: 30px;
                            div{
                                width:33.33%;
                                text-align: center;

                            }
                        }
                        li:nth-child(1),li:nth-child(3){
                            background: #f5f5f5;
                            color: #333;
                        }
                    }
                }
            }
            /deep/ .van-tabs__wrap{
                border-bottom: 1px solid #f5f5f5;
                margin-bottom: 20px;
            }
            /deep/ .van-tabs__line{
                background: #6692FF;
            }
            /deep/ .van-tabs__content{
                padding: 0 28px;
            }
            
            /deep/ .van-cell-group{
                border: 1px solid #6692FF;
                margin-bottom: 20px;
                border-radius: 4px;
                padding: 15px 0px;
                .van-cell:not(:last-child)::after{
                     border-bottom: none;  
                }
                .padin{
                    padding: 0 30px;
                }
                position: relative;
                    .icon_post{
                        position: absolute;
                        right: 4px;
                        top: 20px;
                        color: #6692FF;
                    }
            }
            /deep/ .van-cell__title{
                text-align: left;
            }
            /deep/ .van-field__control{
                text-align: right;
                color:#333;
                font-size: 14px;
            }
        }
    }
</style>