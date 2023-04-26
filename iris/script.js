// function display login form when the user click login in the home page
function displayLogin() {
    document.getElementById("popup").style.display = "block";
}

// function hide login form when the user click x button in the login form
function hideLogin() {
    document.getElementById("popup").style.display = "none";
}

// function that change the input background color to yellow when it gets focus and change it to white when its get out or onblur
var inputs = document.getElementsByClassName("input");
for (var i = 0; i < inputs.length; i++) {
    // change input background to yellow when onfocus occures
    inputs[i].onfocus = function () {
        this.style.backgroundColor = 'yellow';
    }
    // change input background to white when onblur occures
    inputs[i].onblur = function () {
        this.style.backgroundColor = 'white';
    }
}

// validation for login form
function validateLogin() {
    valid = true;
    // username validation
    if (document.getElementById("username").value.search(/^[A-Za-z_\d]{4,}$/) != 0) {
        valid = false;
        document.getElementById("username_err").style.display = "block";
    }
    else {
        document.getElementById("username_err").style.display = "none"
    }

    // password validation
    if (document.getElementById("password").value.length < 6) {
        valid = false;
        document.getElementById("pass_err").style.display = "block";
    }
    else {
        document.getElementById("pass_err").style.display = "none"
    }

    // valid
    if (valid) {
        hideLogin();
    }
    return valid;
}

// check if there are digits in first name (for onkeyup)
function checkDigits1() {
    if (document.getElementById("firstname").value.match(/[0-9]/g) != null) {
        document.getElementById("name_digit_err1").style.display = "block";
    }
    else {
        document.getElementById("name_digit_err1").style.display = "none";
    }
}

// check if there are digits in last name (for onkeyup)
function checkDigits2() {
    if (document.getElementById("lastname").value.match(/[0-9]/g) != null) {
        document.getElementById("name_digit_err2").style.display = "block";
    }
    else {
        document.getElementById("name_digit_err2").style.display = "none";
    }
}

// function that check if name is valid or not, by checking if the name filed is leass than 4 character or if its empty
var nameInputs = document.getElementsByClassName("name-input");
function nameValid() {
    for (var i = 0; i < nameInputs.length; i++) {
        if (nameInputs[i].value.search(/^[A-Za-z]{4,}$/) != 0) {
            // if its unvalid return for
            return false;
        }
    }
    // if its valid return true
    return true;
}

// function that check if phone number is valid or not, by checking if its 12 digits and start with 9665
function phoneValid() {
    var phone = document.getElementById("phone").value;
    if (phone.length > 0 && phone.search(/^(9665\d{8})$/) != 0) {
        return false;
    }
    else {
        return true;
    }
}

// fucntion that check if email address is valid or not
function emailValid() {
    var email = document.getElementById("email").value;
    if (email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != 0) {
        return false;
    }
    else {
        return true;
    }
}

// validation for purchase form
function validatePurchase() {
    valid = true;
    var nameIsValid = nameValid();
    var phoneIsValid = phoneValid();
    var emailIsValid = emailValid();

    // name
    if (nameIsValid != true) {
        document.getElementById("name_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("name_err").style.display = "none";
    }

    // phone number
    if (phoneIsValid != true) {
        document.getElementById("phone_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("phone_err").style.display = "none";
    }

    // email address
    if (emailIsValid != true) {
        document.getElementById("email_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("email_err").style.display = "none";
    }

    // country
    if (document.getElementById("country").value == "select your country...") {
        valid = false;
        document.getElementById("country_err").style.display = "block";

    }
    else {
        document.getElementById("country_err").style.display = "none";
    }

    // city
    if (document.getElementById("city").value.search(/^[A-Za-z]{3,}$/) != 0) {
        document.getElementById("city_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("city_err").style.display = "none";
    }

    // street
    if (document.getElementById("street").value.search(/^[A-Za-z]{3,}$/) != 0) {
        document.getElementById("street_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("street_err").style.display = "none";
    }

    // zip code
    if (document.getElementById("zipcode").value.search(/^(\d{5})$/) != 0) {
        document.getElementById("zipcode_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("zipcode_err").style.display = "none";
    }

    // product
    if (document.getElementById("product").value == "please choose the product...") {
        valid = false;
        document.getElementById("product_err").style.display = "block";
    }
    else {
        document.getElementById("product_err").style.display = "none";
    }

    return valid;
}

// validation for feedback form
function validateFeedback() {
    valid = true;
    var nameIsValid = nameValid();
    var phoneIsValid = phoneValid();
    var emailIsValid = emailValid();

    // check if name is valid or not
    if (nameIsValid != true) {
        document.getElementById("name_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("name_err").style.display = "none";
    }

    // check if phone number is valid or not
    if (phoneIsValid != true) {
        document.getElementById("phone_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("phone_err").style.display = "none";
    }

    // check if email address is valid or not
    if (emailIsValid != true) {
        document.getElementById("email_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("email_err").style.display = "none";
    }

    // cheack if subject is empty or not
    if (document.getElementById("subject").value.search(/^[A-Za-z0-9 ]{1,}$/) != 0) {
        document.getElementById("subject_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("subject_err").style.display = "none";
    }

    // check if feedback type is selected or not
    if (document.getElementById("feedbackType").value == "please select your feedback type...") {
        valid = false;
        document.getElementById("feedback_type_err").style.display = "block";
    }
    else {
        document.getElementById("feedback_type_err").style.display = "none";
    }

    // cheack if text area is empty or not
    if (document.getElementById("describe").value.search(/^[A-Za-z0-9 ]{1,}$/) != 0) {
        document.getElementById("describe_err").style.display = "block";
        valid = false;
    }
    else {
        document.getElementById("describe_err").style.display = "none";
    }

    return valid;
}