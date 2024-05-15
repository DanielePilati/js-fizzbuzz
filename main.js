"use strict";
//creo variabili da utilizzare
const fizz = "Fizz";
const buzz = "Buzz";
let word = "";
//creo variabili da utilizzare

//bonus by me
//individuo l'elemento html
const ulLi = document.querySelector("#list");
//inserisco contatori
let buzzCounter = 0;
let fizzCounter = 0;
let fizzBuzzCounter = 0;
//bonus by me

//inizio ciclo
for (let i = 1; i <= 100; i++) {
  //creo elemento li // bonus by me
  const demoLI = document.createElement("li");
  demoLI.classList.add("col", "border", "border-black");
  ulLi.appendChild(demoLI);
  //creo elemento li // bonus by me
  word = i;
  // verifico se è divisibile per 3 e aggiungo fizz
  if (!(i % 3)) {
    word = fizz;
    //bonus
    fizzCounter++;
    demoLI.classList.add("bg-info-subtle"); //cambio bg
    //bonus
  }
  // verifico se è divisibile per 3
  // verifico se è divisibile per 5
  if (!(i % 5)) {
    if (word === fizz) {
      word = word + buzz;
      //bonus
      fizzBuzzCounter++;
      demoLI.classList.add("bg-warning-subtle"); //cambio bg
      // bonus
    } else {
      word = buzz;
      //bonus
      buzzCounter++;
      demoLI.classList.add("bg-success"); //cambio bg
      //bonus
    }
  }
  // verifico se è divisibile per 5
  //stamo parola
  demoLI.innerHTML = word;
  console.log(word);
  //stampo parola
  //bonus mostro contatore
  document.querySelector("#fizzcount").innerHTML = fizzCounter;
  document.querySelector("#buzzcount").innerHTML = buzzCounter;
  document.querySelector("#fizzbuzzcount").innerHTML = fizzBuzzCounter;
  //bonus mostro contatore
}
//fine ciclo
