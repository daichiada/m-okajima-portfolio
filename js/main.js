$(function(){
        // #で始まるリンクをクリックしたら実行されます
        $('a[href^="#"]').click(function() {
            // スクロールの速度
            var speed = 1500; // ミリ秒で記述
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
        $('#aw-animation').css('visibility','hidden');
            $(window).scroll(function(){
            var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
         $('#aw-animation').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 100){
            $(this).addClass("fadeInDown");
             }
        });
        });
        $('#gw-animation').css('visibility','hidden');
            $(window).scroll(function(){
            var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
        $('#gw-animation').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 100){
            $(this).addClass("fadeInDown");
            }
        });
        });

        // ハンバーガーメニューの開閉
        $('.menu-sp').on('click',function(){
            $('.menu-line').toggleClass('active');
            $('.gnav-sp').fadeToggle();
        });

        //ローディングアニメーション
        var loader = $('.loader-wrap');
            //ページの読み込みが完了したらアニメーションを非表示
            $(window).on('load',function(){
                loader.fadeOut();
            });
        
            //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
            setTimeout(function(){
                loader.fadeOut();
            },3000);

        //パララックス制御
            var ua = navigator.userAgent;
            if ( ua.indexOf( 'iPhone' ) > 0 || ua.indexOf( 'iPad' ) > 0) {
             // iPhoneまたはiPadの場合
                 $('.home1').css({
             // プロパティ名にハイフンが入っている場合は''で囲む
                'background-attachment': 'scroll',
                });
            }
});

