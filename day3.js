
// Q1: Square
// Pseudocode:
// Take a number
// Multiply it by itself
// Return the result
// Test three times, including an edge case

const square = n => n * n;

console.log("Q1:", square(4));
console.log("Q1:", square(5));
console.log("Q1:", square(0));


// Q2: Is Even
// Pseudocode:
// Take a number
// Return true if divisible by 2, otherwise false
// Test three times

function isEven(n) {
  return n % 2 === 0;
}

console.log("Q2:", isEven(4));
console.log("Q2:", isEven(7));
console.log("Q2:", isEven(0));


// Q3: Temperature Conversion
// Pseudocode:
// Convert Celsius to Fahrenheit
// Convert Fahrenheit to Celsius
// Test both functions three times

function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

console.log("Q3 Celsius to Fahrenheit:", celsiusToFahrenheit(0));
console.log("Q3 Celsius to Fahrenheit:", celsiusToFahrenheit(25));
console.log("Q3 Celsius to Fahrenheit:", celsiusToFahrenheit(100));

console.log("Q3 Fahrenheit to Celsius:", fahrenheitToCelsius(32));
console.log("Q3 Fahrenheit to Celsius:", fahrenheitToCelsius(77));
console.log("Q3 Fahrenheit to Celsius:", fahrenheitToCelsius(212));


// Q4: Format Price
// Pseudocode:
// Take an amount and a currency
// Use RWF as the default currency
// Format the amount with toLocaleString
// Test three times

function formatPrice(amount, currency = "RWF") {
  return `${amount.toLocaleString()} ${currency}`;
}

console.log("Q4:", formatPrice(15000));
console.log("Q4:", formatPrice(250000));
console.log("Q4:", formatPrice(20, "USD"));


// Q5: Grade Calculator
// Pseudocode:
// Take a score
// Return Invalid score if outside 0 to 100
// Otherwise return the correct grade
// Test three times, including an invalid score

function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid score";
  }

  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
}

console.log("Q5:", getGrade(85));
console.log("Q5:", getGrade(45));
console.log("Q5:", getGrade(105));


// Q6: Maximum Number
// Pseudocode:
// Accept any number of arguments
// Find the largest number using a loop
// Do not use Math.max
// Test three times, including an edge case

function max(...numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let largest = numbers[0];

  for (const number of numbers) {
    if (number > largest) {
      largest = number;
    }
  }

  return largest;
}

console.log("Q6:", max(4, 9, 2));
console.log("Q6:", max(-5, -2, -10));
console.log("Q6:", max(7));


// Q7: Capitalize a Word
// Pseudocode:
// Take a word
// Make its first letter uppercase
// Keep the remaining letters lowercase
// Test three times, including an edge case

function capitalize(word) {
  if (word.length === 0) {
    return "";
  }

  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log("Q7:", capitalize("kigali"));
console.log("Q7:", capitalize("RWANDA"));
console.log("Q7:", capitalize(""));


// Q8: Count Vowels
// Pseudocode:
// Take a text
// Convert it to lowercase
// Count a, e, i, o, and u
// Return the total
// Test three times

function countVowels(text) {
  let count = 0;
  const vowels = "aeiou";

  for (const letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

console.log("Q8:", countVowels("Kigali"));
console.log("Q8:", countVowels("Education"));
console.log("Q8:", countVowels("rhythm"));


// Q9: Palindrome
// Pseudocode:
// Take a word
// Reverse the word
// Compare it with the original, ignoring letter case
// Return true or false
// Test three times

function isPalindrome(word) {
  const cleanedWord = word.toLowerCase();
  return cleanedWord === cleanedWord.split("").reverse().join("");
}

console.log("Q9:", isPalindrome("racecar"));
console.log("Q9:", isPalindrome("hello"));
console.log("Q9:", isPalindrome("Level"));


// Q10: Repeat Action
// Pseudocode:
// Take a number of repetitions and a callback
// Loop from 1 to the requested number
// Call the callback with each round number
// Test three times

function repeatAction(times, callback) {
  for (let i = 1; i <= times; i++) {
    callback(i);
  }
}

console.log("Q10: Test 1");
repeatAction(3, round => console.log("Round", round));

console.log("Q10: Test 2");
repeatAction(2, round => console.log("Step", round));

console.log("Q10: Test 3");
repeatAction(0, round => console.log("Round", round));



 // Q11: Create Counter

// Pseudocode:
// 1. Store the starting value.
// 2. increment increases the value by 1.
// 3. decrement decreases the value by 1.
// 4. getValue returns the current value.

function createCounter(start = 0) {
    let count = start;

    return {
        increment: () => {
            count++;
            return count;
        },
        decrement: () => {
            count--;
            return count;
        },
        getValue: () => count
    };
}

// Test 1
const counter1 = createCounter(0);
console.log("Q11 Test 1:", counter1.increment());

// Test 2
const counter2 = createCounter(5);
console.log("Q11 Test 2:", counter2.decrement());

// Test 3 (edge case)
const counter3 = createCounter(0);
console.log("Q11 Test 3:", counter3.getValue());


// Q12: Make Discount
// Pseudocode:
// Take a discount percentage
// Return a function that accepts a price
// Calculate the price after discount
// Test three times

function makeDiscount(percent) {
  return price => price - (price * percent / 100);
}

const discount10 = makeDiscount(10);
const discount20 = makeDiscount(20);
const discount0 = makeDiscount(0);

console.log("Q12 Test 1:", discount10(1000));
console.log("Q12 Test 2:", discount20(5000));
console.log("Q12 Test 3:", discount0(2000));


// Q13: Scope Puzzle
// Predict the output before running the code.
// Expected output:
// inner 3
// function 2
// global 1

let x = 1;

function a() {
  let x = 2;

  if (true) {
    let x = 3;
    console.log("inner", x);
  }

  console.log("function", x);
}

a();
console.log("global", x);
