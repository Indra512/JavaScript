// let arr = new Array(4,6,8,9,3);
let arr = [4,6,8,9];
console.log(arr);
// Modify any index
arr[2] = 10
console.log(arr);
// Add value in arr
// arr.push(11);
arr.unshift(11);
console.log(arr);
// Delete value
// arr.pop();
arr.shift();
console.log(arr);
// Array length
console.log(arr.length)
// Find index of value
var index = arr.indexOf(10);
console.log(index);
// Check variable is array or not
console.log(Array.isArray(arr));
