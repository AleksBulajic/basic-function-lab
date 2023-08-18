//* 1. Write a JavaScript program to display the current day and time in the following format.
// * Sample Output : Today is : Tuesday.
// * Current time is : 10 PM : 30 : 38

function getCurrentDayAndTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const day = daysOfWeek[now.getDay()];
  let hours = now.getHours();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const currentTime = `${hours} ${amOrPm} : ${minutes} : ${seconds}`;

  return `Today is: ${day}. \nCurrent time is: ${currentTime}.`;
}

console.log(getCurrentDayAndTime());

// * 2. Write a JavaScript program to print the current window contents.

function printCurrentWindowContents() {
  window.print();
}

console.log(printCurrentWindowContents());

//* 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const date = new Date();
const options = { year: "numeric", month: "2-digit", day: "2-digit" };

const formattedDateDash = date
  .toLocaleString("en-US", options)
  .replace(/\//g, "-");
console.log(formattedDateDash);

const formattedDateSlash = date.toLocaleString("en-US", options);
console.log(formattedDateSlash);

// * 4. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

const x = 12345;

function reversesNumber(number) {
  const n = number.toString().split("").reverse().join("");
  return n;
}

console.log(reversesNumber(x));

//  * 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str) {
  const strReversed = str.split("").reverse().join("");
  if (str === strReversed) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam"), true);
console.log(isPalindrome("nurses run"), true);
console.log(isPalindrome("fox"), false);

//? difference between doube equal and triple equal//////////////////////////////////////
const double = 1 == "1";
const triple = 1 === "1";

console.log(
  `This is double equal: ${double} \n This is Triple equal:  ${triple}`
);

// *  Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog

function generates(str) {
  const combinations = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      combinations.push(str.slice(i, j));
    }
    return combinations;
  }
}

console.log(generates("dog"));

// * 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alfabeticalOrder(string) {
  const abc = string.split("").sort().join("");
  return abc;
}

console.log(alfabeticalOrder("restaurant"));
console.log(alfabeticalOrder("hello there"));
console.log(alfabeticalOrder("can i have 3 beers"));


// * 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function toUpperCase(string) {

  
}

// * 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'


// * 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5


// * 8. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// * 9. Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.


//*  10. Write a JavaScript function which returns the n rows by n columns identity matrix.


// * 11. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4


// * 12. Write a JavaScript function that checks whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
