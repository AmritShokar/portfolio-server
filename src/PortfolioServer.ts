import express from "express";
import { HttpServer } from "./lib/httpServer/HttpServer";
import { IHttpServer } from "./lib/httpServer/IHttpServer";

import { GeneralController } from "./controllers/GeneralController";
import { GeneralRouter } from "./routes/GeneralRoute";
import { HttpClient } from "./lib/httpClient/HttpClient";
import { WeatherService } from "./service/WeatherService";
import { Authenticator } from "./lib/auth/Authenticator";

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
        const weatherService = new WeatherService(client);

        const generalController = new GeneralController(weatherService);
        const generalRouter = new GeneralRouter(generalController);

        this.server.registerRoute(generalRouter.getRouter());

        this.server.start();
    }

    stop(): void {
        this.server.stop();
    }
}