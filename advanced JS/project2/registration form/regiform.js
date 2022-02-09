function formValidation {
    var name  =document.forms["registrationForm"]["Name"];
    var name = document.forms["registrationForm"]["Email"];
    var name = document.forms["registrationForm"]["Password"];
    var name = document.forms["registrationForm"]["Phone number"];
    var name = document.forms["registrationForm"]["Address"];
    var name = document.forms["registrationForm"]["Course"];
}

if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
}

if (address.value == ""); {
    window.alert("Please enter your address.");
    address.focus();
    return false;
}

if(email.value == "") {
    window.alert("Please enter a valid email address.");
    email.focus();
    return false;

}

if(password.value == "") {
    window.alert("Enter a valid password.");
    password.focus();
    return false;
}

if(Phone.value == "") {
    window.alert("please enter your phone number.");
    phone.focus();
    return false();
}

if(what.selectedIndex < 1) {
    alert("Please enter you couse");
    what.focus();
    return false;
}
return true;