//vanilla JS way to get access to an ID
document.getElementById("page-title");

//jQuery way 
$("#page-title"); // returns the ID in a jQuery array Object that has access to the many methods

//set the jQuery selector to a variable then add methods
var heading = $("#page-title");
heading.css({position: "relative"}); // will return the node inside the array but with added style

heading[0] // will return the node but outside of the jQuery Array
