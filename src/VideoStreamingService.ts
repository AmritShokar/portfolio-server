import * as Express from "express";
import { HttpServer } from "./lib/HttpServer";

export class VideoStreamingService {
    public readonly express: Express.Application
    public readonly server: HttpServer;

    constructor() {
        console.log("express initialized");
        this.server = new HttpServer(Express());
    }

    start(): void {
        // Init and inject Dependencies here for services
        this.server.start();
    }

}