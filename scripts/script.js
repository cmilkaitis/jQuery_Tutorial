//Wrap and unwrap elements 

/*

$("section").wrap("<div>"); //wraps all sections individually with a div
$("section").unwrap(); // will unwrap anything - doenst need an arguement
$("section").wrapAll("<div>"); //wraps all sections non individually

*/

var wrapper = "<div class ='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function() {
    if (wrapped) {
        $("section").unwrap();
        wrapped = false;
        button.text("Wrap");
    } else {
        $("section").wrapAll(wrapper);
        wrapped = true;
        button.text("Unwrap");
    }

};
