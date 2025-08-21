# Video Player Module

Módulo creado a partir de la librería [Video.js](https://videojs.com/) para simplificar la integración de un reproductor de video web moderno, avanzado y personalizable. Esta es la **versión 1.0**, diseñada para facilitar su uso en proyectos web con una configuración sencilla e intuitiva. Seguiré mejorando y ampliando el módulo para hacerlo aún más flexible y fácil de integrar.

## Características principales
- **Fácil integración**: Configuración mínima para incorporar un reproductor de video en tu proyecto.
- **Personalizable**: Soporta todas las opciones de configuración de Video.js a través de un objeto `options`.
- **Moderno y responsivo**: Diseñado para funcionar en dispositivos móviles y de escritorio.
- **Extensible**: Preparado para futuras mejoras y nuevas funcionalidades.

## Instalación
1. Instala el módulo usando npm:
   ```bash
   npm install video-player-module
   O clona el repositorio:
   git clone https://github.com/row0902/video-player-module.git
   2. Incluye el módulo en tu proyecto:
   import VideoPlayerModule from 'video-player-module';
   El módulo VideoPlayerModule es una clase que recibe un objeto con dos propiedades:
- videoId: El ID del elemento <video> en tu HTML (por ejemplo, "my-video").
- options: Un objeto con las propiedades de configuración de Video.js (como autoplay, controls, responsive, etc.).

### Ejemplo básico

1. Añade un elemento <video> en tu HTML:
<video id="video1" class="video-js"></video>

import VideoPlayerModule from 'video-player-module';
2. Inicializa el reproductor en tu JavaScript/TypeScript:
const player = new VideoPlayerModule({
  videoId: 'my-video',
  options: {
    autoplay: false,
    controls: true,
    responsive: true
  }
});