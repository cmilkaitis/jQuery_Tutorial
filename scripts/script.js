//Lesson 16 Event Helpers

$("#lead-banner").on("dblclick", function(){
    alert("you double clicked me, how dare you");
    $("#lead-banner").off("dblclick");
});

//provides the same functionality of .dblclick or .click


//Lesson 17 Document Reaady vs Window Load

// will allow the scripts to be placed in the header instead of the closing of the body

$("document").on("ready", function(){

});

//shorter version
$("document").ready(function(){

});

//even shorter version
$(function(){

});

//window on load waits for everything has loaded on the page, not just the DOM

$(window).on("load", function(){

});

//shorthand
$(window).load(function() {

});
