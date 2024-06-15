// 1 - variables
let fruit = "Apple";

fruit = "Orange";

console.log("The fruit is", fruit);

// 2 - math
console.log("Task 1:", 25 + 3.5);
console.log("Task 2:", 2024 - 1969);
console.log("Task 3:", 65 / 240);
console.log("Task 4:", 0.2708 * 100);

// 3 - string functions
console.log("Nicolina".toUpperCase());
console.log("    Remove whitespace   ".trim());
console.log("How many characters long is this string?".length);

// 4 - conditional-statements
const carSpeed = 85;
if (carSpeed > 100) {
  console.log("Slow down!");
} else {
  console.log("Carry on");
}

//5 - booleans
const wordCount = 0;
if (wordCount === 0) {
  console.log("Get writing!");
}

const currentTemperature = 15;
const goneForARun = false;
if (currentTemperature > 10 && goneForARun === false) {
  console.log("Go for a run!");
}

const name = "Nicolina";
if (name.length > 10) {
  console.log("You have a long name!");
} else if (name.length < 5) {
  console.log("You have a short name!");
} else {
  console.log("You have a medium length name!");
}

// 6 - functions
const printCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
};

console.log(printCurrentTime());

const printName = () => {
  console.log("Nicolina");
};

printName();
printName();

const printGreeting = (name) => {
  console.log(`Hello ${name}`);
};

printGreeting("Bob");
printGreeting("Sue");

const multiply = (a, b) => {
  return a * b;
};

const first = multiply(2, 2);
console.log(first);

const second = multiply(100, 4);
console.log(second);

const warmEnough = (temperature) => {
  return temperature > 10;
};

if (warmEnough(15)) {
  console.log("Go for a run!");
}
