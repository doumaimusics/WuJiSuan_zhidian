import fetch from '@/config/axios'

/**
 * @method setUserInfo 完善个人资料
 */
export function setUserInfo(data) {
  return fetch({
    url: '/user/saveUserData',
    method: 'post',
    data
  })
}

/**
 * @method queryArea 获取地区
 */
export function queryArea(data) {
  return fetch({
    url: '/user/getArea',
    method: 'get',
    data
  })
}

/**
 * @method queryIndustry 获取行业
 */
export function queryIndustry(data) {
  return fetch({
    url: '/user/getIndustry',
    method: 'get',
    data
  })
}

/**
 * @method uploadAvator 上传头像
 */
export function uploadAvator(data) {
  return fetch({
    url: '/upload/avatars',
    method: 'post',
    type: 'form-data',
    data,
  })
}

/**
 * @method queryHumanCircle 开启人脉
 */
export function queryHumanCircle(data) {
  return fetch({
    url: '/user/getPeopleRing',
    method: 'get',
    data,
  })
}

/**
 * @method queryFocusConversation 可选的关注话题
 */
export function queryFocusConversation(data) {
  return fetch({
    url: '/user/getNewType',
    method: 'post',
    data,
  })
}

/**
 * @method submitFocusConversation 提交关注话题
 */
export function submitFocusConversation(data) {
  return fetch({
    url: '/user/saveUserNewsType',
    method: 'post',
    data,
  })
}

/**
 * @method queryCompanyInfo 公司信息
 */
export function queryCompanyInfo(data) {
  return fetch({
    url: '/user/getCompany',
    method: 'post',
    data,
  })
}

/**
 * @method queryPositionInfo 职位信息
 */
export function queryPositionInfo(data) {
  return fetch({
    url: '/user/getPosition',
    method: 'post',
    data,
  })
}

/**
 * @method saveWorkExperience 保存工作经历
 */
export function saveWorkExperience(data) {
  return fetch({
    url: '/evaluation/saveWorkExperience',
    method: 'post',
    data,
  })
}

/**
 * @method saveUserGoal 保存工作目标
 */
export function saveUserGoal(data) {
  return fetch({
    url: '/evaluation/saveUserGoal',
    method: 'post',
    data,
  })
}