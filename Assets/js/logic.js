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