'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const resetButton = document.querySelector('.btn--new');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let currentScore, activePlayer, scores, playing;

const inIt = () =>{
 currentScore = 0;
 activePlayer = 0;
 scores = [0, 0];
 playing = true;

 score0El.textContent = 0;
 score1El.textContent = 0;
 current0El.textContent = 0;
 current1El. textContent = 0;

 diceEl.classList.add('hidden');
 player0El.classList.remove('player--winner');
 player1El.classList.remove('player--winner');
 player0El.classList.add('player--active');
 player1El.classList.remove('player--active');
}
inIt();
const switchPlayer = () => {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
    
}
// Rolling Dice Functionality
rollButton.addEventListener('click', function(){
    if (playing) {
     const dice = Math.trunc(Math.random()*6)+1;
     console.log(dice)
     diceEl.src =`dice-${dice}.png`;
     diceEl.classList.remove('hidden')

   // Set Current score
    if (dice!== 1){
     currentScore += dice
     document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
    // switch Player
    switchPlayer();  
    }
    
    }

})

// Hold Button Functionality

holdButton.addEventListener('click', () => {
    if (playing){
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

    if (scores[activePlayer] >= 20){
    playing = false
    diceEl.classList.add('hidden')
    document
        .querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document
        .querySelector(`.player--${activePlayer}`).classList.remove('player--active');    
    }else{
    switchPlayer(); 
    }
     
    }
     
})

// Reset Button functionality
resetButton.addEventListener('click', inIt)