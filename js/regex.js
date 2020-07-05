//Validate user's input name. Includes some special characters
function isValidUsername() {
  const userName = document.getElementById("name");

  //Test if username is valid, else apply the invalid class styling
  if (/^[a-z ,.'-]+$/i.test(userName.value)) {
    userName.classList.remove("invalid");
    return true;
  } else {
    userName.classList.add("invalid");
    return false;
  }
}

//Validate user E-mail
function isValidEmail() {
  const email = document.getElementById("mail");

  //Test if email is valid, or add invalid class stylings
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/i.test(email.value)) {
    email.classList.remove("invalid");
    return true;
  } else {
    email.classList.add("invalid");
    return false;
  }
}

// Event section error message. Stays hidden until it is shown by error validation
const legend = document.querySelector(".activities legend");
const message = document.createElement("p");
message.classList.add("not-checked");
message.textContent = "*MUST SELECT AT LEAST 1 EVENT*";
legend.appendChild(message);
message.style.display = "none";

//Validate if the user has selected at least 1 event
function isEventChecked() {
  const checkboxes = document.querySelectorAll('[type="checkbox"]');
  let isBoxChecked = false;
  let notCheckedMessage = document.getElementsByClassName("not-checked");

  //Loop over all checkboxes and see if any have the checked attribute
  checkboxes.forEach((checkbox) => {
    //If they do, change isBoxChecked to true
    if (checkbox.checked) {
      isBoxChecked = true;
    }
  });

  if (!isBoxChecked) {
    //Show error message
    message.style.display = "inline";
    return isBoxChecked;
  } else {
    message.style.display = "none";
    return isBoxChecked;
  }
}

//Validate that user's CC information is correct
function isValidCard() {
  //Grab elements of all CC input fields
  const cardNum = document.getElementById("cc-num");
  const zipCode = document.getElementById("zip");
  const CVV = document.getElementById("cvv");
  let allPass = true;

  // Functions to check each input individually
  function validateCard() {
    if (!/^\d{13,16}$/.test(cardNum.value)) {
      cardNum.classList.add("invalid");
      allPass = false;
    } else {
      cardNum.classList.remove("invalid");
    }
  }

  function validateZip() {
    if (!/^\d{5}$/.test(zipCode.value)) {
      zipCode.classList.add("invalid");
      allPass = false;
    } else {
      zipCode.classList.remove("invalid");
    }
  }

  function validateCVV() {
    if (!/^\d{3}$/.test(CVV.value)) {
      CVV.classList.add("invalid");
      allPass = false;
    } else {
      CVV.classList.remove("invalid");
    }
  }

  //Check if CC payment option is selected before validating inputs
  if ($("#payment").val() === "credit card") {
    validateCard();
    validateZip();
    validateCVV();
  }

  //If none of the credentials failed, true will be returned
  return allPass;
}

//Function to call all other validation functions
function validateInputs() {
  //Call functions to enable styling if they are invalid
  let validName = isValidUsername();
  let validEmail = isValidEmail();
  let validEvent = isEventChecked();
  let validCard = isValidCard();
  //Check if all input validations return true
  if (validName && validEmail && validEvent && validCard) {
    return true;
  }
  return false;
}
