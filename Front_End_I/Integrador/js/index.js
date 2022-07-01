const toggleBttn = document.getElementById('toggle-bttn')
const navBarLink = document.getElementById('nav-bar-link')
const navSlide = document.getElementById('nav-slide')
const slide = document.getElementsByClassName("opinion");
const dots = document.getElementsByClassName("dot");
var slideIndex = 1;

toggleBttn.addEventListener('click', () => {
    navBarLink.classList.toggle('active')
});

// Funciones para el slide
// Crear navegacion con los ciculos
function navigationDots() {
    for (i = 1; i <= slide.length; i++) {
        elementBttn = `<button class="dot" id="dot${i}" onclick="slideNumber(${i})"></button>`;
        navSlide.innerHTML += elementBttn;

        if (i ==1){
            dot1 = document.getElementById('dot'+i);
            dot1.classList.toggle('dot-active');
        }
    };
};

function slideNumber(number) {
    showSlide(slideIndex = number);
};

// Mostrando slide seleccionado en los botones
function showSlide(number) {
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

    // Elimino el que esta activo
    dotActive = document.getElementsByClassName('dot-active')[0];
    dotActive.classList.toggle('dot-active');

    // Activamos el seleccionado
    bttn = document.getElementById('dot' + number);
    bttn.classList.toggle('dot-active');
};

// Llamo a la funciona navigation para los puntos
navigationDots();