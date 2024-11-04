// Seleccionar la imagen de fondo y los elementos a alternar
const contenido = document.querySelector('.tarjeta'); // Seleccionamos la tarjeta que contiene el marco y la foto
const lugarSection = document.querySelector('#lugar');

// Función para mostrar la sección del lugar
function mostrarLugar() {
  contenido.style.opacity = 0; // Hacer que el contenido desaparezca lentamente
  setTimeout(() => {
      contenido.style.display = 'none'; // Ocultar el contenido de la invitación
      lugarSection.style.display = 'block'; // Mostrar la sección del lugar
      setTimeout(() => {
          lugarSection.style.opacity = 1; // Hacer que aparezca lentamente
      }, 50); // Retraso breve antes de aplicar la opacidad para suavizar la transición
  }, 5000); // Tiempo para que desaparezca completamente
}

// Función para mostrar el contenido de la tarjeta
function mostrarContenido() {
  lugarSection.style.opacity = 0; // Hacer que la sección del lugar desaparezca lentamente
  setTimeout(() => {
      lugarSection.style.display = 'none'; // Asegurarse de que la sección esté oculta
      contenido.style.display = 'block'; // Mostrar el contenido
      setTimeout(() => {
        contenido.style.opacity = 1; // Hacer que aparezca lentamente
      }, 50); // Retraso breve antes de aplicar la opacidad para suavizar la transición
  }, 5000); // Tiempo para que desaparezca completamente
}

// Función para iniciar el ciclo de alternancia
function iniciarCiclo() {
    mostrarLugar(); // Mostrar la sección del lugar después de 4 segundos
    setTimeout(() => {
        mostrarContenido(); // Volver a mostrar el contenido después de otros 4 segundos
    }, 1000); // Tiempo de espera
}

// Llamar a la función al cargar la página
window.onload = () => {
    contenido.style.opacity = 1; // Asegurarnos de que el contenido esté visible al inicio
    lugarSection.style.display = 'none'; // Asegurarse de que la sección del lugar no sea visible al inicio
    setTimeout(iniciarCiclo, 4000); // Iniciar el ciclo después de 4 segundos
};

// Repetir el ciclo indefinidamente
setInterval(() => {
    mostrarLugar();
    setTimeout(() => {
        mostrarContenido();
    }, 4000);
}, 8000); // Cada 8 segundos se repite el ciclo
