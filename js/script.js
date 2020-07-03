//Set focus on Name input on page load
$('#name').focus();

//Hide the 'Other Role' input until the user selects the other option
$('#other-title').hide();

$('#title').on('change', e =>{
    if (e.target.value === 'other'){
        $('#other-title').show();
    }
});


//Hide T-Shirt color options until a design is picked
$('label[for="color"]').text("Please select a T-shirt theme");
$('#color').attr('disabled', 'disabled');

//Change event to switch between states when user is choosing between T-Shirt Themes
$('#design').change( e => {
    let theme = e.target.value;
    if(theme === "js puns"){
        //Remove the disabled attr and change the text of the T-Shirt color menu
        $('#color').removeAttr('disabled');
        $('label[for="color"]').text("Color:");

        //List of options in the select menu
        const $options = $('#color').children();
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
        $('#color').removeAttr('disabled');
        $('label[for="color"]').text("Color:");
    }
    else {
        $('label[for="color"]').text("Please select a T-shirt theme");
        $('#color').attr('disabled', 'disabled');
    }
});
