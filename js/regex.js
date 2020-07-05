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

function isValidCard(card){

}