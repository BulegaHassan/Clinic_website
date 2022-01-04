"use strict";
$(document).ready(() => {
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
    
});