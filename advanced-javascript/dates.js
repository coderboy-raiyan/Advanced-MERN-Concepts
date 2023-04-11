// console.log(new Date("29 sep, 2023"));
// console.log(new Date(4 * 60 * 60 * 1000));

/* Working with Dates and Time Stamps */

const day = document.querySelector(".day");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const hour = document.querySelector(".hour");

const workingDays = [
  "Sunday",
  "Monday",
  "TuesDay",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const myBirthDay = new Date(2023, 8, 9).getTime();

function countDown() {
  const currentDay = new Date().getTime();
  const timeSpan = myBirthDay - currentDay;
  const dayLeft = Math.floor(timeSpan / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeSpan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minuteLeft = Math.floor((timeSpan % (1000 * 60 * 60)) / (1000 * 60));
  const secondLeft = Math.floor((timeSpan % (1000 * 60)) / 1000);
  day.textContent = dayLeft;
  hour.textContent = hoursLeft;
  minute.textContent = minuteLeft;
  second.textContent = secondLeft;
}
setInterval(countDown, 1000);

function dayPassed(present, previous) {
  return Math.round((present - previous) / (1000 * 60 * 60 * 24));
}

const present = new Date();

const past = new Date(2023, 3, 2);

console.log(
  dayPassed(present, past) <= 7
    ? "a day ago"
    : `${dayPassed(present, past)} days ago`
);
