// Example 1

let f;

function g() {
  let a = 10;
  f = function () {
    console.log(a * 2);
  };
}
function h() {
  let a = 100;
  f = function () {
    console.log(a * 2);
  };
}

g();
f();

// re-assign
h();
f();
