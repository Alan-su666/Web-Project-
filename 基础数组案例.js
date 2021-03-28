/*数组求和及平均值 */
// 求数组[2,6,1,7,4]里面所有元素的和以及平均值
/*
?分析
! 1.声明一个求和遍历sum
! 2.遍历这个数组，把里面的每个数组元素加到sum里面
! 3.用求和变量除以数组的长度就可以得到数组的平均值
*/
var sum = 0;
var arr = [2, 6, 1, 7, 4];
var average = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; //我们加的是数组元素，不是计数器i
}
average = sum / arr.length;
console.log(sum, average);

// 求数组最大值
// 求数组[2，6，1，77，52，25，7]
/*
?分析
! 1.声明一个保存最大元素的变量max 
! 2.默认最大值可以取数组中的第一个元素
! 3.遍历这个数组，把里面的每一个数组元素和max比较
! 4.如果这个数组元素大于max就把这个数组元素存入max中，否则继续下一轮比较
! 5.最后输出这个max
*/
var arr = [2, 6, 1, 77, 52, 25, 7];
var max = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log('数组中的最大值为' + max);

// 数组转换为分割字符串
// 要求：将数组['red','green','blue','pink']转换为字符串，并且用|或其他符号分割
// 输出:'red|green|blue|pink'
// 分析:1.需要一个新变量用于存放转换完的字符串str
// 2.遍历原来的数组,分别把里面的数居取出来,加到字符串里面
// 3.同时在后面多加一个分隔符
var arr = ['red', 'green', 'blue', 'pink'];
var str = '';
var sep = '|';
for (var i = 0; i < arr.length; i++) {
    str += arr[i] + sep;
}
console.log(str);

// 数组新增元素
// 新建一个数组，里面存放10个整数(1~10);

// 1. 使用循环来追加数组
// 2.声明一个空数组arr
// 3.利用for循环里面的计数器i可以作为数组元素存入
// 4.由于数组的索引号从0开始的，因此计数器从0开始比较合适，存入数组元素要+1
var arr = [];
for (var i = 0; i < 10; i++) {
    // arr=i 不要直接给数组名赋值，否则以前的元素都没有了
    arr[i] = i + 1;
}
console.log(arr);

// *筛选数组案例
// 要求把数组[2,0,1,77,0,25,7]中大于10的元素选取出来，放入新数组

/* 
?声明一个新数组用于存放新数据newArr
?遍历原来的旧数组，找出大于等于10的元素
?依次追加新数组newArr
*/
var arr = [2, 0, 1, 77, 0, 25, 7, 52];
var newArr = [];
var j = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        // 新数组索引号应该从0开始依次递增
        newArr[j] = arr[i];
        j++;
    }
}
console.log(newArr);

// *筛选数组案例 方法2
var arr = [2, 0, 1, 77, 0, 25, 7, 52];
var newArr = [];
// 刚开始newArr.length就是0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        // 新数组索引号应该从0开始依次递增
        newArr[newArr.length] = arr[i];
        // arr.length动态监视数组元素的个数
    }
}
console.log(newArr);

// 删除指定的数组元素(数组去重)
// 要求:将数组[2,0,6,1,77,0,52,0,25,7]中的0去掉,形成应该不包含0的新数组

// 1.需要应该新数组用于存放筛选之后的数据
// 2.遍历原来的数组,把不是0的数据添加到新数组里面(此时注意采用数组名+索引号的格式接收数据)
// 3.新数组里面的个数,用length不断累加
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        newArr[newArr.length] = arr[i];
    }
}
console.log(newArr);

//? 翻转数组案例
// 要求: 将数组['red', 'green', 'blue','pink','purple']的内容翻转过来
// 输出: ['purple', 'pink', 'blue', 'green', 'red']

// 思路:1.声明一个新数组newArr
// 2.把就数组索引号第四个取过来(arr.length-1)给新数组是索引号第0个元素(newArr.length)
// 3.我们采取递减的方式
var arr = ['red', 'green', 'blue', 'pink', 'purple'];
var newArr = [];
for (var i = arr.length - 1; i >= 0; i--) {
    newArr[newArr.length] = arr[i];
}
console.log(newArr);