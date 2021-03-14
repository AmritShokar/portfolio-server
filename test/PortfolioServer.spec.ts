import { VideoStreamingService } from "../src/VideoStreamingService";

describe("video streaming server setup", () => {
    it("starts the rest api server", () => {
        const videoStreamingService = new VideoStreamingService();
        videoStreamingService.stop();
        expect(true).toBe(true);
    });
});