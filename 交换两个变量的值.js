/* 交换两个苹果
   1.需要一个临时变量temp
   2.把apple1给我们的临时变量temo
   3.把apple2给我们的apple1
   4把临时变量的值给apple2
*/
var temp; //声明了一个空的临时变量
var apple1 = '红苹果';
var apple2 = '青苹果';
temp = apple1; //把右边给左边
apple1 = apple2;
apple2 = temp;
console.log(apple1);
console.log(apple2);