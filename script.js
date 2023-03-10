'use strict';

let number;
let score;
let highscore = 0;

renderGame();

document.querySelector('.again').addEventListener('click', renderGame);

document.querySelector('.check').addEventListener('click',
() => {

    if(score > 1){
            const inputNumber = Number(document.querySelector('.guess').value);
            checkNumber(inputNumber);
    }else{
            document.querySelector('body').style.backgroundColor = '#eb0c1f';
            setText('.number', number);
            setText('.message', 'You lost π’');
            setText('.score', '0');
    }
});

function checkNumber(inputNumber){
    if(!inputNumber){

        setText('.message', 'Type number...π');

    }else if(inputNumber === number){ // if won
        document.querySelector('body').style.backgroundColor = '#60b347';
        setText('.number', number);
        setText('.message', 'Correctπ');
        highscore = score > highscore ? score : highscore;
        setText('.highscore', highscore);
        document.querySelector('.check').disabled = true;
    }else{
        setText('.message', inputNumber > number ? 'Too high π' : 'Too low π');
        setText('.score', --score);
    }
    
}


function setText(className, value){
    document.querySelector(className).textContent = value;
}

function renderGame(){ // to init all game components 
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    setText('.score', score);
    setText('.number', '?');
    setText('.message', 'Start guessing...');
    document.querySelector('.guess').value = '';
    number = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.check').disabled = false;
   // console.log(`[DEBUG] ${number}`); // FOR TEST
}
