//Changing Attributes

/* 

.removeAttr() removes completely
.attr() can read or set the attribute

*/


$("contact img").removeAttr("alt");
$("contact img").attr("alt", "location"); // sets with second parameter

console.log($("contact img").attr("alt")); // prints the alt of the img in contact section to the console







