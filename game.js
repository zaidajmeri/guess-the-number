let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);

let submit = document.querySelector('#subt');
let userinput = document.querySelector('#guessFields');
let slots = document.querySelector('.guesses');
let remaining = document.querySelector('.last');
let loworhigh = document.querySelector('.final');
let startover = document.querySelector('.result');

var p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playgame = true;

//we have check the user allow not then we move to another 
if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validate(guess);
    });

}


//guess the value that in 1 to 100 or not.
function validate(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('please enter a valid number');
    } else if (guess > 100) {
        alert('please enter number under 100');
    } else {
        prevGuess.push(guess);  //enter the value in array
        if (numGuess === 11) {
            displayGuess(guess);
            displaymsg(`Game Over , Random Number is ${randomNum}`);
            endGame();
        }
        else {
            displayGuess(guess);
            chkguess(guess);
        }
    }
}

//the value is equal to random number if equal then the user winn and give msg through displayGuess() function.
function chkguess(guess) {
    if (guess === randomNum) {
        displaymsg(`You Win , You Guessed it right`);
        endGame();
    }
    else if (guess < randomNum) {
        displaymsg(`number is tooooo low`);

    }
    else if (guess > randomNum) {
        displaymsg(`number is toooo high`);
    }

}

//update array, cleaning the values 
function displayGuess(guess) {
    userinput.value = ''; //for cleaning the textbox
    slots.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}


function displaymsg(msg) {
    loworhigh.innerHTML = `<h2>${msg}</h2>`;

}

function endGame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newGame();
}

function newGame() {
    const newGamebtn = document.querySelector('#newGame');
    newGamebtn.addEventListener('click', function (e) {
        let randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        slots.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p);
        playgame = true;
    });
}

