// 利用字面量创建对象
var obj = {
    name: '可可',
    type: '阿拉斯加犬',
    age: 5,
    color: 'brown',
    bark: function () {
        console.log('汪汪汪');
    },
    showFilm: function () {
        console.log('放映电影');
    }
}
console.log(obj.name);
console.log(obj.age);
console.log(obj['type']);
obj.showFilm();
obj.bark();

// 利用new Object创建对象
var obj = new Object();
obj.uname = '鸣人';
obj.sex = '男';
obj.age = '19';
obj.skill = function () {
    console.log('分身数');
}
console.log(obj.uname);
console.log(obj['sex']);
console.log(obj['age']);
obj.skill();
// 利用构造函数创建对象
function Heros(uname, type, blood) {
    this.name = uname;
    this.type = type;
    this.blood = blood;
    this.attack = function (attack) {
        console.log(attack);
    }
}
var lianPo = new Heros('廉颇', '力量型', 500);
var houYi = new Heros('后羿', '射手型', 300);
for (var key in lianPo) {
    console.log(lianPo[key]);
}
lianPo.attack('近战');

for (var key in houYi) {
    console.log(houYi[key]);
}
houYi.attack('远攻');
