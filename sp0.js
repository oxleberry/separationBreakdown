
$(document).ready(function() {
    
    $("button.ink").on("click", function() {
        var x = $(this).attr("id");
        sepBreakDwn(x);
    });
    
    $("button.pReset").on("click", resetPrint);
    $(".pBefore").on("click", resetPrint);
    $("button.bReset").on("click", resetBitmap);    
    $(".bBefore").on("click", resetBitmap);

});

//MOVES IMAGES FROM LEFT TO RIGHT WHEN CLICKED ON THE INK BUTTON
function sepBreakDwn(sepColor) {
    if ($("." + sepColor).hasClass("slideRT")) {
        $("." + sepColor).toggleClass("slideRT");
        $("." + sepColor).toggleClass("slideLT");
    } else if ($("." + sepColor).hasClass("slideLT")) {
        $("." + sepColor).toggleClass("slideRT");
        $("." + sepColor).toggleClass("slideLT");
    } else {
        $("." + sepColor).toggleClass("slideRT");
    }
}

// RESET IMAGES
function resetPrint() {
    $(".print").each(function() {
        if ($(this).hasClass("slideRT")) {
            $(this).toggleClass("slideRT");
            $(this).toggleClass("slideLT");
        }
    });
}
function resetBitmap(){
    $(".bitmap").each(function(){
        if ($(this).hasClass("slideRT")) {
            $(this).toggleClass("slideRT");
            $(this).toggleClass("slideLT");
        }
    });
}


