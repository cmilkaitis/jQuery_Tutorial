//Chaining

$("#contact-methods").css({border: "3px solid red"})
                     .next().css({border: "3px solid green"})
                     .closest("section").css({border: "3px solid blue"});