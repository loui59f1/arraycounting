"use strict";

document.addEventListener("DOMContentLoaded", startCounter);

let counter = 0;
const array = [];

function startCounter() {
  console.log("The loop");
  array.unshift(counter);

  // Incrementing (adding +1)
  counter++;

  // No more than 9 items, or else remove last one with pop
  if (counter > 9) {
    array.pop(array);
    console.log("No more than 9");
  }
  // Defining the timer for the function
  setTimeout(startCounter, 900);

  // Displays in console
  console.log(array);
}
