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
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0; // Controla la imagen actual
const totalSlides = track.children.length; // Número total de imágenes

// Función para mover el carrusel
function moveToSlide(index) {
    const amountToMove = -index * 100; // Mueve en base al 100% del ancho del carrusel
    track.style.transform = `translateX(${amountToMove}%)`;
}

// Evento de clic para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volver al inicio si está en la última imagen
    }
    moveToSlide(currentIndex);
});

// Evento de clic para el botón "Anterior"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Volver al final si está en la primera imagen
    }
    moveToSlide(currentIndex);
});
