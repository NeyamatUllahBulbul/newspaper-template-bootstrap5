let isMegaMenuOpen = false;

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
    isMegaMenuOpen = true;
}
function close_mega_menu(data) {
    document.getElementById(data).style.display = "none";
    document.getElementById(data).style.opacity = "0";
    isMegaMenuOpen = false;
}

function manage_mega_menu (data) {
    if (isMegaMenuOpen) {
        close_mega_menu(data);
    } else {
        open_mega_menu(data);
    }
}

function close_breaking_news () {
    document.getElementById('remove').style.display = "none";
}
