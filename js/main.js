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