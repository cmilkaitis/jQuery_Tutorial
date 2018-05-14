// Lesson 22 - Sliding Elements
/*
$(".slide-button-up").on("click", function(){
    $("#lead-banner").slideUp();
});

$(".slide-button-down").on("click", function(){
    $("#lead-banner").slideDown(function(){
        alert("animation complete")
    });
});
*/


$(".slide-button-down").on("click", function(){
    $("#lead-banner").slideToggle();
});


//Lesson23 - Fading Animation Example
var allQuotes = $("blockquote");
var currentQuote = 0;

function changeQuote(){
    $(allQuotes[currentQuote]).fadeOut(200, function(){
        if(currentQuote === allQuotes.length - 1) {
            currentQuote = 0;
        } else {
            currentQuote++;
        }
    
        $(allQuotes[currentQuote]).fadeIn(200);
    });
}

var quoteTimer = setInterval(changeQuote, 3000);


//Lesson24 Sliding Animation Example

var items = $("#points-of-sale li");

items.on("click", function(){
    $(this).find("p").slideToggle(500);
})