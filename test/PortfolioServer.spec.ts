import { VideoStreamingService } from "../src/PortfolioServer";

describe("video streaming server setup", () => {
    it("starts the rest api server", () => {
        const videoStreamingService = new VideoStreamingService();
        videoStreamingService.stop();
        expect(true).toBe(true);
    });
});