var numbers1 = [10, 30, 50, 70, 90];
var numbers2 = new Array(20, 40, 60, 80, 100);

var mixedArr = ['a', 1, 'b', 2, new Date(), "today"];
var objArr = [
  {
    "id" : 20192010,
    "name" : "HongGilDong",
    "dept" : "Software"
  },
  {
    "id" : 20192011,
    "name" : "KimSanrang",
    "dept" : "Business Management"
  },
  {
    "id" : 20192012,
    "name" : "KangDongSu",
    "dept" : "Computer Engineering"
  }
];

console.log(numbers1);
console.log(numbers2);
console.log(mixedArr);
console.log(objArr[2].name, objArr[2].dept);

const colors = ['red', 'blue', 'green'];
console.log("Original Array: ",colors);

colors.push('yellow');
console.log("push('yellow'):", colors);

colors.pop();
console.log('pop(): ', colors);

colors.reverse();
console.log('reverse(): ', colors);

colors.sort();
console.log('sort(): ', colors);

const splicedcolors = colors.splice(0, 2);
console.log('splice():', splicedcolors);

const newColors = colors.join("-");
console.log('join():', newColors);