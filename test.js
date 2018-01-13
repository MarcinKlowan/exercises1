$(document).ready(function() { 

$(function() {
    var header = $(".linki");
    var section = $(header.attr('href'));
    
    $.each(header, function (index, value) {
    $(window).scroll(function(){    
        var scroll = $(window).scrollTop();

        if (scroll >= section.offset().top - 40) {
            header.addClass("scrolled");
        }
        
        if(scroll >= section.offset().top + section.height() - 40){
            header.removeClass("scrolled");
        }

    });
  
});

});
});