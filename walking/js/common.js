$(function(){
    var winW=$(window).width();
    
    $(window).scroll(function(){
        sct=$(window).scrollTop();
        if(sct >= 100){
            $("#walk_hd").addClass("move");
            $(".logo_wrap span").hide();
        }else{
            $("#walk_hd").removeClass("move");
            $(".logo_wrap span").fadeIn();
        }
        off1=$(".menu").offset().top;
        off2=$(".packag_event").offset().top;
        off3=$(".m_packag_event").offset().top;
        off4=$(".service").offset().top;
        off5=$(".bg_fix").offset().top;
        off6=$(".square").offset().top;
        if(sct>=off1-450){$(".swiper-slide").addClass("active");}
        if(sct>=off2-550){$(".content2").addClass("active");}
        if(sct>=off2-250){$(".content1").addClass("active");}
        if(sct>=off2+100){$(".content4").addClass("active");}
        if(sct>=off2+350){$(".content3").addClass("active");}
        if(sct>=off2+700){$(".content5").addClass("active");}
        if(sct>=off3-500){$(".m_content1, .m_content2, .m_content3").addClass("active");}
        if(sct>=off3){$(".m_content4, .m_content5").addClass("active");}
        if(sct>=off4-500){$(".service_content>div").addClass("active");}
        if(sct>=off5-500){$(".bg_fix_content").addClass("active");}
        if(sct>=off6-500){$(".square_content>ul>li").addClass("active");}
    })
    
    $(".gnb_btn").click(function(){
        $(this).toggleClass("active");
        $(".walk_global_gnb_wrap, .walk_login>a").toggleClass("active");
    })
    
    $(".bxslider").bxSlider({
        mode:"vertical",
        auto:true,
        speed:1200,
        pause:4000,
        autoControls:true,
        touchEnabled:false,
        onSliderLoad:function(){
            $(".content, .content>p").addClass("up");
            $(".swiper_progress_wrap>span").addClass("fill");
            $(".slide1_1").addClass("active1");
        },
        onSlideBefore:function($slideElement, oldIndex, newIndex){
            $(".swiper_progress_wrap>span").removeClass("fill");
            $slideElement.removeClass("active1 active2");
            $(".swiper_pagination_current").text(newIndex+1);
            $(".content, .content>p").removeClass("up");
            $(".swiper_progress_wrap>span").removeClass("fill2");
        },
        onSlideAfter:function($slideElement, oldIndex, newIndex){
            $(".bxslider>div").eq(newIndex+1).children().addClass("up");
            $(".bxslider>div").eq(newIndex+1).find("p").addClass("up");
            $(".swiper_progress_wrap>span").addClass("fill2");
            $slideElement.addClass("active2");
        }
    })
    
    $(".bx-wrapper .bx-controls-auto .bx-stop").click(function(){
        $(this).hide();
        $(".bx-wrapper .bx-controls-auto .bx-start").show().css({"display":"inline-block"});
        $(".swiper_progress_wrap>span").removeClass("fill fill2");
    });
    $(".bx-wrapper .bx-controls-auto .bx-start").click(function(){
        $(this).hide();
        $(".bx-wrapper .bx-controls-auto .bx-stop").show().css({"display":"inline-block"});
        $(".swiper_progress_wrap>span").addClass("fill");
    })
    
    $(".data>a").click(function(){
        $(".calendar_wrap").slideToggle();
        return false;
    })
    $(".data td").click(function(){
        $(".calendar_wrap").slideUp();
    })
    
    var swiper=new Swiper('.swiper-container',{
        slidesPerView:2.4,
        freeMode: true,
        scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      }
    });
    
    $("#walk_ft>a").click(function(){
        $("body, html").stop().animate({"scrollTop":0},800);
    });
    
    $(window).on("load resize", function(){
        if(winW <= 767){
            mobilegnb();
        }
    });
    function mobilegnb(){
        $(".gnb_btn").click(function(){
            $(".depth2").delay(1000).stop().slideUp();
        })
        $(".depth1>a").click(function(){
            $(this).parent(".depth1").siblings().children(".depth2").stop().slideUp();
            $(this).next(".depth2").stop().slideToggle();
        })
    }
})//E