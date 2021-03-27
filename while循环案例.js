// 打印人的一生
var i = 1;
while (i <= 100) {
    console.log('这个人今年' + i + '岁了');
    i++;
}
// 求1~100之间所有的整数和
var sum = 0;
var j = 1;
while (j <= 100) {
    sum += j;
    j++;
}
console.log(sum);
// 弹出一个提示款，你爱我吗，如果输入你爱我，就提示结束，否则一直询问
var message = prompt('你爱我吗?');
while (message !== '我爱你') {
    message = prompt('你爱我吗');
}
alert('我爱你');