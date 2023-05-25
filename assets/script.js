var startButton = document.querySelector(".starting-page");
var startBtnEl = document.querySelector("#startbtn");
var questionOnePage = document.querySelector(".question-1-page");
var questionOneAnswers = document.querySelectorAll(".answer-1-button");
var questionTwoPage = document.querySelector(".question-2-page");

startBtnEl.addEventListener("click", function (event) {
    console.log("Button Clicked");
    startButton.classList.add("hidden");
    questionOnePage.classList.remove("hidden");
})

var correctAnswerOne = document.getElementById("1-choice-A");
var AnswerOneCorrect = document.querySelector(".Answer-One-Correct");
var AnswerOneIncorrect = document.querySelector(".Answer-One-Incorrect");
var questionOneNext = document.querySelector(".question-1-page");

questionOneAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        // if answer A clicked = true
        if (event.target.id === "1-choice-A") {
            console.log("Answer One Correct!");
            AnswerOneCorrect.classList.remove("hidden");
        // need to disable the other buttons
        document.querySelectorAll('.answer-1-button:not(#1-choice-A)').forEach(function(button) {
            button.disabled = true;
        });
        

        } else {
            console.log("Answer One Incorrect!")
            AnswerOneIncorrect.classList.remove("hidden");
        }
        // How do I make it so that once one selection is made, no other selections can be made i.e. if someone clicks the correct answer, if they were to click another button, 
        setTimeout(() => {
        questionOneNext.classList.add("hidden");
        questionTwoPage.classList.remove("hidden");
        }, 2000);
    });
});








//make Start Quiz page hidden

// make a question array, make a variable that keeps track of what question you're on using the questions index number - if you're on the first question, variable = , question 2 variable = 1, etc.

