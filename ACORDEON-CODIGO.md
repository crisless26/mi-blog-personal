# 📖 GUÍA DE CÓDIGO - Mi Blog Personal

> Archivo de referencia rápida. Copia y pega los bloques según lo que necesites.

---

## 🏠 PUBLICAR UN POST EN EL INICIO (index.html)

### Estructura básica de un post:

```html
<article class="post-card">
  <h2>Título del Post</h2>
  <span class="fecha">15 de Julio, 2026</span>
  <img src="assets/img/nombre-imagen.jpg" alt="Descripción" class="post-img" />
  <p class="resumen">Resumen corto que se ve siempre.</p>
  <div class="contenido-completo" style="display: none;">
    <p>Contenido completo que se expande al hacer clic en "Leer más".</p>
    <p>Puedes agregar más párrafos aquí.</p>
  </div>
  <div class="post-actions">
    <button class="btn-read" data-post="0">Leer más</button>
    <button class="btn-comments" data-post="0">Comentar</button>
  </div>
  <div class="comentarios-seccion" style="display: none;">
    <h3>Deja tu comentario</h3>
    <form class="form-comentario">
      <input type="text" placeholder="Tu nombre" required />
      <textarea
        placeholder="Escribe tu comentario..."
        rows="4"
        required
      ></textarea>
      <button type="submit" class="btn-enviar">Enviar comentario</button>
    </form>
  </div>
</article>
```

### Instrucciones:

1. Copia el bloque de arriba
2. Pégalo dentro de `<section class="contenedor-posts">` en `index.html`
3. Cambia:
   - `Título del Post` → el título que quieras
   - `15 de Julio, 2026` → la fecha
   - `assets/img/nombre-imagen.jpg` → tu imagen (carpeta assets/img/)
   - `Resumen corto...` → texto corto
   - `Contenido completo...` → texto largo
4. La imagen debe estar en la carpeta `assets/img/`

---

## 🎨 AGREGAR UN DIBUJO A LA GALERÍA (biblioteca.html)

### Estructura de una tarjeta de dibujo:

```html
<div class="dibujo-card">
  <img
    src="assets/img/dibujo19.png"
    alt="Descripción del dibujo"
    loading="lazy"
  />
  <div class="dibujo-info"><span>19</span></div>
</div>
```

### Instrucciones:

1. Copia el bloque
2. Pégalo dentro de `<section class="galeria-grid">` en `biblioteca.html`
3. Cambia:
   - `assets/img/dibujo19.png` → tu imagen
   - `Descripción del dibujo` → texto alternativo
   - `19` → el número que sigue en la galería
4. La imagen se mostrará con hover y se puede ampliar en el modal

### Soporta:

- `.jpg` y `.png`
- El modal de zoom funciona automáticamente
- Las flechas de navegación funcionan automáticamente

---

## 🎬 AGREGAR CONTENIDO MULTIMEDIA (multimedia.html)

La sección de multimedia está pendiente de implementar completamente.
Por ahora puedes agregar tarjetas básicas:

### Estructura de una tarjeta multimedia:

```html
<div class="tech-card">
  <i class="fa-solid fa-image"></i> Descripción del contenido
</div>
```

### Iconos disponibles (Font Awesome):

- `fa-solid fa-image` → imagen
- `fa-solid fa-video` → video
- `fa-solid fa-music` → música/canción
- `fa-solid fa-comment` → pensamiento/texto
- `fa-solid fa-link` → enlace externo

### Ejemplo para agregar una canción:

```html
<div class="tech-card">
  <i class="fa-solid fa-music"></i> Canción: Nombre de la canción - Artista
</div>
```

---

## 📝 AGREGAR INFORMACIÓN EN "SOBRE MÍ" (sobre-mi.html)

### Para cambiar tu foto de perfil:

1. Pon tu imagen en `assets/img/`
2. Abre `sobre-mi.html`
3. Busca esta línea:

```html
<img src="assets/img/imgPerfil.jpg" alt="Foto de Perfil" />
```

4. Cambia `imgPerfil.jpg` por el nombre de tu imagen

### Para cambiar tu descripción:

1. Busca la etiqueta `<p>` dentro de `.info-piloto`
2. Modifica el texto entre las etiquetas `<p>`

### Para agregar un nuevo interés:

1. Busca `<section class="tech-stack">`
2. Agrega una nueva tarjeta:

```html
<div class="tech-card">Nuevo interés</div>
```

---

## 📂 ESTRUCTURA DE ARCHIVOS

```
mi-blog-personal/
│
├── index.html          ← Página principal (posts recientes)
├── biblioteca.html     ← Galería de dibujos
├── multimedia.html     ← Contenido multimedia
├── sobre-mi.html       ← Información personal
│
├── css/
│   └── estilos.css     ← Todos los estilos del sitio
│
├── js/
│   └── main.js         ← Toda la interactividad
│
├── assets/
│   ├── img/            ← Imágenes (posts, galería, perfil)
│   └── video/          ← Videos
│
└── ACORDEON-CODIGO.md  ← Este archivo (guía)
```

---

## 🎨 COLORES DEL SITU (Tema EVA-01)

| Variable              | Color     | Uso                         |
| --------------------- | --------- | --------------------------- |
| `--eva-morado`        | `#2d1b4e` | Fondo de navbar, tarjetas   |
| `--eva-morado-oscuro` | `#160a2b` | Fondo principal             |
| `--eva-verde`         | `#a4ff00` | Acentos, bordes, botones    |
| `--eva-naranja`       | `#ff7b00` | Fechas, enlaces secundarios |
| `--texto-blanco`      | `#e0e0e0` | Texto principal             |

---

## 🖼️ RUTAS DE IMÁGENES

| Ubicación          | Carpeta       | Ejemplo                    |
| ------------------ | ------------- | -------------------------- |
| Posts del inicio   | `assets/img/` | `assets/img/foto-post.jpg` |
| Galería de dibujos | `assets/img/` | `assets/img/dibujo19.png`  |
| Foto de perfil     | `assets/img/` | `assets/img/imgPerfil.jpg` |

**Importante:** Las imágenes van directo en `assets/img/`, NO en subcarpetas.

---

## ⚡ JAVASCRIPT AUTOMÁTICO

Esto ya funciona solo (no necesitas tocar nada):

| Función                | Descripción                              |
| ---------------------- | ---------------------------------------- |
| Modal de galería       | Zoom al clickear dibujo                  |
| Navegación con teclado | ← → para cambiar imagen, Esc para cerrar |
| Contador de imágenes   | Muestra "1 / 18" en el modal             |
| Botón "Leer más"       | Expande/colapsa posts                    |
| Botón "Comentar"       | Muestra/oculta formulario                |
| Envío de comentarios   | Agrega comentario al post                |

---

## 🔄 PASOS PARA PUBLICAR UN NUEVO POST

1. **Prepara la imagen** → guárdala en `assets/img/`
2. **Copia la estructura** → del bloque "PUBLICAR UN POST"
3. **Pega en index.html** → dentro de `.contenedor-posts`
4. **Edita el contenido** → título, fecha, imagen, texto
5. **Sube a GitHub** → commit y push

---

## 📱 NOTA SOBRE RESPONSIVIDAD

El diseño actual es **semi-responsive**. Para móviles pequeños, puede que necesites agregar media queries en `estilos.css`:

```css
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 10px;
  }

  .galeria-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

_Última actualización: Julio 2026_
_Proyecto: mi-blog-personal_
