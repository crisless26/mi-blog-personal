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
const cerrarBtn = document.querySelector(".cerrar");

// Seleccionar todas las imágenes de la galería
document.querySelectorAll('.dibujo-card img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Cerrar al hacer clic en la X
cerrarBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar al hacer clic fuera de la imagen
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}