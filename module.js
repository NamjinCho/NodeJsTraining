const _ = require('underscore')
var arr = [3,6,9,12]

console.log(arr[0])
console.log(_.first(arr))
console.log(_.last(arr))
function b(v1,v2){

// 0 같음
// -1 v1이 더작음
// 1 v2가 더큼

//그러나 반대로 할것
var result = 0;
if(v1 < v2)
  result = 1;
else if(v1 == v2)
  result = 0;
else {
  result = -1;
}
  return result;
};
arr.sort(b)
console.log(arr)
