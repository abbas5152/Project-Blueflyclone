window.onscroll = function() {myFunction()};
    
var header = document.getElementById("tabs");

var stayNav = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > stayNav) {
        header.classList.add("stayNav");
    }
    else {
        header.classList.remove("stayNav");}
};