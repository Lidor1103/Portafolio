const navUl = document.querySelector(".nav-ul");
const menuIcon = document.querySelector(".nav-despliegue");

menuIcon.addEventListener("click",() => {
    navUl.classList.toggle("nav-menu-visible");
    menuIcon.classList.toggle("active");
});

const btnDash = document.querySelector(".contenedor-dash");
const segundaVista = document.querySelector(".segunda-vista");
btnDash.addEventListener("click",()=>{
    if(segundaVista)
    segundaVista.scrollIntoView();
});



const btnMode = document.querySelector(".mode");
const logoImage = document.querySelector(".logo img");

btnMode.addEventListener("click", () => {
    document.body.classList.toggle("modonoche");
    btnMode.classList.toggle("nocheactivado");

    // Verificar si el modo noche está activado o desactivado y cambiar el src en consecuencia
    if (document.body.classList.contains("modonoche")) {
        logoImage.src = "img/logo.png";
    } else {
        logoImage.src = "img/logo-negativo.png";
    }
});

