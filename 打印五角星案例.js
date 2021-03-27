// 打印五颗星星案例
var str = '';
for (var i = 1; i <= 5; i++) {
    str = str + '★';
}
console.log(str);

// 打印5行5列的星星
var str = '';
for (var i = 1; i <= 5; i++) { //外层循环负责打印5行
    for (var j = 1; j <= 5; j++) { //里层循环负责打印一行5颗星星
        str += '★';
    }
    // 如果一行打印完5颗星星就要另起一行加\n
    str = str + '\n';
}
console.log(str);

// 打印n行n列的星星
var rows = prompt('请输入行数');
var cols = prompt('请输入列数');
var str = '';
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= cols; j++) {
        var rows = prompt('请输入行数');
        str = str + '★';
    }
    str = str + '\n';
}
console.log(str);

// 打印倒三角形
var str = '';
for (var i = 1; i <= 10; i++) {
    for (var j = i; j <= 10; j++) {
        str += '★';
    }
    str += '\n';
}
console.log(str);

// 打印正三角形
var str = '';
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        str = str + '★';
    }
    str += '\n';
}
console.log(str);
