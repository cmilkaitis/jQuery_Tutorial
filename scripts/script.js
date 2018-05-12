//Lesson 19 Animations in jQuery
/*
$("section > h2").on("click", function(){
    $(this).animate({"width" : "500px", "height" : "100px"}, 1000, "linear", function(){

        alert("Animation complete");
    });
    //can only animate items with numerical values

});
*/


//Lesson 20 Fading Elements IN & Out

/*
$("section > h2").on("click", function(){

    $(this).animate({"opacity": "0.5"});

});


//using jQuery methods
$("section > h2").on("click", function(){

    $(this).fadeOut(2000).fadeIn(500);

});



$("section > h2").on("click", function(){

    $(this).fadeTo(200, 0.2)
           .fadeTo(200, 0.8)
           .fadeTo(200, 0.2)
           .fadeTo(200, 0.8)
           .fadeTo(200, 0.2)
           .fadeTo(200, 0.8)
           .fadeTo(200, 0.2)
           .fadeTo(200, 0.8);

});

*/

//Lesson 21 Show Hide and Toggle
/*
$("section > h2").on("click", function(){

    $(this).hide(1000).show(1000);

});
*/

$("img[alt=map]").on("click", function(){

    $("section > h2").toggle(1000);

});




