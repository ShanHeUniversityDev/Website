$(document).ready(function() {
    $('.navA').click(function() {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $(".g-nav2").fadeIn();
            $(".header").addClass("on");
            $("body").addClass("navShow");
        } else {
            $(".g-nav2").fadeOut();
            $(".header").removeClass("on");
            $("body").removeClass("navShow");
        }
    });
    $('.g-nav2').find('li').each(function() {
        var li = $(this);
        if (li.find('.list').length > 0) {
            li.find('h2').addClass('h2');
            li.find('h2').click(function() {
                if ($(window).width() > 1200) return;
                if (li.hasClass('on')) {
                    li.removeClass('on');
                    li.find('.list').hide()
                } else {
                    li.addClass('on');
                    li.find('.list').show()
                }
            })
        }
    });
    // 导航
    function myNav() {
        var _winw = $(window).width();
        if (_winw >= 1200) {
            $('.g-nav li').bind('mouseenter', function() {
                $(this).find('.down').stop().slideDown();
                if ($(this).find('.down').length) {
                    $(this).addClass('on');
                }
            });
            $('.g-nav li').bind('mouseleave', function() {
                $(this).removeClass('on');
                $(this).find('.down').stop().slideUp();
            });
            $('body').removeClass('open');
        } else {

        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
    });

    // 头部
    $(window).scroll(function() {
        var _top = $(window).scrollTop();
        if (_top > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    // 返回顶部
    $(window).scroll(function() {
        var _top = $(window).scrollTop();
        var _h1 = $(".banner").height();
        if (_top > _h1) {
            $('.go-top').fadeIn();
        } else {
            $('.go-top').fadeOut();
        }
    });
    $('.go-top').click(function() {
        $('body,html').animate({
            'scrollTop': 0
        }, 500);
    });

    // 选项卡 鼠标点击切换
    $(".TAB_CLICK li").click(function() {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });
    // 选项卡 鼠标经过切换
    $(".TAB li").mousemove(function() {
        var tab = $(this).parent(".TAB");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
        $(con).eq(on).show().siblings(con).hide();
    });

    // 搜索
    $('.search-btn').click(function() {
        var _id = $(this).attr('href');
        $(this).parents(".pop-lb").fadeOut();
        $(_id).addClass('open');
    });
    $('.pop-bg,.close').click(function() {
        $(this).parents(".g-so").removeClass('open');
    });
    // $(".search-btn").click(function(event) {
    //     $(".g-so").fadeIn();
    // });
    // $('.pop-bg').click(function(){
    //     $(this).parent(".m-pop").removeClass('open');
    // });



    // 链接
    $(".ul-commonly .con").hover(function() {
        $(this).parent().find(".down").stop().slideUp();
        $(this).find(".down").stop().slideDown();
        $(this).parent().find("li").removeClass('on');
        $(this).toggleClass('on');
    }, function() {
        $(this).find(".down").stop().slideUp();
        $(this).removeClass('on');
    });
});