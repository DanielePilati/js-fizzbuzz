"use strict";

let fizz = "Fizz";
let buzz = "Buzz";
let word = "";

for (let i = 1; i <= 100; i++) {
  word = i;
  if (!(i % 3)) {
    word = fizz;
  }
  if (!(i % 5)) {
    if (word === fizz) {
      word = word + buzz;
    } else {
      word = buzz;
    }
  }
  console.log(word);
}
