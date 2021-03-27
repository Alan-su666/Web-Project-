// 水仙花数字又称三次自幂数，就是一个数字的每一位的三次之和，如果和这个数字一样，就是三次自幂数
// 三次自幂数取值范围（100~999）
// 例子：153
// 1*1*1+5*5*5+3*3*3=1+125+27=153
/* 思路：循环得到1~100的每一个整数
        把每一个数字都拆开 */
for (var i = 100; i <= 999; i++) {
    var a = parseInt(i / 100);
    var b = parseInt(i % 100 / 10);
    var c = i % 10;
    if (a ** 3 + b ** 3 + c ** 3 === i) {
        console.log(i + '是三次自幂数');
    }
}