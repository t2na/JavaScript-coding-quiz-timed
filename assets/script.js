var startButton = document.querySelector(".starting-page");
var startBtnEl = document.querySelector("#startbtn");
var questionPage = document.querySelector(".question-page");

startBtnEl.addEventListener("click", function (event) {
    console.log("Button Clicked");
    startButton.classList.add("hidden");
    questionPage.classList.remove("hidden");
})





//make Start Quiz page hidden

// make a question array, make a variable that keeps track of what question you're on using the questions index number - if you're on the first question, variable = , question 2 variable = 1, etc.

