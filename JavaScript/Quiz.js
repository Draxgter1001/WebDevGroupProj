var result; // used to store the total score calculated from the user's inputs.
const startingTime = 2;
let time = startingTime * 60;
const countDownEl = document.getElementById("countdown");
let correct = document.getElementsByClassName(".correct");
let incorrect = document.getElementsByClassName(".incorrect");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");
var question6 = document.getElementById("question6");
var question7 = document.getElementById("question7");
var question8 = document.getElementById("question8");
var question9 = document.getElementById("question9");
var question10 = document.getElementById("question10");

var intervalID = setInterval(timer, 1000); //calls the timer function every second.

function endGame(){
    clearInterval(intervalID);
    result2 = "You did not manage to complete the quiz in time. Try again.";
    document.getElementById("score2").innerHTML = result2;
}
    
function timer(){
    const minutes = Math.floor(time / 60);  //get the lowest number without the decimal.
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds; //add a 0 in front of the seconds in the Timer interface.
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if(time < 0){
        endGame();
        window.scrollTo(0, document.body.scrollHeight); //Scroll to the bottom of the page when the timer reaches 0.
    }
}

document.getElementById("form1").onsubmit=function() {

    var not = parseInt(document.querySelector('input[name = "not"]:checked').value); //convert the string values of the selected radio button inputs to integers before adding them together.
    colourAnswer(not, question1);
    var highest = parseInt(document.querySelector('input[name = "highest"]:checked').value);
    colourAnswer(highest, question2);
    var br = parseInt(document.querySelector('input[name = "br"]:checked').value);
    colourAnswer(br, question3);
    var firstp = parseInt(document.querySelector('input[name = "firstp"]:checked').value);
    colourAnswer(firstp, question4);
    var sandbox = parseInt(document.querySelector('input[name = "sandbox"]:checked').value);
    colourAnswer(sandbox, question5);
    var sport = parseInt(document.querySelector('input[name = "sport"]:checked').value);
    colourAnswer(sport, question6);
    var racing = parseInt(document.querySelector('input[name = "racing"]:checked').value);
    colourAnswer(racing, question7);
    var open_world = parseInt(document.querySelector('input[name = "open-world"]:checked').value);
    colourAnswer(open_world, question8);
    var survival = parseInt(document.querySelector('input[name = "survival"]:checked').value);
    colourAnswer(survival, question9);
    var mmorpg = parseInt(document.querySelector('input[name = "mmorpg"]:checked').value);
    colourAnswer(mmorpg, question10);

    result = not + highest + br + firstp  + sandbox + sport + racing + open_world + survival + mmorpg;
    document.getElementById("score").innerHTML = result;

    if (result >= 0 && result <= 10) {result2 = "You may be new to Steam, but we're excited to see what you'll accomplish in the future!"};
    if (result > 10 && result <= 30) {result2 = "Keep up the good work on your Steam journey."};
    if (result >= 50 && result < 80) {result2 = "You're well on your way to becoming a Steam master."};
    if (result >= 80 && result < 100) {result2 = "You are very close to become a perfect Steam master."};
    if (result == 100) {result2 = "Congratulations! You have become a true Steam master."};

    scoreColour(); //function is being called after the message is displayed to the user to change the color of the message based on their score range.
    document.getElementById("score2").innerHTML = result2;
    clearInterval(intervalID);
    return false; // required to not refresh the page.

} //this ends the submit function*/

function colourAnswer(option, question){

    if(option === 10){
        question.className = "correct";
    }else{
        question.className = "incorrect";
    }
}

function scoreColour(){
    var scoreMessage = document.getElementById("score2");

    if(result >= 0 && result <= 30){
        scoreMessage.style.color = "#FF0000";
    }else if(result > 30 && result <= 80){
        scoreMessage.style.color = "#FFA500";
    }else{
        scoreMessage.style.color = "#00FF00";
    }
}

function topFunction() {  //Function to scroll to the top of the page once the user presses the RESET button.
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.location.reload()
}

