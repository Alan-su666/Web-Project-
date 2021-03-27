// 查找字符串'abcoefoxyozzopp'中所有O出现的位置以及次数
// 核心算法，先查找第一个o出现的位置
// 然后只要indexOf返回的结果不是-1，就继续往后查找
// 因为indexOf只能查找第一个，所以后面的查找，一定是当前索引+1，从而继续查找
var str = 'abcoefoxyozzopp';
var index = str.indexOf('o');
var num = 0;
while (index !== -1) {
    console.log(index);
    num++;
    index = str.indexOf('o', index + 1);
}
console.log('o出现的次数' + num);
// 判断一个字符串，'abcoefoxyozzopp'中出现次数最多的字符，并且统计其次数
// 核心算法：利用charAt()遍历这个数组
// 把每个字符都储存给对象，如果对象没有该属性，就为1，如果存在了就+1
// 遍历对象，得到最大值和该字符
var str = 'abcoefoxyozzopp';
var o = {
}
for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i); //chars是字符串的每一个字符
    if (o[chars]) {
        o[chars]++;
    } else {
        o[chars] = 1;
    }
}
console.log(o);
// 遍历对象
var max = 0;
var ch = '';
for (var k in o) {
    if (o[k] > max) {
        max = o[k];
        ch = k;
    }
}
console.log(max);
console.log('最多的字符为' + ch);