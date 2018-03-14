

$(document).ready(function() {
    
    // INK BUTTON
    $("button.inkText").on("click", function() {
        var x = $(this).attr("id");
        repeatCheck(x);
    });
 
    // RESET BUTTON
    $("button.reset").on("click", reset);

});

// Determines the screencount based of the number of ink buttons 
function buttonCount() {

    var buttonsTotal = document.getElementsByTagName("button").length;
    // total buttons / 2 sections (print & bitmap) - 1 resetbutton
    screenCount = (buttonsTotal / 2) - 1
    // add one because the screen count starts at 1 not 0;
    screenCount += 1;
    return screenCount;
}
var screenCount = buttonCount();


// Check to see if the ink color has already been used, then activates accordingly
var doneArray = [];
function repeatCheck(sepColor) {
 
    var num = sepColor.charAt(1); 
    if (doneArray.length == 0){
        doneArray.push(num);  
        // console.log("FIRST");  
        printOrder(num); 
        $("button.ink.i" + num).addClass("active");
    }
    else if (doneArray.includes(num)){
        // console.log("REPEAT");
    } 
    else  {
        doneArray.push(num);
        // console.log("array = " + doneArray);
        printOrder(num);
        $("button.ink.i" + num).addClass("active");
    }
}

// to determine which ORDER placement the selected ink color should be
function nextOrder() {

    for (var i = 1; i < screenCount; i++) {
        if (!$(".order_p" + i).hasClass("slideRT")) {
            return(i);
        } 
    }
}

// ATTACHES IMAGES to the next order in line and slides both the 
// print and bitmap images over to the right
function printOrder(inkNum) {

    var orderNum = nextOrder();
    // console.log("order " + orderNum);
    // console.log("ink num " + inkNum); 
    $(".order_p" + orderNum).addClass("p" + inkNum);
    $(".order_b" + orderNum).addClass("b" + inkNum);

    // TOGGLING LOGIC
    if ($(".order_p" + orderNum).hasClass("slideLT")) {
        $(".order_p" + orderNum).toggleClass("slideRT");
        $(".order_b" + orderNum).toggleClass("slideRT");
        $(".order_p" + orderNum).toggleClass("slideLT");        
        $(".order_b" + orderNum).toggleClass("slideLT");
    } 
    else {
        $(".order_p" + orderNum).toggleClass("slideRT");
        $(".order_b" + orderNum).toggleClass("slideRT");
    }
}

// RESET IMAGES
function reset() {

    $(".print").each(function(){
        if ($(this).hasClass("slideRT")) {
            $(this).toggleClass("slideRT");
            $(this).toggleClass("slideLT");
        }
    });
    $(".bitmap").each(function(){
        if ($(this).hasClass("slideRT")) {
            $(this).toggleClass("slideRT");
            $(this).toggleClass("slideLT");
        }
    });
    delayClearOrder();
}

function delayClearOrder(){ 

    setTimeout(function () { 
        clearOrder(); 
    }, 1510);
}

function clearOrder() {      

    $(".print").each(function(){
        for (var i = 1; i < screenCount; i++) {
            $(this).removeClass("p" + i);         
        }
    });
    $(".bitmap").each(function(){
        for (var i = 1; i < screenCount; i++) {
            $(this).removeClass("b" + i);           
        }
    });    
    if ($("button.ink").hasClass("active")) {
        $("button.ink").removeClass("active");
    };
    doneArray = [];
    
}

