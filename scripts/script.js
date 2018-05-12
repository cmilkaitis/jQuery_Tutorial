//Lesson 19 Animations in jQuery

$("section > h2").on("click", function(){
    $(this).animate({"width" : "500px", "height" : "100px"}, 1000, "linear", function(){

        alert("Animation complete");
    });
    //can only animate items with numerical values

});