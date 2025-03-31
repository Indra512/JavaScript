/*
Qs1: Create a function using the "function" keyword that takes a String as an argument & returns the number
of vowels in the string.
*/

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("indra"));

/*
Qs2: Create an arrow function to perform same task.
*/

// const countVowels = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("javascript"));

/*
Qs3: For a given an array of numbers, print the square of each value using the forEach loop.
*/

// let numbers = [1, 2 ,3 ,4 ,5];
// numbers.forEach((number) => {
//     console.log(number*number);

// });

/*
Qs4: We are given array of marks of students. Filter out of the marks of students that scrored 90+.
*/

// let marks = [67, 92, 54, 93, 95, 89];
// const newMarks = marks.filter((mark) => {
//     return mark > 90;
// });

// console.log(newMarks);

/*
Qs5: Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/

// const number = prompt("Enter a number:");
// let arr = [];
// for (let i = 1; i <= number; i++) {
//     arr[i - 1] = i;
// }
// const sum = arr.reduce((pre, curr) => {
//     return pre + curr;
// });

// console.log("Sum = " + sum);

// const pro = arr.reduce((pre, curr) => {
//     return pre * curr;
// })

// console.log("Factorial = " + pro);


