function unique(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
}
var demo = unique(['a', 'e', 'a', 'c', 'b', 'c', 's']);
console.log(demo);