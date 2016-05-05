$('<link rel=stylesheet type=text/css href=css/libs.css><link rel=stylesheet type=text/css href=css/style.css>').appendTo('head');
$(document).ready(function() {

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    $('<style>section,.section{display:block;height:1080px!important}.animation,.animation2,.animation4{opacity:1;top:0;}.animation3{width:1356px}</style>').appendTo('head');
  $('body').addClass('loaded');
  }
  else{

setTimeout(function(){
    if(!$('body').hasClass('loaded')) {
      $('body').addClass('loaded');
      initfullpage();
    };
  },3000);

  }

//menu
var menu_active = 0;
$('.menu-btn').click(function(){
  if (!$('.menu').hasClass('active')) {
    $(this).addClass('as-close');
    $('.menu').addClass('active');
    menu_active = 1;
  } else{
    $(this).removeClass('as-close');
    $('.menu').removeClass('active');
    menu_active = 0;
  }
});
$('section, header').click(function(){
  if (menu_active == 1) {
    $('.menu').removeClass('active');
    $('.menu-btn').removeClass('as-close');
    menu_active = 0;
  }
});
$('.menu .menu-a').click(function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
  $('.menu').removeClass('active');
    $('.menu-btn').removeClass('as-close');
    menu_active = 0;
});

$('.site-nav.down').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  }).on('mouseover', function() {
        $(".site-nav.down").addClass('active');
    }).on('mouseout', function() {
        $(".site-nav.down").removeClass('active');
    });

$('.site-nav.up').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionUp();
  }).on('mouseover', function() {
        $(".site-nav.up").addClass('active');
    }).on('mouseout', function() {
        $(".site-nav.up").removeClass('active');
    });

$('.tr-radio').click(function(e){
    e.preventDefault();
    $(this).parent().find('.radio-wrap').removeClass('rw-active');
    $(this).children('.radio-wrap').addClass('rw-active');
    $('input[name="'+$(this).data('step')+'"]').val($(this).text());
    if ($(this).data('step') == 'step1') {
      $('.rip-bl').removeClass('mram').removeClass('granit').addClass($(this).data('class'));
    }
    if ($(this).data('step') == 'step6') {
      if ($(this).data('img') == 'yes') {
        $('.rip-bl .img').css('opacity','1');
      }else{
        $('.rip-bl .img').css('opacity','0');
      }
    }
});

$('.tr-hov li').click(function(){
  if ($(this).parents('.trig-2').hasClass('sld-trig')) {
    $(this).parents('.trig-2').find('li').removeClass('active_l');
    $(this).addClass('active_l');
    $(this).parents('.trig-2').find('.tr-body.active_tr').html($(this).text());
    $(this).parents('.item').find('.price-val').html($(this).data('price'));
  }else{
    $('.sec2 .tr-hov li').removeClass('active_l');
    $(this).addClass('active_l');
    $('.sec2 .tr-body.active_tr').html($(this).text());
    $('input[name="step3"]').val($(this).text());

  }
});
$('.confbtn').click(function(e) {
    e.preventDefault();
    $('#conf_pop').arcticmodal();
  });
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
                yaCounter37007745.reachGoal('form_one');
            }

        }); 
        }
    });

});

$(window).load(function() {
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

     }
  else{
    
  if (!$('body').hasClass('loaded')) {
    $('body').addClass('loaded');
    initfullpage();
  };

  }


  slider1 = $('#sld1').bxSlider({pager:false,controls:false, auto:false, speed: 400,minSlides:4,maxSlides:4,slideWidth:250,moveSlides:1,
    onSlideBefore:function($slideElement, oldIndex, newIndex){},
  onSlideNext:function($slideElement, oldIndex, newIndex){
    var old_h = parseInt($('.item.hover').attr('data-sld'));
    $('.item').removeClass('hover');
    if (old_h<7) {
      var next = old_h+1;
      $('.item[data-sld="'+next+'"]').addClass('hover');
    }else{
      $('.item[data-sld="0"]').addClass('hover');
    }  
 },onSlidePrev:function($slideElement, oldIndex, newIndex){

    var old_h = parseInt($('.item.hover').attr('data-sld'));
    $('.item').removeClass('hover');
    if (old_h>0) {
      var next = old_h-1;
      $('.item[data-sld="'+next+'"]').addClass('hover');
    }else{
      $('.item[data-sld="7"]').addClass('hover');
    }}
});
  $('.left-arr').click(function(){slider1.goToPrevSlide();});
  $('.right-arr').click(function(){slider1.goToNextSlide();});
  $('.sec5 .item').hover(function(){$('.sec5 .item').removeClass('hover');$(this).addClass('hover');})

 slider2 = $('#sld2').bxSlider({
        infiniteLoop: true,
        pager: false,
        controls: false,
        auto: false,
        speed: 500,
        slideWidth: 782,
        slideMargin:0 ,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        onSlideNext: function($slideElement, oldIndex, newIndex) {
            $('#sld2 .slde').addClass('fadeouted');
            $slideElement.removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
            $('#sld2 .slde.active').removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
            $('#sld2 .slde.active').removeClass('active').next().addClass('active');
            $slideElement.next().addClass('active');
        },
        onSlidePrev: function($slideElement, oldIndex, newIndex) {
            $('#sld2 .slde').addClass('fadeouted');
            $slideElement.removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
            $('#sld2 .slde.active').removeClass('fadeouted').prev().removeClass('fadeouted').prev().removeClass('fadeouted');
            $('#sld2 .slde.active').removeClass('active').prev().addClass('active');
            $slideElement.next().addClass('active');
        },
        onSliderLoad: function() {
            $('#sld2 .slde').addClass('fadeouted');
            $('#sld2 .slde.active').prev().removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
        }
    });
    slider2.goToSlide(1);
    $('#sld2l').click(function(e) {
        e.preventDefault();
        slider2.goToPrevSlide();
    });
    $('#sld2r').click(function(e) {
        e.preventDefault();
        slider2.goToNextSlide();
    });

});

function initfullpage() {
   $('#pages').fullpage({
        autoScrolling: false,
      afterLoad: function(anchorLink, index){
            $(this).find('.animation').addClass('fade-up-custom');
            $(this).find('.animation2').addClass('fade-up-custom2');
            $(this).find('.animation3').addClass('fade-up-custom3');
            $(this).find('.animation4').addClass('fade-in-custom');
            if(index == 1){$('.site-nav.up').hide();}else{$('.site-nav.up').show();} 
            if(index == 10){$('.site-nav.down').hide();}else{$('.site-nav.down').show();} 
            if(index == 10 || index == 2 || index == 4 || index == 6){$('.site-nav.up').addClass('black');}else{$('.site-nav.up').removeClass('black');} 
            if(index == 2 || index == 6){$('.site-nav.down').addClass('black');}else{$('.site-nav.down').removeClass('black');} 
            if(index == 1){$('.site-nav.down').addClass('animation4');}else{$('.site-nav.down').removeClass('animation4');}
            if(index == 1){$('.site-nav.down').addClass('animated');}else{$('.site-nav.down').removeClass('animated');}
          
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
 }
 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });
