/*
Qs1: Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
*/

// let number = prompt("Enter a number:");
// if (number%5 === 0) {
//     console.log(number, "is a multiple of 5");
// } else {
//     console.log(number, "is not a multiple of 5");
// }

/*
Qs2: Write a code which can give grades to students according to their scores:
    90-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/

let score = prompt("Enter a score(1-100)");
let grade;
if (score >=90 && score<=100) {
    grade = "A";
} else if (score >=70 && score<=89) {
    grade = "B";
} else if (score >=60 && score<=69) {
    grade = "C";
} else if (score >=50 && score<=59) {
    grade = "D";
} else if (score >=0 && score<=49) {
    grade = "F";
} else {
    grade = "INVALID";
}
console.log("Accordiing to you scores, your grade was :", grade);
