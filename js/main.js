$(document).ready(function() {
   $('#pages').fullpage({
      afterLoad: function(anchorLink, index){
            $(this).find('.animation').addClass('fade-up-custom');
            $(this).find('.animation2').addClass('fade-up-custom2');
            $(this).find('.animation3').addClass('fade-up-custom3');
            $(this).find('.animation4').addClass('fade-in-custom');
          },
      onLeave: function(index, nextIndex, direction){
            $('.section:nth-child('+nextIndex+')').find('.animation').addClass('fade-up-custom');
            $('.section:nth-child('+nextIndex+')').find('.animation2').addClass('fade-up-custom2');
            $('.section:nth-child('+nextIndex+')').find('.animation3').addClass('fade-up-custom3');
            $('.section:nth-child('+nextIndex+')').find('.animation4').addClass('fade-in-custom');
            //$('.section:nth-child('+nextIndex+')').find('.animation2').addClass('fadeInDown animated');
          },
      //afterRender: function(){
      //      setTimeout(function(){$('section.section.active').find('.animation').addClass('fade-up-custom')},100);
      //      setTimeout(function(){$('section.section.active').find('.animation2').addClass('fade-up-custom2')},100);
      //      setTimeout(function(){$('section.section.active').find('.animation3').addClass('fade-up-custom3')},100);
      //     setTimeout(function(){$('section.section.active').find('.animation4').addClass('fade-in-custom')},100);
            
      //}
    });
 });