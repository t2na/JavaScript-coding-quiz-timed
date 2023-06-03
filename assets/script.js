var startButton = document.querySelector(".starting-page");
var startBtnEl = document.querySelector("#startbtn");
var timer = document.querySelector(".timer");
var timeLeft = 60;
var score = 0;
var timerCountDown;
var allQuestions = document.querySelectorAll("div[class*='question-']");

var quizQuestions = [
    {
        question: "What is the output of the following JavaScript Code?",
        answers: ["A: 11", "B: 2", "C: NaN", "D: An Error"],
        correct_answer: "A: 11",
    },

    {
        question: "What does NaN stand for in JavaScript?",
        answers: ["A: Not a Name", "B: Not a Number", "C: New Array Number", "D: None of the Above"],
        correct_answer: "B: Not a Number",
    },

    {
        question: "Which of the following is the correct syntax to redirect a URL using JavaScript?",
        answers: ['A: window.location="http://www.newURL.com";', 'B: browser.location="http://www.newURL.com"', 'navigator.location="http://www.newURL.com";', 'D: document.location="http://www.newURL.com";'],
        correct_answer: 'A: window.location="http://www.newURL.com";',
    },

    {
        question: "What is the output of the following JavaScript Code?",
        answers: ["A: 11", "B: 2", "C: NaN", "D: An Error"],
        correct_answer: "A: 11",
    },

    {
        question: "What is the output of the following JavaScript Code?",
        answers: ["A: 11", "B: 2", "C: NaN", "D: An Error"],
        correct_answer: "A: 11",
    },

    {
        question: "What is the output of the following JavaScript Code?",
        answers: ["A: 11", "B: 2", "C: NaN", "D: An Error"],
        correct_answer: "A: 11",
    },

    {
        question: "What is the output of the following JavaScript Code?",
        answers: ["A: 11", "B: 2", "C: NaN", "D: An Error"],
        correct_answer: "A: 11",
    },

    {
        question: "What is the output of the following JavaScript Code?",
        answers: ["A: 11", "B: 2", "C: NaN", "D: An Error"],
        correct_answer: "A: 11",
    },

    {
        question: "What is the output of the following JavaScript Code?",
        answers: ["A: 11", "B: 2", "C: NaN", "D: An Error"],
        correct_answer: "A: 11",
    },

    {
        question: "What is the output of the following JavaScript Code?",
        answers: ["A: 11", "B: 2", "C: NaN", "D: An Error"],
        correct_answer: "A: 11",
    },
]

//quizQuestions[0].question;

// check time before going to next question
// put questions into an array, can use multiple arrays, single arrays, array of objects
// then, have a global cariable that tracks what question you're currently on, then you have a function that knows how to display the question that you're currently on, then whenever user answers a question, instead of hiding and moving onto next one, increment current question and recall that function

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
        // disable buttons, jump to high score page - how?
        allQuestions.forEach(function(page) {
            page.classList.add("hidden");
            console.log("pages hidden");
        });

        console.log("Final Score = " + score);
        document.querySelector(".high-score-page").classList.remove("hidden");
        highScoreBox.classList.remove("hidden");
        highScore.textContent = score;

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
            score = Math.max(score - 10, 0);
        }
        // How do I make it so that once one selection is made, no other selections can be made i.e. if someone clicks the correct answer, if they were to click another button? Solved.
        document.querySelectorAll('.answer-1-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });

        if (timeLeft >= 0) {
        setTimeout(() => {
        questionOneNext.classList.add("hidden");
        questionTwoPage.classList.remove("hidden");
        }, 1300);}

        else {
            questionOneNext.classList.add("hidden");
        }
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
            score = Math.max(score - 10, 0);
        }
        document.querySelectorAll('.answer-2-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });

        if (timeLeft >= 10) {
            setTimeout(() => {
            questionTwoNext.classList.add("hidden");
            questionThreePage.classList.remove("hidden");
            }, 1300);}
    
            else {
                questionTwoNext.classList.add("hidden");
            }
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
            score = Math.max(score - 10, 0);
        }

        document.querySelectorAll('.answer-3-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
       
        if (timeLeft >= 10) {
            setTimeout(() => {
            questionThreeNext.classList.add("hidden");
            questionFourPage.classList.remove("hidden");
            }, 1300);}
    
            else {
                questionThreeNext.classList.add("hidden");
            }
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
            score = Math.max(score - 10, 0);
        }

        document.querySelectorAll('.answer-4-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        
        if (timeLeft >= 10) {
            setTimeout(() => {
            questionFourNext.classList.add("hidden");
            questionFivePage.classList.remove("hidden");
            }, 1300);}
    
            else {
                questionFourNext.classList.add("hidden");
            }
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
            score = Math.max(score - 10, 0);
        }

        document.querySelectorAll('.answer-5-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        
        if (timeLeft >= 10) {
            setTimeout(() => {
            questionFiveNext.classList.add("hidden");
            questionSixPage.classList.remove("hidden");
            }, 1300);}
    
            else {
                questionFiveNext.classList.add("hidden");
            }
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
            score = Math.max(score - 10, 0);
        }

        document.querySelectorAll('.answer-6-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        
        if (timeLeft >= 10) {
            setTimeout(() => {
            questionSixNext.classList.add("hidden");
            questionSevenPage.classList.remove("hidden");
            }, 1300);}
    
            else {
                questionSixNext.classList.add("hidden");
            }
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
            score = Math.max(score - 10, 0);
        }

        document.querySelectorAll('.answer-7-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        
        if (timeLeft >= 10) {
            setTimeout(() => {
            questionSevenNext.classList.add("hidden");
            questionEightPage.classList.remove("hidden");
            }, 1300);}
    
            else {
                questionSevenNext.classList.add("hidden");
            }
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
            score = Math.max(score - 10, 0);
        }

        document.querySelectorAll('.answer-8-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        
        if (timeLeft >= 10) {
            setTimeout(() => {
            questionEightNext.classList.add("hidden");
            questionNinePage.classList.remove("hidden");
            }, 1300);}
    
            else {
                questionEightNext.classList.add("hidden");
            }
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
            score = Math.max(score - 10, 0);
        }

        document.querySelectorAll('.answer-9-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        
        if (timeLeft >= 10) {
            setTimeout(() => {
            questionNineNext.classList.add("hidden");
            questionTenPage.classList.remove("hidden");
            }, 1300);}
    
            else {
                questionNineNext.classList.add("hidden");
            }
    });
});

var questionTenPage = document.querySelector(".question-10-page");
var questionTenAnswers = document.querySelectorAll(".answer-10-button");
var highScorePage = document.querySelector(".high-score-page");
var highScoreBox = document.getElementById("high-score-box");

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
            score = Math.max(score - 10, 0);
        }

        document.querySelectorAll('.answer-10-button').forEach(function(button) {
            console.log("Disabling button", button.id);
            button.disabled = true;
        });
        clearInterval(timerCountDown);

        score = score + (timeLeft*5);
        console.log("Final Score = " + score)
        highScore.textContent = score;

        if (timeLeft >= 10) {
            setTimeout(() => {
            questionTenNext.classList.add("hidden");
            highScorePage.classList.remove("hidden");
            highScoreBox.classList.remove("hidden");
            }, 1300);}
    
            else {
                questionTenNext.classList.add("hidden");
            highScorePage.classList.remove("hidden");
            highScoreBox.classList.remove("hidden");
            }

        setTimeout(() => {
        questionTenNext.classList.add("hidden");
        highScorePage.classList.remove("hidden");
        highScoreBox.classList.remove("hidden");
        }, 1300);
    });
});

var nameField = document.getElementById("nameField");
var saveButton = document.getElementById("saveButton");
var highScore = document.getElementById("high-score");
var highScoreList = document.querySelector(".high-score-list");
var nameGoesHere = document.getElementById("name-goes-here");
var scoreGoesHere = document.getElementById("score-goes-here");

saveButton.addEventListener("click", function() {
    var userValues = {name: nameField.value, score: score}

    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScores.push(userValues);

    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    highScores = highScores.slice(0, 15);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    nameField.value = "";
    highScoreList.classList.remove("hidden");
    

    while (highScoreList.firstChild) {
        highScoreList.removeChild(highScoreList.firstChild);
    }

    highScores.forEach(function(user) {
        var listItem = document.createElement("li");
        listItem.textContent = user.name + " - " + user.score;
        highScoreList.appendChild(listItem);
    });

    // set value of name and score to high-score-list
    //nameGoesHere.textContent = localStorage.getItem("userValues");

});


//make Start Quiz page hidden

// make a question array, make a variable that keeps track of what question you're on using the questions index number - if you're on the first question, variable = , question 2 variable = 1, etc.

