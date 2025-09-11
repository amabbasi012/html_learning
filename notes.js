// ==============================
// Lecture 1: Basics of JavaScript
// ==============================

// Variables and Data Types
let studentName = "Ali";      // string
let studentAge = 16;          // number
let isEnrolled = true;        // boolean
console.log(studentName, studentAge, isEnrolled);

// Arithmetic Operators
let number1 = 10;
let number2 = 3;
console.log("Addition:", number1 + number2);
console.log("Division:", number1 / number2);
console.log("Power:", number1 ** number2);

// String Operations
let greeting = "Hello";
let subject = "JavaScript";
console.log(greeting + " " + subject); // concatenation
console.log(subject.toUpperCase());    // uppercase
console.log(subject.slice(0, 3));      // slicing

// Logical Operators
let isAdult = studentAge >= 18;
let hasIdCard = true;
console.log("Can enter:", isAdult && hasIdCard);

// Input Example (prompt works in browser, not Node.js)
// let userCity = prompt("Enter your city:");
// console.log("You live in", userCity);
