let $submitButton = document.getElementById('submit');
// console.log($submitButton);

let $msg = document.getElementById('message');
let $lives = document.getElementById('lives');

var guessNumber = Math.round(Math.random()*100);
// console.log(guessNumber);
var lives = 10;
var message;
$submitButton.onclick = () => {
    let userInput = document.getElementById('number-input').value;
    lives--;
    if(userInput == guessNumber){
            window.location.href = "./win.html";
    }
    else if(lives == 0){
        window.location.href = "./lose.html";
    }
    else if(userInput > guessNumber){
        message = `OOps! Your guess is too high. You have ${lives} remaining.`
    }
    else if(userInput < guessNumber){
        message = `OOps! Your guess is too low. You have ${lives} remaining.`
    }

    $msg.style.display ="inherit";
    $msg.innerHTML = message;
    $lives.innerHTML = lives;
}
