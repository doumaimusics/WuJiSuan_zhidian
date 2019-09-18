<template>
  <div class="lookExperienceDetails">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow @click-left="goBack" />
    <!-- 工作目标 -->
    <div class="add_main">
      <div class="avator_box">
        <van-image round width="70px" height="70px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="avator_name">{{name}}</div>
      </div>
      <div class="details_box">
          <!-- 工作目标 -->
          <ul>
              <li>
                  <div class="title">工作目标</div>
              </li>
              <li>
                  <van-row>
                    <van-col span="6">
                        <van-image
                            width="60px"
                            height="60px"
                            fit="contain"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                    </van-col>
                    <van-col span="16">
                        <div class="time">2019.02</div>
                        <div class="marking">
                            <van-tag>新浪微博</van-tag>
                            <van-tag>资深工程师</van-tag>
                        </div>
                        <span class="salary">27W</span>
                    </van-col>
                    <van-col span="2">
                        <van-icon class="iconfont my-icon-bianji" @click="addTarget"/>
                    </van-col>
                  </van-row>
                  <van-collapse v-model="activeName" accordion>
                    <van-collapse-item title="目标分析" name="1">这里是可展开目标分析，用户设置目标时，自动生成</van-collapse-item>
                  </van-collapse>
              </li>
              <li>
                  <van-row>
                    <van-col span="6">
                        <van-image
                            width="60px"
                            height="60px"
                            fit="contain"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                    </van-col>
                    <van-col span="16">
                        <div class="time">2019.02</div>
                        <div class="marking">
                            <van-tag>新浪微博</van-tag>
                            <van-tag>资深工程师</van-tag>
                        </div>
                        <span class="salary">27W</span>
                    </van-col>
                    <van-col span="2">
                        <van-icon class="iconfont my-icon-bianji" @click="addTarget"/>
                    </van-col>
                  </van-row>
                  <van-collapse v-model="activeName" accordion>
                    <van-collapse-item title="目标分析" name="1">这里是可展开目标分析，用户设置目标时，自动生成</van-collapse-item>
                  </van-collapse>
              </li>
              <li>
                  <van-button plain round type="info" size="large" class="add_btn" @click="addTarget">添加工作目标</van-button>
              </li>
          </ul>
          <!-- 工作经历 -->
          <ul class="experience">
              <li>
                  <div class="title">工作经历</div>
              </li>
              <li class="border_bottom">
                  <van-row>
                    <van-col span="6">
                        <van-image
                            width="60px"
                            height="60px"
                            fit="contain"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                    </van-col>
                    <van-col span="16" class="special">
                        <div class="media_title">新浪微博
                            <span class="position">资深工程师</span>
                            <span class="number">27W</span>
                        </div>
                        <div class="media_time">
                            2022.02-至今
                        </div>
                        <p class="media_details">负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日常帮兄弟背锅。没事的时候给大家讲讲段子。负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日常帮兄弟背锅。没事的时候给大家讲讲段子。负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日……</p>
                    </van-col>
                    <van-col span="2">
                        <van-icon class="iconfont my-icon-bianji" @click="addExperience"/>
                    </van-col>
                  </van-row>
              </li>
              <li class="border_bottom">
                  <van-row>
                    <van-col span="6">
                        <van-image
                            width="60px"
                            height="60px"
                            fit="contain"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                    </van-col>
                    <van-col span="16" class="special">
                        <div class="media_title">新浪微博
                            <span class="position">资深工程师</span>
                            <span class="number">27W</span>
                        </div>
                        <div class="media_time">
                            2022.02-至今
                        </div>
                        <p class="media_details">负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日常帮兄弟背锅。没事的时候给大家讲讲段子。负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日常帮兄弟背锅。没事的时候给大家讲讲段子。负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日……</p>
                    </van-col>
                    <van-col span="2">
                        <van-icon class="iconfont my-icon-bianji" @click="addExperience"/>
                    </van-col>
                  </van-row>
              </li>
              <li>
                  <van-button plain round type="info" size="large" class="add_btn" @click="addExperience">添加工作经历</van-button>
              </li>
          </ul>
          <!-- 教育经历 -->
          <ul class="education">
              <li>
                  <div class="title">教育经历</div>
              </li>
              <li class="border_bottom">
                  <van-row>
                    <van-col span="6">
                        <van-image
                            width="60px"
                            height="60px"
                            fit="contain"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                    </van-col>
                    <van-col span="16" class="special">
                        <div class="media_title">北京大学
                            <span class="position">人工智能</span>
                            <span class="number">硕士</span>
                        </div>
                        <div class="media_time">
                            2022.02-至今
                        </div>
                        <p class="media_details">负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日常帮兄弟背锅。没事的时候给大家讲讲段子。负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日常帮兄弟背锅。没事的时候给大家讲讲段子。负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日……</p>
                    </van-col>
                    <van-col span="2">
                        <van-icon class="iconfont my-icon-bianji" @click="addEducation"/>
                    </van-col>
                  </van-row>
              </li>
              <li class="border_bottom">
                  <van-row>
                    <van-col span="6">
                        <van-image
                            width="60px"
                            height="60px"
                            fit="contain"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                    </van-col>
                    <van-col span="16" class="special">
                        <div class="media_title">北京大学
                            <span class="position">人工智能</span>
                            <span class="number">硕士</span>
                        </div>
                        <div class="media_time">
                            2022.02-至今
                        </div>
                        <p class="media_details">负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日常帮兄弟背锅。没事的时候给大家讲讲段子。负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日常帮兄弟背锅。没事的时候给大家讲讲段子。负责给大家端茶倒水，整理下周报，和PM撕逼（其实我很温柔），日……</p>
                    </van-col>
                    <van-col span="2">
                        <van-icon class="iconfont my-icon-bianji" @click="addEducation"/>
                    </van-col>
                  </van-row>
              </li>
              <li>
                  <van-button plain round type="info" size="large" class="add_btn" @click="addEducation">添加教育经历</van-button>
              </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lookExperienceDetails", //悦成长---经历详情
  data() {
    return {
        name: '小鸡爪',
        activeName: ''
    };
  },
  components: {},
  mounted() {},
  created() {},
  methods: {
    /**
     *返回上一页
     */
    goBack() {
      this.$router.go("-1");
    },
    /**
     * 添加工作目标
     */
    addTarget() {
        this.$router.push({
            path: '/happyGrowth/addTarget',
            query: {
            }
        })
    },
    /**
     * 添加工作经历
     */
    addExperience() {
        this.$router.push({
            path: '/happyGrowth/addExperience',
            query: {
            }
        })
    },
    /**
     * 添加教育经历
     */
    addEducation() {
        // this.$router.push({
        //     path: '',
        //     query: {
        //     }
        // })
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.lookExperienceDetails {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .van-nav-bar__title {
    max-width: none;
  }
  .van-hairline--bottom::after {
    border: 0px;
  }
  .add_main {
    text-align: left;
    height: calc(100vh - 46px);
    .avator_box {
        text-align: center;
        .avator_name {
            font-size:18px;
            color: #333;
            font-weight:500;
        }
    }
    .details_box {
        padding: 0 20px;
        ul {
            border-bottom: 4px solid #F5F5F5;
            padding-top: 20px;
            li {
                // border-bottom: 1px solid #F5F5F5;
                .title {
                    font-size:14px;
                    color: #333;
                }
                .van-row {
                    padding-top: 10px;
                    .van-col--6 {
                        
                    }
                    .van-col--16 {
                        position: relative;
                        border-right: 1px solid #F5F5F5;
                        .time,.media_title {
                            font-size:14px;
                            color: #333;
                            .position,.number {
                                font-size:10px;
                                color: #666;
                            }
                            .position {
                                margin: 0 10px;
                            }
                        }
                        .marking {
                            .van-tag {
                                margin-right: 15px;
                                padding: 4px 6px;
                                background-color: #F8FBFF;
                                color: #6692FF;
                            }
                        }
                        .media_time {
                            font-size:10px;
                            color: #666;
                            margin: 10px 0px;
                        }
                        .media_details {
                            font-size:10px;
                            color: #333;
                        }
                        .salary {
                            position: absolute;
                            top: 20px;
                            right: 15px;
                            font-size:16px;
                            color: #6692FF;
                        }
                    }
                    .special {
                        border-right: 0px;
                    }
                    .van-col--2 {
                        .van-icon {
                            font-size: 16px;
                            color: #999;
                            margin-left: 15px;
                        }
                    }
                }
                .add_btn {
                    margin: 20px 0px 30px;
                }
                
            }
        }
        .experience,.education {
            .border_bottom {
                border-bottom: 1px solid #F5F5F5;
                padding-bottom: 20px;
            }
        }
        .education {
            border-bottom: 0px !important;
        }
    }
  }
}
</style>
