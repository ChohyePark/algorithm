
let arr = [1,2,3,4,5];

for(let i=0; i < arr.length; i++) {
  arr.push(arr.shift());
  console.log(arr);
}

