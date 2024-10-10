$(document).ready(function () {
    function getRatio(target, h_ratio) { // target은 요소, h_ratio은 높이 비율값
        elem = $("." + target);
        elem_height = elem.width() * h_ratio;
        elem.height(elem_height);
    }
    /* 초기셋팅 */
    getRatio("video_1", 0.563);    
    /* 윈도우 사이즈 변경(320, 640) */
    $(window).resize(function () {
        getRatio("video_2", 0.563);       
    });   
});
