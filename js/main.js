// --- Lógica para el botón de "Me Gusta" ---
// Nos aseguramos de que este código solo se ejecute si el botón existe en la página actual.
const botonLike = document.querySelector('.btn-like'); // Este botón podría no existir en todas las páginas
if (botonLike) {
    const contadorLike = document.getElementById('like-count');
    let numeroDeLikes = 0;

    botonLike.addEventListener('click', () => {
        numeroDeLikes++;
        contadorLike.textContent = numeroDeLikes;
        
        // Efecto visual opcional
        botonLike.style.transform = 'scale(1.1)';
        setTimeout(() => {
            botonLike.style.transform = 'scale(1)';
        }, 100);
    });
}

// --- Lógica para la Galería de Imágenes (Modal) ---
// Nos aseguramos de que este código solo se ejecute si la galería existe.
const modal = document.getElementById("modal-zoom");
if (modal) {
    const modalImg = document.getElementById("img-ampliada");
    const cerrarBtn = document.querySelector(".cerrar");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const descargarBtn = document.getElementById("btn-descargar");
    const galeriaImagenes = document.querySelectorAll('.dibujo-card img');
    let imagenActualIndex;

    // Función para abrir el modal con una imagen específica
    function abrirModal(index) {
        modal.style.display = "block";
        const src = galeriaImagenes[index].src;
        modalImg.src = src;
        if (descargarBtn) {
            descargarBtn.href = src;
            // Configurar el nombre del archivo para la descarga
            const nombreArchivo = src.substring(src.lastIndexOf('/') + 1);
            descargarBtn.setAttribute('download', nombreArchivo);
        }
        imagenActualIndex = index;
    }

    // Asignar el evento de clic a cada imagen de la galería
    galeriaImagenes.forEach((img, index) => {
        img.addEventListener('click', () => abrirModal(index));
    });

    // Cerrar al hacer clic en la X
    cerrarBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Cerrar al hacer clic fuera de la imagen
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Navegación con flechas
    prevBtn.addEventListener('click', () => {
        const nuevoIndex = (imagenActualIndex === 0) ? galeriaImagenes.length - 1 : imagenActualIndex - 1;
        abrirModal(nuevoIndex);
    });

    nextBtn.addEventListener('click', () => {
        const nuevoIndex = (imagenActualIndex === galeriaImagenes.length - 1) ? 0 : imagenActualIndex + 1;
        abrirModal(nuevoIndex);
    });
}