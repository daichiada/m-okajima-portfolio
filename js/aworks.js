$(function () {
  $(".grad-works").bgSwitcher({
    images: [
      "../grad-works/main.png",
      "../grad-works/image1.png",
      "../grad-works/image2.png",
      "../grad-works/image3.png",
      "../grad-works/image4.png",
    ], // 切替背景画像を指定
    interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
    loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 2000, // エフェクトの時間を指定します。
    easing: "swing", // エフェクトのイージングをlinear,swingから指定
  });
  $(".junior-works").bgSwitcher({
    images: [
      "../junior-works/main.png",
      "../junior-works/image2.png",
      "../junior-works/image3.png",
      "../junior-works/image4.png",
      "../junior-works/image5.png",
    ], // 切替背景画像を指定
    interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
    loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 2000, // エフェクトの時間を指定します。
    easing: "swing", // エフェクトのイージングをlinear,swingから指定
  });
  $(".sophomore-works").bgSwitcher({
    images: [
      "../soph-works/main.png",
      "../soph-works/image2.png",
      "../soph-works/image3.png",
      "../soph-works/image4.png",
      "../soph-works/image5.png",
      "../soph-works/image6.png",
      "../soph-works/image7.png",
    ], // 切替背景画像を指定
    interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
    loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 2000, // エフェクトの時間を指定します。
    easing: "swing", // エフェクトのイージングをlinear,swingから指定
  });

  // フルスクリーンナビ
  $(".cp-btn-gw").on("click", function () {
    $(".gnav-gw").fadeIn();
  });
  $(".cp-btn-jw").on("click", function () {
    $(".gnav-jw").fadeIn();
  });
  $(".cp-btn-sw").on("click", function () {
    $(".gnav-sw").fadeIn();
  });
  $(".close-btn-gw").on("click", function () {
    $(".gnav-gw").fadeOut();
  });
  $(".close-btn-jw").on("click", function () {
    $(".gnav-jw").fadeOut();
  });
  $(".close-btn-sw").on("click", function () {
    $(".gnav-sw").fadeOut();
  });

  //#で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 1500; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //ローディングアニメーション
  var loader = $(".loader-wrap");
  //ページの読み込みが完了したらアニメーションを非表示
  $(window).on("load", function () {
    loader.fadeOut();
  });

  //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
  setTimeout(function () {
    loader.fadeOut();
  }, 3000);
});
