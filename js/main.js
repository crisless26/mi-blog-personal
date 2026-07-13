// --- Lógica para secciones de intereses (Sobre Mí) ---
document.querySelectorAll('.btn-interes').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.interes-card');
        const contenido = card.querySelector('.interes-contenido');
        
        if (contenido.style.display === 'none') {
            contenido.style.display = 'block';
            btn.style.background = 'var(--eva-verde)';
            btn.style.color = 'var(--eva-morado-oscuro)';
        } else {
            contenido.style.display = 'none';
            btn.style.background = '';
            btn.style.color = '';
        }
    });
});

// --- Lógica para expandir posts y mostrar comentarios ---
document.querySelectorAll('.btn-read').forEach(btn => {
    btn.addEventListener('click', () => {
        const post = btn.closest('.post-card');
        const contenido = post.querySelector('.contenido-completo');
        const resumen = post.querySelector('.resumen');
        
        if (contenido.style.display === 'none') {
            contenido.style.display = 'block';
            resumen.style.display = 'none';
            btn.textContent = 'Leer menos';
        } else {
            contenido.style.display = 'none';
            resumen.style.display = 'block';
            btn.textContent = 'Leer más';
        }
    });
});

document.querySelectorAll('.btn-comments').forEach(btn => {
    btn.addEventListener('click', () => {
        const post = btn.closest('.post-card');
        const seccion = post.querySelector('.comentarios-seccion');
        
        if (seccion.style.display === 'none') {
            seccion.style.display = 'block';
            btn.textContent = 'Ocultar comentarios';
        } else {
            seccion.style.display = 'none';
            btn.textContent = 'Comentar';
        }
    });
});

document.querySelectorAll('.form-comentario').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        const nombre = inputs[0].value;
        const comentario = inputs[1].value;
        
        const nuevoComentario = document.createElement('div');
        nuevoComentario.className = 'comentario-item';
        nuevoComentario.innerHTML = `<strong>${nombre}</strong><p>${comentario}</p>`;
        form.parentElement.appendChild(nuevoComentario);
        form.reset();
    });
});

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
const modal = document.getElementById("modal-zoom");
if (modal) {
    const modalImg = document.getElementById("img-ampliada");
    const cerrarBtn = document.querySelector(".cerrar");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const descargarBtn = document.getElementById("btn-descargar");
    const contadorModal = document.getElementById("contador-modal");
    const galeriaImagenes = document.querySelectorAll('.dibujo-card img');
    let imagenActualIndex;

    function abrirModal(index) {
        modal.classList.add('active');
        const src = galeriaImagenes[index].src;
        modalImg.src = src;
        
        if (descargarBtn) {
            descargarBtn.href = src;
            const nombreArchivo = src.substring(src.lastIndexOf('/') + 1);
            descargarBtn.setAttribute('download', nombreArchivo);
        }

        imagenActualIndex = index;
        contadorModal.textContent = `${index + 1} / ${galeriaImagenes.length}`;
    }

    function cerrarModal() {
        modal.classList.remove('active');
    }

    galeriaImagenes.forEach((img, index) => {
        img.addEventListener('click', () => abrirModal(index));
    });

    cerrarBtn.addEventListener('click', cerrarModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) cerrarModal();
    });

    prevBtn.addEventListener('click', () => {
        const nuevoIndex = (imagenActualIndex === 0) ? galeriaImagenes.length - 1 : imagenActualIndex - 1;
        abrirModal(nuevoIndex);
    });

    nextBtn.addEventListener('click', () => {
        const nuevoIndex = (imagenActualIndex === galeriaImagenes.length - 1) ? 0 : imagenActualIndex + 1;
        abrirModal(nuevoIndex);
    });

    // Navegación por teclado
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') cerrarModal();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });
}

// --- Lógica para Multimedia (Filtrado y Modal) ---
const modalMedia = document.getElementById('modal-media');
if (modalMedia) {
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const mediaCards = document.querySelectorAll('.media-card');
    const cerrarMediaBtn = document.querySelector('.cerrar-media');

    // Filtrado por tipo
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filtro = btn.dataset.filtro;

            filtroBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            mediaCards.forEach(card => {
                if (filtro === 'todos' || card.dataset.tipo === filtro) {
                    card.classList.remove('oculto');
                } else {
                    card.classList.add('oculto');
                }
            });
        });
    });

    // Modal de vista completa
    document.querySelectorAll('.btn-ver-mas').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.media-card');
            const tipo = card.dataset.tipo;
            const fecha = card.querySelector('.media-fecha').textContent;
            const descripcion = card.querySelector('.media-descripcion').textContent;
            const icono = card.querySelector('.media-header i').className;
            const tipoTexto = card.querySelector('.media-tipo').textContent;

            // Configurar tipo e icono
            document.querySelector('#modal-media-icon').className = icono;
            document.getElementById('modal-media-tipo-text').textContent = tipoTexto;
            document.getElementById('modal-media-fecha').textContent = fecha;
            document.getElementById('modal-media-descripcion').textContent = descripcion;

            // Ocultar todos los tipos
            document.getElementById('modal-media-imagen').style.display = 'none';
            document.getElementById('modal-media-video').style.display = 'none';
            document.getElementById('modal-media-audio').style.display = 'none';
            document.getElementById('modal-media-texto').style.display = 'none';

            // Mostrar según tipo
            if (tipo === 'imagen') {
                const img = card.querySelector('.media-img');
                document.getElementById('modal-media-img').src = img.src;
                document.getElementById('modal-media-img').alt = img.alt;
                document.getElementById('modal-media-imagen').style.display = 'block';
            } else if (tipo === 'video') {
                document.getElementById('modal-media-video').style.display = 'block';
            } else if (tipo === 'audio') {
                document.getElementById('modal-media-audio').style.display = 'block';
            } else if (tipo === 'texto') {
                const texto = card.querySelector('.media-preview').textContent;
                document.getElementById('modal-media-texto-content').textContent = texto;
                document.getElementById('modal-media-texto').style.display = 'block';
            }

            modalMedia.classList.add('active');
        });
    });

    // Cerrar modal
    cerrarMediaBtn.addEventListener('click', () => {
        modalMedia.classList.remove('active');
    });

    modalMedia.addEventListener('click', (e) => {
        if (e.target === modalMedia) {
            modalMedia.classList.remove('active');
        }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalMedia.classList.contains('active')) {
            modalMedia.classList.remove('active');
        }
    });
}