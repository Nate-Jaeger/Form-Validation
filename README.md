# Form Validation
 Form for a fictional Web Dev conference
 By: Nate Jaeger 

 ---Includes jQuery


-Job Role text input appears upon selection of "other" job role selection

-Tshirt colors are hidden until user chooses a theme
    -only colors that correspond with the selected theme are shown

-Activities section will update your total costs as you select/deselect events 
    -Events with conflicting times will be disabled
    -Deselecting events will re-enable currently disabled conflicting events

-Payment section will reflect proper HTML based on what payment selection the user has made

-All form inputs will be validated upon the click event on the Register button
    -If any inputs are invalid, form will not submit and an error message will be shown to the user


** Exceeds Expectations **
-Form will hide T-Shirt color menu and label until user selects a valid theme

-CC field will display an error message depending on the error
    -If field was left blank it will notify user the enter a CC number
    -If number is > 16 or <13 it will notify the user it needs to be between 13-16 characters long