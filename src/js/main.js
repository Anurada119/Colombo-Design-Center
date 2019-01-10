$(document).ready(function(){
    $('.regiter-please').on('click', function(e){
        e.preventDefault();
        $(this).hide();
        $('.login-screen').toggleClass('active');
        $('.register-screen').toggleClass('active');

        $('.wrapper').css({
            'margin-top' : '-'+navHeigh+'px' 
        });
    });

    mobileMenu();

});

var mobileMenu = function(){

    var navHeigh = $('.new-main-nav').height();
    
    $('.wrapper').css({
        'margin-top' : '-'+navHeigh+'px' 
    });

    $('.menu-icon').on('click', function(){
        $(this).toggleClass('opened-menu');

        $('.new-main-nav').toggleClass('show-nav');

        if($('.new-main-nav').hasClass('show-nav')){
            $('.wrapper').css({
                'margin-top' : '0px' 
            });
        }else{
            $('.wrapper').css({
                'margin-top' : '-'+navHeigh+'px' 
            });
        }

    });

};