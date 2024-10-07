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
const proyectos = document.querySelectorAll('.proyecto');
let proyectoActual = 0;

document.getElementById('flecha-prev').addEventListener('click', () => {
    // Ocultar el proyecto actual
    proyectos[proyectoActual].classList.remove('activo');

    // Decrementar el índice
    proyectoActual = (proyectoActual === 0) ? proyectos.length - 1 : proyectoActual - 1;

    // Mostrar el nuevo proyecto
    proyectos[proyectoActual].classList.add('activo');
});

document.getElementById('flecha-next').addEventListener('click', () => {
    // Ocultar el proyecto actual
    proyectos[proyectoActual].classList.remove('activo');

    // Incrementar el índice
    proyectoActual = (proyectoActual === proyectos.length - 1) ? 0 : proyectoActual + 1;

    // Mostrar el nuevo proyecto
    proyectos[proyectoActual].classList.add('activo');
});
