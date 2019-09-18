<!--更多信息模块-->
<template>
    <div class="media_box">
        <div class="media_title">更多信息</div>
        <div class="infor_box">
            <van-row v-if="isSelect == 1">
                <van-col span="12">
                    <span class="name">生日</span>
                    <span class="val">06/16</span>
                </van-col>
                <van-col span="12">
                    <span class="name">家乡</span>
                    <span class="val">浙江-杭州</span>
                </van-col>
            </van-row>
            <van-row v-else>
                <van-col span="12">
                    <span class="name">生日</span>
                    <span class="selectVal"  @click="isShowTiem = true">06/16
                        <van-icon name="arrow" />
                    </span>
                </van-col>
                <van-col span="12">
                    <span class="name">家乡</span>
                    <span class="selectVal" @click="isShowArea=true">浙江-杭州
                        <van-icon name="arrow" />
                    </span>
                </van-col>
            </van-row>
        </div>

        <!-- 选择日期 -->
        <van-popup v-model="isShowTiem" position="bottom" :overlay="true">
            <van-datetime-picker
            v-model="currentDate"
            type="date"
            v-if="isShowTiem"
            @cancel="isShowTiem = false"
            @confirm="confirmTiem"
            />
        </van-popup>

        <!-- 选择地址 -->
        <van-popup v-model="isShowArea" position="bottom" :overlay="true">
            <van-area 
            :area-list="areaList" 
            value="110101" 
            @cancel="isShowArea = false"
            @confirm="confirmArea"/>
        </van-popup>
    </div>
</template>

<script>
import AddressInfo from '../../../../../common/area/area'  // 引入地址
export default {
    data(){
        return {
            isShowTiem:false,
            currentDate: new Date(),
            timeText:'',
            isShowArea:false,
            areaList:AddressInfo
        }
    },
    props:[
        "isSelect",   // 1展示地址，2选择地址
    ],
    methods:{
        confirmTiem(e){   // 选择日期
            console.log(e)
            this.isShowTiem = false;
        },
        confirmArea(e) {  // 选择地址
            console.log(e);
            this.isShowArea = false;
        }
    }
}
</script>

<style lang="less" scoped>
.media_box {
  border-bottom: 4px solid #f5f5f5;
  padding: 0px 10px 18px 10px;
  text-align: left;
  .media_title {
    font-size: 14px;
    color: #666;
    margin-top: 16px;
    position: relative;
    padding-left: 14px;
    margin-bottom: 25px;
    &::before {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: rgba(102, 146, 255, 1);
        position: absolute;
        top: 8px;
        left: 0px;
    }
  }
  .infor_box{
      font-size: 12px;
      color: #999;
      padding-left: 15px;
      .val {
        color: #333;
        margin-left: 24px;
      }
      .selectVal{
        margin-left: 24px;
        padding: 10px 20px;  
        background: #ccc;
      }
  }
}
</style>