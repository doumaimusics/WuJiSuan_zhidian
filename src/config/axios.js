import axios from 'axios'
import { Toast } from 'vant'

export default async({ url = '', data = '', method = '', type = ''}) => {
    const qs = require('qs')
    const request = {
        method: method,
        url: url
    }
    if (method === 'post' && type !== 'json' && type !== 'form-data') {
        request.data = qs.parse(data)
        request.headers = {'Content-Type': 'application/json'}
    } else if (method === 'post' && type === 'json') {
        // console.log(2)
        request.data = qs.stringify(data, { allowDots: true })
        request.data = JSON.stringify(data)
        request.headers = {'Content-Type': 'application/json'}
    } else if (method === 'post' && type === 'form-data') {
        var formData = new FormData();
        formData.append('upfile',data.upfile)
        request.data = formData;
        request.headers = {'Content-Type': 'multipart/form-data'}
    } else if (method === 'get') {
        if(navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf("rv:11.0") > -1) {
            data['_t'] = generateMixed(16)
        }
        request.params = qs.parse(data)
    }
    return new Promise((resolve, reject) => {
        axios(request).then((resp) => {
            const data = resp.data;
            if (data.status == 10004 || data.status == 10006 || data.status == 4014 || data.status == 4011 || data.status == 4012) {
                console.log(3)
                // if(request.data.operate === '忘记密码') {
                //     // 登录页，跳到忘记密码页，不作权限验证bug1077
                // } else {
                //     Toast.fail('账号未登录，请登录后重试！')
                //     window.location.href = '#/login' // 否则全部重定向到登录页

                // }
            } else if(data.errorCode === '4013'){
                console.log(4)
                Toast.fail('无权限访问！')
            } 
            resolve(resp)
        }).catch((error) => {
            let that = this;
            if (error.response.data.message == '当前登录信息失效，请重新登录') { // 登录信息失效，跳转登录页面
                // Toast.fail({
                //     message: error.response.data.message,
                //     duration:1500
                // })
                window.location.href = '#/login'
            } else {
                Toast.fail('网络错误')
            }
            
            reject(error)
        })
    })
}