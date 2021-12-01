"use strict";
$(document).ready(() => {
    //For Animations
    $("#animate h2").animate(
		{ fontSize: "200%", opacity: 1, left: "+=175" }, 
		2000,
		 () => {
			$("#animate h2").next().fadeIn(2000); 
		}
       
	)
    .animate( 
        { fontSize: "175%", left: "-=275" }, 2000 );
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