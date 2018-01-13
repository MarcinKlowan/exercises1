$(document).ready(function() { 
    
       $('a[href^="#"]').on('click', function(event) { // scrollowanie po kliknięciu linka
           var target = $( $(this).attr('href') );
         
           if( target.length ) {    //znajdz wszystkie elementy a, któ©e maja href i wartosc hrefa zaczyna się od "#"
               event.preventDefault();
               $('html, body').animate({
                   scrollTop: target.offset().top
               }, 600);
           }
       });
   });
// przed optymalizacją
   // $('.nav-link.services').click(function () { 
    //$('html, body').animate({
      //  scrollTop: $('#services').offset().top
   // }, 600);
//});

//$('.nav-link.about').click(function () {
  //  $('html, body').animate({
    //    scrollTop: $('#about').offset().top
    //}, 600);
//});

//$('.nav-link.contact').click(function () {
  //  $('html, body').animate({
    //    scrollTop: $('#contact').offset().top
    //}, 600);
//});
//});
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#sidebar .nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        //if ('#' + window.location.hash.substr(1) == currLink.attr("href")) {
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#sidebar .nav-link').removeClass("scrolled");
            currLink.addClass("scrolled");
            var href = currLink.attr('href');
            location.hash = href.slice(href.indexOf('#') + 1);
        }
        else{
            currLink.removeClass("scrolled");
        }
    });
}
 
$(document).ready(function() {
    onScroll();
    $(window).scroll(function() {
        onScroll();
    });
});
    
//function onScroll(event){ mój pierwszy kod
  //      var scrollPos = $(document).scrollTop();
    //    $('#sidebar a').each(function () {
      //      var currLink = $(this);
        //   var refElement = $(currLink.attr("href"));
          //  if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            //    $('.nav-link').removeClass("scrolled");
              //  currLink.addClass("scrolled");
            //}
            //else{
              //  currLink.removeClass("scrolled");
            //}
        //});
    //}

    //$(document).ready(function() {
      //  $(window).scroll(function(e) {
        //    onScroll(e);
        //});
    //});
   

    function generujNews(tytul, autor, data, zdjecie, napisy) {
        var zmienionaData = myFunction(data);
        return `
        <div class="sssa">
            <h1>`+ tytul +`</h1>
            <h5>`+ autor +`</h5>
            <h6>`+ zmienionaData +`</h6>
            <img src="http://`+ zdjecie.src + `" alt="`+ zdjecie.alt +`" title="`+zdjecie.alt+`" />
            <h4>` +napisy+ `</h4>
        </div>
        `;
    }

    function komentarze(komentarz) { //definicja funkcji
        return `
        <div class="sssb">
        <h4>` + komentarz + `</h4> 
        </div>`;
    }
    
    function myFunction(data) {
            var d = new Date(data);
            var datetime = (d.getFullYear() + '-' + d.getMonth() +'-'+ d.getDay() + ' ' + d.getHours() + ':' + d.getMinutes())
            return datetime;
        }
   

$(document).ready(function() {
    var json = baza_postow;
    var artykuly = json.articles;
    $.each(artykuly, function(index, value) {

        
        
        //console.log(myFunction()) //wywołanie funckcji

        $('#news .words').append( generujNews(value.name, value.author_name, value.date_add, value.preview, value.content) );
        //$('#news .words').append('<h1>'+ value.author_name +'</h1>');

        $.each(value.comments, function(index, value){ // to value nadpisuje wartość z wyższego poziomu (value). To z dołu nie odnosi się do pierwszego w funkcji 
            $('#news .words').append(komentarze(value) );   
        });
    }); 
}); 
           




