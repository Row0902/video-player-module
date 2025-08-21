import type { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import "videojs-youtube";
interface VideoPlayerConfig {
    videoId: string;
    options?: VideoJsPlayerOptions;
}
export declare class VideoPlayer {
    private player;
    private videoId;
    private options;
    constructor({ videoId, options }: VideoPlayerConfig);
    private initializePlayer;
    getVideoPlayer(): VideoJsPlayer | null;
    dispose(): void;
}
export default VideoPlayer;
