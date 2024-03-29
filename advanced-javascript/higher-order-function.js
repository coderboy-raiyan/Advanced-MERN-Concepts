function reverseStr(str) {
  return str.split(" ").reverse().join("");
}

// Higher order function
function transformer(str, fun) {
  return function (extra) {
    return fun(str) + extra;
  };
}

console.log(transformer("hello js", reverseStr)(20));
