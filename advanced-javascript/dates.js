// console.log(new Date("29 sep, 2023"));
// console.log(new Date(4 * 60 * 60 * 1000));

/* Working with Dates and Time Stamps */

const day = document.querySelector(".day");
const minute = document.querySelector(".minute");
const second = document.querySelector(".secound");

const workingDays = [
  "Sunday",
  "Monday",
  "TuesDay",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDay = new Date();
const myBirthDay = new Date(2023, 8, 9);
console.log(myBirthDay.getTime());
console.log(currentDay.getTime());
