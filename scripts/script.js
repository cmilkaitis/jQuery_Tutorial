//Lesson 13 CSS with jQuery

//this style is fine for 1 or 2 value changes but not more many
$("#social-nav").css("top", "-200px").css("left", "100px");



$("#social-nav").css({
    "top" : "-400px",
    "left" : "150px",
    "opacity" : "0.5",
    "border-top" : "4px solid red"
});



//Lesson14 Adding & Removing Classes

$("header .wrapper").removeClass("wrapper");
$("header > div").addClass("wrapper"); //get the header get the direct child of that header

//when button is clicked, show items
var button = $("#lead-banner a");
//unwrap from jQuery with bracket notation
button[0].onclick = function() {
    $("#points-of-sale").toggleClass("open");
    return false; //turns off default behavior of the anchor tag
};
