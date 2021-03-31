//HTML elements
let startQuizButton = document.querySelector("#start-button")
let startPageHighScore = document.querySelector("start-page-highscore")
let quizPage = document.querySelector('#quiz');
let timerEl= document.querySelector("#time");
let choicesEl= document.querySelector("#choices");
let resultEL = document.querySelector("#result");; 
let startScreen = document.querySelector("#start");


// let finalScoreEl = document.querySelector("#finalScore");
// let submitBtn = document.querySelector("#subitScore");
// let highScoreHeader = document.querySelector("#highscore-header")
// let highScoreInput = document.querySelector("#highscore-initials");
// let saveScoreBtn = document.querySelector("#saveScoreBtn");
// let mostRecentScore = document.querySelector("mostRecentScore");



// let highscoreContainer = document.querySelector("#highscoreContainer");
// let highscoreDiv= document.querySelector("#high-ScorePage");
// let highScoreDisplay = document.querySelector("#highscore-score");
// let clearScoreBtn = document.querySelector("#Clearhighscore");


let time =questions.length * 10
//let timerId;
let questionIndex=0
console.log(time);

function startQuiz() {
   startScreen.setAttribute("class", "hide");
   quizPage.removeAttribute("class");
   timerId = setInterval(clock, 1000);
   timerEl.textContent = time;


   getQuestion() 

}

function clock() {
   timerEl.textContent = time;
   if (time > 0) {
      time--;
      setTimeout(decrement, 1000);
   }
   if (time <= 0) {
      //quizEnd()
   }
};



function getQuestion() {
   let currentQuestion = questions[questionIndex] 
   let titleEl =document.querySelector("#question-title");
   console.log(currentQuestion)
   titleEl.textContent = currentQuestion.title

   choicesEl.textContent = ""

   currentQuestion.choices.forEach(function(choice, i) {
      let choiceButton = document.createElement("li")
      choiceButton.setAttribute("class", "choicebtn")
      choiceButton.setAttribute("value", choice)
      choiceButton.textContent = choice
      choiceButton.addEventListener('click',questionClick)
      choicesEl.appendChild(choiceButton)
   })
}


function questionClick(event) {
   let value = event.currentTarget.getAttribute("value")
   if (value !== questions[questionIndex].answer) {  
      time-=10;
   
      if(time < 0) {
         time = 0
      }

      timerEl.textContent = time

      result.textContent = "wrong!"
   }

  else {
      result.textContent = "correct!"
   }

   result.setAttribute("class", "feedback")

   setTimeout(function() {
      result.setAttribute("class", "feedback hide")
   }, 1000) 

   questionIndex++
   if (questionIndex === questions.length) {
     quizEnd()
   }
   else {
      getQuestion()
   }
}














startQuizButton.addEventListener("click",startQuiz);

