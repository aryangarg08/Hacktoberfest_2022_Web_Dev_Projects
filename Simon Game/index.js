var level=1;
var arr=[];

var right;
var index;

var clicks;

$(document).keypress(working);

$(".every").click(function()
{   
    clicks++;
    animate_Without_Pushing(this.id);

    if(this.id!=arr[index])
    {
    right=0;
    }
    index++;

    if(right==0)
    {
    level=1;

    var audio=new Audio("sounds/wrong.mp3");
    audio.play();

    $("h1").html("Game Over, Press Any Key to Restart");

    arr=[];
    right=1;

    $(document).keypress(working);
    }

    else if(clicks==level-1)
    setTimeout(working,900);
}
);

function animate(i){
    $("#"+i).addClass("pressed");

    var audio=new Audio("sounds/"+i+".mp3");
    audio.play();

    setTimeout(function()
    {
        $("#"+i).removeClass("pressed");
    },300);

    arr.push(i);
    }

function animate_Without_Pushing(i){
    $("#"+i).addClass("pressed");

    var audio=new Audio("sounds/"+i+".mp3");
    audio.play();

    setTimeout(function()
    {
        $("#"+i).removeClass("pressed");
    },300);

    }

function working(){   
    index=0;
    var random=Math.random()*4+1;
    random=Math.floor(random);
    
    $("h1").html("Level "+level);
    level++;

    clicks=0;

    switch(random)
    {
        case 1:
            animate("green");
        break;
        
        case 2:
            animate("red");
        break;
        
        case 3:
            animate("yellow");
        break;
        
        case 4:
            animate("blue");
        break;
    }
    $(document).off("keypress");
        
}