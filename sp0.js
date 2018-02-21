
var screenCount = 5 + 1;

$(document).ready(function() {
    
    $("button.inkText").on("click", function() {
        var x = $(this).attr("id");
        printOrder(x);        
    });
 
    $("button.pReset").on("click", resetPrint);
 

    // $(".pBefore").on("click", resetPrint);
    // $("button.bReset").on("click", resetPrint);    
    // $("button.bReset").on("click", resetBitmap);    
    // $(".bBefore").on("click", resetBitmap);

});


//MOVES IMAGES FROM LEFT TO RIGHT WHEN CLICKED ON THE INK BUTTON
// function sepBreakDwn(sepColor) {
//     if ($("." + sepColor).hasClass("slideRT")) {
//         $("." + sepColor).toggleClass("slideRT");
//         $("." + sepColor).toggleClass("slideLT");
//     } else if ($("." + sepColor).hasClass("slideLT")) {
//         $("." + sepColor).toggleClass("slideRT");
//         $("." + sepColor).toggleClass("slideLT");
//     } else {
//         $("." + sepColor).toggleClass("slideRT");
//     }
// }


function printOrBitmap(pb) {
    var firstLetter = pb.charAt(0);
    // console.log(firstLetter);     
    return firstLetter;
}
function inkNumber(num) {
    var number = num.charAt(1);
    // console.log(firstLetter);     
    return number;
}

// to determine which ORDER placement the selected color should be
function nextOrder(next) {
    var pb = printOrBitmap(next);
    // var num = sepColor.charAt(1);
    // var test = sepColor;
    for (var i = 1; i < screenCount; i++) {
        if (!$(".order_"+ pb + i).hasClass("slideRT")) {
            var order = ".order_"+ pb + i;
            return order;
        } 
    }
}

// ATTACHES IMAGES to the next order in line and slides the image over to the right
function printOrder(sepColor) {
    // var char = printOrBitmap(sepColor);
    // var number = inkNumber(sepColor); 

    var thisOrder = nextOrder(sepColor);
        // console.log(char); 
        // console.log(number);   
        // console.log(thisOrder);  

        $(thisOrder).addClass(sepColor);

        // TOGGLING LOGIC
        if ($(thisOrder).hasClass("slideRT")) {
            $(thisOrder).toggleClass("slideRT");
            $(thisOrder).toggleClass("slideLT");
        } else if ($(thisOrder).hasClass("slideLT")) {
            $(thisOrder).toggleClass("slideRT");
            $(thisOrder).toggleClass("slideLT");
        } else {
            $(thisOrder).toggleClass("slideRT");
        }

}

// RESET IMAGES
// function resetPrint() {
//     $(".print").each(function(){
//         if ($(this).hasClass("slideRT")) {
//             $(this).toggleClass("slideRT");
//             $(this).toggleClass("slideLT");
//             delayClearOrder()
//         }
//     });
// }

// RESET IMAGES
function resetPrint() {
    $(".print").each(function(){
        if ($(this).hasClass("slideRT")) {
            $(this).toggleClass("slideRT");
            $(this).toggleClass("slideLT");
                    console.log("click");
            delayClearOrder()
        }
    });
}

function delayClearOrder(){ 
    // console.log ("STILL");
    setTimeout(function () { 
        clearOrder(); 
    }, 1510);
}
function clearOrder() {
    $(".print").each(function(){
        for (var i = 1; i < screenCount; i++) {
            $(this).removeClass("p" + i); 
            console.log("p" + i);           
        }
    });
}


// function resetBitmap(){
//     $(".bitmap").each(function(){
//         if ($(this).hasClass("slideRT")) {
//             $(this).toggleClass("slideRT");
//             $(this).toggleClass("slideLT");
//         }
//     });
// }


