import fetch from '@/config/axios'

/**
 * @method loginOut 退出登录
 */
export function loginOut(data) {
    return fetch({
      url: '/user/login',
      method: 'post',
      data
    })
}

/**
 * @method getUserInfo 获取用户信息
 */
export function getUserInfo(data) {
    return fetch({
      url: '/user/getUserInfo',
      method: 'post',
      data
    })
}

/* 获取学校列表  */
export function getSchool(data) {
    return fetch({
      url: '/personal/getSchool',
      method: 'post',
      data
    })
} 

/* 获取专业 /personal/getDiscipline*/
export function getDiscipLine(data) {
    return fetch({
        url: '/personal/getDiscipline',
        method:'post',
        data
    })
}

/* 保存教育经历 */
export function addEducation(data) {
  return fetch({
    url: '/personal/addEducation',
    method: 'post',
    data
  })
}


/* 认证列表 /personal/getVerifieds*/
export function getVerifieds(data) {
  return fetch({
    url: '/personal/getVerifieds',
    method: 'post',
    data
  })
}

/* 实名认证提交 personal/submitVerified*/
export function submitVerified(data) {
  return fetch({
    url: '/personal/submitVerified',
    method: 'post',
    data
  })
}

/* 反馈与建议 /userSetter/Feedback*/
export function feedback(data) {
  return fetch({
    url: '/userSetter/Feedback',
    method: 'post',
    data
  })
}

/* 绑定手机号  */
export function bindPhone(data) {
  return fetch({
    url: '/userSetter/BindPhone',
    method: 'post',
    data
  })
}

/* 职业规划报告 growing/getCareerReport*/
export function getCareerReport(data) {
  return fetch({
    url:'/growing/getCareerReport',
    method: 'post',
    data
  })
}
