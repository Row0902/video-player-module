import videojs from "video.js";
import type { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import "videojs-youtube";

interface VideoPlayerConfig {
  videoId: string;
  options?: VideoJsPlayerOptions;
}

export class VideoPlayer {
  private player: VideoJsPlayer | null = null;
  private videoId: string;
  private options: VideoJsPlayerOptions;

  constructor({ videoId, options = {} }: VideoPlayerConfig) {
    this.videoId = videoId;
    this.options = options;

    const defaultOptions: VideoJsPlayerOptions = {
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

  private initializePlayer(): void {
    const videoElement = document.getElementById(
      this.videoId
    ) as HTMLVideoElement | null;

    if (!videoElement) {
      console.error(
        `No se encontró el elemento de video con ID: ${this.videoId}`
      );
      return;
    }

    try {
      this.player = videojs(videoElement, this.options, () => {
        console.log(
          `Reproductor de video inicializado para ID: ${this.videoId}`
        );
      }); // No se necesita aserción si video-player.d.ts tipa videojs correctamente
    } catch (error) {
      console.error("Error al inicializar el reproductor de video:", error);
    }
  }

  public getVideoPlayer(): VideoJsPlayer | null {
    return this.player;
  }

  public dispose(): void {
    if (this.player) {
      try {
        this.player.dispose();
        this.player = null;
        console.log("Reproductor de video destruido");
      } catch (error) {
        console.error("Error al destruir el reproductor:", error);
      }
    }
  }
}

export default VideoPlayer;