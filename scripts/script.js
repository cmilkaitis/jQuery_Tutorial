//Lesson 16 Event Helpers

$("#lead-banner").on("dblclick", function(){
    alert("you double clicked me, how dare you");
    $("#lead-banner").off("dblclick");
});

//provides the same functionality of .dblclick or .click


