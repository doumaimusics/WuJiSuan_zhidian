import fetch from '@/config/axios'

/**
 * @method queryCode 获取验证码
 */
export function queryCode(data) {
  return fetch({
    url: '/user/sendCode',
    method: 'get',
    data
  })
}

/**
 * @method login 登录
 */
export function login(data) {
    return fetch({
      url: '/user/login',
      method: 'post',
      data
    })
}



