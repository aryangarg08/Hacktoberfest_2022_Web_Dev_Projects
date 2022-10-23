
function getslval() {
    var slval = document.getElementById("selectfr").value;
    var slval2 = document.getElementById("selectto").value;
    var inval1 = document.getElementById("select1fr").value;

    if(slval == slval2){
        alert("Please select different parameters");
    }
    if(slval==1 && slval2==2){
        var kgtog=inval1*1000;
        document.getElementById("select1to").setAttribute("value",kgtog); //kg to g
        document.getElementById("resultp").innerHTML= "Your answer in Grams is : "+kgtog+" g";
    }
    if(slval==1 && slval2==3){
        var kgtomg=inval1*1000000;
        document.getElementById("select1to").setAttribute("value",kgtomg); //kg to mg
        document.getElementById("resultp").innerHTML= "Your answer in Miligrams is : "+kgtomg+" mg";
    }
    if(slval==1 && slval2==4){
        var kgtot=inval1/1000;
        document.getElementById("select1to").setAttribute("value",kgtot); //kg to t
        document.getElementById("resultp").innerHTML= "Your answer in Tonnes is : "+kgtot+" ton"; //g to kg
    }
    if(slval==2 && slval2==1){
        var gtokg=inval1/1000;
        document.getElementById("select1to").setAttribute("value",gtokg); //g to kg
        document.getElementById("resultp").innerHTML= "Your answer in Kilograms is : "+gtokg+" kg"; //g to kg
    }
    if(slval==2 && slval2==3){
        var gtomg=inval1*1000;
        document.getElementById("select1to").setAttribute("value",gtomg); //g to kg
        document.getElementById("resultp").innerHTML= "Your answer in Miligrams is : "+gtomg+" mg"; //g to kg
    }
    if(slval==2 && slval2==4){
        var gtoT=inval1/1000000;
        document.getElementById("select1to").setAttribute("value",gtoT); //g to kg
        document.getElementById("resultp").innerHTML= "Your answer in Tonnes is : "+gtoT+" ton"; //g to kg
    }
    if(slval==3 && slval2==1){
        var mgtokg=inval1/1000000;
        document.getElementById("select1to").setAttribute("value",mgtokg); //mg to kg
        document.getElementById("resultp").innerHTML= "Your answer in Kilograms is : "+mgtokg+" kg"; //g to kg
    }
    if(slval==3 && slval2==2){
        var mgtog=inval1/1000;
        document.getElementById("select1to").setAttribute("value",mgtog); //mg to g
        document.getElementById("resultp").innerHTML= "Your answer in Grams is : "+mgtog+" g"; //g to g
    }
    if(slval==3 && slval2==4){
        var mgtoT=inval1/1000000000;
        document.getElementById("select1to").setAttribute("value",mgtoT); //mg to kg
        document.getElementById("resultp").innerHTML= "Your answer in Tonnes is : "+mgtoT+" ton"; //g to kg
    }
    if(slval==4 && slval2==1){
        var ttokg=inval1*1000;
        document.getElementById("select1to").setAttribute("value",ttokg); //t to kg
        document.getElementById("resultp").innerHTML= "Your answer in Kilograms is : "+ttokg+" kg"; //g to kg
    }
    if(slval==4 && slval2==2){
        var ttog=inval1*1000000;
        document.getElementById("select1to").setAttribute("value",ttog); //t to g
        document.getElementById("resultp").innerHTML= "Your answer in Grams is : "+ttog+" g"; //g to g
    }
    if(slval==4 && slval2==3){
        var ttomg=inval1*1000000000;
        document.getElementById("select1to").setAttribute("value",ttomg); 
        document.getElementById("resultp").innerHTML= "Your answer in Miligrams is : "+ttomg+" mg"; //Ton to mg
    }

}