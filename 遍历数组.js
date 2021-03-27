// 遍历数组就是把数组元素从头到尾访问一遍
var arr = ['red', 'green', 'blue'];
for (var i = 0; i < 3; i++) {
    console.log(arr[i]);
}
// 因为我们的数组元素从0开始，所以i必须从0开始 i<3
// 输出的时候arr[i] i计数器当索引号来用，arr[i]是数组元素 第i个数组元素

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < 8; i++) {
    console.log(arr[i]);
}
console.log(arr.length);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// 数组的长度是元素的个数，不要和索引号混淆
// arr.length动态监视数组元素的个数
