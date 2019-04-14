let submenu = document.querySelectorAll(".topNavBar .submenu")

for (let i = 0; i < submenu.length; i++) {
    submenu[i].parentElement.onmouseover = function (e) {
        submenu[i].classList.add("active");
    }
    submenu[i].parentElement.onmouseout = function (e) {
        submenu[i].classList.remove("active");
    }
}