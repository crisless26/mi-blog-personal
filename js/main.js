// --- Lógica para el botón de "Me Gusta" ---
// Esta sección maneja el incremento y animación de un botón de Like si existe en la página actual.
const botonLike = document.querySelector('.btn-like'); // Busca el botón por su clase (puede no estar en todas las páginas)
if (botonLike) {
    const contadorLike = document.getElementById('like-count'); // Elemento que muestra el total de likes
    let numeroDeLikes = 0; // Estado local para contar los likes

    // Registra el evento clic para incrementar los likes y ejecutar una micro-animación
    botonLike.addEventListener('click', () => {
        numeroDeLikes++;
        contadorLike.textContent = numeroDeLikes; // Actualiza el texto en la interfaz
        
        // Efecto visual: Hace un pequeño zoom (escala a 1.1) y vuelve a su tamaño normal tras 100ms
        botonLike.style.transform = 'scale(1.1)';
        setTimeout(() => {
            botonLike.style.transform = 'scale(1)';
        }, 100);
    });
}

// --- Lógica para la Galería de Imágenes (Modal Zoom con Navegación) ---
// Muestra imágenes a pantalla completa, permitiendo navegar entre ellas y descargarlas.
const modal = document.getElementById("modal-zoom");
if (modal) {
    const modalImg = document.getElementById("img-ampliada"); // Imagen que se muestra en el modal
    const cerrarBtn = document.querySelector(".cerrar"); // Botón 'X' para cerrar
    const prevBtn = document.querySelector(".prev"); // Botón flecha izquierda (anterior)
    const nextBtn = document.querySelector(".next"); // Botón flecha derecha (siguiente)
    const descargarBtn = document.getElementById("btn-descargar"); // Botón de descarga
    const galeriaImagenes = document.querySelectorAll('.dibujo-card img'); // Todas las imágenes de la galería
    let imagenActualIndex; // Almacena el índice de la imagen actualmente ampliada

    // Función para abrir el modal y configurar la imagen/descarga activa
    function abrirModal(index) {
        modal.style.display = "flex"; // Corregido: 'flex' activa el alineamiento vertical y horizontal del CSS
        const src = galeriaImagenes[index].src;
        modalImg.src = src; // Carga la imagen seleccionada en el modal
        
        // Si el botón de descarga existe, actualiza su enlace y configura el atributo download
        if (descargarBtn) {
            descargarBtn.href = src;
            // Extrae el nombre del archivo de la URL de la imagen
            const nombreArchivo = src.substring(src.lastIndexOf('/') + 1);
            descargarBtn.setAttribute('download', nombreArchivo);
        }
        imagenActualIndex = index; // Actualiza la posición del índice actual
    }

    // Registra el evento clic a cada imagen de la cuadrícula para abrir el modal en su respectivo índice
    galeriaImagenes.forEach((img, index) => {
        img.addEventListener('click', () => abrirModal(index));
    });

    // Cierra el modal cuando el usuario hace clic en el botón 'X'
    cerrarBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Cierra el modal si el usuario hace clic en la parte oscura del fondo (fuera de la imagen)
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Navegación interactiva: muestra la imagen anterior (vuelve al final si está en la primera)
    prevBtn.addEventListener('click', () => {
        const nuevoIndex = (imagenActualIndex === 0) ? galeriaImagenes.length - 1 : imagenActualIndex - 1;
        abrirModal(nuevoIndex);
    });

    // Navegación interactiva: muestra la imagen siguiente (vuelve al inicio si está en la última)
    nextBtn.addEventListener('click', () => {
        const nuevoIndex = (imagenActualIndex === galeriaImagenes.length - 1) ? 0 : imagenActualIndex + 1;
        abrirModal(nuevoIndex);
    });
}