//HTML elements
let startQuizButton = document.querySelector("#start-button")
let endQuizButton = document.querySelector("#end-button")
let startPageHighScore = document.querySelector("start-page-highscore")
let quizPage = document.querySelector('#quiz');
let timerEl= document.querySelector("#time");
let choicesEl= document.querySelector("#choices");
let answerEl= document.querySelector("#answer");
let resultEL = document.querySelector("#result");
let startScreen = document.querySelector("#start");
let finalResultEl = document.querySelector("#final-result");


let time = questions.length * 5;
let timerId;
let questionIndex = 0;


function startQuiz() {
   console.log('---> Start Quiz!');

   startScreen.setAttribute("class", "hide");
   quizPage.removeAttribute("class");
   timerId = setInterval(clock, 1000);

   getQuestion();
}

function clock() {
   console.log('Clock');

   timerEl.textContent = time;

   if (time > 0) {
      time--;
   } else {
      stopQuiz();
   }
};


function getQuestion() {
   console.log('Get Question');
   if (questionIndex === questions.length || time === 0) {
      stopQuiz();
   } else {
      let currentQuestion = questions[questionIndex];
      let titleEl = document.querySelector("#question-title");
      // console.log(currentQuestion);
      titleEl.textContent = currentQuestion.title;

      choicesEl.textContent = "";

      currentQuestion.choices.forEach(function(choice, i) {
         let choiceButton = document.createElement("li");

         choiceButton.setAttribute("class", "choicebtn");
         choiceButton.setAttribute("value", choice);
         choiceButton.textContent = choice;
         choiceButton.addEventListener('click', questionClick);
         choicesEl.appendChild(choiceButton);
      });
   }
}

function stopQuiz() {
   console.log('Stop Quiz');
   clearInterval(timerId);

   quizPage.setAttribute("class", "hide");
   finalResultEl.removeAttribute("class");
}


function questionClick(event) {
   console.log('Question Click');
   let value = event.currentTarget.getAttribute("value");

   if (value !== questions[questionIndex].answer) {
      time -= 10;

      if (time < 0) {
         time = 0;
      }

      timerEl.textContent = time;

      resultEL.textContent = "wrong!";
   } else {
      resultEL.textContent = "correct!";
   }

   resultEL.setAttribute("class", "feedback");

   setTimeout(function() {
      resultEL.setAttribute("class", "feedback hide")
   }, 1000);

   questionIndex++;

   getQuestion();
   
}



// function saveNewScore() {
//    let finalScore = {
//        initials: initials.value,
//        score: secondsLeft
//    };
//    let allScores = localStorage.getItem("allScores");
//    if (!allScores) {
//        allScores = [];
//    } else {
//        allScores = JSON.parse(allScores);
//    }
//   allScores.push(finalScore);
//   let newScore = JSON.stringify(allScores);
//   localStorage.setItem("allScores", newScore);
//    window.location.replace("./index.html");
// }












startQuizButton.addEventListener("click",startQuiz);

// endQuizButton.addEventListener("click",stopQuiz);