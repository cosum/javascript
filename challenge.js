//Coding Challenge 1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
//  Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / markHeight1 ** 2;
let johnBMI1 = johnMass1 / johnHeight1 ** 2;
let markHigherBMI1 = markBMI1 > johnBMI1;

console.log(markBMI1, johnBMI1, markHigherBMI1);


let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / johnHeight2 ** 2;
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI2, johnBMI2, markHigherBMI2);


// Coding Challenge 2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement

if (markHigherBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})`);
} else {
    console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})`);
};



//Coding Challenge 3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!


// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum core, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const koalasScore1 = 97;
const koalasScore2 = 112;
const koalasScore3 = 101;
const koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(koalasAvg);

const dolphinsScore1 = 109;
const dolphinsScore2 = 95;
const dolphinsScore3 = 106;
const dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
console.log(dolphinsAvg);

const minScore = 100;

if (koalasAvg > dolphinsAvg) {
    if (koalasAvg >= minScore) {
        console.log(`Koalas has won the competition!`);
    } else {
        console.log(`Koalas has the higher score, but it hasn't reached the minimum of ${minScore} points, so we have no winner.`);
    }
} else if (koalasAvg < dolphinsAvg) {
    if (dolphinsAvg >= minScore) {
        console.log(`Dolphins has won the competition!`);
    } else {
        console.log(`Dolphins has the higher score, but it hasn't reached the minimum of ${minScore} points, so we have no winner.`);
    }
} else {
    if (koalasAvg && dolphinsAvg >= minScore) {
        console.log(`It's a draw!`);
    } else {
        console.log(`The teams have not reached the minimum score!`);
    }
}