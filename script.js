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
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentSlide = 0; // Control del índice actual

// Función para mover el carrusel
function updateCarouselPosition() {
    const slideWidth = slides[0].getBoundingClientRect().width; // Obtiene el ancho de cada slide
    const newPosition = -currentSlide * slideWidth;
    track.style.transform = `translateX(${newPosition}px)`; // Mueve el carrusel
}

// Botón siguiente
nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Vuelve al inicio si está en el último slide
    }
    updateCarouselPosition();
});

// Botón anterior
prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1; // Va al último slide si está en el primero
    }
    updateCarouselPosition();
});

// Ajuste de tamaño si la ventana cambia
