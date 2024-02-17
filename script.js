var a=0;
function swapImage(){var element = document.getElementById("lightbulb");
 if (a==0){element.setAttribute("data", "./SVG/lightbulbon.svg");a=1;}
 else{var element = document.getElementById("lightbulb");a=0;element.setAttribute("data", "./SVG/lightbulboff.svg");}}
