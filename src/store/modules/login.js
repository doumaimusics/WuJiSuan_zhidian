import cookie from 'js-cookie'
import { login } from '@/config/login'

const loginInfo = {
    state: {
        token: '',    // 登录保存token
        userName: '',
        name: '',
        avator: '',
        
    },
    mutations: {
        // setToken: (state,option) => {
        //     state.token = option.token
        //     cookie.set('token',option.token,option.config)
        // },
        setToken(state,option){   // 设置token
            state.token = option;
            localStorage.setItem("token", option.token);
            cookie.set('token', option.token, option.config);
        },
        setUserName: (state,option) => {   // 设置userName
            state.userName = option;
            localStorage.setItem("userName", option)
        },
        setName: (state,option) => {    // 设置name
            state.name = option;
            localStorage.setItem("name",option)
        },
        setAvator: (state,option) => {    // 设置头像
            state.avator = option;
            localStorage.setItem("avator", option)
        },
        delToken: (state, option) => { // 删除token,退出登录
            localStorage.removeItem("userInfo");
            localStorage.removeItem("token");
            cookie.remove("token")
        }
    },
    actions: {
        SetLoginInfo({ commit },postMap) {
            return new Promise((resolve, reject) => {
                login(postMap).then(res => {
                    if (res.data.status === 10000) {
                        console.log(res.data.data);
                        let data = res.data.data
                        let config ={ expires: 1 }
                        commit('setToken', { token: data.token, config });
                        commit('setUserName', data.username);
                        commit('setName', data.name);
                        commit('setAvator', data.avatar);
                    }
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}
export default loginInfo