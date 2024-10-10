function goNavi(loc) {
    var w = $("#gnb li").width();
    $("<span></span>").appendTo("#gnb");
    $("#gnb li").on("mouseenter focusin", function () {
        var index = $(this).index();
        $(this).find("a").addClass("on");
        $(this).siblings().find("a").removeClass("on");
        $("#gnb span").stop().animate({
            left: index * w
        }, "fast", "swing");
    }).on("mouseleave", function () {
        $("#gnb li").eq(loc).trigger("mouseenter");
    });    
    $("#gnb li").eq(loc).trigger("mouseenter");
}
