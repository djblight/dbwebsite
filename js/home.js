window.sr = ScrollReveal();
sr.reveal('.image1', {
  duration: 3000,
  origin:'top',
  distance:'300px'
});
sr.reveal('.image2', {
  duration: 3000,
  origin:'top',
  distance:'300px'
});
sr.reveal('.showcase-left', {
  duration: 2000,
  origin:'left',
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
sr.reveal('.info-top', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.info-bottom', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.container-e', {
  duration: 2000,
  origin:'top',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.container-f', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.showcase-left2', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.showcase-right2', {
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

// start nav
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '220px';
  }

  function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
  }
// end nav

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
    // start contact me section
    var howOften = 5; //number often in seconds to rotate
    var current = 0; //start the counter at 0
    var ns6 = document.getElementById&&!document.all; //detect netscape 6
   
    // place your images, text, etc in the array elements here
    var items = new Array();
        items[0]="<img src='..//assets/images/david.JPG' border-radius='50px' />"; //David Blight image
        items[1]="<a href='https://www.linkedin.com/in/david-blight-mba-1ba88624/' target='_blank'><img alt='Linkedin' src=' ..//assets/images/linkedin.png' height='300' width='300' border='0' /></a>"; //a linked image
        items[2]="<a href='https://github.com/djblight' target='_blank'><img alt='GitHub' src='..//assets/images/github.png' height='300' width='300' border='0' /></a>"; //a linked image
        items[3]="<a href='https://twitter.com/DavidBlight1' target='_blank'><img alt='Twitter' src='..//assets/images/twitter.png' height='300' width='300' border='0' /></a>"; //a linked image
        function rotater() {
        document.getElementById("placeholder").innerHTML = items[current];
        current = (current==items.length-1) ? 0 : current + 1;
        setTimeout("rotater()",howOften*1000);
    }
    function rotater() {
        if(document.layers) {
            document.placeholderlayer.document.write(items[current]);
            document.placeholderlayer.document.close();
        }
        if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
            if(document.all)
                placeholderdiv.innerHTML=items[current];
    
        current = (current==items.length-1) ? 0 : current + 1; //increment or reset
        setTimeout("rotater()",howOften*1000);
    }
    window.onload=rotater;
    // start contact page
    $(document).ready(function() {
      // Test for placeholder support
        $.support.placeholder = (function(){
            var i = document.createElement('input');
            return 'placeholder' in i;
        })();
    
        // Hide labels by default if placeholders are supported
        if($.support.placeholder) {
            $('.form-label').each(function(){
                $(this).addClass('js-hide-label');
            });  
    
            // Code for adding/removing classes here
            $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
                
                // Cache our selectors
                var $this = $(this),
                    $parent = $this.parent().find("label");
    
                if (e.type == 'keyup') {
                    if( $this.val() == '' ) {
                        $parent.addClass('js-hide-label'); 
                    } else {
                        $parent.removeClass('js-hide-label');   
                    }                     
                } 
                else if (e.type == 'blur') {
                    if( $this.val() == '' ) {
                        $parent.addClass('js-hide-label');
                    } 
                    else {
                        $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                    }
                } 
                else if (e.type == 'focus') {
                    if( $this.val() !== '' ) {
                        $parent.removeClass('js-unhighlight-label');
                    }
                }
            });
        } 
    });
    