var startButton = document.querySelector(".starting-page");
var startBtnEl = document.querySelector("#startbtn");

startBtnEl.addEventListener("click", function (event) {
    console.log("Button Clicked");
    startButton.classList.add("hidden");
    questionOnePage.classList.remove("hidden");
})

var questionOnePage = document.querySelector(".question-1-page");
var questionOneAnswers = document.querySelectorAll(".answer-1-button");
var questionTwoPage = document.querySelector(".question-2-page");

var correctAnswerOne = document.getElementById("choice-1-A");
var questionOneCorrect = document.querySelector(".Question-One-Correct");
var questionOneIncorrect = document.querySelector(".Question-One-Incorrect");
var questionOneNext = document.querySelector(".question-1-page");

questionOneAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        // if answer A clicked = true
        if (event.target.id === "choice-1-A") {
            console.log("Question One Correct!");
            questionOneCorrect.classList.remove("hidden");
        // need to disable the other buttons 
        } else {
            console.log("Question One Incorrect!")
            questionOneIncorrect.classList.remove("hidden");
        }
        // How do I make it so that once one selection is made, no other selections can be made i.e. if someone clicks the correct answer, if they were to click another button, 
        document.querySelectorAll('.answer-1-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionOneNext.classList.add("hidden");
        questionTwoPage.classList.remove("hidden");
        }, 2000);
    });
});

var questionTwoPage = document.querySelector(".question-2-page");
var questionTwoAnswers = document.querySelectorAll(".answer-2-button");
var questionThreePage = document.querySelector(".question-3-page");

var correctAnswerTwo = document.getElementById("choice-2-A");
var questionTwoCorrect = document.querySelector(".Question-Two-Correct");
var questionTwoIncorrect = document.querySelector(".Question-Two-Incorrect");
var questionTwoNext = document.querySelector(".question-2-page");

questionTwoAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        // if answer A clicked = true
        if (event.target.id === "choice-2-B") {
            console.log("Question Two Correct!");
            questionTwoCorrect.classList.remove("hidden");
        // need to disable the other buttons 
        } else {
            console.log("Question Two Incorrect!")
            questionTwoIncorrect.classList.remove("hidden");
        }
        // How do I make it so that once one selection is made, no other selections can be made i.e. if someone clicks the correct answer, if they were to click another button, 
        document.querySelectorAll('.answer-2-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionTwoNext.classList.add("hidden");
        questionThreePage.classList.remove("hidden");
        }, 2000);
    });
});

var questionThreePage = document.querySelector(".question-3-page");
var questionThreeAnswers = document.querySelectorAll(".answer-3-button");
var questionFourPage = document.querySelector(".question-4-page");

var correctAnswerThree = document.getElementById("choice-3-A");
var questionThreeCorrect = document.querySelector(".Question-Three-Correct");
var questionThreeIncorrect = document.querySelector(".Question-Three-Incorrect");
var questionThreeNext = document.querySelector(".question-3-page");

questionThreeAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        
        if (event.target.id === "choice-3-A") {
            console.log("Question Three Correct!");
            questionThreeCorrect.classList.remove("hidden");
      
        } else {
            console.log("Question Three Incorrect!")
            questionThreeIncorrect.classList.remove("hidden");
        }

        document.querySelectorAll('.answer-3-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionThreeNext.classList.add("hidden");
        questionFourPage.classList.remove("hidden");
        }, 2000);
    });
});






//make Start Quiz page hidden

// make a question array, make a variable that keeps track of what question you're on using the questions index number - if you're on the first question, variable = , question 2 variable = 1, etc.

