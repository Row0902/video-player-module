import videojs from "video.js";

declare module "video.js" {
  interface VideoJsPlayerOptions {
    controls?: boolean;
    autoplay?: boolean | "muted" | "play" | "any";
    loop?: boolean;
    playbackRates?: number[];
    techOrder?: string[];
    controlBar?: {
      volumePanel?: { inline?: boolean };
      [key: string]: any;
    };
    preload?: "auto" | "metadata" | "none";
    fluid?: boolean;
    responsive?: boolean;
    sources?: { src: string; type: string }[];
    plugins?: {
      hotkeys?: {
        volumeStep?: number;
        seekStep?: number;
        enableMute?: boolean;
        enableFullscreen?: boolean;
        [key: string]: any;
      };
      mobileUi?: {
        fullscreen?: { enterOnRotate?: boolean };
        touchControls?: { seekSeconds?: number };
        [key: string]: any;
      };
    };
  }

  interface VideoJsPlayer {
    dispose: () => void;
    // Agregar propiedades requeridas por el error anterior
    bigPlayButton?: any;
    controlBar?: any;
    errorDisplay?: any;
    liveTracker?: any;
  }
}
