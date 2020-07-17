var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

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

else {
    d.setDate(date);
}

if (month < 0 || month > 12) {
    document.getElementsByClassName("montherror").innerHTML = "Enter valid month";
    return false
} 

else if (month == "") {
    document.getElementsByClassName("montherror").innerHTML = "This field cannot be empty"
    return false;
}

else {
    d.setMonth(month);
}

if (year < 0) {
    document.getElementsByClassName("yearerror").innerHTML = "Enter valid year";
    return false;
}

else if (year == "") {
    document.getElementsByClassName("yearerror").innerHTML = "This field cannot be empty";
    return false;
}

else {
    d.setYear(year);
}

function getAkanName() {
    var isMale =  document.getElementById('Male').checked;
    var isFemale =  document.getElementById('Female').checked;

}






function retDate() {
    var userDate = document.getElementById("bday").value;
    //var userGender = document.getElementById("gender").value;
	document.getElementById("outDay").innerHTML = userDate; //days[userDate.getDay()];
    //document.getElementById("outName").innerHTML = days[userDate.getDay()];

  	}