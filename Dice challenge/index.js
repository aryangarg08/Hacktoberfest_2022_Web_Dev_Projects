// random image for dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var ranodomImage1 = "dice" + randomNumber1 + ".png";
var imagesource = "images/" + ranodomImage1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imagesource);

// random image for dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩player 1 wins🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩player 2 wins🚩";
} else {
  document.querySelector("h1").innerHTML = " DRAW ";
}
