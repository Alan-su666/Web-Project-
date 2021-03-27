// 打印人的一生
var i = 1;
do {
    console.log('这个人今年' + i + '岁');
    i++
} while (i <= 100);
// 求1~100之间所有的整数和
var sum = 0;
var j = 1;
do {
    sum = sum + j;
    j++;
} while (j <= 100);
console.log(sum);
// 弹出一个提示款，你爱我吗，如果输入你爱我，就提示结束，否则一直询问
do {
    var massage = prompt('你爱我吗？')
} while (massage !== '我爱你');
alert('我也爱你');

