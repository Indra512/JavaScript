/*
Qs1: Print all even numbers from 0 to 100.
*/
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

/*
Qs2: Create a game where you start with any random game number. Ask the user to keep guessing the game number
until the user enters correct value.
*/

// let gameNumber = 25;
// let userNumber = prompt("Guess the game number: ");
// while (userNumber != gameNumber) {
//     // do not use == in condition as prompt will return string data.
//     userNumber = prompt("You entered wrong number. Guess again: ");
// }
// console.log("Congratulations, you entered the right number");

/*
Qs3: Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname lenght.

    eg: user name: "indraprajapati", username should be "@indraprajapati14"
*/

// let username = prompt("Enter your full name without spaces: ");
// console.log(`Output is @${username}${username.length}`);