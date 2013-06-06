(function($) {

    $( document ).ready(function() {
    
        $("nav ul li a").click(function(event) {
            
            event.preventDefault();
            
            $(".content.active").toggle().toggleClass("active");
            $($(this).attr("href")).toggle().toggleClass("active");
            
        });
        
    });
    
})(jQuery);
