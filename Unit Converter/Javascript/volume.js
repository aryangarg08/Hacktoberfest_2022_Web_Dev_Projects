
function getslval() {
    var slval = document.getElementById("selectfr").value;
    var slval2 = document.getElementById("selectto").value;
    var inval1 = document.getElementById("select1fr").value;
    
    if(slval == slval2){
        alert("Please select different parameters");
    }
    if(slval==1 && slval2==2){
        var ltom3=inval1/1000;
        document.getElementById("select1to").setAttribute("value",ltom3); //l to m
        document.getElementById("resultp").innerHTML= "Your answer in Meter cube is : "+ltom3+"\u33A5";
    }
    if(slval==1 && slval2==3){
        var ltocm3=inval1*1000;
        document.getElementById("select1to").setAttribute("value",ltocm3); //l to cm
        document.getElementById("resultp").innerHTML= "Your answer in Cubic Centimeter is : "+ltocm3+"\u33A4";
    }
    if(slval==1 && slval2==4){
        var ltoml=inval1*1000;
        document.getElementById("select1to").setAttribute("value",ltoml); //l to ml
        document.getElementById("resultp").innerHTML= "Your answer in Milliliter is : "+ltoml+" ml";
    }
    if(slval==2 && slval2==1){
        var m3tol=inval1*1000;
        document.getElementById("select1to").setAttribute("value",m3tol); //m to l
        document.getElementById("resultp").innerHTML= "Your answer in Liters is : "+m3tol+" l";
    }
    if(slval==2 && slval2==3){
        var m3tocm3=inval1*1000000;
        document.getElementById("select1to").setAttribute("value",m3tocm3); //m to cm
        document.getElementById("resultp").innerHTML= "Your answer in Cubic Centimeter is : "+m3tocm3+"\u33A4";
    }
    if(slval==2 && slval2==4){
        var m3toml=inval1*1000000;
        document.getElementById("select1to").setAttribute("value",m3toml); //m to ml
        document.getElementById("resultp").innerHTML= "Your answer in Milliliter is : "+m3toml+" ml";
    }
    if(slval==3 && slval2==1){
        var cm3tol=inval1/1000;
        document.getElementById("select1to").setAttribute("value",cm3tol); //cm to l
        document.getElementById("resultp").innerHTML= "Your answer in Liters is : "+cm3tol+" l";
    }
    if(slval==3 && slval2==2){
        var cm3tom3=inval1/1000000;
        document.getElementById("select1to").setAttribute("value",cm3tom3); //cm to m
        document.getElementById("resultp").innerHTML= "Your answer in Meter cube is : "+cm3tom3+"\u33A5";
    }
    if(slval==3 && slval2==4){
        var cm3toml=inval1;
        document.getElementById("select1to").setAttribute("value",cm3toml); //cm to ml
        document.getElementById("resultp").innerHTML= "Your answer in Milliliter is : "+cm3toml+" ml";
    }
    if(slval==4 && slval2==1){
        var mltol=inval1/1000;
        document.getElementById("select1to").setAttribute("value",mltol); //ml to l
        document.getElementById("resultp").innerHTML= "Your answer in Liters is : "+mltol+" l";
    }
    if(slval==4 && slval2==2){
        var mltom3=inval1/1000000;
        document.getElementById("select1to").setAttribute("value",mltom3); //ml to m
        document.getElementById("resultp").innerHTML= "Your answer in Meter cube is : "+mltom3+"\u33A5";
    }
    if(slval==4 && slval2==3){
        var mltocm3=inval1;
        document.getElementById("select1to").setAttribute("value",mltocm3); //ml to cm
        document.getElementById("resultp").innerHTML= "Your answer in Cubic Centimeter is : "+mltocm3+"\u33A4";
    }
}