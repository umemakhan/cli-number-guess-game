#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to cli number guessing game");

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "\nGuess a Dice number(from 1 to 6)",
    }
]);

if (answer.guessedNumber === randomNumber){
    console.log("\nCongratulations! You guessed correct number");
}
else {
    console.log("\nYou did not guess correct number\nTry again");
}
