//Set focus on Name input on page load
$('#name').focus();

//Hide the 'Other Role' input until the user selects the other option
$('#other-title').hide();

$('#title').on('change', e =>{
    if (e.target.value === 'other'){
        $('#other-title').show();
    }
    else {
        $('#other-title').hide();
    }
});


//Disable the T-Shirt color options until a design is picked
$('label[for="color"]').text("Please select a T-shirt theme");
$('#color').attr('disabled', true);
$('#color').val("");

//Change event to switch between states when user is choosing between T-Shirt Themes
$('#design').change( e => {
    let theme = e.target.value;
    //List of options in the select menu
    const $options = $('#color').children();

    //Remove disabled attr on color options and change the text of the T-Shirt color menu
    $('#color').removeAttr('disabled');
    $('label[for="color"]').text("Color:");
    //Hide the 'Select a Theme' option from the select menu after a theme selection has been made
    $('#design').children().first().hide();

    if (theme === "js puns"){
        $('#color').val($options[0].value);
        //Loop through the $options collection to show/hide appropriate colors
        $options.each((index, element) => {
            if (index < 3){
                $(element).show();
            }
            else {
                $(element).hide();
            }
        });
    }
    else if (theme === "heart js"){
        $('#color').val($options[3].value);
        $options.each((index, element) => {
            if (index > 2){
                $(element).show();
            }
            else {
                $(element).hide();
            }
        });
    }
});


    //Create/Append HTML element to display Total
let totalCost = 0;
const totalP = $(`<p id="total">Total: $0 </p>`);
$('.activities').append(totalP);

    //Change event on activities section
$('.activities').change( e => {
    const activitiesCollection = $('.activities input');
    const activity = e.target;
    const $cost = parseInt($(e.target).attr('data-cost'));
    const $time = $(e.target).attr('data-day-and-time');
    
    //Add or Subtract the cost of the course that was just checked/unchecked
    if (activity.checked){
        totalCost += $cost;
        totalP.text(`Total: $${totalCost}`);
    } else {
        totalCost -= $cost;
        totalP.text(`Total: $${totalCost}`);
    }


    //Disable activities that have conflicting scheduals
    for (let i = 0; i < activitiesCollection.length; i++){
        let activityTime = $(activitiesCollection[i]).attr('data-day-and-time');

        if(activityTime === $time && activitiesCollection[i] !== activity){
            if (activity.checked){
                //Disable conflicting workshops
             $(activitiesCollection[i]).attr('disabled', true);
             $(activitiesCollection[i]).parent().addClass("disabled");
            } 
            else {
                //Enable clicked checkbox and remove the disabled class from its label
                $(activitiesCollection[i]).attr('disabled', false);
                $(activitiesCollection[i]).parent().removeClass("disabled");
            }
        }
        
    }
});


    //Hide the "Select Payment Method" in the payment dropdown and make CC the selected option
$('#payment option[value="select method"]').hide();
$('#payment option[value="credit card"]').attr('selected', true);
//Hide all other payment divs since CC will be the one to display automaticlly
$('#paypal').hide();
$('#bitcoin').hide();

//Change event listener on the payment select menu
$('#payment').change(e => {
    const paymentOption = $('#payment').val();
    const payment = {
        creditCard: () => {
            $('#credit-card').show();
            $('#paypal').hide();
            $('#bitcoin').hide();
        },
        paypal: () => {
            $('#paypal').show();
            $('#credit-card').hide();
            $('#bitcoin').hide();
        },
        bitcoin: () => {
            $('#bitcoin').show();
            $('#credit-card').hide();
            $('#paypal').hide();
        }
    };

    //Switch statement to determine which payment HTML element needs to be displayed
    switch (paymentOption){
        case "credit card":
            payment.creditCard();
            break;
        case "paypal":
            payment.paypal();
            break;
        case "bitcoin":
            payment.bitcoin();
            break;
        default:
            break;
    }
});


//Listen for a submit event on the submit button
$('[type="submit"]').click( (e) => {
    e.preventDefault()
    console.log("submitted!");
});

//Make sure CC option is selected before validating it
if ($('#payment').val() === "credit card") {
    isValidCard();
}