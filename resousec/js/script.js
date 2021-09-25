//mixitup
var mixer = mixitup('.grid-portfolio-container');
//scrollify
$(function() {
    $.scrollify({
      section : ".scrollify",
    });
  });
  //Hamburger Menu

function openMenu(){
    document.getElementById('navbar').style.height = "100vh";
}
function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
}
// Smooth Scroll
$(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
        
        return false;
    });
});