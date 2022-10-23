
function getslval() {
    var slval = document.getElementById("selectfr").value;
    var slval2 = document.getElementById("selectto").value;
    var inval1 = document.getElementById("select1fr").value;
    
    if(slval == slval2){
        alert("Please select different parameters");
    }
    if(slval==1 && slval2==2){
        var ctof=(inval1*1.8)+32;
        document.getElementById("select1to").setAttribute("value",ctof); //c to f
        document.getElementById("resultp").innerHTML= "Your answer in Fahrenheit is : "+ctof+"\u00B0F"; 
    }
    if(slval==1 && slval2==3){
        var ctok=(inval1*1)+273.15;
        document.getElementById("select1to").setAttribute("value",ctok); //c to k
        document.getElementById("resultp").innerHTML= "Your answer in Kelvin is : "+ctok+" K";
    }
    if(slval==2 && slval2==1){
        var ftoc=(inval1-32)/1.8;
        document.getElementById("select1to").setAttribute("value",ftoc); //f to c
        document.getElementById("resultp").innerHTML= "Your answer in Celsius is : "+ftoc+"\u00B0C";
    }
    if(slval==2 && slval2==3){
        var ftok=(inval1-32)*(5/9) + 273.15
        document.getElementById("select1to").setAttribute("value",ftok); //f to k
        document.getElementById("resultp").innerHTML= "Your answer in Kelvin is : "+ftok+" K";
    }
    if(slval==3 && slval2==1){
        var ktoc=(inval1-273.15);
        document.getElementById("select1to").setAttribute("value",ktoc); //k to c
        document.getElementById("resultp").innerHTML= "Your answer in Celsius is : "+ktoc+"\u00B0C";
    }
    if(slval==3 && slval2==2){
        var ktof=(inval1*9/5)-459.67;
        document.getElementById("select1to").setAttribute("value",ktof); //k to f
        document.getElementById("resultp").innerHTML= "Your answer in Fahrenheit is : "+ktof+"\u00B0F";
    }
}