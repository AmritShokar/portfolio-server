import * as Express from "express";
import { HttpServer } from "./lib/httpServer/HttpServer";
import { IHttpServer } from "./lib/httpServer/IHttpServer";

import { GeneralController } from "./controllers/GeneralController";
import { GeneralRouter } from "./routes/GeneralRoute";
import { HttpClient } from "./lib/httpClient/HttpClient";
import { WeatherService } from "./service/WeatherService";

export class VideoStreamingService {
    public readonly express: Express.Application
    public readonly server: IHttpServer;

    constructor() {
        this.express = Express();
        console.log("express initialized");
        this.server = new HttpServer(this.express);

    }

    start(): void {
        // Init and inject Dependencies here for services
        const client: HttpClient = new HttpClient();
        const weatherService = new WeatherService(client);

        const generalController = new GeneralController(weatherService);
        const generalRouter = new GeneralRouter(generalController);


        this.server.registerRoute(generalRouter.getRouter());

        this.server.start();



        
        // client.get("http://api.openweathermap.org/data/2.5/weather?id=5990579&appid=e5cacba430e8393da14ef8b295f3fb3e", {});
    }

}