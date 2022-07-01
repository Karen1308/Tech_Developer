const toggleBttn = document.getElementById('toggle-bttn')
const navBarLink = document.getElementById('nav-bar-link')
const navSlide = document.getElementById('nav-slide')
const slide = document.getElementsByClassName("opinion");
const dots = document.getElementsByClassName("circle");
var slideIndex = 1;

toggleBttn.addEventListener('click', () => {
    navBarLink.classList.toggle('active')
});

// Funciones para el slide
// Crear navegacion con los ciculos
function navigationDots(){
    for (i = 1; i <= slide.length; i ++){
        elementBttn = `<button class="circle" onclick="slideNumber(${i})"></button>`;
        navSlide.innerHTML += elementBttn;
    }
};

function slideNumber(number){
    showSlide(slideIndex = number);
};

// Mostrando slide seleccionado en los botones
function showSlide(number){
    if (number > slide.length) {
        slideIndex = 1
    };

    if (number < 1) {
        slideIndex = slide.length;
    };

    // Se ocultan todos los slide
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    };

    // Se muestra el slide del boton seleccionado
    slide[slideIndex - 1].style.display = "block";
};

// Llamo a la funciona navigation para los puntos
navigationDots();