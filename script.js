// script.js
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Ajustar el desplazamiento
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario normal
    
    // Obtener los datos del formulario
    let formData = new FormData(this);
    
    // Enviar el formulario usando AJAX
    fetch('https://formspree.io/f/xanywbga', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            // Mostrar mensaje de éxito
            document.getElementById('success-message').style.display = 'block';
            // Limpiar el formulario después de enviar
            document.getElementById('contact-form').reset();
        } else {
            // Mostrar mensaje de error si algo sale mal
            alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
        }
    }).catch(function(error) {
        alert('Hubo un problema con la conexión. Inténtalo más tarde.');
    });
});
// Seleccionar elementos del carrusel
const proyectosGrid = document.querySelector('.proyectos-grid');
const proyectos = document.querySelectorAll('.proyecto');

// Variables de control del carrusel
let currentIndex = 0;
const totalProyectos = proyectos.length;

// Función para cambiar a la siguiente imagen
function nextProyecto() {
    // Calcular el siguiente índice
    currentIndex = (currentIndex + 1) % totalProyectos;
    
    // Aplicar la transformación para mostrar el siguiente proyecto
    proyectosGrid.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Establecer intervalo para que cambie cada 3 segundos
setInterval(nextProyecto, 3000);
