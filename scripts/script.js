//using the next method to select the NEXT element and make changes
$("#contact-methods").next().css({border: "3px solid red"}); //makes changes to the img element under the ul with id of contact-methods

$("#social-nav").prev().css({border: "3px solid red"}); //access the same element but moves UP

$(".banner-title").parents().css({border: "3px solid pink"}); // bubbles up and selects all the parents

$("#contact").find(".facebook").css({border: "3px solid purple"}); //faster than using ("#contact .facebook")

//get socialnav id then get closest parent, a wrapper class
$("#social-nav").closest(".wrapper").css({border: "3px solid orange"});