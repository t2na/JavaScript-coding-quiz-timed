var startButton = document.querySelector(".starting-page");
var startBtnEl = document.querySelector("#startbtn");
var timer = document.querySelector(".timer");
var timeLeft = 60;
var score = 0;

startBtnEl.addEventListener("click", function (event) {
    console.log("Button Clicked");
    startButton.classList.add("hidden");
    questionOnePage.classList.remove("hidden");
    timer.classList.remove("hidden");
    countdown();
})

function countdown() {

    // set timer interval
    var timerCountDown = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 10) {
        // set color to red when time hits 10 seconds
        timer.setAttribute("style", "color:red !important;");
    }

    if (timeLeft <=0) {
        clearInterval(timerCountDown);
    }

}, 1000);
}

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
            score = (score + 10);
            console.log("Score = " + score);
        // need to disable the other buttons 
        } else {
            console.log("Question One Incorrect!")
            questionOneIncorrect.classList.remove("hidden");
            // make it so that answering incorrecly subtracts 10 seconds from time
            timeLeft = Math.max(timeLeft - 10, 0);
        }
        // How do I make it so that once one selection is made, no other selections can be made i.e. if someone clicks the correct answer, if they were to click another button? Solved.
        document.querySelectorAll('.answer-1-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionOneNext.classList.add("hidden");
        questionTwoPage.classList.remove("hidden");
        }, 1300);
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
            score = (score + 10);
            console.log("Score = " + score);
        // need to disable the other buttons 
        } else {
            console.log("Question Two Incorrect!")
            questionTwoIncorrect.classList.remove("hidden");
            // make it so that answering incorrecly subtracts 10 seconds from time
            timeLeft = Math.max(timeLeft - 10, 0);
        }
        document.querySelectorAll('.answer-2-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionTwoNext.classList.add("hidden");
        questionThreePage.classList.remove("hidden");
        }, 1300);
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
            score = (score + 10);
            console.log("Score = " + score);
      
        } else {
            console.log("Question Three Incorrect!")
            questionThreeIncorrect.classList.remove("hidden");
            // make it so that answering incorrecly subtracts 10 seconds from time
            timeLeft = Math.max(timeLeft - 10, 0);
        }

        document.querySelectorAll('.answer-3-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionThreeNext.classList.add("hidden");
        questionFourPage.classList.remove("hidden");
        }, 1300);
    });
});

var questionFourPage = document.querySelector(".question-4-page");
var questionFourAnswers = document.querySelectorAll(".answer-4-button");
var questionFivePage = document.querySelector(".question-5-page");

var correctAnswerFour = document.getElementById("choice-3-A");
var questionFourCorrect = document.querySelector(".Question-Four-Correct");
var questionFourIncorrect = document.querySelector(".Question-Four-Incorrect");
var questionFourNext = document.querySelector(".question-4-page");

questionFourAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        
        if (event.target.id === "choice-4-A") {
            console.log("Question Four Correct!");
            questionFourCorrect.classList.remove("hidden");
            score = (score + 10);
            console.log("Score = " + score);
      
        } else {
            console.log("Question Four Incorrect!")
            questionFourIncorrect.classList.remove("hidden");
            // make it so that answering incorrecly subtracts 10 seconds from time
            timeLeft = Math.max(timeLeft - 10, 0);
        }

        document.querySelectorAll('.answer-4-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionFourNext.classList.add("hidden");
        questionFivePage.classList.remove("hidden");
        }, 1300);
    });
});




//make Start Quiz page hidden

// make a question array, make a variable that keeps track of what question you're on using the questions index number - if you're on the first question, variable = , question 2 variable = 1, etc.

