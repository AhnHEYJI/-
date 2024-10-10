$(document).ready(function () {
    /* main.js */    
    $(".pro_1 .more button:eq(0)").click(function () {
        $(".pro_1 .p_vis a:last").insertBefore(".pro_1 .p_vis a:first");
    });
    $(".pro_1 .more button:eq(1)").click(function () {
        $(".pro_1 .p_vis a:first").insertAfter(".pro_1 .p_vis a:last");
    });
    $(".pro_2 .more button:eq(0)").click(function () {
        $(".pro_2 .p_vis a:last").insertBefore(".pro_2 .p_vis a:first");
    });
    $(".pro_2 .more button:eq(1)").click(function () {
        $(".pro_2 .p_vis a:first").insertAfter(".pro_2 .p_vis a:last");
    });
});
/*컨텐츠메뉴*/
$(document).ready(function() {
            goNavi(3);
        });
