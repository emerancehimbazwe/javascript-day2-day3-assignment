
 // Q1: Even or Odd
 // Pseudocode:
 // Get a number
 // If the number is divisible by 2, print even
 // Otherwise, print odd

const num = 6;

if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}


// Q2: Grade Calculator
// Pseudocode:
// Get a score from 0 to 100
// Reject scores outside this range
// Print A, B, C, D, or F based on the score

const score = 75;

if (score < 0 || score > 100) {
  console.log("Invalid score");
} else if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else if (score >= 50) {
  console.log("D");
} else {
  console.log("F");
}


// Q3: Ticket Price
// Pseudocode:
// If age is over 65, the ticket is free
// If age is under 12, the price is 2000 RWF
// If the person is a student, the price is 3000 RWF
// Otherwise, the price is 5000 RWF

const age = 20;
const isStudent = true;

if (age > 65) {
  console.log("Free");
} else if (age < 12) {
  console.log("2000 RWF");
} else if (isStudent) {
  console.log("3000 RWF");
} else {
  console.log("5000 RWF");
}


// Q4: Day Planner
// Pseudocode:
// Check the day using switch
// Print the class activity for Monday to Friday
// Print No class for weekends

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("JavaScript class");
    break;
  case "Tuesday":
    console.log("Control Flow");
    break;
  case "Wednesday":
    console.log("Functions");
    break;
  case "Thursday":
    console.log("DOM");
    break;
  case "Friday":
    console.log("Workshop");
    break;
  case "Saturday":
  case "Sunday":
    console.log("No class");
    break;
  default:
    console.log("Invalid day");
}


// Q5: Countdown
// Pseudocode:
// Start counting from 10
// Print each number down to 1
// Print Liftoff after the loop

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("Liftoff!");


// Q6: Sum and Average
// Pseudocode:
// Create an array of numbers
// Use for...of to calculate the sum
// Calculate and print the average

const numbers = [45, 78, 90, 62, 88];
let sum = 0;

for (const number of numbers) {
  sum += number;
}

const average = sum / numbers.length;

console.log("Sum:", sum);
console.log("Average:", average);


// Q7: Find the First Number Greater Than 100
// Pseudocode:
// Check each number in the array
// If a number is greater than 100, print it
// Stop the loop using break

const values = [25, 60, 150, 200, 300];

for (const value of values) {
  if (value > 100) {
    console.log("First number greater than 100:", value);
    break;
  }
}


// Q8: Skip Negatives
// Pseudocode:
// Loop through the array
// If a number is negative, skip it using continue
// Print only positive numbers

const values2 = [10, -5, 20, -3, 7, 0, 15];

for (const value of values2) {
  if (value < 0) {
    continue;
  }

  if (value > 0) {
    console.log(value);
  }
}


// Q9: Multiplication Table
// Pseudocode:
// Start at 1 and count up to 12
// Multiply each number by 7
// Print the multiplication in the required format

for (let i = 1; i <= 12; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}


// Q10: FizzBuzz
// Pseudocode:
// Count from 1 to 100
// If divisible by both 3 and 5, print FizzBuzz
// Otherwise, if divisible by 3, print Fizz
// Otherwise, if divisible by 5, print Buzz
// Otherwise, if divisible by 7, print Kigali
// Otherwise, print the number

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 7 === 0) {
    console.log("Kigali");
  } else {
    console.log(i);
  }
}

// Q11: Right-Angled Triangle
// Pseudocode:
// Print a triangle with 5 rows of stars

for (let row = 1; row <= 5; row++) {
  let line = "";

  for (let col = 1; col <= row; col++) {
    line += "*";
  }

  console.log(line);
}