import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./../css/style.scss"
import "../asset/jquery-3.1.1.min"
import "@popperjs/core/dist/cjs/popper.js"
import "bootstrap/dist/js/bootstrap.min.js"
console.log(1);
$(function(){
$(window).scroll(function(){
    if($(this).scrollTop()>=400){
        $("#navbar").addClass("noTransparrent");
     }
    else{
        $("#navbar").removeClass("noTransparrent");
     }
});
$("a.scroll").on('click', function(event) {

    var hash = this.hash;

    $('html, body').animate({scrollTop: $(hash).offset().top - 50}, 800, function(){});

});
});