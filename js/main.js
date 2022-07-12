$('.con').slick({
    'arrows' : false,    //화살표 없애기
    'dots' : true ,       //페이저버튼 나타내기   
    'autoplay' : true, //자동재생
    'autoplaySpeed' :1500, //자동재생 속도    
});


// $('.con').slick({
//     'asNavFor' : '.con', //같이 연결해줘야함
//     'fade' : true, //스르륵 사라졌다 나타나는 모드
//     'autoplay' : true, //자동재생
//     'autoplayspeed' : 1000, //자동재생 속도    
// });

$('.btnArt button').on('click',function(){
    $(this).css({'backgroundColor' : '#8e6de2'})
    .siblings().css({'backgroundColor' : '#eae3ff'});

    let i = $(this).index();

    $('.artcon').children().eq(i).css({'display':'flex'}).siblings().hide();
    $('.txtcon').children().eq(i).css({'display':'flex'}).siblings().hide();
});




$(window).on('scroll',function(){

    let scr = $(window).scrollTop();
    let startPoint = $('.profile').offset().top - 500;
    let endPoint = $('.goods').offset().top - 800;


    if(scr >= startPoint && scr < endPoint){

        let topPoint = -scr/1.5;

        if(topPoint > -200){
        $('.portfolio').find('.bg').css({
            'top' : topPoint
        });
    }else{

    }

    }


});
