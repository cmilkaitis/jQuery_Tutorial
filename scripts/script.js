//Lesson 16 Event Helpers

$("#lead-banner").on("dblclick", function(){
    alert("you double clicked me, how dare you");
    $("#lead-banner").off("dblclick");
});

//provides the same functionality of .dblclick or .click


//Lesson 17 Document Reaady vs Window Load

// will allow the scripts to be placed in the header instead of the closing of the body
/*
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
*/

//Lesson 18 The Event Object in jQuery
$("*").on("click", function(e){
    console.log(e.target); // onclick will log the node info
    console.log("The event type is: " + e.type); // will also log the type of element
    console.log("X co-ordinate of the event is: " + e.pageX); // will also log the mouse position on the X coordinate plane
    console.log("Y co-ordinate of the event is: " + e.pageY); // will also log the mouse position on the Y coordinate plane
    e.stopPropagation(); //stops this even from bubbling up to the parents of the clicked target
});


