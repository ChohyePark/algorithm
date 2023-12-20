

let test = [1,2,3,4,5,6,7,'e','g','w'];
// while(test.pop() !== 5);
// console.log(test);

if(1) {
  console.log("1 : true")
} else if (!0) {
  console.log("0 : false")
};

for(x of test) {
  if(isNaN(x)) console.log(x);
}

// isNaN 숫자가 아닌것 true, 숫자일때 false 반환