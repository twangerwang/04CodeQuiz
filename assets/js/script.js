// initializing variables
var secondsLeft = document.querySelector(".seconds-left");
var multipleChoice = document.querySelector(".multiple-choice");
var startQuiz = document.querySelector(".start-quiz");
var questions = document.querySelector(".quiz-question");
var startButton = document.querySelector(".start-button");
var startContainer = document.querySelector(".start-container");
var questionString = document.querySelector(".question-string");
var gameOver = document.querySelector(".game-over");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var index = 0;
var btnGrid = document.querySelector(".btn-grids");
var score = 0;
var scoreDisplay = document.querySelector(".score-display");
var timerCount = 20;

//start of the quiz, checks if we are at the end of the questions
function quizStart() {
    if (index===questionsBank.length) {
        over();
    }else{
    startContainer.style.display = "none";
    questions.classList.replace("hide", "show");
    questionString.textContent = questionsBank[index].question;
    btn1.textContent = questionsBank[index].options1;
    btn2.textContent = questionsBank[index].options2;
    btn3.textContent = questionsBank[index].options3;
    btn4.textContent = questionsBank[index].options4;
    btn1.setAttribute("value", questionsBank[index].options1);
    btn2.setAttribute("value", questionsBank[index].options2);
    btn3.setAttribute("value", questionsBank[index].options3);
    btn4.setAttribute("value", questionsBank[index].options4);
    }
}

//called when the game ends to show score
function over(){
    timerCount = 0;
    questions.classList.replace("show", "hide");
    gameOver.classList.replace("hide", "show");
    scoreDisplay.textContent= "Score: "+ score;
}

// function highScore(event) {
//     event.preventDefault();

// }

// checks to see if the user selected answer is correct or not
function checkAnswer(userChoice){
    answerCheck.style.display = "block";
    answerCheck.setAttribute("style", "color: rgb(41, 41, 43)");
    answerCheck.textContent = "";
    if (userChoice===questionsBank[index].answer){
        index++;
        quizStart();
        score++;
        answerCheck.textContent = "Correct!";
    }else {
        index++;
        answerCheck.textContent = "Wrong!";
        // checks to to make sure we don't take off too much time and end up with negative seconds
        if (timerCount<5){
            timeCount = 0;
            over();
        }else{
        timerCount-=5;
        quizStart();
        }
    }
}

//kicks off the quiz after a click
startButton.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log("click");
    quizStart();
    startTimer();
});

btnGrid.addEventListener("click", (event)=>{
    event.preventDefault();
    var userInput = this.event.target.value;
    checkAnswer(userInput);
})

// setTimer function starts and stops timer and triggers gameWon or gameLost
function startTimer() {
    
    timer = setInterval(function() {
        secondsLeft.textContent = timerCount;
        if (timerCount<=0) {
                clearInterval(timer);
                over();
            }
        else {
            timerCount--;
            
        }
    }, 1000);
}

//question bank
let questionsBank = [
    {
        question: "What is Q-Tip's original last name?",
        answer: "Davis",
        options1: "Jones",
        options2: "Johnson",
        options3: "Davis", 
        options4: "Smith"  
    },
    {
        question: "Who came out with their solo album first?",
        answer: "Q-Tip",
        options1: "Jairobi", 
        options2: "Ali Shaheed",
        options3: "Q-Tip", 
        options4: "Phife"
    },
    {
        question: "Where did Q-Tip and Phife meet?",
        answer: "Highschool",
        options1: "Highschool", 
        options2: "Local Gym", 
        options3: "Grocery Store", 
        options4: "Concert"
    },
    {
        question: "What was their first video?",
        answer: "Bonita Applebum",
        options1: "Can I Kick It",
        options2: "Buggin' Out", 
        options3: "I Left My Wallet in El Segundo", 
        options4: "Bonita Applebum"
    },
    {
        question: "How many members made up the group when it first took the name of Quest?",
        answer: "4",
        options1: "5",
        options2: "4",
        options3: "3",
        options4: "2"
    }
]

