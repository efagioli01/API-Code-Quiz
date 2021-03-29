//HTML elements
let startQuizButton = document.querySelector("#start-button")
let startPageHighScore = document.querySelector("startPageHighscore")
let quizPage = document.querySelector('#quiz');
let timerEl= document.queryCommandEnabled("#time")
let questionsEl = document.querySelector("#questions");
let choicesEl= document.querySelector("#choices")
let resultEL = document.querySelector("#result");
let quizOverEl = document.querySelector("quizOver");
let finalScoreEl = document.querySelector("#finalScore");
let highScoreInput = document.querySelector("#initials");
let highscoreName= document.querySelector("#highscoreInitials");
let highscoreContainer = document.querySelector("#highscoreContainer");
let highscoreDiv= document.querySelector("#highScorePage");
let highScoreDisplay = document.querySelector("#highscore-score");
let clearScoreBtn = document.querySelector("#ClearScore");
let startScreen = document.querySelector("#start");
let result = document.querySelector("#result");

let time =questions.length * 15
let timerId;
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
   time--;
   timerEl.textContent = time;
   if (time <= 0) {
      quizEnd()
    }
}

function getQuestion() {
   let currentQuestion = questions[questionIndex]
   let titleEl =document.querySelector("#question-title");
   //console.log(currentQuestion)
   titleEl.textContent = currentQuestion.title

   choicesEl.textContent = ""

   currentQuestion.choices.forEach(function(choice, i) {
      let choiceButton = document.createElement("buttons")
      choiceButton.setAttribute("class", "choicebtn")
      choiceButton.setAttribute("value", choice)
      choiceButton.textContent = choice
      choiceButton.onclick = questionClick
      choicesEl.appendChild(choiceButton)
   })
}

function questionClick() {
   if (this.value !== questions[questionIndex].answer) {  
      time-=10;
      if(time < 0) {
         time = 0
      }

      timerEl.textContent = time

      result.textContent = "wrong"
   }

   else {
      result.textContent = "correct"
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











    