//リンクのスムーズスクロール java acript
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

        //ボタンを押すとフルスクリーンが開く

        //ESSロゴ

        $('.suekawa-btn').click(function(){
            $('.suekawa-gnav-wrap').fadeToggle();
        });
        $('.suekawa-mono-btn').click(function(){
            $('.suekawa-mono-gnav-wrap').fadeToggle();
        });
        $('.suekawa-phonto-btn').click(function(){
            $('.suekawa-phonto-wrap').fadeToggle();
        });

        //ESSロゴ part.2

        $('.suekawa-trop-btn').click(function(){
            $('.suekawa-trop-gnav-wrap').fadeToggle();
        });
        $('.suekawa-color-btn').click(function(){
            $('.suekawa-color-gnav-wrap').fadeToggle();
        });
        $('.suekawa-black-btn').click(function(){
            $('.suekawa-black-wrap').fadeToggle();
        });

        //ESSロゴ part.3

        $('.suekawa-alsc-btn').click(function(){
            $('.suekawa-gnav-alsc-wrap').fadeToggle();
        });
        $('.suekawa-fround-btn').click(function(){
            $('.suekawa-fround-gnav-wrap').fadeToggle();
        });
        $('.suekawa-simple-btn').click(function(){
            $('.suekawa-simple-wrap').fadeToggle();
        });



        //コンペロゴpart.1

        $('.kessa-btn').click(function(){
            $('.kessa-gnav-wrap').fadeToggle();
        });
        $('.hiyoko-cup-btn').click(function(){
            $('.hiyoko-gnav-wrap').fadeToggle();
        });
        $('.ritsu-ritsu-btn').click(function(){
            $('.ritsu-ritsu-gnav-wrap').fadeToggle();
        });

        //コンペロゴ part.2
        $('.g-kessa-btn').click(function(){
            $('.g-kessa-gnav-wrap').fadeToggle();
        });
        $('.allwest-btn').click(function(){
            $('.allwest-gnav-wrap').fadeToggle();
        });
        $('.kessa-color-btn').click(function(){
            $('.kessa-color-gnav-wrap').fadeToggle();
        });

        //コンペロゴ part.2
        $('.kessa-camp-btn').click(function(){
            $('.kessa-camp-gnav-wrap').fadeToggle();
        });
        $('.clock-btn').click(function(){
            $('.clock-gnav-wrap').fadeToggle();
        });
        $('.thisiswhy-btn').click(function(){
            $('.thisiswhy-gnav-wrap').fadeToggle();
        });


        //パンフレットロゴ part.1

        $('.untitle-btn').click(function(){
            $('.untitle-gnav-wrap').fadeToggle();
        });
        $('.suekawa-poster-btn').click(function(){
            $('.suekawa-poster-gnav-wrap').fadeToggle();
        });
        $('.hiyoko-pamp-btn').click(function(){
            $('.hiyoko-pamp-gnav-wrap').fadeToggle();
        });

        //パンフレットロゴ part.2

        $('.suekawa-blue-btn').click(function(){
            $('.suekawa-blue-gnav-wrap').fadeToggle();
        });
        $('.suekawa-orange-btn').click(function(){
            $('.suekawa-orange-gnav-wrap').fadeToggle();
        });
        $('.suekawa-white-btn').click(function(){
            $('.suekawa-white-gnav-wrap').fadeToggle();
        });        
        
        //パンフレットロゴ part.3

        $('.suekawa-invite-btn').click(function(){
            $('.suekawa-invite-gnav-wrap').fadeToggle();
        });
        $('.suekawa-hna-btn').click(function(){
            $('.suekawa-hna-gnav-wrap').fadeToggle();
        });
        $('.suekawa-nextg-btn').click(function(){
            $('.suekawa-nextg-gnav-wrap').fadeToggle();
        });

        //Others
        $('.suekawa-trop-black-btn').click(function(){
            $('.suekawa-trop-black-gnav-wrap').fadeToggle();
        });
        $('.suekawa-modern-btn').click(function(){
            $('.suekawa-modern-gnav-wrap').fadeToggle();
        });
        $('.houchiga-btn').click(function(){
            $('.houchiga-gnav-wrap').fadeToggle();
        });


            
        //×を押すとフルスクリーンが閉じる

        //ESSロゴ

        $('.close-btn').click(function(){
            $('.suekawa-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-mono-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-phonto-wrap').fadeOut();
        });

        //ESSロゴpart2

        $('.close-btn').click(function(){
            $('.suekawa-trop-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-color-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-black-wrap').fadeOut();
        });

        //ESSロゴ part3

        $('.close-btn').click(function(){
            $('.suekawa-gnav-alsc-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-fround-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-simple-wrap').fadeOut();
        });

        //コンペロゴ part.1

        $('.close-btn').click(function(){
            $('.kessa-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.hiyoko-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.ritsu-ritsu-gnav-wrap').fadeOut();
        });

        //コンペロゴ part.2
        $('.close-btn').click(function(){
            $('.g-kessa-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.allwest-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.kessa-color-gnav-wrap').fadeOut();
        });

        //コンペロゴ part.3
        $('.close-btn').click(function(){
            $('.kessa-camp-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.clock-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.thisiswhy-gnav-wrap').fadeOut();
        });
        

        //パンフレットロゴ part.1

        $('.close-btn').click(function(){
            $('.untitle-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-poster-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.hiyoko-pamp-gnav-wrap').fadeOut();
        });

        //パンフレットロゴ part.2

        $('.close-btn').click(function(){
            $('.suekawa-blue-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-orange-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-white-gnav-wrap').fadeOut();
        });

        //パンフレットロゴ part.3

        $('.close-btn').click(function(){
            $('.suekawa-invite-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-hna-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-nextg-gnav-wrap').fadeOut();
        });

        //others

        $('.close-btn').click(function(){
            $('.suekawa-trop-black-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.suekawa-modern-gnav-wrap').fadeOut();
        });
        $('.close-btn').click(function(){
            $('.houchiga-gnav-wrap').fadeOut();
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
});