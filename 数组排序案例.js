// 翻转数组
var arr = [1, 2, 3];
arr.reverse();
console.log(arr);
// 冒泡排序
var arr1 = [3, 4, 7, 1];
arr1.sort(function (a, b) {
    return a - b; //升序排列
    // return b - a; //降序序排列
});
console.log(arr1);