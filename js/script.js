//Set focus on Name input on page load
$('#name').focus();

//Hide the 'Other Role' input until the user selects the other option
$('#other-title').hide();

$('#title').on('change', e =>{
    if (e.target.value === 'other'){
        $('#other-title').show();
    }
});

