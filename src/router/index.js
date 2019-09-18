import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import { Dialog, Toast } from 'vant'

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ //路由跳转后页面回到顶部
    y: 0
  }), 
  // mode: 'history',
  // base: '/static',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: () => import('@/views/login/login'),
      meta: {
        title: '登录'
      }
    },
    // 退出登录
    // {
    //   path: '/exit',
    //   name: '',
    //   redirect: {
    //     name: 'login'
    //   }
    // },
    /**
     * 登录
     */
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login'),
      meta: {
        title: '登录',
        keepAlive: false
      }
    },
    // 注册引导页---完善资料
    {
      path: '/register/personalInfo',
      name: 'personalInfo',
      component: () => import('@/views/register/personalInfo'),
      meta: {
        title: '完善资料',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 注册引导页---选择地区
    {
      path: '/register/selectArea',
      name: 'selectArea',
      component: () => import('@/views/register/selectArea'),
      meta: {
        title: '选择地区',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 注册引导页---选择行业
    {
      path: '/register/selectIndustry',
      name: 'selectIndustry',
      component: () => import('@/views/register/selectIndustry'),
      meta: {
        title: '选择行业',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 注册引导页---开启人脉圈
    {
      path: '/register/openHumanCircle',
      name: 'openHumanCircle',
      component: () => import('@/views/register/openHumanCircle'),
      meta: {
        title: '开启人脉圈',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 注册引导页---关注主题
    {
      path: '/register/focusTheme',
      name: 'focusTheme',
      component: () => import('@/views/register/focusTheme'),
      meta: {
        title: '关注主题',
        keepAlive: false,
        requireAuth:true,
      }
    },
    /**
     * 悦成长
     */
    {
      path: '/main/happyGrowth',
      name: 'happyGrowth',
      component: () => import('@/views/main/happyGrowth'),
      meta: {
        title: '悦成长',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 工作目标
    {
      path: '/happyGrowth/addTarget',
      name: 'addTarget',
      component: () => import('@/views/main/happyGrowth/components/addTarget'),
      meta: {
        title: '工作目标',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 能力分析
    {
      path: '/happyGrowth/capabilityAnalysis',
      name: 'capabilityAnalysis',
      component: () => import('@/views/main/happyGrowth/components/capabilityAnalysis'),
      meta: {
        title: '能力分析',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 卡特尔16PF测试
    {
      path: '/happyGrowth/evaluation',
      name: 'evaluation',
      component: () => import('@/views/main/happyGrowth/components/evaluation'),
      meta: {
        title: '卡特尔16PF测试',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 卡特尔16PF测试---测试题
    {
      path: '/happyGrowth/testQuestions',
      name: 'testQuestions',
      component: () => import('@/views/main/happyGrowth/components/testQuestions'),
      meta: {
        title: '卡特尔16PF测试',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 工作经历
    {
      path: '/happyGrowth/addExperience',
      name: 'addExperience',
      component: () => import('@/views/main/happyGrowth/components/addExperience'),
      meta: {
        title: '工作经历',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 选择职位
    {
      path: '/register/selectPosition',
      name: 'selectPosition',
      component: () => import('@/views/register/selectPosition'),
      meta: {
        title: '选择职位',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 选择公司
    {
      path: '/register/selectCompany',
      name: 'selectCompany',
      component: () => import('@/views/register/selectCompany'),
      meta: {
        title: '选择公司',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 经历详情
    {
      path: '/happyGrowth/lookExperienceDetails',
      name: 'lookExperienceDetails',
      component: () => import('@/views/main/happyGrowth/components/lookExperienceDetails'),
      meta: {
        title: '经历详情',
        keepAlive: false,
        requireAuth:true,
      }
    },
    /**
     * 阅人脉
     */
    {
      path: '/main/readNetwork',
      name: 'readNetwork',
      component: () => import('@/views/main/readNetwork'),
      meta: {
        title: '阅人脉',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 我的好友---分组
    {
      path: '/readNetwork/allFriendGroups',
      name: 'allFriendGroups',
      component: () => import('@/views/main/readNetwork/components/allFriendGroups'),
      meta: {
        title: '我的好友',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 我的好友---列表
    {
      path: '/readNetwork/allFriendsList',
      name: 'allFriendsList',
      component: () => import('@/views/main/readNetwork/components/allFriendsList'),
      meta: {
        title: '我的好友',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 查看朋友详情
    {
      path: '/readNetwork/lookFriendDetail/:userId',
      name: 'lookFriendDetail',
      component: () => import('@/views/main/readNetwork/components/lookFriendDetail'),
      meta: {
        title: '查看朋友详情',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 自定义分组
    {
      path: '/readNetwork/customeGroups',
      name: 'customeGroups',
      component: () => import('@/views/main/readNetwork/components/customeGroups'),
      meta: {
        title: '自定义分组',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 自定义分组---分组设置
    {
      path: '/readNetwork/customeGroupSettings',
      name: 'customeGroupSettings',
      component: () => import('@/views/main/readNetwork/components/customeGroupSettings'),
      meta: {
        title: '分组设置',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 自定义分组---我的好友
    {
      path: '/readNetwork/lookFriendGroup',
      name: 'lookFriendGroup',
      component: () => import('@/views/main/readNetwork/components/lookFriendGroup'),
      meta: {
        title: '我的好友',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 阅人脉---探索---搜索人脉关系
    {
      path: '/readNetwork/searchNetwork',
      name: 'searchNetwork',
      component: () => import('@/views/main/readNetwork/explore/components/searchNetwork'),
      meta: {
        title: '搜索人脉关系',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 阅人脉---探索---查看他人详情
    {
      path: '/readNetwork/lookOtherDetail',
      name: 'lookOtherDetail',
      component: () => import('@/views/main/readNetwork/explore/components/lookOtherDetail'),
      meta: {
        title: '查看他人',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 阅人脉---探索---查看经历详情
    {
      path: '/readNetwork/lookExperience',
      name: 'lookExperience',
      component: () => import('@/views/main/readNetwork/explore/components/lookExperience'),
      meta: {
        title: '经历详情',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 阅人脉---探索---添加好友
    {
      path: '/readNetwork/addFriend',
      name: 'addFriend',
      component: () => import('@/views/main/readNetwork/explore/components/addFriend'),
      meta: {
        title: '申请成功',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 阅人脉---探索---添加好友---完成
    {
      path: '/readNetwork/addSuccess',
      name: 'addSuccess',
      component: () => import('@/views/main/readNetwork/explore/components/addSuccess'),
      meta: {
        title: '申请成功',
        keepAlive: false,
        requireAuth:true,
      }
    },
    // 阅人脉---探索---通讯录
    {
      path: '/readNetwork/addressBook',
      name: 'addressBook',
      component: () => import('@/views/main/readNetwork/explore/components/addressBook'),
      meta: {
        title: '通讯录',
        keepAlive: false,
        requireAuth:true,
      }
    },
    /**
     * 乐分享
     */
    {
      path: '/main/musicSharing',
      name: 'musicSharing',
      component: () => import('@/views/main/musicSharing'),
      meta: {
        title: '乐分享',
        keepAlive: false,
        requireAuth:true,
      }
    },
    //之汇---头条详情
    {
      // /describe/:id
      path: '/musicSharing/lookDetails/:detaId',
      name: 'lookDetails',
      component: () => import('@/views/main/musicSharing/exchange/lookDetails'),
      meta: {
        title: '头条详情',
        keepAlive: false,
        requireAuth:true,
      }
    },
    //茶水间---查看详情
    {
      path: '/musicSharing/lookPantryDetails/:detailsId',
      name: 'lookPantryDetails',
      component: () => import('@/views/main/musicSharing/pantry/lookPantryDetails'),
      meta: {
        title: '茶水间',
        keepAlive: false,
        requireAuth:true,
      }
    },
    //茶水间---发表茶水间
    {
      path: '/musicSharing/issuePantry',
      name: 'issuePantry',
      component: () => import('@/views/main/musicSharing/pantry/issuePantry'),
      meta: {
        title: '茶水间',
        keepAlive: false,
        requireAuth:true,
      }
    },
    //茶水间---茶水间消息通知
    {
      path: '/musicSharing/lookMessage',
      name: 'lookMessage',
      component: () => import('@/views/main/musicSharing/pantry/lookMessage'),
      meta: {
        title: '茶水间消息通知',
        keepAlive: false,
        requireAuth:true,
      }
    },
    //朋友圈---查看朋友圈详情
    {
      path: '/musicSharing/lookFriendsCircleDetails/:detaId',
      name: 'lookFriendsCircleDetails',
      component: () => import('@/views/main/musicSharing/friendsCircle/lookFriendsCircleDetails'),
      meta: {
        title: '好友圈',
        keepAlive: false,
        requireAuth:true,
      }
    },
    //朋友圈---发表朋友圈
    {
      path: '/musicSharing/issueFriendsCircle',
      name: 'issueFriendsCircle',
      component: () => import('@/views/main/musicSharing/friendsCircle/issueFriendsCircle'),
      meta: {
        keepAlive: false,
        requireAuth:true,
      }
    },
    /**
     * 越自己
     */
    {
      path: '/main/moreMe',
      name: 'moreMe',
      component: () => import('@/views/main/moreMe'),
      meta: {
        title: '越自己',
        keepAlive: false,
        requireAuth:true,
      }
    },
    /**
     * 个人主页
     */
    {
      path:'/main/moreMe/personalHomePage',
      name:'personalHomePage',
      component: () => import('@/views/main/moreMe/personalHomePage/personalHomePage'),
      meta: {
        title: '个人主页',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /**
     * 消息
     */
    {
      path: '/main/moreMe/newsPage',
      name: 'newsPage',
      component: () => import('@/views/main/moreMe/newsPage/newsPage'),
      meta: {
        title: '消息',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /**
     * 好友请求
     */
    {
      path: '/main/moreMe/friendRequest',
      name: 'friendRequest',
      component: () => import('@/views/main/moreMe/friendRequest/friendRequest'),
      meta: {
        title: '好友请求',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 经历详情
    */
    {
      path: '/main/moreMe/experienceDetails',
      name: 'experienceDetails',
      component: () => import('@/views/main/moreMe/experienceDetails/experienceDetails'),
      meta: {
        title: '经历详情',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 添加教育经历
     */
    {
      path: '/main/moreMe/educationalExperience',
      name: 'educationalExperience',
      component: () => import('@/views/main/moreMe/educationalExperience/educationalExperience'),
      meta: {
        title: '教育经历',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 选择学校 
     */
    {
      path: '/main/moreMe/searchSchool',
      name: 'searchSchool',
      component: () => import('@/views/main/moreMe/searchSchool/searchSchool'),
      meta: {
        title: '选择学校',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 选择专业
     */
    {
      path: '/main/moreMe/searchMajor',
      name: 'searchMajor',
      component: () => import('@/views/main/moreMe/searchMajor/searchMajor'),
      meta: {
        title: '选择专业',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 编辑个人信息 
     */
    {
      path: '/main/moreMe/editingHome',
      name: 'editingHome',
      component: () => import('@/views/main/moreMe/editingHome/editingHome'),
      meta: {
        title: '编辑',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 会员中心
     */
    {
      path: '/main/moreMe/membershipCenter',
      name: 'membershipCenter',
      component: () => import('@/views/main/moreMe/membershipCenter/membershipCenter'),
      meta: {
        title: '会员中心',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 用户认证 
     */
    {
      path: '/main/moreMe/userAuthentication',
      name: 'userAuthentication',
      component: () => import('@/views/main/moreMe/userAuthentication/userAuthentication'),
      meta: {
        title: '用户认证',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 认证页面
     */
    {
      path: '/main/moreMe/authenticationPage',
      name: 'authenticationPage',
      component: () => import('@/views/main/moreMe/userAuthentication/authenticationPage'),
      meta: {
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 薪酬计算器
     */
    {
      path: '/main/moreMe/payCalculator',
      name: 'payCalculator',
      component: () => import('@/views/main/moreMe/payCalculator/payCalculator'),
      meta: {
        title: '薪酬计算器',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 我的测评
     */
    {
      path: '/main/moreMe/myAssessment',
      name: 'myAssessment',
      component: () => import('@/views/main/moreMe/myAssessment/myAssessment'),
      meta: {
        title:'我的测评',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 测评结果
     */
    {
      path: '/main/moreMe/testResult',
      name: 'testResult',
      component: () => import('@/views/main/moreMe/testResult/testResult'),
      meta: {
        title: '测评结果',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 职业规划报告
     */
    {
      path: '/main/moreMe/careerPlanningReport',
      name: 'careerPlanningReport',
      component: () => import('@/views/main/moreMe/careerPlanningReport/careerPlanningReport'),
      meta: {
        title: '职业规划报告',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 邀请好友
     */
    {
      path: '/main/moreMe/friendInvitation',
      name: 'friendInvitation',
      component: () => import('@/views/main/moreMe/friendInvitation/friendInvitation'),
      meta: {
        title: '邀请好友',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 邀请活动规则
     */
    {
      path: '/main/moreMe/activityRules',
      name: 'activityRules',
      component: () => import('@/views/main/moreMe/activityRules/activityRules'),
      meta: {
        title: '活动规则',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 设置
     */
    {
      path: '/main/moreMe/setUp',
      name: 'setUp',
      component: () => import('@/views/main/moreMe/setUp/setUp'),
      meta: {
        title: '设置',
        keepAlive: false,
        requireAuth: true,
      },
    },
    /** 
     * 账户与安全
     */
    {
      path: '/main/moreMe/accountSet',
      name: 'accountSet',
      component: () => import('@/views/main/moreMe/accountSet/accountSet'),
      meta: {
        title: '账户与安全',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 绑定手机号
     */
    {
      path: '/main/moreMe/bindingPhone',
      name: 'bindingPhone',
      component: () => import('@/views/main/moreMe/bindingPhone/bindingPhone'),
      meta: {
        title: '绑定手机号',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 绑定成功页面
     */
    {
      path: '/main/moreMe/bindingSuccess',
      name: 'bindingSuccess',
      component: () => import('@/views/main/moreMe/bindingSuccess/bindingSuccess'),
      meta: {
        title: '绑定手机号',
        keepAlive: false,
        requireAuth:true,
      },
    },
    /** 
     * 反馈与建议 
     */
    {
      path: '/main/moreMe/proposalPage',
      name: 'proposalPage',
      component: () => import('@/views/main/moreMe/proposalPage/proposalPage'),
      meta: {
        title: '反馈与建议',
        keepAlive: false,
        requireAuth:true,
      },
    },
    // ------------common-------------
    /** 
     * 聊天 
     */
    {
      path: '/chatPage',
      name: 'chatPage',
      component: () => import('@/components/chatPage'),
      meta: {
        keepAlive: false,
        requireAuth:true,
      },
    },
  ]
})


// router.beforeEach((to,from,next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title;
//     store.dispatch('setNavBarTitle',to.meta.title);
//   }
//   if(to.name == 'login'){
//       next();
//   }else{
//       if(store.getters.token){
//           next();
//       }else{
//         next({
//           path: '/login'
//         })
//       }
//   }
//   // next();
// })

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
    store.dispatch('setNavBarTitle', to.meta.title);
  }
  if (to.matched.some(m => m.meta.requireAuth)) { // 需要登录
    if (window.localStorage.token) {
      next()
    } else if (to.path !== '/login') {
      let token = window.localStorage.token;
      if (token === 'null' || token === '' || token === undefined) {
        next({
          path: '/login'
        })
        Toast({
          message: '检测到您还未登录,请登录后操作！',
          duration: 1500
        })
      }
    } else {
      next()
    }
  } else { // 不需要登录
    next()
  }
})

router.afterEach((to,from,next) => {
  Dialog.close()
  Toast.clear()
})

export default router
