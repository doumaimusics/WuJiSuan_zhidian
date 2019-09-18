import Vue from 'vue'
import Vuex from 'vuex'
import loginInfo from './modules/login'
import getters from './getters'

Vue.use(Vuex)
const state = {
  navBarTitle: '',//导航的title
  // personalInfoAvator: '',//个人资料中的头像
  // personalInfoName: '',//个人资料中的姓名
  // personalInfoSex: '',//个人资料中的选择性别
  personalInfoArea: {//个人资料中的选择地区
    text: '',
    id: 0
  },
  personalInfoIndystry: {//个人资料中的选择行业
    industryName: '',
    industryId: 0
  },
  personalInfoPosition: {//个人资料中的选择职位
    positionName: '',
    positionId: 0
  },
  personalInfoCompany: {//个人资料中的选择公司
    text: '',
    id: 0
  },
  isShowDifferentEcharts: false,//悦成长---能力分析---岗位能力差异

  selectSchool:{   // 选择学校
    text:'请选择学校',
    id:0
  },
  selectDisciplLine:{  //选择专业
    text: '选择专业',
    id: 0
  },
  mailListData:[],    // 通讯录

}
const mutations = {
  setNavBarTitle(state,status){
      state.navBarTitle = status;
  },
  // setPersonalInfoAvator(state,avator){
  //   state.personalInfoAvator = avator;
  // },
  // setPersonalInfoName(state,name){
  //   state.personalInfoName = name;
  // },
  // setPersonalInfoSex(state,sex){
  //   state.personalInfoSex = sex;
  // },
  setPersonalInfoArea(state,area){
    state.personalInfoArea = area;
  },
  setPersonalInfoIndystry(state,industry){
    state.personalInfoIndystry = industry;
  },
  setPersonalInfoPosition(state,position){
    state.personalInfoPosition = position;
  },
  setPersonalInfoCompany(state,company){    // 选择公司
    state.personalInfoCompany = company;
  },
  setIsShowDifferentEcharts(state,status){
    state.isShowDifferentEcharts = status;
  },
  setSearchSchool(state,value){   // 设置选择学校方法
    state.selectSchool = value
  },
  setDisciplLine(state,value){    // 设置选择专业
    state.selectDisciplLine = value;
  },
  setMailListData(state,value){    // 获取通讯录
    state.mailListData = value;
  }
}
const actions = {
  setNavBarTitle(context,title){
      context.commit('setNavBarTitle',title);
  },
  // setPersonalInfoAvator(context,avator){
  //   context.commit('setPersonalInfoAvator',avator);
  // },
  // setPersonalInfoName(context,name){
  //   context.commit('setPersonalInfoName',name);
  // },
  // setPersonalInfoSex(context,sex){
  //   context.commit('setPersonalInfoSex',sex);
  // },
  setPersonalInfoArea(context,area){
    context.commit('setPersonalInfoArea',area);
  },
  setPersonalInfoIndystry(context,industry){
    context.commit('setPersonalInfoIndystry',industry);
  },
  setPersonalInfoPosition(context,position){
    context.commit('setPersonalInfoPosition',position);
  },
  setPersonalInfoCompany(context,company){    // 选择公司
    context.commit('setPersonalInfoCompany',company);
  },
  setIsShowDifferentEcharts(context,status){
    context.commit('setIsShowDifferentEcharts',status);
  },

  /* 下面的是教育经历的数据 */
  setSearchSchool(context,value){   // 选择学校   
    context.commit('setSearchSchool',value)
  },
  
  setDisciplLine(context,value){   // 选择专业
    context.commit('setDisciplLine',value)
  },

  setMailListData(context,value){   // 通讯录
    context.commit('setMailListData',value)
  }
}
const store = new Vuex.Store({
  modules: {
    loginInfo,
  },
  state,
  getters,
  mutations,
  actions
});

export default store
