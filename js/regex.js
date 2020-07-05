//Validate user's input name. Includes some special characters
function isValidUsername() {
    const userName = document.getElementById('name').value;
    return /^[a-z ,.'-]+$/i.test(userName);
}

//Validate user E-mail
function isValidEmail() {
    const email = document.getElementById('mail').value;
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(email);
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
    
    //If a checkbox has been checked, return true, if not return false
    if(isBoxChecked){
        return true;
    }
    else{
        return false;
    }
}

//Validate that user's CC information is correct
function isValidCard(){
    //Grab values from all CC input fields
    const cardNum = document.getElementById('cc-num').value;
    const zipCode = document.getElementById('zip').value;
    const CVV = document.getElementById('cvv').value;

    //Check if each CC info input is NOT passing regex, otherwise return true
    if (!(/^\d{13,16}$/.test(cardNum))) {
        return false;
    }
    else if (!(/^\d{5}$/.test(zipCode))) {
        return false;
    }
    else if (!(/^\d{3}$/.test(CVV))) {
        return false;
    }
    //If none of the credentials failed and returned false, true will be returned
    return true;
}