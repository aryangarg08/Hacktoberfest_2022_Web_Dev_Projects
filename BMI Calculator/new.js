function myfunc(){
    var h= document.getElementById('Height').value;
    var w=document.getElementById('Weight').value;
    var BMI= w/(h/100*h/100);
    var total=BMI.toFixed(2);
    
    document.getElementById('Result').innerHTML="BMI="+total;
}