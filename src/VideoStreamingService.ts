import * as Express from "express";
import { HttpServer } from "./lib/httpServer/HttpServer";

import { GeneralController } from "./controllers/GeneralController";
import { GeneralRouter } from "./routes/GeneralRoute";

export class VideoStreamingService {
    public readonly express: Express.Application
    public readonly server: HttpServer;

    constructor() {
        this.express = Express();
        console.log("express initialized");
        this.server = new HttpServer(this.express);

    }

    start(): void {
        // Init and inject Dependencies here for services

        // create general controller
        // const generalController = new GeneralController(weatherService);

        // pass controller into route
        // const generalRouter = new Route(controller: generalController)

        // lastly
        // this.driver.registerRoute(generalRouter)

        const generalController = new GeneralController();
        const generalRouter = new GeneralRouter(generalController);


        this.server.registerRoute(generalRouter.getRouter());

        this.server.start();
    }

}