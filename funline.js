

$(document).ready(function(){
    $(window).scroll(function(){
        var s= $(window).scrollTop();
        if(s > 300){
            $("nav").css("background","rgb(238, 237, 161)");
        }
    })
}

)