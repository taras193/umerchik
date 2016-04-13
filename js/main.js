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
$(document).ready(function() {
  slider1 = $('#sld1').bxSlider({pager:false,controls:false, auto:false, speed: 400});
  $('.left-arr').click(function(){slider1.goToPrevSlide();});
  $('.right-arr').click(function(){slider1.goToNextSlide();});
});

$(document).ready(function() {

$('.btn_p1').click(function(e) {
    e.preventDefault();
    $('#pop1').arcticmodal();
  });
$('.popap .close').click(function(e){
    e.preventDefault();
    $(this).parent().arcticmodal('close');
  });

function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
    function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
    }
    $.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
    utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){$('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")});
    $('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
    $('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");

    $('input[name="name"]').blur(function() {if($(this).val().length < 3) {$(this).addClass('error-input');}});
    $('input[name="name"]').focus(function() {$(this).removeClass('error-input');});

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
    $('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

    function validateEmail(email) {var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return re.test(email);};

    $('input[name="email"]').blur(function() {if(!validateEmail($(this).val())) {$(this).addClass('error-input');}});
    $('input[name="email"]').focus(function() {$(this).removeClass('error-input');});

    $('textarea').blur(function() {if($(this).val().length < 3) {$(this).addClass('error-input');}});
    $('textarea').focus(function() {$(this).removeClass('error-input');});

    $('form').submit(function(e){
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        $(this).find('textarea').trigger('blur');
        if(!$(this).find('input[type="text"]').hasClass('error-input')&&!$(this).find('textarea').hasClass('error-input')){
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            $.ajax({type: type, url: url, data: data,
            success : function(){
                $.arcticmodal('close');$('#okgo').arcticmodal();
            }
        }); 
        }
    });

});