import videojs from "video.js";
import "videojs-youtube";
export class VideoPlayer {
    player = null;
    videoId;
    options;
    constructor({ videoId, options = {} }) {
        this.videoId = videoId;
        this.options = options;
        const defaultOptions = {
            controls: true,
            autoplay: false,
            loop: false,
            playbackRates: [0.5, 1, 1.5, 2],
            techOrder: ["youtube", "html5"],
            controlBar: {
                volumePanel: { inline: false },
            },
            preload: "auto",
            fluid: true,
            responsive: true,
        };
        this.options = {
            ...defaultOptions,
            ...options,
            sources: options.sources,
        };
        this.initializePlayer();
    }
    initializePlayer() {
        const videoElement = document.getElementById(this.videoId);
        if (!videoElement) {
            console.error(`No se encontró el elemento de video con ID: ${this.videoId}`);
            return;
        }
        try {
            this.player = videojs(videoElement, this.options, () => {
                console.log(`Reproductor de video inicializado para ID: ${this.videoId}`);
            }); // No se necesita aserción si video-player.d.ts tipa videojs correctamente
        }
        catch (error) {
            console.error("Error al inicializar el reproductor de video:", error);
        }
    }
    getVideoPlayer() {
        return this.player;
    }
    dispose() {
        if (this.player) {
            try {
                this.player.dispose();
                this.player = null;
                console.log("Reproductor de video destruido");
            }
            catch (error) {
                console.error("Error al destruir el reproductor:", error);
            }
        }
    }
}
export default VideoPlayer;
