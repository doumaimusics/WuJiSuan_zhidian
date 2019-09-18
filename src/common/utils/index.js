// 计算本月第一天00:00:00时间戳 与本月最后一天23:59:59时间戳
const countGetTime = () => {
    var data = new Date();          
    data.setDate(1);
    data.setHours(0);
    data.setSeconds(0);
    data.setMinutes(0);
    var data1 = new Date();      
    if (data.getMonth() == 12){
        data1.setMonth(1)
    }else{
        data1.setMonth(data.getMonth() + 1)
    }
    data1.setDate(1);
    data1.setHours(0);
    data1.setSeconds(0);
    data1.setMinutes(0);
    let firstData = data.getTime()
    let lastData = data1.getTime() - 1000
    return `${firstData}*${lastData}`
    // console.log('本月第一天0点' + firstData)
    // console.log('本月最后一天23点' + lastData)
}

export { countGetTime }
export const qiniuUploadFormDomain = 'http://qiniu.saas.weheretech.cn'; // http://huiyi.qiniu.lomparts.cn  http://qiniu.saas.weheretech.cn