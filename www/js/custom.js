// <![CDATA[
$(function() {
	// radius Box
	//$('#nav_wrapper ul.menu li ul, #nav_wrapper ul.menu li a, .wp-pagenavi a, .wp-pagenavi .current').css({"border-radius":"5px", "-moz-border-radius":"5px", "-webkit-border-radius":"5px"});
	
	//$('.topnav ul li ul ').css({"border-bottom-left-radius":"5px", "border-bottom-right-radius":"5px",  "-moz-border-radius-bottomleft":"5px", "-moz-border-radius-bottomright":"5px", "-webkit-border-bottom-left-radius":"5px", "-webkit-border-bottom-right-radius":"5px"});
	
	//$('#nav_wrapper ul.menu li li a').css({"border-radius":"0px", "-moz-border-radius":"0px", "-webkit-border-radius":"0px"});
	//$('#nav_wrapper ul.menu li a.have-sub-menu').css({"border-bottom-right-radius":"0px",	"-moz-border-radius-bottomright":"0px",	"-webkit-border-bottom-right-radius":"0px", "border-bottom-left-radius":"0px",	"-moz-border-radius-bottomleft":"0px",	"-webkit-border-bottom-left-radius":"0px"});
	//$('#nav_wrapper ul.menu li ul').css({"border-top-left-radius":"0px",	"-moz-border-radius-topleft":"0px",	"-webkit-border-top-left-radius":"0px"});
	
	// Slider
	$('#coin-slider').coinslider({width:970,height:384,opacity:1});
	
	// Tabs Slider script
	//if ($('#tabs_news')) {
	//	$('#tabs_news').tabs({ fxFade: true, fxSpeed: 'fast' });
	//}
	
	// Superfish tabs
	$("ul.sf-menu").superfish({
		autoArrows:  false,
		delay:       400,                             // one second delay on mouseout 
		animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
		speed:       'fast',                          // faster animation speed 
		autoArrows:  false,                           // disable generation of arrow mark-up 
		dropShadows: false                            // disable drop shadows 			
	}); 
	$('ul.list li').each(function() {
	  var a = $(this).children('a');
	  var aClass = a.attr('rel');
	  if (a.hasClass('active')) {     
	   $('.'+aClass).css({'display':'block'});
	  } else {
	   $('.'+aClass).css({'display':'none'});
	  }
	 });
	 $('ul.list li a').click(function () {             
	  var thisaClass = $(this).attr('rel');
	  $(this).parent('li').parent('ul').children('li').each(function() {
	   var a = $(this).children('a');
	   var aClass = a.attr('rel');
	   if (thisaClass == aClass) {
		$('.'+aClass).show();
		a.attr('class','active');
	   } else {
		$('.'+aClass).hide();
		a.attr('class','');
	   }
	  });
	  return false;
	});


    // Main menu
	$('.menu-item').click(function() {
	  window.location = $(this).find('a:first').attr('href');
	});
    var dropdown_level = 0;
    $('.sub-menu').parent().find('a:first').addClass('nav_sub_arrow');
    $('#nav_wrapper .menu').children('li').children('a').addClass('top_level');
    $('#nav_wrapper .menu').children('li').children('a').removeClass('nav_sub_arrow');
    $('#nav_wrapper .menu-item').hover(function(){
      if(dropdown_level == 0){
            $('#nav_wrapper .menu').find('a').removeClass('nav_sub_arrow_active');  
            //$('#nav_wrapper .menu').find('a').addClass('nav_sub_arrow_passive');  
          $(this).addClass('main_hover_left');
          $(this).children('a').addClass('main_hover_right');
            $('.sub-menu').parent().find('a:first').addClass('nav_sub_arrow');
        $('#nav_wrapper .menu').children('li').children('a').addClass('top_level');
        $('#nav_wrapper .menu').children('li').children('a').removeClass('nav_sub_arrow');
      }                                                                                             
      $(this).find('.sub-menu:first').stop(true,true).slideDown(200).show();        
      $(this).find('a:first').addClass('nav_sub_arrow_active');
      $('#nav_wrapper .menu').children('li').children('a').removeClass('nav_sub_arrow_active');       
      dropdown_level++;
    },function(){            
      $(this).find('.sub-menu:first').stop(true,true).slideUp(0);
      $(this).find('a:first').removeClass('nav_sub_arrow_active');
      dropdown_level--;
       if(dropdown_level == 0){
        $(this).removeClass('main_hover_left');
          $(this).children('a').removeClass('main_hover_right');
       }
    } );


	// contact form
	/*$('#contactform').submit(function(){				  
		var action = $(this).attr('action');
		$.post(action, { 
			name: $('#name').val(),
			email: $('#email').val(),
			company: $('#company').val(),
			subject: $('#subject').val(),
			message: $('#message').val()
		},
			function(data){
				$('#contactform #submit').attr('disabled','');
				$('.response').remove();
				$('#contactform').before('<p class="response">'+data+'</p>');
				$('.response').slideDown();
				if(data=='Message sent!') $('#contactform').slideUp();
			}
		); 
		return false;
	});*/
});
// ]]>