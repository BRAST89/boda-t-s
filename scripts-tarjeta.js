// Seleccionar la imagen de fondo y los elementos a alternar
const contenido = document.querySelector('.tarjeta'); // Seleccionamos la tarjeta que contiene el marco y la foto
const lugarSection = document.querySelector('#lugar');
const vestuarioSection = document.querySelector('#vestuario');
const eventInfo = document.querySelector('.event-info'); // Selección de la sección de fecha y hora

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const details = this.nextElementSibling; // Obtener el siguiente elemento (event-details)
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block'; // Mostrar detalles
            } else {
                details.style.display = 'none'; // Ocultar detalles
            }
        });
    });
});

// Función para mostrar la sección del lugar
function mostrarLugar() {
    contenido.style.opacity = 0; // Desvanecer el contenido actual
    setTimeout(() => {
        contenido.style.display = 'none'; // Ocultar la tarjeta
        eventInfo.style.display = 'block'; // Mostrar fecha y hora
        lugarSection.style.display = 'block'; // Mostrar la sección del lugar
        setTimeout(() => {
            lugarSection.style.opacity = 1; // Aparecer la sección con transición
        }, 50);
    }, 800); // Tiempo para completar el desvanecimiento
}

// Función para mostrar solo la sección de vestuario sin la fecha y hora
function mostrarVestuario() {
    lugarSection.style.opacity = 0; // Desvanecer la sección del lugar
    setTimeout(() => {
        lugarSection.style.display = 'none'; // Ocultar la sección del lugar
        eventInfo.style.display = 'none'; // Ocultar fecha y hora
        vestuarioSection.style.display = 'block'; // Mostrar la sección de vestuario
        setTimeout(() => {
            vestuarioSection.style.opacity = 1; // Aparecer la sección de vestuario con transición
        }, 50);
    }, 800);
}

// Función para mostrar el contenido de la tarjeta
function mostrarContenido() {
    vestuarioSection.style.opacity = 0; // Desvanecer la sección de vestuario
    setTimeout(() => {
        vestuarioSection.style.display = 'none'; // Asegurarse de que la sección esté oculta
        eventInfo.style.display = 'block'; // Mostrar fecha y hora
        contenido.style.display = 'block'; // Mostrar el contenido
        setTimeout(() => {
            contenido.style.opacity = 1; // Hacer que aparezca lentamente
        }, 50);
    }, 800);
}

// Función para iniciar el ciclo de alternancia
function iniciarCiclo() {
    mostrarLugar(); // Mostrar la sección del lugar
    setTimeout(() => {
        mostrarVestuario(); // Mostrar la sección de vestuario
        setTimeout(() => {
            mostrarContenido(); // Volver a mostrar el contenido
        }, 8000); // Tiempo que se muestra la sección de vestuario
    }, 8000); // Tiempo que se muestra la sección del lugar
}

// Llamar a la función al cargar la página
window.onload = () => {
    contenido.style.opacity = 1; // Asegurarnos de que el contenido esté visible al inicio
    lugarSection.style.display = 'none'; // Ocultar la sección del lugar al inicio
    vestuarioSection.style.display = 'none'; // Ocultar la sección de vestuario al inicio
    eventInfo.style.display = 'block'; // Mostrar fecha y hora al inicio
    setTimeout(iniciarCiclo, 4000); // Iniciar el ciclo después de 4 segundos
};

// Repetir el ciclo indefinidamente
setInterval(() => {
    iniciarCiclo();
}, 32000); // Cada 24 segundos se repite el ciclo completo (8s para cada sección)
