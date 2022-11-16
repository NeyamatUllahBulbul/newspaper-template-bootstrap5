function openNav() {
    console.log(window.innerWidth)
    document.getElementById("mobileMenu").style.width = `290px`;
    document.getElementById("navBackdrop").style.display = "block";
    document.getElementById("navbarSideCollapse").style.display = "none";
}

function closeNav() {
    document.getElementById("mobileMenu").style.width = "0";
    document.getElementById("navBackdrop").style.display = "none";
    document.getElementById("navbarSideCollapse").style.display = "block";
}

function open_mega_menu(data) {
    document.getElementById(data).style.display = "flex";
    document.getElementById(data).style.opacity = "1";
}
function close_mega_menu(data) {
    document.getElementById(data).style.visibility = "hidden";
    document.getElementById(data).style.opacity = "0";
    document.getElementById("overlay").style.display = "none";
}
