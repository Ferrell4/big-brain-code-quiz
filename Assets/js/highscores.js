// highscores js
// variables 
var highscoresEl = document.getElementById("highscores");
var goBackEl = document.getElementById("goback");
var clearEl = document.getElementById("clear");
var scoreEl = document.getElementById("scores")
var userscore = localStorage.getItem("name") + " - " + localStorage.getItem("score")





// textcontent
highscoresEl.textContent = "Highscores";
goBackEl.textContent = "Go Back";
clearEl.textContent = "Clear Highscores";



// event listeners 
goBackEl.addEventListener("click", function(){
    window.location.href="index.html"
});

clearEl.addEventListener("click", function(){
    scoreEl.style.display = "none";
    localStorage.clear();
})



// renders leaderboard
function renderScores(){

 
  var tryingThis = localStorage.getItem("allScores")

  var myObj = JSON.parse(tryingThis);

  myObj.sort((a,b) => {
    return b.userscore - a.userscore;
  })

  for(var i = 0; i < myObj.length; i++){
    var theName = myObj[i].username
    var theScore = myObj[i].userscore
    
    var boardEntry = document.createElement("li")
    boardEntry.textContent = theName + " - " + theScore
    scoreEl.appendChild(boardEntry)
    var breakIt = document.createElement("br")
    scoreEl.appendChild(breakIt)

   
  }
  
 
  

  
   
  
}


renderScores();