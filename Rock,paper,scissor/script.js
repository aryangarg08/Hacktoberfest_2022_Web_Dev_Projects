const rocks = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computer_choice_div = document.querySelector(".computer_choice");
var player_wins = document.querySelector(".Player");
var compter_wins = document.querySelector(".computer");
var result_decision = document.querySelector(".result");
var wins = 0;
var losses = 0;

function text_converter(text) {
  switch (text) {
    case "r":
      return "Rock";

    case "p":
      return "Paper";

    case "s":
      return "Scissors";
  }
}

function img_generator(index) {
  computer_choice_div.innerHTML = "";
  var oimg = document.createElement("img");
  switch (index) {
    case "r":
      oimg.src = "julinzy131000173-removebg-preview.png";
      console.log("rocks by computer");
      break;

    case "p":
      oimg.src = "800px_COLOURBOX8093037-removebg-preview.png";
      console.log("paper by computer");
      break;

    case "s":
      oimg.src = "800px_COLOURBOX8093027-removebg-preview.png";
      console.log("scissors by computer");
      break;
  }
  computer_choice_div.appendChild(oimg);
}

function win(user_choice, computer_decicion) {
  wins++;
  player_wins.innerHTML = wins;
  result_decision_maker(user_choice, computer_decicion, "Player");
  setTimeout(() => {
    computer_choice_div.innerHTML = "";
    result_decision.innerHTML = "Let's try again";
  }, 2000);
  if (wins === 5) {
    alert("You won!!!");
    wins = 0;
    losses = 0;
    player_wins.innerHTML = wins;
    compter_wins.innerHTML = losses;
  } else if (losses === 5) {
    alert("You lost the game!!");
    wins = 0;
    losses = 0;
    player_wins.innerHTML = wins;
    compter_wins.innerHTML = losses;
  }
}
function loss(user_choice, computer_decicion) {
  losses++;
  compter_wins.innerHTML = losses;
  result_decision_maker(computer_decicion, user_choice, "Computer");
  setTimeout(() => {
    computer_choice_div.innerHTML = "";
    result_decision.innerHTML = "Let's try again";
  }, 2000);
  if (wins === 5) {
    alert("You won!!!");
    wins = 0;
    losses = 0;
    player_wins.innerHTML = wins;
    compter_wins.innerHTML = losses;
  } else if (losses === 5) {
    alert("You lost the game!!");
    wins = 0;
    losses = 0;
    player_wins.innerHTML = wins;
    compter_wins.innerHTML = losses;
  }
}
function draw() {
  result_decision.innerHTML = `it's a draw.`;
  setTimeout(() => {
    computer_choice_div.innerHTML = "";
    result_decision.innerHTML = "Let's try again";
  }, 2000);
if (wins === 5) {
  alert("You won!!!");
  wins = 0;
  losses = 0;
  player_wins.innerHTML = wins;
  compter_wins.innerHTML = losses;
} else if (losses === 5) {
  alert("You lost the game!!");
  wins = 0;
  losses = 0;
  player_wins.innerHTML = wins;
  compter_wins.innerHTML = losses;
}
}
function result_decision_maker(a, b, c) {
  result_decision.innerHTML = "";
  result_decision.innerHTML = `${text_converter(a)} beats ${text_converter(
    b
  )}.${c} wins.`;
}

//game logics

//compiuter choice generation and updating computer choice to the documnet
function computer_choice_generater() {
  let choices = ["r", "p", "s"];
  var choice_index = Math.floor(Math.random() * 3);
  img_generator(choices[choice_index]);
  return choices[choice_index];
}

function game(user_choice) {
  var computer_decicion = computer_choice_generater();
  switch (user_choice + computer_decicion) {
    case "rs":
    case "pr":
    case "sp":
      win(user_choice, computer_decicion);
      break;

    case "rp":
    case "ps":
    case "sr":
      loss(user_choice, computer_decicion);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}
//event-listeners for user choices
rocks.addEventListener("click", () => {
  console.log("rocks");
  game("r");
});
paper.addEventListener("click", () => {
  console.log("paper");
  game("p");
});
scissors.addEventListener("click", () => {
  console.log("scissors");
  game("s");
});

