var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function retDate() {

    var date = parseInt(document.getElementById("day").value)
    var month = parseInt(document.getElementById("month").value)
    var year = parseInt(document.getElementById("year").value)

    if (day < 0 || day > 31) {
        document.getElementsByClassName("dayerror").innerHTML = "Enter valid date";
        return false
    } 

    else if (date == "") {
        document.getElementsByClassName("dayerror").innerHTML = "This field cannot be empty";
        return false
    }               

    if (month < 0 || month > 12) {
        document.getElementsByClassName("montherror").innerHTML = "Enter valid month";
        return false
    } 

    else if (month == "") {
        document.getElementsByClassName("montherror").innerHTML = "This field cannot be empty"
        return false;
    }

    if (year < 0) {
        document.getElementsByClassName("yearerror").innerHTML = "Enter valid year";
        return false;
    }

    else if (year == "") {
        document.getElementsByClassName("yearerror").innerHTML = "This field cannot be empty";
        return false;
    }


    var isMale =  document.getElementById('male').checked;
    var isFemale =  document.getElementById('female').checked;

    var CC = parseInt(String(year).substr(0,2));
    var YY = parseInt(String(year).substr(2,2));
    var MM = month;
    var DD = date;

    var d = Math.round((((CC/4) - 2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7);

    document.getElementById("outDay").innerHTML = ("You were born on a " + days[d]);

    if (isFemale){
        document.getElementById("outName").innerHTML = ("Your Akan name would be " + female[d]);
    }else if (isMale){
        document.getElementById("outName").innerHTML =("Your Akan name would be " + male[d]);
    } 



    }
   










