// 打印九九乘法表
var str = '';
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) { //里层循环控制个数，列数永远小于等于行数 k<=i

        // 1*2=2
        str += j + '*' + i + '=' + i * j + '\t';
    }
    str += '\n';
}
console.log(str);