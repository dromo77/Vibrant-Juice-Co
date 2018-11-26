/* Toggle Menu Icon */

    $(".navbar_toggle").click(function() {
    $(this).find("i").toggleClass("fas fa-times fas fa-bars");
});

$(document).ready(function(){
    $(".navbar_toggle").click(function(){
        $(".nav").toggle();
    });
});

