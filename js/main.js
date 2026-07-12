// 1. Seleccionamos los elementos del HTML que vamos a usar
const botonLike = document.querySelector('.btn-like');
const contadorLike = document.getElementById('like-count');

// 2. Creamos una variable para guardar el número de clics
let numeroDeLikes = 0;

// 3. Escuchamos cuando el usuario hace clic en el botón
botonLike.addEventListener('click', () => {
    // Incrementamos el contador en 1
    numeroDeLikes++;
    
    // Modificamos el texto del HTML para mostrar el nuevo número
    contadorLike.textContent = numeroDeLikes;
    
    // Efecto visual opcional: un pequeño cambio de escala al presionar
    botonLike.style.transform = 'scale(1.1)';
    setTimeout(() => {
        botonLike.style.transform = 'scale(1)';
    }, 100);
});
// Obtener elementos
const modal = document.getElementById("modal-zoom");
const modalImg = document.getElementById("img-ampliada");
const cerrarBtn = document.querySelector(".cerrar"); // Botón para cerrar
const prevBtn = document.querySelector(".prev"); // Botón para imagen anterior
const nextBtn = document.querySelector(".next"); // Botón para imagen siguiente

// Seleccionar todas las imágenes de la galería
const galeriaImagenes = document.querySelectorAll('.dibujo-card img');
let imagenActualIndex;

// Función para abrir el modal con una imagen específica
function abrirModal(index) {
    modal.style.display = "block";
    modalImg.src = galeriaImagenes[index].src;
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
    // Si es la primera imagen, vamos a la última. Si no, vamos a la anterior.
    const nuevoIndex = (imagenActualIndex === 0) ? galeriaImagenes.length - 1 : imagenActualIndex - 1;
    abrirModal(nuevoIndex);
});

nextBtn.addEventListener('click', () => {
    // Si es la última imagen, vamos a la primera. Si no, vamos a la siguiente.
    const nuevoIndex = (imagenActualIndex === galeriaImagenes.length - 1) ? 0 : imagenActualIndex + 1;
    abrirModal(nuevoIndex);
});