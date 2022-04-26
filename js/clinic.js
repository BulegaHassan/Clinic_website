"use strict";
$(document).ready(() => {
    // Datepicker
     $("#datepicker").datepicker();
    //For imagerollovers
    $("#image_rollovers img").each( (index, img) => {
        const oldURL = img.src;      
        const newURL = img.id;       

        // preload rollover image		
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        
        $(img).hover(   
            () => img.src = newURL,  // hover over
            () => img.src = oldURL   // hover out
        ); 
    });
    /*For appointment form*/
    $("#appointment").submit( event => {
        let isValid = true; 
        // validate the first name entry
        const firstName = $("#first_name").val().trim();
        if (firstName == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        $("#first_name").val(firstName);
                    
        // validate the last name entry
        const lastName = $("#last_name").val().trim();
        if (lastName == "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }
        $("#last_name").val(lastName);

        
        // validate the email entry with a regular expression
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
        // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
            event.preventDefault();                
        }
    });
    

});
