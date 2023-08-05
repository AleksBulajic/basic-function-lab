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