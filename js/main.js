// Select all links with hashes
$(document).ready(function() {
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#makeup"]')
  .not('[href="#facial"]')
  .not('[href="#haircut"]')
  .not('[href="#massage"]')
  .not('[href="#nailcare"]')
  .not('[href="#waxing"]')
  .not('[href="#v-pills-home"]')
  .not('[href="#v-pills-profile"]')
  .not('[href="#v-pills-messages"]')
  .not('[href="#v-pills-settings"]')
  .not('[href="#v-pills-layers"]')
  .not('[href="#v-pills-stylish"]')
  .not('[href="#v-pills-man"]')
  .not('[href="#v-pills-woman"]')
  .not('[href="#v-pills-children"]')
  .not('[href="#v-pills-teen"]')
  .not('[href="#v-pills-layer"]')
  .not('[href="#v-pills-stylishs"]')
  .not('[href="#v-pills-hairone"]')
  .not('[href="#v-pills-hairtwo"]')
  .not('[href="#v-pills-hairthree"]')
  .not('[href="#v-pills-hairfour"]')
  .not('[href="#v-pills-hairfive"]')
  .not('[href="#v-pills-hairsix"]')
  .not('[href="#v-pills-massageone"]')
  .not('[href="#v-pills-massagetwo"]')
  .not('[href="#v-pills-massagethree"]')
  .not('[href="#v-pills-massagefour"]')
  .not('[href="#v-pills-massagefive"]')
  .not('[href="#v-pills-massagesix"]')
  .not('[href="#v-pills-nailone"]')
  .not('[href="#v-pills-nailtwo"]')
  .not('[href="#v-pills-nailthree"]')
  .not('[href="#v-pills-nailfour"]')
  .not('[href="#v-pills-nailfive"]')
  .not('[href="#v-pills-nailsix"]')
  .not('[href="#v-pills-waxone"]')
  .not('[href="#v-pills-waxtwo"]')
  .not('[href="#v-pills-waxthree"]')
  .not('[href="#v-pills-waxfour"]')
  .not('[href="#v-pills-waxfive"]')
  .not('[href="#v-pills-waxsix"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});




$(document).ready(function() {
$(".project").hover3d({
  selector: ".project__card",
  perspective:1000,
  sensitivity: 20,
  invert:true
  
});
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("headerOne").style.top = "0";
  } else {
    document.getElementById("headerOne").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
} 

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("headerTwo").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("headerTwo").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
  }
  
  wrapper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
  
    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
});

