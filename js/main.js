$(document).ready(function() {
   $('#pages').fullpage({
      scrollBar:true,
      scrollingSpeed: 1000,
      navigation:false,
      afterLoad: function(anchorLink, index){
                    $(this).find('.animation').addClass('fade-up-custom');
          },
      onLeave: function(index, nextIndex, direction){
            $('.section:nth-child('+nextIndex+')').find('.animation').addClass('fade-up-custom');
            //$('.section:nth-child('+nextIndex+')').find('.animation2').addClass('fadeInDown animated');
          },
      afterRender: function(){
            setTimeout(function(){$('section.section.active').find('.animation').addClass('fade-up-custom')},500);
      }
    });
 });