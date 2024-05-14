"use strict";

const fizz = "Fizz";
const buzz = "Buzz";
let word = "";

const ulLi = document.querySelector("#list");

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
  const demoLI = document.createElement("li");
  demoLI.classList.add("col");
  ulLi.appendChild(demoLI);
  console.log(word);
}
