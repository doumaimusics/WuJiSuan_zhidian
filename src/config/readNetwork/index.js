import fetch from '@/config/axios'

/* 图谱 */
export function getGroupHome(data) {
    return fetch({
        url: '/user/getGroupHome',
        method: 'post',
        data
    })
}

/* 图谱进去的列表 */
export function getGroupList(data){
    return fetch({
        url:'/user/getGroupList',
        method: 'post',
        data
    })
}

/* 全部好友列表 */
export function getFriends(data) {
    return fetch({
        url: '/user/getFriends',
        method: 'post',
        data
    })
}

/* 通讯录 */
export function getAddressBook(data) {
    return fetch({
        url: '/user/getAddressBook',
        method: 'post',
        data
    })
}


/* 分组列表 */
export function getGroupUsersByGroupId(data) {
    return fetch({
        url: '/user/getGroupUsersByGroupId',
        method: 'post',
        data
    })
}




