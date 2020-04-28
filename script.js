// define dynamic parts of the page
var startButton = document.querySelector("button");
var container = document.querySelector(".container");
var main = document.querySelector("main");
var secondsEl = document.querySelector("#seconds");

// reset quiz for user
var score = 0;
questionNumber = 0;
// this is the amount of time for player
var secondsLeft = 75;

// put all questions and answers into array
var questions = ["The value \"true\" is an example of what type of variable?", "Which of the following methods could be called to change a font-size of the content of an element?", "A user will be prompted if Javascript code runs which of the following methods:"];
var answers = [["Boolean ", "Number ", "String ", "Tag ", 0], [], []];


// this controls the start button
startButton.addEventListener("click", function () {
    main.innerHTML = "";
    startQuiz();
});

function startQuiz() {
    startTimer();
    createQuiz();
}

// simple interval for Timer
function startTimer() {
    secondsEl.textContent = secondsLeft;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        secondsEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //sendMessage();
        }

    }, 1000);
    return secondsLeft;
}

// this function creates the structure of the page controlling the quiz
function createQuiz() {
    var sectionEl = document.createElement("section");
    document.body.children[1].appendChild(sectionEl);
    sectionEl.setAttribute("class", "container");
    var figureEl = document.createElement("figure");
    document.body.children[1].children[0].appendChild(figureEl);
    figureEl.setAttribute("class", "container");
    var h1 = document.createElement("h1");
    document.body.children[1].children[0].children[0].appendChild(h1);
    var ol = document.createElement("ol");
    document.body.children[1].children[0].children[0].appendChild(ol);
    ol.setAttribute("style", "padding-top:4em;");

    // not sure if this works...
    askQuestion();
}

// this function feeds the information of each question into the page structure
function askQuestion() {

    var h1 = document.querySelector("h1");
    h1.textContent = questions[questionNumber];

    for (let i = 0; i < 4; i++) {
        var li = document.createElement("li");
        document.body.children[1].children[0].children[0].children[1].appendChild(li);
        var answerButton = document.createElement("button")
        document.body.children[1].children[0].children[0].children[1].children[i].appendChild(answerButton);
        answerButton.setAttribute("style", "padding:1em;width:100%");
        answerButton.setAttribute("id", "answer");
        answerButton.textContent = answers[questionNumber][i];
    }


}

//  if (i === answers[questionNumber][4]) {
//   var answerIsCorrect = true;
//  var correctAnswer = answers[questionNumber][4];
// }
/*
var answerButtonEl = document.querySelector("#answer").textContent;
console.log(answerButtonEl);


answerButtonEl.addEventListener("click", function (event) {
   var answer = event.target.textContent;
   console.log(answer);

   if (answer === answers[answers[4]]) {
         alert("correct!");
     }
});


//  console.log(correctAnswer);

// if (answers[questionNumber][4] === answers.indexOf(answers[questionNumber])) {
//   score = + 1;
//  console.log(score);
55

     //  }

//    });

 //  questionNumber++;



*/