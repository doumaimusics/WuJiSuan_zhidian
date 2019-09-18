import fetch from '@/config/axios'

/* @method 越分享新闻列表 */
export function getNewsList(data) {
    return fetch({
        url: '/share/getNewsList',
        method: 'post',
        data
    })
}

/* 越分享新闻列表详情 */
export function getNewsDeta(data) {
    return fetch({
        url: '/share/getNewsDetails',
        method: 'post',
        data
    })
}

/* 茶水间列表和朋友圈列表  1，2 */
export function findPage(data) {
    return fetch({
        url: '/share/findPage',
        method: 'post',
        data
    })
}

/* @method 茶水间发送文章 */
export function saveArticle(data) {
    return fetch({
        url: '/share/saveArticle',
        method: 'post',
        data
    })
}

/* 茶水间列表点赞 */
export function praiseArticle(data) {
    return fetch({
        url: '/share/praiseArticle',
        method: 'post',
        data
    })
}

/* 茶水间详情 */                                                               
export function getArticleWithComments(data) {
    return fetch({
        url: '/share/getArticleWithComments',
        method: 'post',
        data
    })
}

/* 茶水间详情评论列表 share/saveComment*/
export function saveComment(data) {
    return fetch({
        url:'/share/saveComment',
        method: 'post',
        data
    })
}

/* 茶树间详情评论列表点赞  praiseComment */
export function praiseComment(data) {
      return fetch({
          url: '/share/praiseComment',
          method: 'post',
          data
      })
}

/* 朋友圈批量上传图片 */
export function uploadImages(data) {
    return fetch({
        url: '/upload/uploadImages',
        method: 'post',
        type:'form-data',
        data
    })
}



