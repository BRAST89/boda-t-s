// Seleccionar todas las secciones (slides)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Función para cambiar las secciones
function changeSlide() {
  // Eliminar la clase 'active' de todas las secciones
  slides.forEach(slide => slide.classList.remove('active'));

  // Agregar la clase 'active' a la sección actual
  slides[currentSlide].classList.add('active');

  // Cambiar al siguiente slide o reiniciar
  currentSlide = (currentSlide + 1) % slides.length;
}

// Iniciar el cambio de secciones cada 3 segundos
setInterval(changeSlide, 3000);
