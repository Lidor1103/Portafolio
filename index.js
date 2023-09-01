const buttonMenu = document.querySelector(".menu-icon");
const navUl = document.querySelector(".nav-ul");
const navVisible = document.querySelector(".a");


buttonMenu.addEventListener("click", () => {
    navUl.classList.toggle("nav-menu-visible");
    navVisible.classList.toggle("nav-despliegue");
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navUl = document.querySelector(".nav-ul");

    menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");
        navUl.classList.toggle("nav-menu-visible");
    });

    const buttonMenu = document.querySelector(".conteiner-menu-icon");

    buttonMenu.addEventListener("click", () => {
        navUl.classList.toggle("nav-menu-visible");
    });
});


const nav = document.querySelector(".a");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = "#132d46";
    } else {
        nav.style.backgroundColor = "transparent";
    }
});



const btnMode = document.querySelector(".mode");
const logoImage = document.querySelector(".logo img");

btnMode.addEventListener("click", () => {
    document.body.classList.toggle("modonoche");
    btnMode.classList.toggle("nocheactivo");

    // Verificar si el modo noche está activado o desactivado y cambiar el src en consecuencia
    if (document.body.classList.contains("modonoche")) {
        logoImage.src = "img/logo.png";
    } else {
        logoImage.src = "img/logo-negativo.png";
    }
});
