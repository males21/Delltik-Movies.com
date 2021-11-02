var menuIcon = document.queryselector("menu-icon");
var sidebar = document.queryselector(".sidebar");
var container = document.queryselector(".container");


menuIcon.onclick = function(){
    sidebar .classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}