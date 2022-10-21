function time()
{
    const d = new Date();

    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    if(hours < 10)
    {
        hours = '0' + hours;
    }

    if(minutes < 10)
    {
        minutes = '0' + minutes;
    }

    if(seconds < 10)
    {
        seconds = '0' + seconds;
    }

    var currTime = hours + ":" + minutes + ":" + seconds;
    document.querySelector('button').innerHTML = "Current time is: " + currTime;
}

document.querySelector('button').onclick = function show() {
    setInterval(time, 1000);
    time();
}

