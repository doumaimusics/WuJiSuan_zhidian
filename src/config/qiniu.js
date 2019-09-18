import fetch from '@/config/axios'


/**
 * @method getQiNiuToken 获取七牛token
 */
export function getQiNiuToken() {
    return fetch({
        url: '/order/upload/getToken',
        method: 'post'
    })
}
