<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Tu correo donde se enviará el mensaje
    $destinatario = "tucorreo@dominio.com"; // Cambia esto con tu correo
    $asunto = "Nuevo mensaje de contacto de $nombre";

    // Estructura del mensaje
    $contenido = "Has recibido un nuevo mensaje de contacto:\n\n";
    $contenido .= "Nombre: $nombre\n";
    $contenido .= "Correo: $email\n";
    $contenido .= "Mensaje: $mensaje\n";

    // Encabezados adicionales
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Enviar correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.";
    } else {
        echo "Lo sentimos, hubo un error al enviar tu mensaje. Intenta de nuevo más tarde.";
    }
}
?>