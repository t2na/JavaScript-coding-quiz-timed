var startButton = document.querySelector(".starting-page");
var startBtnEl = document.querySelector("#startbtn");
var timer = document.querySelector(".timer");
var timeLeft = 60;
var score = 0;
var timerCountDown;

startBtnEl.addEventListener("click", function (event) {
    console.log("Button Clicked");
    startButton.classList.add("hidden");
    questionOnePage.classList.remove("hidden");
    timer.classList.remove("hidden");
    countdown();
})

function countdown() {

    // set timer interval
    timerCountDown = setInterval(function () {
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



var questionFivePage = document.querySelector(".question-5-page");
var questionFiveAnswers = document.querySelectorAll(".answer-5-button");
var questionSixPage = document.querySelector(".question-6-page");

var correctAnswerFour = document.getElementById("choice-3-A");
var questionFiveCorrect = document.querySelector(".Question-Five-Correct");
var questionFiveIncorrect = document.querySelector(".Question-Five-Incorrect");
var questionFiveNext = document.querySelector(".question-5-page");

questionFiveAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        
        if (event.target.id === "choice-5-B") {
            console.log("Question Five Correct!");
            questionFiveCorrect.classList.remove("hidden");
            score = (score + 10);
            console.log("Score = " + score);
      
        } else {
            console.log("Question Five Incorrect!")
            questionFiveIncorrect.classList.remove("hidden");
            // make it so that answering incorrecly subtracts 10 seconds from time
            timeLeft = Math.max(timeLeft - 10, 0);
        }

        document.querySelectorAll('.answer-5-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionFiveNext.classList.add("hidden");
        questionSixPage.classList.remove("hidden");
        }, 1300);
    });
});

var questionSixPage = document.querySelector(".question-6-page");
var questionSixAnswers = document.querySelectorAll(".answer-6-button");
var questionSevenPage = document.querySelector(".question-7-page");

var correctAnswerFour = document.getElementById("choice-3-A");
var questionSixCorrect = document.querySelector(".Question-Six-Correct");
var questionSixIncorrect = document.querySelector(".Question-Six-Incorrect");
var questionSixNext = document.querySelector(".question-6-page");

questionSixAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        
        if (event.target.id === "choice-6-B") {
            console.log("Question Six Correct!");
            questionSixCorrect.classList.remove("hidden");
            score = (score + 10);
            console.log("Score = " + score);
      
        } else {
            console.log("Question Six Incorrect!")
            questionSixIncorrect.classList.remove("hidden");
            // make it so that answering incorrecly subtracts 10 seconds from time
            timeLeft = Math.max(timeLeft - 10, 0);
        }

        document.querySelectorAll('.answer-6-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionSixNext.classList.add("hidden");
        questionSevenPage.classList.remove("hidden");
        }, 1300);
    });
});

var questionSevenPage = document.querySelector(".question-7-page");
var questionSevenAnswers = document.querySelectorAll(".answer-7-button");
var questionEightPage = document.querySelector(".question-8-page");

var correctAnswerFour = document.getElementById("choice-3-A");
var questionSevenCorrect = document.querySelector(".Question-Seven-Correct");
var questionSevenIncorrect = document.querySelector(".Question-Seven-Incorrect");
var questionSevenNext = document.querySelector(".question-7-page");

questionSevenAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        
        if (event.target.id === "choice-7-C") {
            console.log("Question Seven Correct!");
            questionSevenCorrect.classList.remove("hidden");
            score = (score + 10);
            console.log("Score = " + score);
      
        } else {
            console.log("Question Seven Incorrect!")
            questionSevenIncorrect.classList.remove("hidden");
            // make it so that answering incorrecly subtracts 10 seconds from time
            timeLeft = Math.max(timeLeft - 10, 0);
        }

        document.querySelectorAll('.answer-7-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionSevenNext.classList.add("hidden");
        questionEightPage.classList.remove("hidden");
        }, 1300);
    });
});

var questionEightPage = document.querySelector(".question-8-page");
var questionEightAnswers = document.querySelectorAll(".answer-8-button");
var questionNinePage = document.querySelector(".question-9-page");

var correctAnswerFour = document.getElementById("choice-3-A");
var questionEightCorrect = document.querySelector(".Question-Eight-Correct");
var questionEightIncorrect = document.querySelector(".Question-Eight-Incorrect");
var questionEightNext = document.querySelector(".question-8-page");

questionEightAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        
        if (event.target.id === "choice-8-B") {
            console.log("Question Eight Correct!");
            questionEightCorrect.classList.remove("hidden");
            score = (score + 10);
            console.log("Score = " + score);
      
        } else {
            console.log("Question Eight Incorrect!")
            questionEightIncorrect.classList.remove("hidden");
            // make it so that answering incorrecly subtracts 10 seconds from time
            timeLeft = Math.max(timeLeft - 10, 0);
        }

        document.querySelectorAll('.answer-8-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionEightNext.classList.add("hidden");
        questionNinePage.classList.remove("hidden");
        }, 1300);
    });
});

var questionNinePage = document.querySelector(".question-9-page");
var questionNineAnswers = document.querySelectorAll(".answer-9-button");
var questionTenPage = document.querySelector(".question-10-page");

var correctAnswerFour = document.getElementById("choice-3-A");
var questionNineCorrect = document.querySelector(".Question-Nine-Correct");
var questionNineIncorrect = document.querySelector(".Question-Nine-Incorrect");
var questionNineNext = document.querySelector(".question-9-page");

questionNineAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        
        if (event.target.id === "choice-9-A") {
            console.log("Question Nine Correct!");
            questionNineCorrect.classList.remove("hidden");
            score = (score + 10);
            console.log("Score = " + score);
      
        } else {
            console.log("Question Nine Incorrect!")
            questionNineIncorrect.classList.remove("hidden");
            // make it so that answering incorrecly subtracts 10 seconds from time
            timeLeft = Math.max(timeLeft - 10, 0);
        }

        document.querySelectorAll('.answer-9-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        setTimeout(() => {
        questionNineNext.classList.add("hidden");
        questionTenPage.classList.remove("hidden");
        }, 1300);
    });
});

var questionTenPage = document.querySelector(".question-10-page");
var questionTenAnswers = document.querySelectorAll(".answer-10-button");
var highScorePage = document.querySelector(".high-score-page");

var correctAnswerFour = document.getElementById("choice-3-A");
var questionTenCorrect = document.querySelector(".Question-Ten-Correct");
var questionTenIncorrect = document.querySelector(".Question-Ten-Incorrect");
var questionTenNext = document.querySelector(".question-10-page");

questionTenAnswers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        
        if (event.target.id === "choice-10-B") {
            console.log("Question Ten Correct!");
            questionTenCorrect.classList.remove("hidden");
            score = (score + 10);
            console.log("Score = " + score);
      
        } else {
            console.log("Question Ten Incorrect!")
            questionTenIncorrect.classList.remove("hidden");
            // make it so that answering incorrecly subtracts 10 seconds from time
            timeLeft = Math.max(timeLeft - 10, 0);
        }

        document.querySelectorAll('.answer-10-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        clearInterval(timerCountDown);
        setTimeout(() => {
        questionTenNext.classList.add("hidden");
        highScorePage.classList.remove("hidden");
        }, 1300);
    });
});






//make Start Quiz page hidden

// make a question array, make a variable that keeps track of what question you're on using the questions index number - if you're on the first question, variable = , question 2 variable = 1, etc.

