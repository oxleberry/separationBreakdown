
var screenCount = 5 + 1;

$(document).ready(function() {
    
    // INK BUTTON
    $("button.inkText").on("click", function() {
        var x = $(this).attr("id");
        repeatCheck(x);
        // printOrder(x);

    });
 
    // RESET BUTTON
    $("button.reset").on("click", function() {
        var x = $(this).attr("id");
        reset(x);        
    });

});



// to determine which ORDER placement the selected ink color should be
function nextOrder(next) {
    var pb = peeOrBee(next);
    // var num = sepColor.charAt(1);
    // var test = sepColor;
    for (var i = 1; i < screenCount; i++) {
        if (!$(".order_"+ pb + i).hasClass("slideRT")) {
            var order = ".order_"+ pb + i;
            return order;
        } 
    }
}
// determines if we are in the "p" or "b" section
function peeOrBee(pb) {
    var firstLetter = pb.charAt(0);   
    return firstLetter;
}

var doneArray = [];


// Check to see if the color has already been used
function repeatCheck(sepColor) {
    var num = sepColor.charAt(1); 
    if (doneArray.length == 0){
        doneArray.push(sepColor);  
        console.log("FIRST");  
        printOrder(sepColor); 
        $("button.ink.i" + num).addClass("active");
    }
    else if (doneArray.includes(sepColor)){
        console.log("REPEAT");
        // for (var i = 0; i < doneArray.length; i++) {
        //     if (sepColor == doneArray[i]) {
        //         console.log("REPEAT");
        //         break;
    } 
    else  {
        doneArray.push(sepColor);
        console.log(doneArray);
        printOrder(sepColor);
        $("button.ink.i" + num).addClass("active");
    }

}


// ATTACHES IMAGES to the next order in line and slides the image over to the right
function printOrder(sepColor) {

    var thisOrder = nextOrder(sepColor);

     // • Check to see if the color has already been used
    // var doneArray = [];
    // for (var i = 0; i < doneArray.length; i++) {
    //     if (sepColor == doneArray[i]) {
    //         console.log("REPEAT");
    //         return;
    //     } 
    //     else  {
    //         doneArray.push(sepColor);
    //         console.log(doneArray);
    //     }
    // }

    $(thisOrder).addClass(sepColor);

    // TOGGLING LOGIC
    if ($(thisOrder).hasClass("slideRT")) {
        $(thisOrder).toggleClass("slideRT");
        $(thisOrder).toggleClass("slideLT");
    } 
    else if ($(thisOrder).hasClass("slideLT")) {
        $(thisOrder).toggleClass("slideRT");
        $(thisOrder).toggleClass("slideLT");
    } 
    else {
        $(thisOrder).toggleClass("slideRT");
    }

}

// RESET IMAGES
function reset(section) {

    $("." + section).each(function(){
        if ($(this).hasClass("slideRT")) {
            $(this).toggleClass("slideRT");
            $(this).toggleClass("slideLT");
            delayClearOrder(section);
        }
    });
}

function delayClearOrder(section){ 
    setTimeout(function () { 
        clearOrder(section); 
    }, 1510);
}

function clearOrder(section) {      
    var firstLetter = section.charAt(0);
        // console.log(resetDesign);
        // console.log(firstLetter);  
    $("." + section).each(function(){
        for (var i = 1; i < screenCount; i++) {
            var x = firstLetter + i;
            $(this).removeClass(firstLetter + i); 
            // console.log("p" + i);           
        }
    });
    if ($("button.ink").addClass("active")) {
        $("button.ink").removeClass("active");

    };
    doneArray = [];
    
}

