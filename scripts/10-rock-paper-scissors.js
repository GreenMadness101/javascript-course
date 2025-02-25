const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
//^ uses default operator

updateScoreElement();


function playGame(playerMove) {
  const compMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (compMove === 'rock') {
      result = 'You lose.';
    } else if (compMove === 'paper') {
      result = 'You win.';
    } else if (compMove === 'scissors') {
      result = 'Tie.';
    }
  }
  else if (playerMove === 'paper') {
    if (compMove === 'rock') {
      result = 'You win.';
    } else if (compMove === 'paper') {
      result = 'Tie.';
    } else if (compMove === 'scissors') {
      result = 'You lose.';
    }
  }
  else if (playerMove === "rock") {
    if (compMove === 'rock') {
      result = 'Tie.';
    } else if (compMove === 'paper') {
      result = 'You lose.';
    } else if (compMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result == 'You lose.') {
    score.losses++;
  } else if (result == 'Tie.') {
    score.ties++;
  }

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${compMove}-emoji.png" class="move-icon">
  Computer`;

  //local storage only saves strings
  localStorage.setItem('score', JSON.stringify(score));
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//global variable
// let compMove = '';

//best practice to keep everything within the scope to prevent naming conflicts
function pickComputerMove() {
  const randomNumber = Math.random();

  let compMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    compMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2/3 ) { 
    compMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1 ) { 
    compMove = 'scissors';
  }

  return compMove;
}
