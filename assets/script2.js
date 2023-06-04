var quizQuestions = [
    {
        question: 'What is the output of the following JavaScript Code? console.log(1 + "1");',
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
        answers: ['A: window.location="http://www.newURL.com";', 'B: browser.location="http://www.newURL.com"', 'C: navigator.location="http://www.newURL.com";', 'D: document.location="http://www.newURL.com";'],
        correct_answer: 'A: window.location="http://www.newURL.com";',
    },

    {
        question: "How do you declare a JavaScript variable?",
        answers: ["A: variable carName;", "B: var carName;", "C: v carName;", "D: val carName;"],
        correct_answer: "B: var carName;",
    },

    {
        question: 'What is the correct JavaScript syntax for opening a new window called "w2"?',
        answers: ['A: w2 =window.new("http://www.openai.com");', 'B: w2 = window.open("http://www.openai.com");', 'C: w2 = window.create("http://www.openai.com");', 'D: w2 = window.start("http://www.openai.com");'],
        correct_answer: 'B: w2 = window.open("http://www.openai.com");',
    },

    {
        question: "How does a WHILE loop start in JavaScript?",
        answers: ["A: while (i <= 10; i++)", "B: while i = 1 to 10", "C: while (i<= 10)", "D: while i <= 10"],
        correct_answer: "C: while (i<= 10)",
    },

    {
        question: "Which object provides methods to work with dates and times in JavaScript?",
        answers: ["A: Time", "B: Date", "C: DateTime", "D: None of the Above"],
        correct_answer: "B: Date",
    },

    {
        question: "What will the following code return: Boolean(10 > 9);?",
        answers: ["A: true", "B: false", "C: NaN", "D: undefined"],
        correct_answer: "A: true",
    },

    {
        question: "Which method removes the last element from an array and returns that element in JavaScript?",
        answers: ["A: pop()", "B: push()", "C: shift()", "D: unshift()"],
        correct_answer: "A: pop()",
    },

    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        answers: ["A: *", "B: =", "C: ==", "D: ==="],
        correct_answer: "B: =",
    },
]

var questionIndex = 0;
var startBtn = document.getElementById("startBtn")
var startingPage = document.querySelector(".starting-page");
var timer = document.querySelector(".timer");
var timeLeft = 60;
var score = 0;
var timerCountDown;
var gameScreen = document.getElementById("game-screen");
var question = document.getElementById("question");
var questionNumber = document.getElementById("question-number");
var choiceA = document.getElementById("choice-A");
var choiceB = document.getElementById("choice-B");
var choiceC = document.getElementById("choice-C");
var choiceD = document.getElementById("choice-D");
var feedback = document.getElementById("feedback");
var highScoreBox = document.getElementById("high-score-box");
var highScore = document.getElementById("high-score");
var highScorePage = document.querySelector(".high-score-page");
var highScoreContainer = document.querySelector(".high-score-container");
var highScoreList = document.querySelector(".high-score-list");
var highScoreListContainer = document.querySelector(".high-score-list-container");
var saveButton = document.getElementById("saveButton");
var nameField = document.getElementById("nameField");
var nameGoesHere = document.getElementById("name-goes-here");
var scoreGoesHere = document.getElementById("score-goes-here");

function checkAnswer(event) {

    disableAllChoices();

    console.log(event.target.textContent);
    var currentQuestion = quizQuestions[questionIndex];
    if (event.target.textContent === currentQuestion.correct_answer) {
        console.log("correct");
        feedback.classList.add("text-success");
        feedback.textContent = "Correct! 😁";
        score = (score + 10);
    } else {
        console.log("incorrect");
        feedback.classList.add("text-danger");
        feedback.textContent = "Incorrect! 😖";
        timeLeft = Math.max(timeLeft - 10, 0);
        score = Math.max(score - 10, 0);
        if (timeLeft <= 0) {
            timeLeft = 0;
            timer.textContent = timeLeft;
            clearInterval(timerCountDown);  // stop the countdown timer
            endQuiz();
            return;
        }
    }

    // display feedback and deduct and add the score as needed in the above if/else statement

    questionIndex++;

    setTimeout(displayQuestion, 1300);
}



function startQuiz() {
    startingPage.classList.add("hidden");
    countdown();
    gameScreen.classList.remove("hidden");
    displayQuestion();
    timer.classList.remove("hidden");
}

function endQuiz() {
    gameScreen.classList.add("hidden");
    timer.classList.add("hidden");
    score = score + (timeLeft*5);
    highScore.textContent = score;
    highScorePage.classList.remove("hidden");
    highScoreBox.classList.remove("hidden");
    highScoreContainer.classList.remove("hidden");
    console.log({ gameScreen, timer, highScore, highScorePage, highScoreBox, highScoreContainer });

}


function displayQuestion() {
    var currentQuestion = quizQuestions[questionIndex];

    if (!currentQuestion) {
        return endQuiz();
        // hide game screen again, populate score screen - run this inside endQuiz function
    }

    feedback.textContent = '';
    feedback.classList.remove('text-success', 'text-danger');


    questionNumber.textContent = "Question " + (questionIndex + 1);
    question.textContent = currentQuestion.question;
    
    let choices = [choiceA, choiceB, choiceC, choiceD];
    choices.forEach((choice, index) => {
        choice.textContent = currentQuestion.answers[index];
    });

    enableAllChoices();
}

function countdown() {
    // set timer interval
    timerCountDown = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timer.textContent = "Time left: " + timeLeft;
            if (timeLeft <= 10) {
                // set color to red when time hits 10 seconds
                timer.setAttribute("style", "color:red !important;");
            }
        } else {
            clearInterval(timerCountDown);
            // disable buttons, jump to high score page - how?
            console.log("Final Score = " + score);
            endQuiz();
        }
    }, 1000);
}

saveButton.addEventListener("click", function () {
    var userValues = {name: nameField.value, score: score};

    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScores.push(userValues);

    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    highScores - highScores.slice(0,15);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    nameField.value = "";
    highScoreListContainer.classList.remove("hidden");
    highScoreList.classList.remove("hidden");

    while (highScoreList.firstChild) {
        highScoreList.removeChild(highScoreList.firstChild);
    }

    highScores.forEach(function(user) {
        var listItem = document.createElement("li");
        listItem.textContent = user.name + " - " + user.score;
        highScoreList.appendChild(listItem);
  });
});


startBtn.addEventListener("click", startQuiz);

function handleClick(event){
    checkAnswer(event);
    disableAllChoices();
}

[choiceA, choiceB, choiceC, choiceD].forEach(choice => choice.addEventListener("click", handleClick));

function disableAllChoices() {
    [choiceA, choiceB, choiceC, choiceD].forEach(choice => choice.disabled = true);
}

function enableAllChoices() {
    [choiceA, choiceB, choiceC, choiceD].forEach(choice => choice.disabled = false);
}


  