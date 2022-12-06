// index js
// variables 
var headerEl = document.querySelector("header")
var viewScoreEl = document.getElementById("viewscores");
var timerEl = document.getElementById("timer");
var mainTextEl = document.getElementById("main-text");
var paraEl = document.getElementById("paragraph");
var buttonEl = document.getElementById("button");
var choicesEl = document.getElementById("choices")
var l1El = document.getElementById("choice1")
var l2El = document.getElementById("choice2")
var l3El = document.getElementById("choice3")
var l4El = document.getElementById("choice4")
var answer = document.getElementsByClassName("answer")
var statusEl = document.getElementById("answerstatus")
var form = document.getElementById("form")
var textBox = document.getElementById("textbox")

  // questions
  var questions = [
    {
      question: "Commonly used data types DO NOT include?",
      choice1: "strings",
      choice2: "booleans",
      choice3: "alerts",
      choice4: "numbers",
      correct: "choice3"
    },
  
    {
      question: "The condition in an if/else statement is enclosed within ___.",
      choice1: "quotes",
      choice2: "curly brackets",
      choice3: "parentheses",
      choice4: "square brackets",
      correct: "choice3"
   },
  
    {
      question: "Arrays in JavaScript can be used to store ____.",
      
      choice1: "numbers and strings",
      choice2: "other arrays",
      choice3: "booleans",
      choice4: "all of the above",
      correct: "choice4"
    },
  
    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      choice1: "commas",
      choice2: "curly brackets",
      choice3: "quotes",
      choice4: "parenthese",
      correct: "choice3"
    },
  {
    question: " A very useful tool used during development and debugging for printint content to the debugger is:",
      choice1: "JavaScript",
      choice2: "console log",
      choice3: "for loops",
      choice4: "terminal/bash",
      correct: "choice2"
  }
  
  ]

  var lastQuestion = questions.length -1;
  var currentQuestion = 0;



// text content
viewScoreEl.textContent = "View Highscores";
timerEl.textContent = "Timer: 0";
mainTextEl.textContent = "Coding Quiz Challenge!"
paraEl.textContent = "Press the start button to begin the quiz. The timer will start right away, and your time left will be your final score. Be careful! Every wrong answer will reduce 10 seconds from the timer and your overall final score. Good luck and have fun!!"
buttonEl.textContent = "Start!";


// style
headerEl.style.fontSize = "10px";
timerEl.style.cssFloat = "right";
mainTextEl.style.fontSize = "45px";



// time var
var timeLeft = 80;
var timeTaken = 10;
var timerInterval;
var quizEnd = false

// timer function 
function startTimer(){
    quizEnd = false
    var timerInterval = setInterval(function(){
        if (timeLeft > 1){
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else if(timeLeft === 1){
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        }else{
            endGame();
            timerEl.textContent = "Timer: " + 0; 
            clearInterval(timerInterval);
        }
        localStorage.setItem("time", timeLeft)
        if (quizEnd === true){
          timerEl.textContent = "Timer: " + localStorage.getItem("score")
          clearInterval(timerInterval)
          
        }
    }, 1000);
    
}

// render question
function createQuestion(){

    var q = questions[currentQuestion];

    mainTextEl.textContent = q.question;
    paraEl.style.display = "none";
    buttonEl.style.display = "none";
    choicesEl.style.display = "block";
    l1El.textContent = "1. " + q.choice1;
    l2El.textContent = "2. " + q.choice2;
    l3El.textContent = "3. " + q.choice3;
    l4El.textContent = "4. " + q.choice4;

}

// end quiz
function endGame(){
  quizEnd = true
  var finalScore = localStorage.setItem("score", timeLeft)
  choicesEl.style.display = "none";
  statusEl.style.display = "none";
  form.style.display = "flex";
  
  mainTextEl.textContent = "Thanks for playing!"


  score = document.createElement("h3")
  mainTextEl.appendChild(score)
  score.textContent = "Final Score: " + localStorage.getItem("score")

  userName = document.createElement("h4")
  score.appendChild(userName)
  userName.textContent = "Enter your name:"
mainTextEl.appendChild(form)
 
 

  
  
}





// check answer
function checkAnswer(answer){


  if (answer == questions[currentQuestion].correct){
    statusEl.textContent = "Correct!"
   
    
  }else{
    statusEl.textContent = "Wrong!"
    timeLeft -= timeTaken;
    
    
  }
  if(currentQuestion < lastQuestion){
    currentQuestion++;
    createQuestion();
  }else{
    endGame();
  }

}






// event listeners 

// start button
buttonEl.addEventListener("click", function(){
    startQuiz();
});

// choices button

l1El.addEventListener("click", function(){
  checkAnswer('choice1');
});

l2El.addEventListener("click", function(){
  checkAnswer('choice2');
});

l3El.addEventListener("click", function(){
  checkAnswer('choice3');
});

l4El.addEventListener("click", function(){
  checkAnswer('choice4');
});

// form submit 
form.addEventListener("submit", function(event){
  var formText = textBox.value.trim();
  if (formText.length == 0){
    alert("Please enter a username!")
    event.preventDefault();
  }else{
    localStorage.setItem("name", formText)
    event.preventDefault();
    sendScore();
  }
})

// run the quiz
function startQuiz(){
  startTimer();
  createQuestion();
 
};


// runs pushscore fun and takes user to highscores html page
function sendScore(){

  pushScore();
  window.location.href = "highscores.html"
  

}

// pushes user name and score into an obj array in localstorage
function pushScore(){

  var currentScore = JSON.parse(localStorage.getItem("allScores"));

  if(currentScore === null) currentScore = [];
  var names = localStorage.getItem("name")
  var scores = localStorage.getItem("score")
  var aScore = {
    username: names,
    userscore: scores
  }
localStorage.setItem("aScore", JSON.stringify(aScore))
  
currentScore.push(aScore)
localStorage.setItem("allScores", JSON.stringify(currentScore))

}