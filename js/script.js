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
$('#color').attr('disabled', 'disabled');

//Change event to switch between states when user is choosing between T-Shirt Themes
$('#design').change( e => {
    let theme = e.target.value;
    //List of options in the select menu
    const $options = $('#color').children();

    //Remove disabled attr on color options and change the text of the T-Shirt color menu
    $('#color').removeAttr('disabled');
    $('label[for="color"]').text("Color:");
    //Hide the 'Select a Theme' option from the select menu
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

        //User can't select events at conflicting times

//Lists of checkboxes for different dates
const $tuesNineToTwelve = $('[data-day-and-time="Tuesday 9am-12pm"]');
const $tuesOneToFour = $('[data-day-and-time="Tuesday 1pm-4pm"]');
const $wedNineToTwelve = $('[data-day-and-time="Wednesday 9am-12pm"]');
const $wedOneToFour = $('[data-day-and-time="Wednesday 1pm-4pm"]');








