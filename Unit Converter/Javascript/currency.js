
function getslval() {
    var slval = document.getElementById("selectfr").value;
    var slval2 = document.getElementById("selectto").value;
    var inval1 = document.getElementById("select1fr").value;
    
    if(slval == slval2){
        alert("Please select different parameters");
    }
    if(slval==1 && slval2==2){
        var inrtousd=inval1*0.0125329;
        document.getElementById("select1to").setAttribute("value",inrtousd); //inr to usd
        document.getElementById("resultp").innerHTML= "Your answer in Dollars is : "+inrtousd+" $";
    }
    if(slval==1 && slval2==3){
        var inrtop=inval1*0.011;
        document.getElementById("select1to").setAttribute("value",inrtop); //inr to p
        document.getElementById("resultp").innerHTML= "Your answer in Pounds is : "+inrtop+" £";
    }
    if(slval==1 && slval2==4){
        var inrtoe=inval1*0.012;
        document.getElementById("select1to").setAttribute("value",inrtoe); //inr to e
        document.getElementById("resultp").innerHTML= "Your answer in Euros is : "+inrtoe+" €";
    }
    if(slval==2 && slval2==1){
        var usdtoinr=inval1*79.79;
        document.getElementById("select1to").setAttribute("value",usdtoinr); //usd to inr
        document.getElementById("resultp").innerHTML= "Your answer in INR is : "+usdtoinr+" ₹";
    }
    if(slval==2 && slval2==3){
        var usdtop=inval1*0.84;
        document.getElementById("select1to").setAttribute("value",usdtop); //usd to p
        document.getElementById("resultp").innerHTML= "Your answer in Pounds is : "+usdtop+" £";
    }
    if(slval==2 && slval2==4){
        var usdtoe=inval1*0.99;
        document.getElementById("select1to").setAttribute("value",usdtoe); //usd to e
        document.getElementById("resultp").innerHTML= "Your answer in Euros is : "+usdtoe+" €";
    }
    if(slval==3 && slval2==1){
        var ptoinr=inval1*94.58;
        document.getElementById("select1to").setAttribute("value",ptoinr); //p to inr
        document.getElementById("resultp").innerHTML= "Your answer in INR is : "+ptoinr+" ₹";
    }
    if(slval==3 && slval2==2){
        var ptousd=inval1*1.19;
        document.getElementById("select1to").setAttribute("value",ptousd); //p to usd
        document.getElementById("resultp").innerHTML= "Your answer in Dollars is : "+ptousd+" $";
    }
    if(slval==3 && slval2==4){
        var ptoe=inval1*1.18;
        document.getElementById("select1to").setAttribute("value",ptoe); //p to e
        document.getElementById("resultp").innerHTML= "Your answer in Euros is : "+ptoe+" €";
    }
    if(slval==4 && slval2==1){
        var etoinr=inval1*80.48;
        document.getElementById("select1to").setAttribute("value",etoinr); //e to inr
        document.getElementById("resultp").innerHTML= "Your answer in INR is : "+etoinr+" ₹";
    }
    if(slval==4 && slval2==2){
        var etop=inval1*1.12;
        document.getElementById("select1to").setAttribute("value",etop); //e to p
        document.getElementById("resultp").innerHTML= "Your answer in Pounds is : "+etop+" £";
    }
    if(slval==4 && slval2==3){
        var etop=inval1*1.01;
        document.getElementById("select1to").setAttribute("value",etop); //e to p
        document.getElementById("resultp").innerHTML= "Your answer in Pounds is : "+etop+" £";
    }
    

}