import express from "express";
import { HttpServer } from "./lib/httpServer/HttpServer";
import { IHttpServer } from "./lib/httpServer/IHttpServer";

import { GeneralController } from "./controllers/GeneralController";
import { GeneralRouter } from "./routes/GeneralRoute";
import { HttpClient } from "./lib/httpClient/HttpClient";
import { WeatherService } from "./service/weatherService/WeatherService";
import { Authenticator } from "./lib/auth/Authenticator";
import { GalleryController } from "./controllers/GalleryController";
import { GalleryRouter } from "./routes/GalleryRoute";
import { GalleryService } from "./service/galleryService/GalleryService"
import { AwsS3Client } from "./lib/awsS3Client/AwsS3Client";

export class VideoStreamingService {
    public readonly server: IHttpServer;

    constructor() {
        const driver = express();
        this.server = new HttpServer(driver);
        console.log("express initialized");
    }

    start(): void {
        const authenticator: Authenticator = new Authenticator(this.server);

        const client: HttpClient = new HttpClient();
        const s3Client: AwsS3Client = new AwsS3Client();
        const weatherService = new WeatherService(client);
        const galleryService = new GalleryService(s3Client);

        const generalController = new GeneralController(weatherService);
        const generalRouter = new GeneralRouter(generalController);

        const galleryController = new GalleryController(galleryService);
        const galleryRouter = new GalleryRouter(galleryController);

        this.server.registerRoute(generalRouter.getRouter());
        this.server.registerRoute(galleryRouter.getRouter());

        this.server.start();
    }

    stop(): void {
        this.server.stop();
    }
}