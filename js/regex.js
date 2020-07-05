//Validate user's input name. Includes some special characters
function isValidUsername() {
    const userName = document.getElementById('name');

    //Test if username is valid, else apply the invalid class styling
    if (/^[a-z ,.'-]+$/i.test(userName.value)) {
        userName.classList.remove("invalid");
        return true;
    }
    else{
        userName.classList.add("invalid");
        return false;
    }
}

//Validate user E-mail
function isValidEmail() {
    const email = document.getElementById('mail');

    //Test if email is valid, or add invalid class stylings
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/i.test(email.value)) {
        email.classList.remove("invalid");
        return true;
    }
    else{
        email.classList.add("invalid");
        return false;
    }
}

//Validate if the user has selected at least 1 event
function isEventChecked(){
    const checkboxes = document.querySelectorAll('[type="checkbox"]');
    let isBoxChecked = false;

    //Loop over all checkboxes and see if any have the checked attribute
    checkboxes.forEach( checkbox => {
        //If they do, change isBoxChecked to true
        if(checkbox.checked){
            isBoxChecked = true;
        }
    });
    
    return isBoxChecked;
}

//Validate that user's CC information is correct
function isValidCard(){
    //Grab values from all CC input fields
    const cardNum = document.getElementById('cc-num');
    const zipCode = document.getElementById('zip');
    const CVV = document.getElementById('cvv');

    //Check if CC payment option is selected before validating inputs
    if ($('#payment').val() === "credit card") {
        //Check if each CC info input is failing regex test, if it is, function will return false
        if (!(/^\d{13,16}$/.test(cardNum.value))) {
            return false;
        }
        else if (!(/^\d{5}$/.test(zipCode.value))) {
            return false;
        }
        else if (!(/^\d{3}$/.test(CVV.value))) {
            return false;
        }
    } 
    
    //If none of the credentials failed and returned false, true will be returned
    return true;
}

//Function to call all other validation functions
function validateInputs(){
    //Check if all input validations return true
    if(isValidUsername()){
        if(isValidEmail()){
            if(isEventChecked()){
                if(isValidCard()){
                     return true;
                 }
            }
        }
    }
    return false;
}