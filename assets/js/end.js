const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('recentScore');
let highScores = localStorage.getItem('highScores');
if (highScores == null) {
    highScores = []
}else{
highScores = JSON.parse(highScores)
}



username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
    
});

saveHighScore = (e) => {
    console.log('clicked save')
    e.preventDefault();
};

saveScoreBtn.addEventListener("click", () => {
    highScores.push( {
        username: username.value,
        score: mostRecentScore
    }) 
    localStorage.setItem('highScores', JSON.stringify(highScores))
    showHighScores()
})

function showHighScores () {
  let highScoreEl = document.querySelector (".highScores")  
  highScoreEl.innerHTML=""
  for (const highscore of highScores) {
      const li = document.createElement('li')
      li.textContent = highscore.username + ' ' + highscore.score
      highScoreEl.appendChild(li)
  }
}
showHighScores()