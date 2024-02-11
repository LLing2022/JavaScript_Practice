"use strict";
// DOM document object model -> a link point between html css and JavaScript, DOM methods and properties are part of Web API (application programming interface)
// . using to access a class
// 'document' is the entry point of DOM

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//document.querySelector('.number').textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "🚨 No Number Inserted!";
    //When player wins:
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#edc0d2";
    document.querySelector(".number").style.width = "30rem";
    //check and set high score!
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
      highScore = score;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High ⬇️" : "Too Low ⬆️";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥!!You lost!!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
