// define dynamic parts of the page
var startButton = document.querySelector("button");
var container = document.querySelector(".container");
var main = document.querySelector("main");
var secondsEl = document.querySelector("#seconds");

// this controls the start button
startButton.addEventListener("click", function () {
    main.innerHTML = "";
    startQuiz();
});

// this is the amount of time for player
var secondsLeft = 75;

function startQuiz() {
    startTimer();
    createQuiz();
}

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

    return newQuestion();
}

// this function feeds the information of each question into the page structure
function newQuestion() {

    var questions = ["What is 'true'?"];
    var h1 = document.querySelector("h1");
    h1.textContent = questions[0];
    var answer = ["boolean", "string", "variable", "tag"]

    for (let i = 0; i < 4; i++) {
        var li = document.createElement("li");
        document.body.children[1].children[0].children[0].children[1].appendChild(li);
        var button = document.createElement("button")
        document.body.children[1].children[0].children[0].children[1].children[i].appendChild(button);
        button.setAttribute("style", "padding:1em;");
        button.textContent = answer[i];

    }


}

