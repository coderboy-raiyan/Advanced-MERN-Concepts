const fs = require("fs");
const crypto = require("crypto");

console.log("I'm the first one");
const start = Date.now();

fs.readFile("text.txt", () => {
  console.log("I/O operation done!");

  console.log("-----------------");

  setTimeout(() => console.log("Time out 1"), 0);
  setTimeout(() => console.log("Time out 2"), 3000);
  setImmediate(() => console.log("Immediately done!!"));
  process.nextTick(() => console.log("I'm next tick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted 1");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted 2");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted 3");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted 4");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted 5");
  });
});
