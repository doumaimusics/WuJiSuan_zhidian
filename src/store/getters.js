import { stat } from "fs";

const getters = {
    token: state => JSON.stringify(state.loginInfo.token).token,
    userName: state => state.loginInfo.userName,
    name: state => state.loginInfo.name,
    avator: state => state.loginInfo.avator,
    navBarTitle: state => state.navBarTitle,//导航的title
    // personalInfoAvator: state => state.personalInfoAvator,//个人资料中的头像
    // personalInfoName: state => state.personalInfoName,//个人资料中的姓名
    // personalInfoSex: state => state.personalInfoSex,//个人资料中的选择性别
    personalInfoArea: state => state.personalInfoArea,//个人资料中的选择地区
    personalInfoIndystry: state => state.personalInfoIndystry,//个人资料中的选择行业
    personalInfoPosition: state => state.personalInfoPosition,//个人资料中的选择职位
    personalInfoCompany: state => state.personalInfoCompany,//个人资料中的选择公司
    isShowDifferentEcharts: state => state.isShowDifferentEcharts,//悦成长---能力分析---岗位能力差异

    selectSchool: state => state.selectSchool,   // 选择学校
    selectDisciplLine: state => state.selectDisciplLine,   // 选择专业
    mailListData: state => state.mailListData,   // 获取通讯录
  };
  export default getters
