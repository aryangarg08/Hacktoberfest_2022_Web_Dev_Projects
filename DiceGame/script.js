var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;
document.getElementsByClassName("players-img")[0].setAttribute("src","/Users/akshatgoel/Desktop/Web Development/Dice Game/images/dice"+randomNumber1+".png");
document.getElementsByClassName("players-img")[1].setAttribute("src","/Users/akshatgoel/Desktop/Web Development/Dice Game/images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2)
{
    document.getElementsByClassName("title-heading")[0].innerHTML="Player 1 wins !!! 🥳";
}
else if (randomNumber1<randomNumber2)
{
    document.getElementsByClassName("title-heading")[0].innerHTML="Player 2 wins !!! 🥳";
}
else
{
    document.getElementsByClassName("title-heading")[0].innerHTML="Draw !!!";
}