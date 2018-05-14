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