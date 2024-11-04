// Seleccionar la imagen de fondo
const imagenFondo = document.querySelector('.imagen-fondo');

// Mostrar la imagen de fondo inicial
imagenFondo.style.backgroundImage = `url('images/fotos/foto-marco-desktop.png')`; // Imagen de escritorio por defecto

// Cambiar la imagen según el tamaño de la pantalla
function ajustarImagenFondo() {
    if (window.innerWidth >= 1024) {
        imagenFondo.style.backgroundImage = `url('images/fotos/foto-marco-desktop.png')`;
    } else {
        imagenFondo.style.backgroundImage = `url('images/fotos/foto-marco-mobile-large.png')`;
    }
}

// Llamar a la función al cargar y redimensionar la ventana
window.onload = ajustarImagenFondo;
window.onresize = ajustarImagenFondo;



