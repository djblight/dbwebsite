window.sr = ScrollReveal();
sr.reveal('.image1', {
  duration: 2000,
  origin:'left'
});
sr.reveal('.image2', {
  duration: 2000,
  origin:'right'
});
sr.reveal('.showcase-left', {
  duration: 2000,
  origin:'top',
  distance:'300px'
});
sr.reveal('.showcase-right', {
  duration: 2000,
  origin:'right',
  distance:'300px'
});
sr.reveal('.showcase-btn', {
  duration: 2000,
  delay: 2000,
  origin:'bottom'
});
sr.reveal('#history div', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('.info-left', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.info-right', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});

$(function() {
// Smooth Scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
  }
}
});
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
document.getElementById("mySidenav").style.width = "200px";
document.getElementById("main").style.marginLeft = "200px";
};

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
};

// start slider screen
jQuery(document).ready(function ($) {
    
      $('#checkbox').change(function(){
        setInterval(function () {
            moveRight();
        }, 3000);
      });
      
        var slideCount = $('#slider ul li').length;
        var slideWidth = $('#slider ul li').width();
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
        
        $('#slider').css({ width: slideWidth, height: slideHeight });
        
        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        
        $('#slider ul li:last-child').prependTo('#slider ul');
    
        function moveLeft() {
            $('#slider ul').animate({
                left: + slideWidth
            }, 200, function () {
                $('#slider ul li:last-child').prependTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };
    
        function moveRight() {
            $('#slider ul').animate({
                left: - slideWidth
            }, 200, function () {
                $('#slider ul li:first-child').appendTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };
    
        $('a.control_prev').click(function () {
            moveLeft();
        });
    
        $('a.control_next').click(function () {
            moveRight();
        });
    
    });
    // end slider screen
    