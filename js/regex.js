//Global input variables
const userName = document.getElementById('name').value;

//Validate user's input name. Includes some special characters
function isValidUsername(username) {
    return /^[a-z ,.'-]+$/i.test(username);
}

//Validate user E-mail
function isValidEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(email);
}

console.log(isValidEmail("Nate.RJS21@gmail.com"));