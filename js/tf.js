/**
 * tabs
 */
$(function (param) {  
    function tabs(tabTitle,tab_content,event){
        var index=$(tabTitle).children(".hover").index()
        $(tab_content).children().eq(index).show().siblings().hide();
        
        $(tabTitle).children().bind(event,function(){
            var index=$(this).index();
            $(this).addClass("hover").siblings().removeClass("hover"); 
            $(tab_content).children().eq(index).show().siblings().hide();
            return false;
        });
    }
    function tabsURL(tabsURLClass){
    var title1Tab=$(tabsURLClass).find("dd")
    title1Tab.hover(function(){
        var URL=$(this).find("a").attr("href")
        $(this).parent().siblings("div").find("a").attr("href",URL)
    })
    }
    //图片等比缩 
    function scaleImg() {
    // $('.scaleBox img').jqthumb({
    //     width: $('.scaleBox').outerWidth(),
    //     height: $('.scaleBox').outerHeight(),
    //     after: function (imgObj) {
    //         imgObj.css('opacity', 1).animate({
    //             opacity: 1
    //         }, 1000);
    //     }
    // });
    }
    /*选择框*/
    function selected(selectDiv){
    $(selectDiv).find("em").click(function(){
        $(this).siblings().slideDown();
        $(this).siblings().find("a").click(function(){
            var selectText=$(this).text()
            $(this).parent().siblings("em").text(selectText)
            $(this).parent().siblings("input").attr("value",selectText)
            $(this).parent().css("display","none")
        })
    })
    $(selectDiv).hover(function(){},function(){
        $(this).find("div").slideUp();
    })	
    }
    /*
    *字体大小
    */
    $(function(){
    var fontSize=$(".articleTime span")
    var articleBox=$(".articleBox")
    fontSize.click(function(){
        $(this).addClass("hover").siblings().removeClass("hover")
        var fontHtml=$(this).html();
        if(fontHtml=="小")
        {
            articleBox.css({"font-size":"12px"})
        }
        else if((fontHtml=="中"))
        {
            articleBox.css({"font-size":"14px"})
        }
        else if((fontHtml=="大"))
        {
            articleBox.css({"font-size":"18px"})
        }
    })
    })
    //wow 同一行 元素延迟加载
    function wowDelay(box,row,delayTime){
    $(box).children().each(function(index){
        for(var i = 0;i<row;i++){
            if(index%row==i){
                $(this).attr("data-wow-delay",i*delayTime+'s');
            };
        };
    });
    };
    function wowDelay1(box,row,delayTime){
    $(box).children().each(function(index){
        for(var i = 0;i<row;i++){
            if(index%row==i){
                $(this).attr("style",'animation-delay:'+ i*delayTime+'s');
            };
        };
    });
    };
    $(document).ready(function(){
    //wow  动画
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
    scaleImg();
    wowDelay(".ipcBsnList .swiper-wrapper",4,0.3);
    wowDelay(".ipcLdrList .swiper-wrapper",5,0.3);
    wowDelay(".leader .swiper-wrapper",6,0.3);
    wowDelay(".bioDept .swiper-wrapper",4,0.3);
    wowDelay(".ipcEsnList",4,0.3);
    wowDelay(".bioBox1List .slick-track",5,0.3);
    wowDelay(".cteCmt .slick-track",3,0.3);
    wowDelay(".bioCnt",2,0.3);

    wowDelay1(".bisList1",6,0.2);

    //右上角二级导航，点击本页上下滑动
    $(".subMenu dd a").click(function(){
        $(".subMenu dd").removeClass("hover")
        $(this).parent().addClass("hover")
    })
    /*锚点动画*/
    $('a[href*=#],area[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({
                scrollTop: targetOffset
                },
                1000);
            return false;
        }
    }
    });

    });
    // $(document).scroll(function () {

    // 	if ($("html,body").scrollTop()>0) {
    // 		console.log($("html,body").scrollTop())
    // 		$(".viewShare").addClass("fixed");
    // 	}else{
    // 		$(".viewShare").removeClass("fixed");
    // 	}
    // });
})