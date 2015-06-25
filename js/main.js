//Main JS
$(document).ready(function(){
    document.addEventListener("touchstart", function(){}, true);
    
    
    //Splash Screen
    Pace.on('hide', function(){
        $('.splash').animate({top: '-200%'},800).fadeOut();
        startanim();
    });
    
    //Menu Button
    $('.fonenav').on('click',function() {
      if($(this).hasClass('active')){
          $(this).removeClass('active');
          $('.pagewrapper').removeClass('menuopen');
          $('.menu li a i').removeClass('fa-rotate-90');
          $('.logotext, .logocontainer h1, .rotate').removeClass('stopanim');
      } else {
          $(this).addClass('active');
          $('.pagewrapper').addClass('menuopen');
          $('.logotext, .logocontainer h1, .rotate').addClass('stopanim');
          
      }
    })
    
    $('.menu li a').each(function(){
       $(this).on('click',function() {
          if($(this).children('i').hasClass('fa-rotate-90')) {
              return false;
          } else {
              $('.menu li a i').removeClass('fa-rotate-90');
              $(this).children('i').addClass('fa-rotate-90');
          }
       });
    });
    

    //Parallax
    /*jQuery('section').each(function() {
        var obj = $(this);
        jQuery(window).scroll(function() {
            var speedm = obj.data('speed');
            obj.myparallax(speedm) ; 
        });
    });*/
    //Smooth Scrolling
    $('a[href*=#]:not([href=#])').on('click',function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    
    //Change color
    /*function changecolor() {
		var randomcolor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
		$('.innercircle').css({backgroundColor: randomcolor});
	}
    setInterval(changecolor,3000);
    */
    
    
    //Scroll on top
    var a = $(".cd-timeline-block");
    if(a.length) {
         a.each(function() {
            if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.5) {
                $(this).find(".cd-date, .cd-timeline-content").addClass("zoomOut")
            }
        });
        $(window).on("scroll", function() {
            a.each(function() {
                if ($(this).offset().top - 10 <= $(window).scrollTop() + $(window).height() * 0.5 && $(this).find(".cd-date").hasClass("zoomOut")) {
                    $(this).find(".cd-date, .cd-timeline-content").removeClass("zoomOut").addClass("zoomIn");
                }
            })
        });
    }
    
    jQuery('.animate').addClass("hidden-animate").viewportChecker({
        classToAdd: 'animated fadeInUp',
        classToRemove: 'animate',
        offset: 100
    });

    //RESUME
    $('.resumebtn').on('click',function() {
        $('.moreme').addClass('show');
        $('html,body').css({overflow: 'hidden'});
    });
    $('.close').on('click',function(){
        $('.moreme').removeClass('show');
        $('html,body').removeAttr('style');
    });
    
    //BACK TO TOP
    $(window).scroll(function () {
		if($(this).scrollTop() > 100) {
            $('.backtop').fadeIn();
		} else if($(this).scrollTop() < 100) {
            $('.backtop').fadeOut();
		}
	});
    
    $(window).scroll(function () {
		if($(this).scrollTop() > 100) {
            $('.superman').addClass('flyagain fadeOutUpBig');
            $('#enjoytext').addClass('animated  zoomInDown').css({opacity: '1'});
            $('#title').addClass('animated zoomInDown zoomOutUp').css({opacity: '0'});
            $('.greetings').addClass('fadeOutDownBig');
            $("#sstars,#stars,#stars2,#stars3").addClass('stopanim');
		} else if($(this).scrollTop() == 0) {
            $('#enjoytext').removeClass('animated  zoomInDown').css({opacity: '0'});
            $('#title').removeClass('animated zoomInDown zoomOutUp').css({opacity: '0'});
            $('.superman').removeClass('animated fadeInUpBig stopfly flyagain fadeOutUpBig');
            $('.greetings').removeClass('animated fadeIn fadeOutDownBig');
            $("#sstars,#stars,#stars2,#stars3").removeClass('stopanim');
            animatehome();
        }
	});
    
    //EXTRA BUTTON
    $('.more').each(function() {
        $(this).on('click',function() {
            var classid = $(this).attr('id');
            if($(this).hasClass('open')) {
                $(this).removeClass('open');
                $('.'+ classid).removeClass('open');
                $(this).children('span').text('more');
            } else {
                $(this).addClass('open');
                $('.'+ classid).addClass('open');
                $(this).children('span').text('less');
            }
        }) 
    })
    
	
});

function startanim(){
    setTimeout(function(){ 
        stars();
    },1000);
}
function stars(){
    setTimeout(function(){
        $('#stars,#stars2,#stars3,#sstars').removeClass('displayN');
        animatehome();
    },800);
}
function animatehome(){  
    setTimeout(function(){
        $('#title').addClass('animated zoomInDown').css({opacity: '1'});
        titleOut();
    },1500);
}
function titleOut() {
    setTimeout(function(){
        $('#title').addClass('zoomOutUp');
        superman();
    },5000);
}
function superman(){
    $('.superman').addClass('animated fadeInUpBig');
    stopfly();
    

}
function stopfly(){
    setTimeout(function(){
        $('.superman').addClass('stopfly');
        $('.scrollD').fadeIn();
        $('.greetings').addClass('animated fadeIn');
    },1000);
}
function flyagain(){
    setTimeout(function(){
        $('.superman').addClass('flyagain fadeOutUpBig');
        $('#enoytext').addClass('animated  fadeInUpBig');
    },3500);
}



//IMPULSE PULL DOWN