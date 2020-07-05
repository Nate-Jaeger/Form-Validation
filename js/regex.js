//Validate user's input name. 
function isValidUsername(username) {
    return /^[a-z ,.'-]+$/i.test(username);
}

console.log(isValidUsername("Nate Jaeger-Smith"));