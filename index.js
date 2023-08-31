const buttonMenu = document.querySelector(".menu-icon");
const navUl = document.querySelector(".nav-ul");
const navVisible = document.querySelector(".a");

buttonMenu.addEventListener("click", () => {
    navUl.classList.toggle("nav-menu-visible");
    navVisible.classList.toggle("nav-despliegue");
});


const nav = document.querySelector(".a");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                nav.style.backgroundColor = "#132d46";
            } else {
                nav.style.backgroundColor = "transparent";
            }
        });