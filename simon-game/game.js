var buttoncolors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

function playSound(name) {
    var aud = new Audio("sounds/" + name + ".mp3");
    aud.play();
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () { $("." + currentColor).removeClass("pressed"); }, 100);
}

function PressKey(userChosenColor) {
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    //console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
}


$(document).keypress(function (event) {
    if (!started) {
        nextSequence();
        // $("h1").text("Level " + level);
        started = true;
    }
    else{
        switch (event.key) {
            case "r":
                PressKey("red");
              break;
              case "b":
                PressKey("blue");
              break;
              case "g":
                PressKey("green");
              break;
              case "y":
                PressKey("yellow");
              break;        
            default: console.log(event.key);        
          }
    }
});

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.random() * 4;
    randomNumber = Math.floor(randomNumber);

    var randomChosenColor = buttoncolors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    level++;
    $("h1").text("Level " + level);
}

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    //console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        //console.log("Success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () { nextSequence() }, 1000);
        }
    }
    else { 
        //console.log("Wrong") 
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () { $("body").removeClass("game-over"); }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startover();
    }
}

function startover(){
    started=false;
    level=0;
    gamePattern=[];
}
