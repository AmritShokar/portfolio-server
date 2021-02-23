import * as Express from "express";
import { HttpServer } from "./lib/HttpServer";

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

        this.server.start();
    }

}