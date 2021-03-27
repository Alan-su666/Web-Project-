/*封装自己的数学案例 */
// !利用对象封装自己的数学对象，里面用PI最大值和最小值
var myMath = {
    PI: 3.141592653,
    max: function () {
        var max = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    },
    min: function () {
        var min = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i];
            }
        }
        return min;
    }
}
console.log(myMath.PI);
console.log(myMath.max(1, 5, 9));
console.log(myMath.min(1, 5, 9));
/* 随机整数生成 */

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(11, 7));
// 猜数字游戏
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var random = getRandom(1, 10);
while (true) {
    var num = prompt('你来猜，输入1~10之间的数字');
    if (num > random) {
        alert('你猜大了');
    } else if (num < random) {
        alert('你猜小了');
    } else {
        alert('你好帅哦，猜对了');
        break;
    }
}
// ?日期对象案例
// 写2021年3月6日星期六
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dates = date.getDate();
var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var day = date.getDay();
console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);
// 封装一个函数，返回当前的时分秒
function getTimes() {
    var time = new Date();
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
}
console.log(getTimes());
//!倒计时案例
function countDown(time) {
    var nowTime = +new Date() //返回当前时间总的毫秒数
    var inputTime = +new Date(time) //返回用户输入时间总的毫秒数
    var times = (inputTime - nowTime) / 1000; //times是剩余时间总的秒数,把毫秒换算为秒，1秒=1000毫秒
    var d = parseInt(times / 60 / 60 / 24); //天
    d = d < 10 ? '0' + d : d;
    var h = parseInt(times / 60 / 60 % 24); //时
    h = h < 10 ? '0' + h : h;
    var m = parseInt(times / 60 % 60); //秒
    m = m < 10 ? '0' + m : m;
    var s = parseInt(times % 60); //当前的秒
    s = s < 10 ? '0' + s : s;
    return d + '天' + h + '时' + m + '分' + s + '秒';
}
console.log(countDown('2019-5-1 18:00:00'));
