$(document).ready(function(){

var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);

if(!isIE){
	$(".text-preview").css('background-image','url("../img/gradient.jpg")');
} else {
	$('.text-preview').css({
		'color':'#fff',
		'text-decoration':'underline',
		'background-image':'none'
	})
}

$('#btn-go, #btn-go-services, .btn-price').click(function(){
	$('body').addClass('shadow');
	var newModal = $('.form-box').clone();
	var thisButton = newModal.children('form').find('button');

	newModal.addClass('modal animated pulse').prependTo('body');
	newModal.find('.main-form').attr('id','form-modal');

	var formModalId = newModal.children('form').attr('id');
	newModal.find('button.btn-form').attr('form',formModalId);

	$('.masked-input').mask('+38 (099) 999-99-99');
	thisButton.click(function(){
	    if($("#form-modal")[0].checkValidity()) {
	        $.post('Action.php', $('#form-modal').serializeArray(), function(data) {
				newModal.html('<b>Спасибо, мы скоро с Вами свяжемся</b>');
				setTimeout(function(){
					newModal.fadeOut(700)
					$('body').removeClass('shadow')
					setTimeout(function(){
						newModal.remove()
					},800)
				},1000)
	        });
	        return false;
	    }
	    // else  {

	    // }
	});
	$('.form-close').click(function(){
		var thisParentForm = $(this).parent('.form-box');
		thisParentForm.fadeOut(400)
		$('body').removeClass('shadow')
		setTimeout(function(){
			thisParentForm.remove()
		},500)
	})
})



$('.btn-mobile').click(function(){
	$(this).toggleClass('active');
	$('.modal').remove();
	$('nav.menu').toggleClass('show');
	$('body').toggleClass('overflow-hidden').removeClass('shadow')
})



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
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

	$('.portfolio-list').owlCarousel({
		items: 3,
		loop: true,
		center: true,
		autoplay: true,
		autoplaySpeed: 500,
		autoplayHoverPause: true,
		navigation: true,
		pagination: true,
		navigationText: ['<i class="carouselPrev"></i>', '<i class="carouselNext"></i>']
	});

	$('.masked-input').mask('+38 (099) 999-99-99');
})



$(window).on('load resize', function(){
	var winWidth = $(window).width();
	if (winWidth <= 767) {
		$('nav.menu li a').click(function(){
			$('.btn-mobile').toggleClass('active');
			$('nav.menu').toggleClass('show');
			$('body').toggleClass('overflow-hidden');
		})
	} else {
		$('.btn-mobile').removeClass('active');
		$('nav.menu').removeClass('show');
		$('body').removeClass('overflow-hidden');
	}
})

// $(window).on('load resize', function(){
// 	$(".text-preview").pxgradient({ 
// 	  step: 2, 
// 	  colors: ["#0d00b0","#3d008c","#750062","#c60026","#ff3002","#ff6014","#ff0e0c"],
// 	  dir: "x"
// 	});
// })