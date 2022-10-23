
function getslval() {
    var slval = document.getElementById("selectfr").value;
    var slval2 = document.getElementById("selectto").value;
    var inval1 = document.getElementById("select1fr").value;
    
    if(slval == slval2){
        alert("Please select different parameters");
    }
    if(slval==1 && slval2==2){
        var kmtom=inval1*1000;
        document.getElementById("select1to").setAttribute("value",kmtom); //km to m
        document.getElementById("resultp").innerHTML= "Your answer in Meters is : "+kmtom+" m";
    }
    if(slval==1 && slval2==3){
        var kmtocm=inval1*100000;
        document.getElementById("select1to").setAttribute("value",kmtocm); //km to cm
        document.getElementById("resultp").innerHTML= "Your answer in Centimeters is : "+kmtocm+" cm"; 
    }
    if(slval==1 && slval2==4){
        var kmtomm=inval1*10000000;
        document.getElementById("select1to").setAttribute("value",kmtomm); //km to mm
        document.getElementById("resultp").innerHTML= "Your answer in Milimeters is : "+kmtomm+" mm";
    }
    if(slval==2 && slval2==1){
        var mtokm=inval1/1000;
        document.getElementById("select1to").setAttribute("value",mtokm); //m to km
        document.getElementById("resultp").innerHTML= "Your answer in Kilometers is : "+mtokm+" km";
    }
    if(slval==2 && slval2==3){
        var mtocm=inval1*100;
        document.getElementById("select1to").setAttribute("value",mtocm); //m to cm
        document.getElementById("resultp").innerHTML= "Your answer in Centimeters is : "+mtocm+" cm";
    }
    if(slval==2 && slval2==4){
        var mtomm=inval1*1000000;
        document.getElementById("select1to").setAttribute("value",mtomm); //m to mm
        document.getElementById("resultp").innerHTML= "Your answer in Milimeters is : "+mtomm+" mm";
    }
    if(slval==3 && slval2==1){
        var cmtokm=inval1/100000;
        document.getElementById("select1to").setAttribute("value",cmtokm); //cm to km
        document.getElementById("resultp").innerHTML= "Your answer in Kilometers is : "+cmtokm+" km";
    }
    if(slval==3 && slval2==2){
        var cmtom=inval1/100;
        document.getElementById("select1to").setAttribute("value",cmtom); //cm to m
        document.getElementById("resultp").innerHTML= "Your answer in Meters is : "+cmtom+" m";
    }
    if(slval==3 && slval2==4){
        var cmtomm=inval1*10;
        document.getElementById("select1to").setAttribute("value",cmtomm); //cm to mm
        document.getElementById("resultp").innerHTML= "Your answer in Milimeters is : "+cmtomm+" mm";
    }
    if(slval==4 && slval2==1){
        var mmtokm=inval1/1000000;
        document.getElementById("select1to").setAttribute("value",mmtokm); //mm to km
        document.getElementById("resultp").innerHTML= "Your answer in Kilometers is : "+mmtokm+" km";
    }
    if(slval==4 && slval2==2){
        var mmtom=inval1/1000;
        document.getElementById("select1to").setAttribute("value",mmtom); //mm to m
        document.getElementById("resultp").innerHTML= "Your answer in Meters is : "+mmtom+" m";
    }
    if(slval==4 && slval2==3){
        var mmtocm=inval1/10;
        document.getElementById("select1to").setAttribute("value",mmtocm); //mm to cm
        document.getElementById("resultp").innerHTML= "Your answer in Centimeters is : "+mmtocm+" cm";
    }

}