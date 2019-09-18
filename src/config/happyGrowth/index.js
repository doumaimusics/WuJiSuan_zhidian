import fetch from '@/config/axios'
  

//@method queryHappyGrouthEcharts 悦成长线路图
export function queryHappyGrouthEcharts(data) {
    return fetch({
        url: '/growing/getGrowingLine',
        method: 'post',
        data,
    })
}

// 雷达图接口 /growing/getEvaluation
export function getEvaluation(data) {
    return fetch({
        url: '/growing/getEvaluation',
        method: 'post',
        data
    })
}

// 卡塔尔题目列表
export function getQualityLibrary(data) {
  return fetch({
    url: '/growing/getQualityLibrary',
    method: 'post',
    data,
  })
}

// 答题提交 
export function saveEvaluationResult(data) {
  return fetch({
    url: '/growing/saveEvaluationResult',
    method: 'post',
    data
  })
}


