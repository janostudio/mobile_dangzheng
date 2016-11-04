$(document).ready(function(){
    //根据移动设备的高度，设置显示高度
    var brower_height = $(window).height();
    if($(".la-tabs").length==1){
        $(".la-content").css("height",brower_height-60);
    }else{
        $(".la-content").css("height",brower_height);
    }


});