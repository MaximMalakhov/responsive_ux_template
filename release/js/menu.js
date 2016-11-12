/*функция для плавного перемещения меню при скроле*/

$(function(){
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