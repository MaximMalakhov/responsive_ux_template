$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('.menu-mobile').offset().top;
 
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('.menu-mobile').css({position: 'fixed', top: '0px'});
						$('#stickyalias').css('display', 'block');
                 } else {
                       	 $('.menu-mobile').css({position: 'static', top: '0px'});
						 $('#stickyalias').css('display', 'none');
                      	}
        });
  });