$(document).ready(function(){
	//button clicked once 
    $(".p-nav-button").click(function(){
    	//target nav menu spans and slide open/visible
        $("#p-nav-mobile").slideToggle();
    });

   $(window).on("resize", function(event){
  		console.log( $(this).width() );

  		if ( $(this).width() > 520) {
  			console.log("too big remove nav")
  			$("#p-nav-mobile").css("display", "none");
  		}
	});
});