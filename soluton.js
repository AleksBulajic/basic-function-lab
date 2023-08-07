//* 1. Write a JavaScript program to display the current day and time in the following format.  
// * Sample Output : Today is : Tuesday.
// * Current time is : 10 PM : 30 : 38


function getCurrentDayAndTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

const formattedDateDash = date.toLocaleString('en-US', options).replace(/\//g, '-');
console.log(formattedDateDash); // Output: "08-07-2023"

const formattedDateSlash = date.toLocaleString('en-US', options);
console.log(formattedDateSlash); // Output: "08/07/2023"

