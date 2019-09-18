
export default{
    install(Vue){
        Vue.prototype.timeF = (dayRange)=>{
            let beginYear = new Date(dayRange).getFullYear()
            let beginMonth = new Date(dayRange).getMonth() + 1
            let beginDate= new Date(dayRange).getDate()
            beginMonth=beginMonth<10?'0'+beginMonth:beginMonth
            beginDate=beginDate<10?'0'+beginDate:beginDate
            return beginYear+'-'+beginMonth+'-'+beginDate
        }
        Vue.prototype.checkName = (name) => {
            if(name==''||name==undefined){
                return 0
            }else if(name.length>10){
                return 1
            }
        }
        Vue.prototype.checkPhone = (phone) => {
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(phone)) {
                return false;
            } else {
                return true;
            }
        }
        Vue.prototype.checkPwd = (Pwd) => {
             if(!/^[0-9a-z_]{6,20}$/i.test(Pwd)){
                return false
            }else{
                 return true
             }
        }
        Vue.prototype.checkRoleList = (roleList) => {
            if(roleList.length==0){
                return false
            }
        }
        Vue.prototype.getCookie = (name) => {
            let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)")
            if(arr=document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        }
        Vue.prototype.setCookie = (name, value, expTime = 30) => {
            if (typeof value !== 'string') {
                value = JSON.stringify(value);
            }
            var exp = new Date();
            exp.setTime(exp.getTime() + expTime*24*60*60*1000);
            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
        }
        Vue.prototype.removeCookie = (name) => {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval=getCookie(name);
            if(cval!=null)
                document.cookie= name + "="+cval+";expires="+exp.toGMTString();
        }
        Vue.prototype.format_number=(n)=>{
            var b=parseInt(n).toString();
            var len=b.length;
            if(len<=3){return b;}
            var r=len%3;
            return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");
        }
        Vue.prototype.phoneHidden=(phone)=>{
            if ( typeof phone =='number' ){
                phone=phone.toString()
            }
           return  phone.substr(0, 3) + '****' + phone.substr(7)
        }
        Vue.prototype.emailHidden=(email)=>{
                var arr = email.split("@");
                var star = "";
                if (arr[0].length <= 3) {
                    star = "*";
                    arr[0] = arr[0].substr(0, arr[0].length - 1) + star;
                } else {
                    star = "****";
                    arr[0] = arr[0].substr(0, arr[0].length - 4) + star;
                }
                // return email = arr[0] + "@" + arr[1];
                var lastIndex = arr[1].lastIndexOf(".");
                var suffix = arr[1].substr(lastIndex);
                var after = '';
                for(var i = 0; i < lastIndex; i++) {
                    after += "*";
                } 
                return email = arr[0] + "@" + after + suffix;

        }
        //时间戳转年月日 时分秒  接收值类型 Number
        Vue.prototype.format_timestamp=(timestamp)=>{
            //timestamp是整数，否则要parseInt转换
            // var time = new Date(timestamp);
            // var y = time.getFullYear();
            // var m = (time.getMonth()+1)<10?'0'+ (time.getMonth()+1):(time.getMonth()+1);
            // var d = (time.getDate())<10?'0'+ (time.getDate()):(time.getDate());
            // var h = (time.getHours())<10?'0'+ (time.getHours()):(time.getHours());
            // var mm = (time.getMinutes())<10?'0'+ (time.getMinutes()):(time.getMinutes());
            // var s = (time.getSeconds())<10?'0'+ (time.getSeconds()):(time.getSeconds());
            // return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;

            let datetime = new Date(timestamp);
            let year = datetime.getFullYear();
            let month = datetime.getMonth();
            let date = datetime.getDate();
            let hour = datetime.getHours();
            let minute = datetime.getMinutes();
            let second = datetime.getSeconds();

            let result1 = year + 
                        '-' + 
                        ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                        '-' + 
                        ((date + 1) < 10 ? '0' + date : date) + 
                        ' ' + 
                        ((hour + 1) < 10 ? '0' + hour : hour) +
                        ':' + 
                        ((minute + 1) < 10 ? '0' + minute : minute) + 
                        ':' + 
                        ((second + 1) < 10 ? '0' + second : second);

            let result2 = year + 
                        '-' + 
                        ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                        '-' + 
                        ((date + 1) < 10 ? '0' + date : date);

            let result = {
                hasTime: result1,
                withoutTime: result2
            };

            return result;
        }
        //标准时间转化为时间戳
        Vue.prototype.format_slowTime=(slowTime)=>{
            //slowTime是中国标准时间
            return new Date(slowTime).getTime();
        }
        //时间戳转时分秒  接收值类型 Number---值为秒数
        Vue.prototype.format_ms=(value)=>{
            let isLessThanZero = false;
            if(value<0) {
                value = String(value).split("-")[1];
                value = Number(value);
                isLessThanZero = true;
            }
            var theTime = parseInt(value);// 秒
            var middle= 0;// 分
            var hour= 0;// 小时
            if(theTime > 60) {
                middle= parseInt(theTime/60);
                theTime = parseInt(theTime%60);
                if(middle> 60) {
                    hour= parseInt(middle/60);
                    middle= parseInt(middle%60);
                }
            }
            var result = ""+parseInt(theTime)+"秒";
            if(middle > 0) {
                result = ""+parseInt(middle)+"分"+result;
            }
            if(hour> 0) {
                result = ""+parseInt(hour)+"小时"+result;
            }
            if(isLessThanZero) {
                return '-' + result;
            }
            return result;
        }
        //时间戳转时分秒
        Vue.prototype.formatTime=(s)=>{
            let Day = parseInt(s / 60 / 60 / 24, 10)
            let Hour = parseInt(s / 60 / 60 % 24, 10)
            let Minute = parseInt(s / 60 % 60, 10)
            let Second = parseInt(s % 60, 10)
            let res = {
                d: Day,
                h: (Hour + "").padStart(2, "0"),
                m: (Minute + "").padStart(2, "0"),
                s: (Second + "").padStart(2, "0")
            }
            return res;
        }
        
        //获取今天0时和24时事件戳
        Vue.prototype.todayTimestamp=(arr)=>{
            let startTime = new Date(new Date(new Date().toLocaleDateString()).getTime()); // 当天0点
            let endTime = new Date(new Date(new Date().toLocaleDateString()).getTime() +24 * 60 * 60 * 1000 -1);// 当天23:59
            startTime = new Date(startTime).getTime();
            endTime = new Date(endTime).getTime();
            return  startTime + '*' + endTime;
        }

        //判断两个对象是否完全相等
        Vue.prototype.isObjectValueEqual=(a,b)=>{
            var aProps = Object.getOwnPropertyNames(a);
            var bProps = Object.getOwnPropertyNames(b);
            if (aProps.length != bProps.length) {
                return false;
            }
            for (var i = 0; i < aProps.length; i++) {
                var propName = aProps[i]

                var propA = a[propName]
                var propB = b[propName]
                if (propA !== propB) {
                    if ((typeof (propA) === 'object')) {
                    if (this.isObjectValueEqual(propA, propB)) {
                        return true
                    } else {
                        return false
                    }
                    } else {
                    return false
                    }
                } else {
                    return false
                }
            }
            return true;
        }
    }
}
