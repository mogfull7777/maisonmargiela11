$(document).ready(function () {

    
    $('.row1 .wrap .fashion .track').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        "prevArrow" : "none",
        "nextArrow" : "none",
        "speed" : "5000"
      });

    
    $(window).on("scroll", function(){

        var scr = $(this).scrollTop();
        var activeIn = $(".row2").offset().top;
        var activeOut = $(".row4").offset().top;
        // var activeStart = $(window).offset().top;

        if(scr >= activeIn / 0.7 && scr < activeOut){
            $(".row3 .acc .acc_2").addClass("on");
            $(".row3 .acc .acc_4").addClass("on");
            $(".row3 .acc .acc_1").addClass("on");
            $(".row3 .acc .acc_3").addClass("on");
        } else {
            $(".row3 .acc .acc_2").removeClass("on");
            $(".row3 .acc .acc_4").removeClass("on");
            $(".row3 .acc .acc_1").removeClass("on");
            $(".row3 .acc .acc_3").removeClass("on");
        }
        



        // if(src >= 2550 && src <= 2649){
        //     $(".row3 .acc .acc_2").addClass("on")
        // } else if (src >= 2650 && src <= 2749){
        //     $(".row3 .acc .acc_4").addClass("on")
        // } else if (src >= 2750 && src <= 2849){
        //     $(".row3 .acc .acc_1").addClass("on")
        // } else if (src >= 2850){
        //     $(".row3 .acc .acc_3").addClass("on")
        // }
        console.log(activeIn);
        console.log(activeOut);
        // console.log(activeStart);
        // console.log(src);

    });

    setInterval(function() {
        $(".row4 .runway .track").stop().animate({
            "left" : "-75rem"
        }, 2500, function(){
            $(".row4 .runway .track").css("left",0);
            $(".row4 .runway .track div:first-child").appendTo(".row4 .runway .track");
        })
    },7000)
             

})