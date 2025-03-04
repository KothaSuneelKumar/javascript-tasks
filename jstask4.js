console.log(
  "1.Write a simple for loop that prints numbers from 1 to 5 to the console"
);
for (let num = 1; num <= 5; num++) {
  console.log(num);
}
console.log(
  "2.Create a while loop that counts down from 5 to 20 and displays each number"
);
let number = 5;
while (number <= 20) {
  console.log(number);
  number++;
}

console.log(
  "3.Use a do...while loop to run and continuously print the word “Hello” for 15 times."
);
let i = 0;
do {
  console.log("Hello");
  i++;
} while (i <= 15);

console.log(
  "4.Given an object with student names as property and their scores as values, use a for...in loop to display each student's name and score."
);
const student = { Ram: 30, Shyam: 29 };
for (const name in student) {
  console.log(`${name}:${student[name]}`);
}

console.log(
  "5.Create an array of fruits, then use a for...of loop to display each fruit's name"
);
const fruits = ["apple", "Banana", "custard apple", "Dragon fruit"];
for (const fruit of fruits) {
  console.log(fruit);
}

console.log(
  "6.Write a program that takes an array of strings and returns the total number of characters across all strings using a for...of loop."
);
const fruit = ["apple", "banana", "custard apple"];
let totalCharacters = 0;
for (const str of fruit) {
  totalCharacters += str.length;
}
console.log(`Total no of characters:`, totalCharacters);

console.log(
  "7.Define and assign a constant variable with any number between 1 to 100, thenuse a do...while loop to simulate guessing that number until correct between 1 to 100."
);
let sum = 1;
let guess = 5;

do {
  if (guess == sum) {
    console.log("guessed number:" + sum);
    break;
  }
  sum++;
} while (sum <= 100);

console.log(
  "8.Write a program which prints 1 to 100 numbers. but will not print or skip the numbers which are divisible by 3 and 5"
);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    continue;
  }
  console.log(i);
}

console.log(" question 9 ");
const fruits1 = ["apple", "banana", "mango"];
const price = [120, 30, 90];
for (let i = 0; i < fruits.length - 1; i++) {
  console.log(`${fruits1[i]}:${price[i]}`);
}

console.log(" Question 10");
const number1 = [2, 3, 4, 87];
const number2 = [3, 5, 7, 4, 3];
for (let i = 0; i <= number1.length - 1; i++) {
  for (let j = i; j <= number2.length - 1; j++) {
    if (number1[i] == number2[j]) {
      console.log("common elements: " + number1[i]);
    }
  }
}

console.log("Question 11");

for (let i = 1; i <= 5; i++) {
  let temp = " ";
  for (let j = 1; j <= i; j++) {
    temp += "*";
  }
  console.log(temp);
}

console.log("Question 12");
for (let i = 9; i >= 1; i--) {
  let temp = " ";
  for (let j = 1; j <= i; j++) {
    temp += j;
  }
  console.log(temp);
}

console.log("Question 13");

let a = 3;
let b = 5;
for (let i = 1; i <= 4; i++) {
  let temp = "";
  for (let j = 1; j <= 7; j++) {
    if (i == 1 && j == 4) {
      temp += "*";
    } else if (i == 1) {
      temp += " ";
    } else if (i != 1) {
      if (j == a || j == b) temp += "*";
      else {
        temp += " ";
      }
    }
  }
  console.log(temp);
  if (i != 1) {
    a--;
    b++;
  }
}
