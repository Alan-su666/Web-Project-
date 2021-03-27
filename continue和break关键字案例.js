// 吃五个包子，第三个有虫子，就扔掉第三个，继续吃第四个第五个
for (var i = 1; i <= 5; i++) {
    if (i == 3) {
        continue; //只要遇见continue，就跳出本次循环，直接到i++
    }
    console.log('我正在吃第' + i + '个包子');
}
// 求1~100之间，除了能被7整除之外的整数和
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        continue;
    }
    sum = sum + i;
}
console.log(sum);

// 吃五个包子，第三个有虫子，其余的也都不吃了
for (var i = 1; i <= 5; i++) {
    if (i == 3) {
        break; //退出整个循环
    }
    console.log('我正在吃第' + i + '个包子');
}