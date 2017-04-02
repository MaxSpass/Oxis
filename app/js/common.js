$(document).ready(function(){

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200);
        return false;
      }
    }
  });
});

	$('.serv-caption-box').viewportChecker({
		classToAdd: 'visible animated zoomIn',
	});

	$('.text-preview').viewportChecker({
		classToAdd: 'visible animated fadeIn',
	});

	$('.serv-item-inner-img').viewportChecker({
		classToAdd: 'visible animated rotateIn'
	});

	$('.price-item').viewportChecker({
		classToAdd: 'visible animated fadeInUp'
	});

	$('.serv-text-preview').viewportChecker({
		classToAdd: 'visible animated fadeInLeft'
	});

	$('.price-desc').viewportChecker({
		classToAdd: 'visible animated fadeIn'
	});

	$('.form-box').viewportChecker({
		classToAdd: 'visible animated pulse'
	});

	$(".text-preview").pxgradient({ 
	  step: 2, 
	  colors: ["#0d00b0","#3d008c","#750062","#c60026","#ff3002","#ff6014","#ff0e0c"],
	  dir: "x"
	});

	$('.portfolio-list').owlCarousel({
		items: 4,
		loop: true,
		center: true,
		dots: true
	});

	$('.masked-input').mask('+38 (099) 999-99-99');
})

// $(window).on('load resize', function(){
// 	$(".text-preview").pxgradient({ 
// 	  step: 2, 
// 	  colors: ["#0d00b0","#3d008c","#750062","#c60026","#ff3002","#ff6014","#ff0e0c"],
// 	  dir: "x"
// 	});
// })