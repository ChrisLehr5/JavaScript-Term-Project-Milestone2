var canvas = document.getElementById('canvas');
var b = new Board(canvas);
b.init();

function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}